# Portfolio Deployment Guide

Complete step-by-step instructions to deploy your portfolio website to production.

## 📋 Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Deploy to Vercel (Recommended)](#deploy-to-vercel-recommended)
3. [Deploy to Netlify](#deploy-to-netlify)
4. [Deploy to AWS Amplify](#deploy-to-aws-amplify)
5. [Custom Domain Setup](#custom-domain-setup)
6. [Post-Deployment Verification](#post-deployment-verification)
7. [Troubleshooting](#troubleshooting)

---

## ✅ Pre-Deployment Checklist

Before deploying, ensure the following:

- [ ] All content is updated (name, title, bio, projects, skills)
- [ ] Project images are properly hosted or replaced
- [ ] Project links (GitHub, Demo) are correct
- [ ] EmailJS is configured and credentials are added
- [ ] Resume PDF is uploaded to `public/resume.pdf`
- [ ] Theme toggle works correctly
- [ ] Contact form is functional locally
- [ ] All typos are fixed
- [ ] Build completes without errors: `npm run build`
- [ ] Local testing passed: `npm run dev`

---

## 🚀 Deploy to Vercel (Recommended)

Vercel is the official Next.js hosting platform with zero-config deployment.

### Step 1: Push to GitHub

First, initialize Git and push your code to GitHub:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Rename branch to main
git branch -M main

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 2: Connect to Vercel

1. **Visit [vercel.com](https://vercel.com)**
   - Click "Sign up" or "Sign in"
   - Sign in with GitHub account

2. **Create a new project:**
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect it's a Next.js project

3. **Configure project:**
   - **Project name:** Leave as default or customize
   - **Framework:** Should auto-detect as "Next.js"
   - **Build command:** `npm run build` (auto-filled)
   - **Output directory:** `.next` (auto-filled)

4. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete (usually 1-2 minutes)

### Step 3: Verify Deployment

- Your site will be available at: `https://your-project.vercel.app`
- Check that all sections load correctly
- Test theme toggle
- Test contact form

---

## 🎨 Deploy to Netlify

Alternative hosting option with drag-and-drop or Git integration.

### Option A: Git-based Deployment (Recommended)

1. **Visit [netlify.com](https://netlify.com)**
   - Sign up / Sign in with GitHub

2. **New site from Git:**
   - Click "New site from Git"
   - Select GitHub provider
   - Authorize Netlify to access your repositories
   - Select your portfolio repository

3. **Configure build settings:**
   - **Base directory:** (leave empty)
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`

4. **Deploy:**
   - Click "Deploy site"
   - Wait for build to complete

### Option B: Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build your project
npm run build

# Deploy (interactive)
netlify deploy --prod --dir=.next
```

---

## ☁️ Deploy to AWS Amplify

Production-grade hosting with advanced features.

### Step 1: Connect Repository

1. **Visit [AWS Amplify Console](https://console.aws.amazon.com/amplify)**
   - Sign in with AWS account (create one if needed)
   - Click "Create app"
   - Select GitHub as host provider
   - Authorize Amplify to access GitHub
   - Select your portfolio repository and branch

### Step 2: Configure Build Settings

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Step 3: Deploy

- Click "Save and deploy"
- Wait for build and deployment to complete
- Your site will be available at the Amplify URL

---

## 🌐 Custom Domain Setup

### With Vercel

1. **Go to project settings**
   - Vercel Dashboard → Your Project → Settings

2. **Add domain:**
   - Domains tab → Add your domain
   - Choose your domain registrar
   - Follow DNS setup instructions

3. **DNS Configuration:**
   - Update nameservers or add CNAME records
   - Propagation typically takes 24-48 hours

### With Netlify

1. **Go to domain settings**
   - Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain

2. **Configure DNS:**
   - Primary domain registered elsewhere: Add Netlify's nameservers
   - Or add CNAME record pointing to Netlify

### With AWS Amplify

1. **Add domain:**
   - Amplify Console → App Settings → Domain management
   - Click "Connect domain"

2. **Follow AWS setup wizard:**
   - Manage domain in Route 53 or external registrar
   - Configure DNS records

---

## ✔️ Post-Deployment Verification

After deployment, verify everything works:

### Functionality Tests

- [ ] **Home Page Loads:** Visit your deployed URL
- [ ] **Theme Toggle:** Click theme button, refresh, verify persistence
- [ ] **Navigation:** Click all section links, verify smooth scroll
- [ ] **Projects:** Load all project cards with images
- [ ] **Contact Form:** Submit test message, verify in email
- [ ] **Resume Download:** Download button works
- [ ] **External Links:** GitHub, LinkedIn, email links work
- [ ] **Mobile Responsive:** Test on phone/tablet

### Performance Tests

```bash
# Test locally
npm run build
npm start

# Use Lighthouse in Chrome DevTools
# - Go to DevTools → Lighthouse
# - Run audit for Performance, Accessibility, Best Practices, SEO
```

### SEO Verification

- [ ] **Page Title:** Appears correct in browser tab
- [ ] **Meta Description:** Shows in search results preview
- [ ] **Open Graph:** Share link preview (Facebook, Twitter)
- [ ] **Sitemap:** Check `sitemap.xml` (optional)

### Security Checks

- [ ] **HTTPS:** URL shows 🔒 lock icon
- [ ] **Security Headers:** Check via [securityheaders.com](https://securityheaders.com)
- [ ] **No Console Errors:** Open DevTools → Console (should be clean)

---

## 🔧 Troubleshooting

### Deployment Fails

**Issue:** Build fails with TypeScript errors

**Solution:**
```bash
# Clear cache and rebuild
rm -rf .next
npm install
npm run build
```

**Issue:** "Cannot find module" errors

**Solution:**
```bash
# Ensure all dependencies are installed
npm install

# Clear npm cache
npm cache clean --force
npm install
```

### Site Not Loading

**Issue:** Blank page or "Cannot GET /"

**Solution:**
1. Check build logs on your hosting platform
2. Verify `next.config.ts` exists and is valid
3. Ensure `src/app/page.tsx` exists

### Theme Not Persisting

**Issue:** Dark mode doesn't save after refresh

**Solution:**
1. Check browser localStorage is not blocked
2. Verify `ThemeToggle.tsx` has `suppressHydrationWarning`
3. Clear browser cache and try again

### Contact Form Not Working

**Issue:** Form submission fails silently

**Solution:**
1. **Check EmailJS Setup:**
   ```bash
   # Verify credentials in ContactForm.tsx:
   - PUBLIC_KEY correct?
   - SERVICE_ID correct?
   - TEMPLATE_ID correct?
   ```

2. **Test EmailJS Directly:**
   - Visit [EmailJS Dashboard](https://dashboard.emailjs.com)
   - Send test email from dashboard
   - Verify template is correct

3. **Check Browser Console:**
   - Open DevTools → Console
   - Look for error messages
   - Check CORS errors

### Images Not Loading

**Issue:** Project images show broken image icon

**Solution:**
1. **Verify image URLs are correct** in `Projects.tsx`
2. **For local images:**
   ```bash
   # Place in public/ directory
   # Reference as: /images/project.jpg
   ```
3. **For external URLs:**
   - Ensure URLs are HTTPS
   - Verify image host allows hotlinking

### Custom Domain Not Working

**Issue:** Domain shows "This site can't be reached"

**Solution:**
1. **DNS Propagation:** Wait 24-48 hours
2. **Verify DNS Records:**
   - Check your domain registrar's DNS settings
   - Compare with hosting platform's instructions
3. **Flush DNS Cache:**
   ```bash
   # Windows
   ipconfig /flushdns
   
   # Mac
   sudo dscacheutil -flushcache
   
   # Linux
   sudo systemctl restart systemd-resolved
   ```

### Slow Performance

**Issue:** Site loads slowly

**Solution:**
1. **Optimize images:**
   - Use image compression tools
   - Consider using `next/image` component
   
2. **Check build size:**
   ```bash
   npm run build
   # Look for large chunks in terminal output
   ```

3. **Enable caching:**
   - Vercel: Automatic
   - Netlify: Settings → Deploy → Cache control
   - AWS: CloudFront distribution

---

## 📊 Monitoring & Analytics (Optional)

### Add Google Analytics

1. **Create Google Analytics account:**
   - Visit [analytics.google.com](https://analytics.google.com)
   - Create property for your domain
   - Copy Measurement ID

2. **Install Google Analytics:**
   ```bash
   npm install @react-google-analytics/core
   ```

3. **Add to layout.tsx:**
   ```typescript
   import { useEffect } from 'react';
   import { pageview } from '@react-google-analytics/core';
   
   // In component:
   useEffect(() => {
     pageview(process.env.NEXT_PUBLIC_GA_ID || '');
   }, []);
   ```

### Monitor Performance

- **Vercel:** Built-in Web Vitals dashboard
- **Netlify:** Analytics section in site settings
- **AWS Amplify:** CloudWatch monitoring

---

## 🔄 Continuous Deployment

All platforms support automatic redeployment:

- **Push to GitHub** → **Automatic build and deployment**
- No manual steps needed
- Commits to `main` branch trigger automatic redeploy

---

## 📝 Final Checklist

After deployment:

- [ ] Site is live and accessible
- [ ] All sections work correctly
- [ ] Theme toggle persists
- [ ] Contact form sends emails
- [ ] Resume downloads correctly
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Custom domain configured (optional)
- [ ] Analytics installed (optional)
- [ ] Shared portfolio URL with connections

---

## 🎉 You're Live!

Congratulations! Your portfolio is now live on the internet. Share it with:

- ✉️ **Email:** Your connections
- 💼 **LinkedIn:** Update profile with portfolio link
- 🐙 **GitHub:** Add link in bio
- 🐦 **Twitter:** Tweet about your new portfolio
- 📞 **Job Applications:** Include portfolio link

---

## 📞 Support Links

- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **Netlify Support:** [netlify.com/support](https://netlify.com/support)
- **AWS Support:** [aws.amazon.com/support](https://aws.amazon.com/support)
- **Next.js Issues:** [github.com/vercel/next.js/issues](https://github.com/vercel/next.js/issues)

---

Happy deploying! 🚀
