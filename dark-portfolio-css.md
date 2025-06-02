# Harshith Tadikonda - Dark Portfolio CSS Implementation

## Critical Dark Theme Colors

```css
:root {
    /* Dark Theme Colors */
    --color-dark: #1A1A1A;
    --color-teal: #2AFADF;
    --color-purple: #A66BF0;
    --color-white: #FFFFFF;
    --color-light-gray: #E5E5E5;
    --color-dark-gray: #333333;
    
    /* Gradients */
    --gradient-main: linear-gradient(135deg, var(--color-teal) 0%, var(--color-purple) 100%);
    --gradient-hover: linear-gradient(135deg, var(--color-purple) 0%, var(--color-teal) 100%);
    
    /* Shadows */
    --shadow-normal: 0 10px 30px rgba(0, 0, 0, 0.3);
    --shadow-hover: 0 15px 40px rgba(42, 250, 223, 0.4);
    --shadow-glow: 0 0 20px rgba(42, 250, 223, 0.3);
}

/* Universal Floating Effect */
.floating-element {
    transition: all 0.3s ease-out;
    will-change: transform;
    transform: translate3d(0, 0, 0);
}

.floating-element:hover {
    transform: translate3d(0, -12px, 0) scale(1.02);
    box-shadow: var(--shadow-hover);
    z-index: 10;
}

/* Body and Background */
body {
    background-color: var(--color-dark);
    color: var(--color-white);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Hero Section */
.hero {
    background: var(--color-dark);
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
        circle at center,
        rgba(42, 250, 223, 0.1) 0%,
        rgba(166, 107, 240, 0.1) 40%,
        rgba(26, 26, 26, 1) 70%
    );
    animation: rotate 20s linear infinite;
}

/* Glassmorphism Cards */
.card, .about__card, .education__card, .experience__card, .skill__category, .project__card, .cert__card {
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: var(--shadow-normal);
}

/* Gradient Text Effects */
.hero__name, .nav__logo {
    background: var(--gradient-main);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Button Styles */
.btn--primary {
    background: var(--gradient-main);
    color: var(--color-dark);
    box-shadow: 0 8px 15px rgba(42, 250, 223, 0.3);
}

.btn--secondary {
    background: transparent;
    color: var(--color-white);
    border: 2px solid transparent;
    border-image: var(--gradient-main);
    border-image-slice: 1;
    box-shadow: var(--shadow-normal);
}
```

## Deployment Instructions

### Method 1: GitHub Pages (Recommended)

1. **Create GitHub Repository**
   - Go to github.com and create a new repository
   - Name it: `harshith-portfolio` or `your-username.github.io`

2. **Upload Files**
   - Upload the generated HTML, CSS, and JS files
   - Ensure main file is named `index.html`

3. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save

4. **Access Your Website**
   - Your site will be available at: `https://yourusername.github.io/repository-name`

### Method 2: Netlify (Drag & Drop)

1. **Go to Netlify**
   - Visit netlify.com and create a free account

2. **Deploy Website**
   - Drag your website folder to the deploy area
   - Netlify automatically deploys your site

3. **Custom Domain (Optional)**
   - Go to Domain settings
   - Add your custom domain

### Method 3: Vercel

1. **Connect GitHub**
   - Sign up at vercel.com
   - Connect your GitHub account

2. **Import Repository**
   - Select your portfolio repository
   - Vercel automatically deploys

## Key Features Implemented

✅ **Dark Theme**: Complete dark color scheme with #1A1A1A background  
✅ **Floating Effects**: Universal hover effects on ALL interactive elements  
✅ **Glassmorphism**: Modern blur effects on cards and sections  
✅ **Gradient Accents**: Teal-to-purple gradients throughout  
✅ **Resume Bio**: Complete about section with your background  
✅ **Education Details**: All three education levels (B.Tech, XII, X)  
✅ **Working Contact Form**: FormSubmit.co integration  
✅ **Resume Download**: Functional download button  
✅ **Responsive Design**: Mobile-friendly layout  
✅ **Smooth Animations**: GPU-accelerated transitions

## Customization Notes

- Update the contact form action URL with your email
- Replace resume download with actual PDF link
- Add your real project links and images
- Customize color gradients if needed
- Add social media links to contact section