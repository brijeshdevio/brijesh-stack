# Brijesh Kumar - Full Stack Engineer Portfolio

This is my personal portfolio website, built with modern web technologies to showcase my skills, projects, and professional experience. It's designed to be fast, responsive, and visually engaging, demonstrating a high standard of front-end and back-end development.

## 🚀 Tech Stack

The portfolio is built as a full-stack monorepo workspace:

### Frontend (`apps/web`)
- **Framework:** React 19 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui
- **Animation:** Framer Motion, tw-animate-css
- **Icons:** Lucide React, React Icons
- **State Management:** React Hook Form, Zod (for validation)

### Backend (`apps/api`)
- **Framework:** NestJS
- **Language:** TypeScript
- **Architecture:** Modular, Service-oriented

## 📂 Project Structure

```
├── apps/
│   ├── web/               # React 19 + Vite Frontend Application
│   │   ├── src/
│   │   │   ├── components/ # Reusable UI components & Layouts
│   │   │   ├── sections/   # Page sections (Hero, About, Projects, etc.)
│   │   │   ├── app/        # Main app entry
│   │   │   └── assets/     # Static assets (Resume, Images)
│   ├── api/               # NestJS Backend API
└── package.json           # Monorepo workspace configuration
```

## 🛠️ Features
- **Hero Section:** Engaging introduction with a download CV option and visual terminal element.
- **Projects Showcase:** A filtered grid of my top applications including CourseGen AI, PicURL, Zipr, DeadDrop, SnippetX, and Authify. Includes links to live demos and GitHub repos.
- **Dynamic Animations:** Scroll-triggered reveals and micro-interactions powered by Framer Motion.
- **Responsive Design:** Completely fluid layout that looks great on mobile, tablet, and desktop.
- **Dark Mode Optimized:** Modern dark theme with subtle gradients and glassmorphism effects.

## 💻 Getting Started

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/brijeshdevio/brijesh-stack.git
   cd brijesh-stack
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run the development servers concurrently:**
   ```bash
   pnpm run dev
   ```
   This will start both the NestJS API and the Vite React frontend.

## 🌐 Connect with Me

- **GitHub:** [@brijeshdevio](https://github.com/brijeshdevio)
- **LinkedIn:** [Brijesh Kumar](https://linkedin.com/in/brijeshsoftdev)
- **Email:** bk6500416@gmail.com

---
*Built with ❤️ by Brijesh Kumar.*
