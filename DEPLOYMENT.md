# Vercel Deployment Guide

## Quick Deploy

1. Push your code to GitHub (already done)
2. Go to [vercel.com](https://vercel.com)
3. Click **Add New** → **Project**
4. Select your GitHub repository: `Nocillium/Portfolio`
5. Click **Import**

## Environment Variables Setup

After importing your project on Vercel, add your EmailJS credentials as environment variables:

### In Vercel Dashboard:
1. Go to your project settings
2. Click **Environment Variables**
3. Add these three variables (for Production, Preview, and Development):

| Variable Name | Value |
|---|---|
| `EMAILJS_PUBLIC_KEY` | `dm4DGyfOoEU-rnCkV` |
| `EMAILJS_SERVICE_ID` | `service_q1e9g8w` |
| `EMAILJS_TEMPLATE_ID` | `template_pnmkq3m` |

4. Click **Save**
5. Redeploy your project

## How It Works

- **Local Development**: `config.js` uses your hardcoded credentials
- **Vercel Production**: Environment variables override local config via `window` variables
- **Security**: Credentials are never committed to GitHub (protected by `.gitignore`)

## File Structure for Deployment

```
MyPortfolio/
├── index.html           (main page)
├── styles.css          (styling)
├── script.js           (functionality)
├── config.js           (credentials - not pushed to GitHub)
├── config.example.js   (template - pushed to GitHub)
├── vercel.json         (Vercel configuration)
├── .gitignore          (protects config.js)
├── assets/             (project images)
└── favicon.svg         (site icon)
```

## Testing After Deployment

1. Visit your Vercel URL (e.g., `https://portfolio-xxx.vercel.app`)
2. Scroll to the contact form
3. Fill out and submit a test message
4. Check your Gmail inbox for the message

## Troubleshooting

**Form not sending?**
- Verify environment variables are set in Vercel dashboard
- Check browser console (F12) for EmailJS errors
- Ensure your Gmail is connected in EmailJS dashboard

**Want to update credentials?**
- Update environment variables in Vercel → Redeploy
- Do NOT update `config.js` in GitHub (it's protected by `.gitignore`)

## Custom Domain

1. In Vercel project settings → **Domains**
2. Add your custom domain
3. Update DNS records as instructed by Vercel
