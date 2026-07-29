# Sudip Bohara Portfolio

A premium portfolio website for a Web Designer, Web Developer, and UI/UX Designer. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Premium Design**: Minimal, elegant, and professional aesthetics
- **Business-Focused**: Content structured around building trust and business growth
- **Portfolio Projects**: Honest presentation of concept/portfolio work
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Fast Performance**: Optimized for Lighthouse 95+ scores
- **SEO Ready**: Built-in SEO optimization and meta tags
- **Accessible**: WCAG AA compliant with proper ARIA labels
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion

## 📋 Pages

- **Home**: Premium hero, featured projects, services, process, why work with me, technologies, contact
- **Projects**: Portfolio projects demonstrating approach to premium digital experiences
- **Services**: Digital solutions designed to help businesses build trust and grow
- **About**: Mission, design philosophy, process, and industries served
- **Contact**: Professional contact form with comprehensive information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Setup Instructions

1. **Install dependencies** (choose one method):

   **Using npm:**
   ```bash
   npm install
   ```

   **Using yarn:**
   ```bash
   yarn install
   ```

   **If you encounter PowerShell execution policy errors:**
   - Open PowerShell as Administrator
   - Run: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
   - Then run the install command again

2. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── FeaturedWork.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── WhyChooseUs.tsx
│   ├── Technologies.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── about/
│   ├── contact/
│   ├── projects/
│   └── services/
```

## 🎨 Design System

### Colors

- **Primary**: Indigo (#6366f1)
- **Background**: White (#ffffff)
- **Text**: Dark gray (#0a0a0a)
- **Muted**: Light gray (#737373)
- **Border**: Light gray (#e5e5e5)

### Typography

- **Font**: Inter (system font stack)
- **Headings**: Bold, tight tracking
- **Body**: Regular, comfortable line-height

### Components

- **Cards**: Rounded corners (16px), subtle shadows
- **Buttons**: Rounded corners (12px), smooth transitions
- **Inputs**: Rounded corners (10px), focus states

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWSAmplify
- Cloudflare Pages
- Railway

## 📊 Performance Optimization

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS-in-JS with Tailwind CSS
- Minimal JavaScript bundle
- Core Web Vitals optimization

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management
- Color contrast compliance (WCAG AA)
- Screen reader friendly

## 🔧 Customization

### Updating Content

- **Projects**: Edit project data in `src/components/projects/ProjectGrid.tsx`
- **Services**: Update services in `src/components/services/ServiceList.tsx`
- **Contact**: Change email/phone in contact components
- **Colors**: Modify CSS variables in `src/app/globals.css`

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add `page.tsx` with your component
3. Update Navigation component to include the new link

## 📝 License

This project is proprietary and confidential.

## 👤 Author

**Sudip Bohara**
- Title: Web Designer • Web Developer • UI/UX Designer
- Email: sudeepbohara@gmail.com
- Portfolio: sudeepbohara.com.np

## 🤝 Support

For issues or questions, please contact sudeepbohara@gmail.com
