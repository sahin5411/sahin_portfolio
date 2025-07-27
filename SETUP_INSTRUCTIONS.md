# 🚀 Complete Setup Instructions

Follow these steps to set up and run the Sahin Aktar Mondal Portfolio project on your local machine.

## 📋 Prerequisites

1. **Node.js**: Download and install from [nodejs.org](https://nodejs.org/) (version 16 or higher)
2. **VS Code**: Download from [code.visualstudio.com](https://code.visualstudio.com/)
3. **Git**: Download from [git-scm.com](https://git-scm.com/) (optional, for version control)

## 📁 Step 1: Create Project Structure

1. Create a new folder called `sahin-portfolio` on your desktop or preferred location
2. Open the folder in VS Code (`File > Open Folder`)

## 📄 Step 2: Create All Project Files

Copy each file content provided and create the following files in your project:

### Root Files:
- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.node.json`
- `.eslintrc.cjs`
- `.gitignore`
- `index.html`
- `main.tsx`
- `App.tsx`
- `README.md`

### Folders and Files:
```
sahin-portfolio/
├── components/
│   ├── HeroSection.tsx
│   ├── Navigation.tsx
│   ├── ProjectsSection.tsx
│   ├── SecuritySection.tsx
│   ├── SkillsSection.tsx
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   └── ui/
│       ├── button.tsx
│       ├── badge.tsx
│       └── [all other UI component files]
├── styles/
│   └── globals.css
├── public/
│   └── favicon.svg
└── [all root files listed above]
```

## 🔧 Step 3: Install Dependencies

1. Open terminal in VS Code (`Terminal > New Terminal` or `Ctrl+` `)
2. Make sure you're in the project root directory
3. Run the installation command:

```bash
npm install
```

This will install all required dependencies. It may take a few minutes.

## 🏃‍♂️ Step 4: Start Development Server

After installation is complete, start the development server:

```bash
npm run dev
```

You should see output like:
```
  VITE v5.0.8  ready in 1234 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

## 🌐 Step 5: View Your Portfolio

1. Open your browser
2. Go to `http://localhost:3000`
3. You should see the portfolio website with cosmic animations!

## 🎨 Step 6: Customize Your Portfolio

### Update Personal Information:

1. **HeroSection.tsx**: Change name, bio, location, contact info
2. **Navigation.tsx**: Update social media links
3. **ProjectsSection.tsx**: Add your own projects
4. **SkillsSection.tsx**: Update your skills and experience levels

### Change Contact Details:

Replace all instances of:
- Name: "Sahin Aktar Mondal" → Your Name
- Email: "sahin.office24@gmail.com" → Your Email
- Phone: "+91 86178 33233" → Your Phone
- Location: "Kolkata, India" → Your Location

## 🔧 Useful VS Code Extensions

Install these extensions for better development experience:

1. **ES7+ React/Redux/React-Native snippets**
2. **TypeScript Importer**
3. **Tailwind CSS IntelliSense**
4. **Auto Rename Tag**
5. **Bracket Pair Colorizer**
6. **GitLens**

## 📦 Building for Production

When ready to deploy:

```bash
npm run build
```

This creates a `dist` folder with optimized files for hosting.

## 🚀 Deployment Options

### 1. Vercel (Free & Easy)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Deploy automatically

### 2. Netlify (Free)
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder

### 3. GitHub Pages
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Deploy from the `dist` folder

## 🛠️ Troubleshooting

### Common Issues:

1. **"Module not found"**: Run `npm install` again
2. **Port already in use**: Kill other processes or use different port
3. **TypeScript errors**: Check file extensions are `.tsx` for React components
4. **Tailwind not working**: Ensure `globals.css` is imported in `main.tsx`

### Getting Help:

- Check the browser console for errors (`F12`)
- Read error messages carefully
- Google specific error messages
- Check VS Code Problems panel (`View > Problems`)

## 📱 Testing

Test your portfolio on:
- Different browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (responsive design)
- Different screen sizes

## 🎯 Next Steps

1. Add your real projects with screenshots
2. Update skills with your actual experience levels
3. Add real social media and GitHub links
4. Create real project repositories
5. Deploy to a custom domain

## 💡 Tips

- Save files frequently (`Ctrl+S`)
- Use `Ctrl+C` to stop the development server
- Use `npm run dev` to restart the server
- Changes auto-reload in the browser
- Check the terminal for any error messages

---

Happy coding! 🚀 Your portfolio will look amazing with the space theme and smooth animations.