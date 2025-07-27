# Sahin Aktar Mondal - Angular Developer Portfolio

A modern, space-themed portfolio website showcasing Angular development expertise and professional projects.

## 🚀 Features

- **Space-themed Design**: Cosmic animations, twinkling stars, and nebula effects
- **Responsive Layout**: Mobile-first design that works on all devices
- **Modern Technologies**: Built with React, TypeScript, Tailwind CSS, and Framer Motion
- **Professional Sections**: 
  - Hero section with contact information
  - Skills showcase with Angular expertise
  - Project portfolio with 5+ featured works
  - Security & compliance section
- **Smooth Animations**: Engaging animations and transitions
- **Performance Optimized**: Fast loading and smooth scrolling

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion / Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **UI Components**: Radix UI (Shadcn/ui)

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git

## 🏃‍♂️ Getting Started

### 1. Clone or Download the Project

If you have the project files, organize them according to the file structure shown below.

### 2. Install Dependencies

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

### 3. Start Development Server

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will start on `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
sahin-portfolio/
├── components/
│   ├── ui/                 # Reusable UI components (Shadcn/ui)
│   ├── figma/             # Figma-specific components
│   ├── HeroSection.tsx    # Hero/About section
│   ├── Navigation.tsx     # Navigation component
│   ├── ProjectsSection.tsx # Projects showcase
│   ├── SecuritySection.tsx # Security features
│   └── SkillsSection.tsx  # Skills and technologies
├── styles/
│   └── globals.css        # Global styles and Tailwind config
├── App.tsx                # Main application component
├── main.tsx              # React entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **components/HeroSection.tsx**: Update name, title, location, experience
2. **components/Navigation.tsx**: Update social links and contact info
3. **components/ProjectsSection.tsx**: Add your projects
4. **components/SkillsSection.tsx**: Update skills and proficiency levels
5. **App.tsx**: Update footer information

### Contact Information

Current contact details in the portfolio:
- **Name**: Sahin Aktar Mondal
- **Email**: sahin.office24@gmail.com
- **Phone**: +91 86178 33233
- **Location**: Kolkata, India

### Styling

The project uses Tailwind CSS v4. You can customize:
- Colors in `styles/globals.css` (CSS variables)
- Animations and effects
- Component styling

### Adding New Sections

1. Create a new component in the `components/` directory
2. Import and add it to `App.tsx`
3. Update navigation in `Navigation.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Other Hosting

The `dist` folder contains all static files needed for deployment.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📞 Contact

For any questions or suggestions:

- **Email**: sahin.office24@gmail.com
- **Phone**: +91 86178 33233
- **LinkedIn**: [linkedin.com/in/sahin-mondal](https://linkedin.com/in/sahin-mondal)
- **GitHub**: [github.com/sahinmondal](https://github.com/sahinmondal)

## 📄 License

This project is personal portfolio website. Feel free to use it as inspiration for your own portfolio.

---

Built with ❤️ using React & TypeScript