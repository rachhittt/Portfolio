# Rachit Pandey - Professional Portfolio Website

A modern, responsive portfolio website built with **Next.js 16**, **Tailwind CSS**, **Framer Motion**, and **EmailJS**.

## 🌟 Features

- ✅ **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ✅ **Dark/Light Theme Toggle** - Built-in theme switcher with local storage persistence
- ✅ **Smooth Animations** - Framer Motion for scroll reveals, fade-ins, and hover effects
- ✅ **Single-Page Scroll** - Smooth navigation between sections
- ✅ **Contact Form** - Integrated EmailJS for functional contact submissions
- ✅ **Project Showcase** - Dedicated projects section with tech stack badges
- ✅ **SEO Optimized** - Next.js metadata and semantic HTML
- ✅ **TypeScript** - Type-safe development
- ✅ **Modern Stack** - Latest web development practices

## 📁 Project Structure

```
portfolioLat/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── page.tsx             # Main page (all sections)
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── Hero.tsx             # Hero/Landing section
│   │   ├── About.tsx            # About me section
│   │   ├── Skills.tsx           # Skills & expertise section
│   │   ├── Experience.tsx       # Work experience section
│   │   ├── Projects.tsx         # Featured projects section
│   │   ├── ProjectCard.tsx      # Individual project card component
│   │   ├── Achievements.tsx     # Achievements section
│   │   ├── Contact.tsx          # Contact form & details section
│   │   ├── ContactForm.tsx      # EmailJS contact form component
│   │   ├── Section.tsx          # Reusable section wrapper
│   │   ├── Footer.tsx           # Footer section
│   │   └── ThemeToggle.tsx      # Dark/light mode toggle
│   └── public/
│       └── resume.pdf           # Resume PDF (add your file here)
├── package.json
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd c:\Users\rachi\OneDrive\Desktop\portfolioLat
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Visit `http://localhost:3000`

## ⚙️ Configuration

### EmailJS Setup (for Contact Form)

The contact form is pre-configured to use EmailJS. To make it work:

1. **Sign up at [EmailJS](https://www.emailjs.com/)**

2. **Get your credentials:**
   - Service ID
   - Template ID
   - Public Key

3. **Update the contact form:**
   Open `src/components/ContactForm.tsx` and replace:
   ```typescript
   emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');
   
   const result = await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     {
       to_email: 'f20231123@hyderabad.bits-pilani.ac.in',
       from_name: formData.name,
       from_email: formData.email,
       subject: formData.subject,
       message: formData.message,
     }
   );
   ```

4. **Create an EmailJS Template:**
   - Template should accept: `from_name`, `from_email`, `subject`, `message`
   - Example structure:
     ```
     Name: {{from_name}}
     Email: {{from_email}}
     Subject: {{subject}}
     
     Message:
     {{message}}
     ```

### Add Your Resume

1. **Place your resume PDF file:**
   - Location: `public/resume.pdf`
   - Filename must be exactly `resume.pdf`

### Update Project Images

The portfolio uses placeholder images from Unsplash. To add your own:

1. Open `src/components/Projects.tsx`
2. Replace image URLs in the `projects` array:
   ```typescript
   image: 'https://your-image-url.com/image.jpg'
   ```

### Add Project Links

Update GitHub and demo links in `src/components/Projects.tsx`:

```typescript
{
  id: '1',
  title: 'Project Title',
  description: 'Project description',
  tech: ['Tech1', 'Tech2'],
  image: 'image-url',
  githubUrl: 'https://github.com/your-repo', // Replace with actual URL
  demoUrl: 'https://project-demo.com',        // Replace with actual URL
}
```

## 🎨 Customization

### Change Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#1e40af', // Change primary color here
    },
  },
},
```

### Modify Content

- **Hero Section:** `src/components/Hero.tsx`
- **About Section:** `src/components/About.tsx`
- **Skills Section:** `src/components/Skills.tsx`
- **Experience Section:** `src/components/Experience.tsx`
- **Projects Section:** `src/components/Projects.tsx`

### Add New Sections

1. Create a new component in `src/components/`
2. Use the `Section` wrapper component for consistency
3. Import and add to `src/app/page.tsx`

## 📦 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Set Environment Variables (if needed):**
   - Go to Project Settings → Environment Variables
   - Add EmailJS credentials if using environment variables

4. **Done!** Your portfolio is live at the Vercel URL.

### Deploy to Netlify

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Build command: `npm run build`
   - Publish directory: `.next`

### Other Hosting Options

- **AWS Amplify**
- **Railway.app**
- **Render**
- **GitHub Pages** (with `next export`)

## 🔧 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear Next.js cache
rm -r .next

# Reinstall dependencies
rm -r node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Theme Toggle Not Working
- Check browser console for errors
- Ensure `suppressHydrationWarning` is in `<html>` tag in layout.tsx
- Clear browser cache

### Contact Form Not Sending
- Verify EmailJS credentials are correct
- Check browser console for errors
- Ensure template ID matches EmailJS setup
- Test with EmailJS dashboard first

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔒 Privacy & Security

- No data is stored on your server
- Contact form data goes directly to your email via EmailJS
- Theme preference stored locally in browser
- No analytics or tracking

## 📚 Tech Stack

- **Framework:** Next.js 16 (React 19)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email:** EmailJS
- **Language:** TypeScript
- **Build Tool:** Turbopack
- **Linting:** ESLint

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)

## 📄 License

This portfolio is open source and available for personal use.

## 🤝 Support

For questions or issues, refer to the component comments in the code or check the troubleshooting section above.

## ✨ Next Steps

1. ✅ Add your resume to `public/resume.pdf`
2. ✅ Set up EmailJS for the contact form
3. ✅ Update project images and links
4. ✅ Customize colors in `tailwind.config.ts`
5. ✅ Deploy to Vercel
6. ✅ Share your portfolio!

---

**Built with ❤️ by Rachit Pandey using Next.js & Tailwind CSS**
