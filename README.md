# 🎨 Rachit Pandey - Professional Portfolio Website

A modern, responsive portfolio website built with **Next.js 16**, **Tailwind CSS**, **Framer Motion**, and **EmailJS**. Fully functional, customizable, and ready to deploy.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF)](https://www.framer.com/motion)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org)

## ✨ Features

- ✅ **Responsive Design** - Seamless experience on all devices
- ✅ **Dark/Light Theme** - Built-in theme toggle with persistence
- ✅ **Smooth Animations** - Framer Motion scroll reveals and interactions
- ✅ **Single-Page App** - Smooth navigation between sections
- ✅ **Contact Form** - Integrated EmailJS for real email submissions
- ✅ **Project Showcase** - Modern card layout with tech badges
- ✅ **SEO Optimized** - Meta tags, structured data, Open Graph
- ✅ **TypeScript** - Fully type-safe development
- ✅ **Production Ready** - Optimized build and deployment

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation & Run

```bash
# Navigate to project directory
cd c:\Users\rachi\OneDrive\Desktop\portfolioLat

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Visit http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

## 📚 Documentation

This project includes comprehensive guides:

- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Complete setup and configuration
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Step-by-step deployment instructions
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Quick commands and customization tips

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout & metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About me section
│   ├── Skills.tsx          # Skills showcase
│   ├── Experience.tsx      # Work experience
│   ├── Projects.tsx        # Projects section
│   ├── ProjectCard.tsx     # Project card component
│   ├── Achievements.tsx    # Achievements
│   ├── Contact.tsx         # Contact section
│   ├── ContactForm.tsx     # EmailJS contact form
│   ├── Section.tsx         # Section wrapper
│   ├── Footer.tsx          # Footer
│   └── ThemeToggle.tsx     # Dark/light toggle
└── public/
    └── resume.pdf          # Resume file
```

## 🎯 Key Sections

### Hero
- Your name, title, and introduction
- CTA buttons for navigation
- Animated scroll indicator

### About
- Personal bio
- Interests/hobbies
- Languages spoken

### Skills
- Programming languages
- Web development skills
- Tools & technologies

### Experience
- Work experience
- Positions of responsibility
- Achievement highlights

### Projects
- Featured projects with images
- Tech stack badges
- Links to GitHub & demos

### Contact
- Direct contact information
- Working contact form
- Social media links
- Resume download button

## ⚙️ Configuration

### Setup EmailJS for Contact Form

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new service and template
3. Update credentials in `src/components/ContactForm.tsx`:

```typescript
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

const result = await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {...}
);
```

### Customize Colors

Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#1e40af', // Your brand color
    },
  },
},
```

### Add Your Resume

Place your resume PDF at `public/resume.pdf`

### Update Project Information

Edit `src/components/Projects.tsx` with your projects:
```typescript
{
  id: '1',
  title: 'Project Name',
  description: 'Description here',
  tech: ['React', 'Next.js'],
  image: 'https://image-url.jpg',
  githubUrl: 'https://github.com/your-repo',
  demoUrl: 'https://demo-url.com',
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Push to GitHub
git push

# Deploy on vercel.com
# - Connect GitHub repository
# - Automatic deployment on every push
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop .next folder to Netlify
# Or use git-based deployment
```

### Other Options
- **AWS Amplify**
- **Railway.app**
- **Render**
- **GitHub Pages**

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 📦 Dependencies

- **next** - React framework
- **react** - UI library
- **tailwindcss** - Utility-first CSS
- **framer-motion** - Animation library
- **emailjs-com** - Email service
- **typescript** - Type safety

## 🎨 Customization Examples

### Change Primary Color
```tsx
// In tailwind.config.ts
primary: '#YOUR_HEX_COLOR'
```

### Add New Section
1. Create component in `src/components/`
2. Use `Section` wrapper for consistency
3. Import and add to `src/app/page.tsx`

### Modify Contact Form
Edit `src/components/ContactForm.tsx` for validation, styling, or behavior.

### Update Animations
All animations use Framer Motion. Examples in each component.

## 🔒 Security & Privacy

- **No data storage** - Contact form data goes directly to your email
- **No tracking** - No analytics or cookies by default
- **HTTPS only** - Secure transmission
- **EmailJS** - Industry-standard email service

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🐛 Troubleshooting

### Development Issues

**Port 3000 in use:**
```bash
npm run dev -- -p 3001
```

**Build fails:**
```bash
rm -rf .next
npm install
npm run build
```

**Theme not persisting:**
- Clear browser cache
- Check localStorage is not blocked
- Verify `suppressHydrationWarning` in layout.tsx

### Deployment Issues

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for comprehensive troubleshooting.

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [EmailJS Docs](https://www.emailjs.com/docs/)

## 🤝 Contributing

Feel free to fork and customize this template for your needs!

## 📄 License

Open source for personal use.

## 🎉 Next Steps

1. ✅ Update your information
2. ✅ Configure EmailJS
3. ✅ Add your resume
4. ✅ Update project images
5. ✅ Deploy to Vercel
6. ✅ Share with the world!

---

**Made with ❤️ using Next.js & Tailwind CSS**

**Your portfolio is ready to go live! 🚀**


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
