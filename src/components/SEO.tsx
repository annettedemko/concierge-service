import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title: string;
  description: string;
  imageUrl?: string;
  keywords?: string[];
  author?: string;
  category?: string;
  publishDate?: string;
  isBlogPost?: boolean;
  type?: string;
}

const SEO = ({
  title,
  description,
  imageUrl = '/seo.jpg',
  keywords = [
    'concierge service Munich',
    'Munich personal assistant',
    'Munich expat help',
    'bureaucracy support Germany',
    'jobcenter assistance Munich',
    'AOK documents help',
    'help with Arzt termin',
    'WhatsApp concierge Munich',
    'expat relocation services',
    'Munich help with returns',
    'Munich paper assistance',
  ],
  author = 'Hanna Demko',
  category,
  publishDate,
  isBlogPost = false,
  type = 'website',
}: SEOProps) => {
  const currentUrl =
    typeof window !== 'undefined'
      ? window.location.href
      : 'https://www.linkedin.com/in/hanna-demko-3b9b9a372';

  const fullImageUrl = imageUrl.startsWith('http')
    ? imageUrl
    : `${currentUrl.replace(/\/$/, '')}${imageUrl}`;

  return (
    <Helmet>
      {/* Основные мета-теги */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Дополнительные теги */}
      <meta name="author" content="Hanna Demko" />
      {category && <meta property="article:section" content={category} />}
      {publishDate && (
        <meta property="article:published_time" content={publishDate} />
      )}
    </Helmet>
  );
};

export default SEO;
