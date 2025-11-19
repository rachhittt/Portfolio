# Quick Reference Guide

Quick commands and tips for working with your portfolio.

## 🚀 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Run linter with fix
npm run lint -- --fix
```

## 📁 File Locations for Quick Edits

| Section | File | Line |
|---------|------|------|
| Hero | `src/components/Hero.tsx` | - |
| About | `src/components/About.tsx` | - |
| Skills | `src/components/Skills.tsx` | - |
| Experience | `src/components/Experience.tsx` | - |
| Projects | `src/components/Projects.tsx` | - |
| Contact | `src/components/Contact.tsx` | - |
| Footer | `src/components/Footer.tsx` | - |
| Theme | `src/components/ThemeToggle.tsx` | - |
| Colors | `tailwind.config.ts` | 15 |
| Global Styles | `src/app/globals.css` | - |
| Metadata/SEO | `src/app/layout.tsx` | 8-12 |

## 🔧 Common Customizations

### Change Primary Color

In `tailwind.config.ts`:
```typescript
colors: {
  primary: '#YOUR_COLOR_HEX', // e.g., #0066ff
}
```

### Add New Skill

In `src/components/Skills.tsx`:
```typescript
skills: ['New Skill 1', 'New Skill 2', ...existing],
```

### Update Project

In `src/components/Projects.tsx`:
```typescript
{
  id: '5',
  title: 'New Project',
  description: 'Description here',
  tech: ['Tech1', 'Tech2'],
  image: 'https://image-url.jpg',
  githubUrl: 'https://github.com/your-repo',
  demoUrl: '#',
}
```

### Add Email/Social Link

In `src/components/Contact.tsx`:
```typescript
const contactDetails: ContactInfo[] = [
  // Existing items...
  {
    label: 'Twitter',
    value: '@your_handle',
    icon: '🐦',
    link: 'https://twitter.com/your_handle',
  },
];
```

### Configure EmailJS

In `src/components/ContactForm.tsx` (replace these):
```typescript
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

const result = await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {...}
);
```

## 📱 Responsive Breakpoints

Tailwind breakpoints used:
- `sm` - 640px
- `md` - 768px
- `lg` - 1024px
- `xl` - 1280px

Example: `md:grid-cols-2` (2 columns on medium+ screens)

## 🎨 Component Structure

All section components follow this pattern:
```typescript
import Section from './Section';

export default function SectionName() {
  return (
    <Section id="section-id" title="Section Title">
      {/* Content here */}
    </Section>
  );
}
```

## 🔗 Important Imports

Add to any component:
```typescript
import { motion } from 'framer-motion'; // Animations
import Section from './Section'; // Section wrapper
```

## 📦 Dependencies Installed

- **next** - Framework
- **react** - UI library
- **tailwindcss** - Styling
- **framer-motion** - Animations
- **emailjs-com** - Contact form
- **typescript** - Type safety

## 🌙 Theme System

The site uses Tailwind's built-in dark mode:
- Toggle handled by `ThemeToggle.tsx`
- Add `dark:` prefix for dark mode styles
- Example: `bg-white dark:bg-gray-900`
- Theme persists in localStorage

## 🚨 Common Issues & Fixes

| Problem | Solution |
|---------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Build fails | `rm -rf .next && npm run build` |
| Styles not applying | Clear cache: `Ctrl+Shift+Delete` |
| Theme not toggling | Check DevTools Console for errors |
| Form not sending | Verify EmailJS credentials |
| Images not showing | Check image URL is HTTPS |
| TypeScript errors | Check `tsconfig.json` |

## 📡 Deployment Quick Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Netlify Dashboard:** https://app.netlify.com
- **GitHub Repository:** https://github.com/your-username/portfolio

## 🔄 Git Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Update portfolio"

# Push to GitHub
git push

# Create new branch
git checkout -b feature/new-section

# Merge back to main
git checkout main
git merge feature/new-section
git push
```

## 🎯 SEO Essentials

Update in `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Brief description of portfolio",
  keywords: ["web developer", "portfolio", "your skills"],
};
```

## 📧 EmailJS Template Variables

When creating template, use these variables:
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{subject}}` - Message subject
- `{{message}}` - Message body
- `{{to_email}}` - Your email (hardcoded)

## 🎬 Animation Classes (Framer Motion)

Common animations in the portfolio:
```typescript
// Fade in on scroll
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: true }}

// Slide from left
initial={{ opacity: 0, x: -20 }}
whileInView={{ opacity: 1, x: 0 }}

// Scale on hover
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

## 🖼️ Image Best Practices

- Use HTTPS URLs only
- Prefer `.jpg` for photos, `.png` for graphics
- Compress images before uploading
- Keep aspect ratio consistent
- Use Next.js Image component for optimization (advanced)

## 🔐 Security Notes

- Never commit EmailJS keys to Git
- Use `.env.local` for secrets (not included in Git)
- Resume PDF should not contain sensitive info
- All user data from contact form goes only to your email

## 📊 Performance Tips

1. Optimize images (use compressor tools)
2. Lazy load sections with Framer Motion
3. Minimize third-party scripts
4. Use Vercel analytics for monitoring
5. Run Lighthouse audit monthly

## 🆘 Getting Help

1. Check component comments for usage
2. Read SETUP_GUIDE.md for detailed info
3. Check DEPLOYMENT_GUIDE.md for deployment issues
4. Search GitHub issues for similar problems
5. Ask on Stack Overflow or Dev.to

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Pro Tip:** Keep this file open for quick reference while developing! 🚀
