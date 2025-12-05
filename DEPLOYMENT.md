# Deployment Guide

## Quick Deploy Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure everything
6. Click "Deploy"

Your app will be live in minutes!

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/momops",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update vite.config.js:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/momops/'
})
```

4. Deploy: `npm run deploy`

### Self-Hosting

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains your static files

3. Upload to any web server (Apache, Nginx, etc.)

4. Configure your server to serve `index.html` for all routes

## Environment Variables

This app doesn't require any environment variables. All data is stored locally in the browser.

## Custom Domain

### Vercel
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

### Netlify
1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow the DNS configuration steps

## Performance Tips

- The app is already optimized with Vite
- All assets are bundled and minified
- Consider enabling gzip compression on your server
- Use a CDN for faster global delivery

## Monitoring

Consider adding:
- Google Analytics for usage tracking
- Sentry for error monitoring
- Lighthouse for performance audits

## Updates

To update your deployed app:
1. Make changes locally
2. Test thoroughly
3. Commit and push to GitHub
4. Vercel/Netlify will auto-deploy
5. Or run `npm run deploy` for GitHub Pages

## Troubleshooting

### Build Fails
- Check Node.js version (16+ required)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for console errors

### Blank Page After Deploy
- Check browser console for errors
- Verify base URL in vite.config.js
- Ensure all routes serve index.html

### Data Not Persisting
- Check browser localStorage is enabled
- Verify no browser extensions are blocking storage
- Check for private/incognito mode

## Security Notes

- All data is stored locally (no backend)
- No sensitive data is transmitted
- Consider adding authentication if deploying publicly
- Review localStorage data before sharing device

---

Need help? Open an issue on GitHub!
