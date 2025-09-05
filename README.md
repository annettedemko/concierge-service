# 💼 Concierge Service Munich (Portfolio Fragment)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black)](https://concierge-service-flhwk.vercel.app)

> ⚠️ **Note:** This is a **fragment** of the full project (demo for portfolio purposes).  
> Only one main page is presented here, but it includes several functional elements and integrations.

---

## ✨ Overview

Personal **concierge/assistant service website** for Munich.  
Built using a modern stack (**Vite, React, Tailwind, shadcn/ui**).  
The demo showcases a **landing page fragment** with interactive UI and service logic.

---

## 🚀 Live Demo

👉 [Try it on Vercel](https://concierge-service-flhwk.vercel.app)

---

## 🔥 Key Features

- **Responsive UI**:
  - Hero, Features, Projects, BlogPreview sections
- **Navbar + Page Layout**:
  - Consistent layout across all pages
- **Global Contact Section**:
  - Reusable ContactInfo on all pages
- **Integrated Chatbot**:
  - Powered by **ChatGPT (OpenAI API)**
  - Supports **Telegram** & **WhatsApp**
  - Lead collection via **Tally form**
  - Auto language detection (multi-language ready)
- **Smooth Animations**:
  - framer-motion + tailwindcss-animate
- **Modern Components**:
  - shadcn/ui & Radix UI (Navigation Menu, Tooltip, Scroll Area, etc.)

---

## 🖼️ UI Preview

**Homepage**  
![Screenshot 1](public/1.png)

**Features Section**  
![Screenshot 2](public/2.png)

**Why Us**  
![Screenshot 3](public/3.png)

**Projects**  
![Screenshot 4](public/4.png)

**BlogPreview**  
![Screenshot 5](public/5.png)

**Contact Section**  
![Screenshot 6](public/6.png)

---

## 🛠️ Tech Stack

- **Frontend**: Vite, React 18, TypeScript  
- **UI & Styling**: Tailwind CSS, shadcn/ui, Radix UI  
- **Animations**: framer-motion, tailwindcss-animate  
- **Icons**: lucide-react  
- **Data/State Management**: @tanstack/react-query  
- **Markdown Rendering**: react-markdown + remark-gfm  
- **Integrations**:
  - Chatbot with OpenAI (GPT)
  - Telegram & WhatsApp messaging
  - Tally form for lead collection  

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── card/
│   │   ├── button/
│   │   ├── scroll-area/
│   │   ├── navigation-menu/
│   │   ├── tooltip/
│   │   └── Chatbot/
│   ├── Navbar.tsx
│   ├── ContactInfo.tsx
│   └── PageLayout.tsx
├── pages/
│   ├── Index.tsx
│   ├── About.tsx
│   ├── Careers.tsx
│   └── PrivacyPolicy.tsx
```

---

## 📌 Notes

- This is **not the full project**, just a **polished portfolio fragment**  
- Main focus: **UI, chatbot integration, lead generation UX**  
- Full version includes admin panel, CRM features, and more service logic

---

## ⚡ Quick Start

```bash
git clone https://github.com/annettedemko/concierge-service.git
cd concierge-service
npm install
npm run dev
```

---

## 📜 License

_For portfolio/demo purposes only. Not for commercial use._
