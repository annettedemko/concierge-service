import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, lang = 'en' } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY is not configured');
    return res.status(500).json({ error: 'API key not configured' });
  }

  // Send notification to Telegram (non-blocking)
  if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
    const telegramMessage = `🔔 Новое сообщение в чат-боте:\n\n💬 ${message}\n\n🌐 Язык: ${lang}`;

    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'HTML',
      }),
    }).catch(err => console.error('Telegram notification failed:', err));
  }

  // System prompts for different languages
  const systemPrompts: Record<string, string> = {
    en: `You are a helpful concierge assistant for a premium concierge service in Munich, Germany.

Your role:
- Help clients with questions about concierge services
- Provide information about services: personal assistance, event planning, travel arrangements, lifestyle management
- Be professional, friendly, and helpful
- If someone asks for specific services, encourage them to fill out the online request form at https://concierge-service-fhwk.vercel.app
- Keep responses concise and clear

Important: When you want to include a link to the online form, use this EXACT markdown format:
[Request Form](https://concierge-service-fhwk.vercel.app)

The link will be automatically styled by the frontend.`,

    ru: `Вы - полезный помощник консьерж-сервиса премиум-класса в Мюнхене, Германия.

Ваша роль:
- Помогать клиентам с вопросами о консьерж-услугах
- Предоставлять информацию об услугах: персональная помощь, организация мероприятий, туристические услуги, lifestyle-менеджмент
- Быть профессиональным, дружелюбным и полезным
- Если кто-то спрашивает о конкретных услугах, предложите заполнить онлайн-заявку на https://concierge-service-fhwk.vercel.app
- Давайте краткие и понятные ответы

Важно: Когда хотите включить ссылку на онлайн-форму, используйте ТОЧНО этот markdown формат:
[Request Form](https://concierge-service-fhwk.vercel.app)

Ссылка будет автоматически стилизована фронтендом.`,

    uk: `Ви - корисний асистент консьєрж-сервісу преміум-класу в Мюнхені, Німеччина.

Ваша роль:
- Допомагати клієнтам з питаннями про консьєрж-послуги
- Надавати інформацію про послуги: персональна допомога, організація подій, туристичні послуги, lifestyle-менеджмент
- Бути професійним, доброзичливим і корисним
- Якщо хтось запитує про конкретні послуги, запропонуйте заповнити онлайн-заявку на https://concierge-service-fhwk.vercel.app
- Давайте короткі та зрозумілі відповіді

Важливо: Коли хочете включити посилання на онлайн-форму, використовуйте ТОЧНО цей markdown формат:
[Request Form](https://concierge-service-fhwk.vercel.app)

Посилання буде автоматично стилізоване фронтендом.`,

    de: `Sie sind ein hilfreicher Concierge-Assistent für einen Premium-Concierge-Service in München, Deutschland.

Ihre Rolle:
- Helfen Sie Kunden bei Fragen zu Concierge-Dienstleistungen
- Informieren Sie über Dienstleistungen: persönliche Assistenz, Eventplanung, Reisearrangements, Lifestyle-Management
- Seien Sie professionell, freundlich und hilfsbereit
- Wenn jemand nach bestimmten Dienstleistungen fragt, ermutigen Sie ihn, das Online-Anfrageformular unter https://concierge-service-fhwk.vercel.app auszufüllen
- Halten Sie die Antworten prägnant und klar

Wichtig: Wenn Sie einen Link zum Online-Formular einfügen möchten, verwenden Sie GENAU dieses Markdown-Format:
[Request Form](https://concierge-service-fhwk.vercel.app)

Der Link wird automatisch vom Frontend gestaltet.`,
  };

  const systemPrompt = systemPrompts[lang] || systemPrompts['en'];

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('OpenAI API error:', response.status, errorData);

      // Handle specific errors
      if (response.status === 401) {
        return res.status(500).json({
          reply: lang === 'ru'
            ? 'Извините, возникла проблема с аутентификацией. Пожалуйста, попробуйте позже.'
            : 'Sorry, there was an authentication problem. Please try again later.'
        });
      }

      if (response.status === 429) {
        return res.status(500).json({
          reply: lang === 'ru'
            ? 'Слишком много запросов. Пожалуйста, попробуйте через минуту.'
            : 'Too many requests. Please try again in a minute.'
        });
      }

      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';

    return res.status(200).json({ reply });

  } catch (error) {
    console.error('Error in chat API:', error);

    const errorMessage = lang === 'ru'
      ? 'Извините, что-то пошло не так. Пожалуйста, попробуйте снова.'
      : 'Sorry, something went wrong. Please try again.';

    return res.status(500).json({ reply: errorMessage });
  }
}
