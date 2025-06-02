# Complete Website Deployment Guide

## Step 1: Fix the CSS for Dark Theme

The generated CSS needs to be updated to properly implement the dark theme. Replace the CSS variables at the top of your `style.css` file with:

```css
:root {
    /* Dark Theme Colors - UPDATED */
    --color-dark: #1A1A1A;
    --color-teal: #2AFADF;
    --color-purple: #A66BF0;
    --color-white: #FFFFFF;
    --color-light-gray: #E5E5E5;
    --color-dark-gray: #333333;
    
    /* Remove old light theme variables and replace with dark theme */
    --color-background: #1A1A1A;
    --color-surface: rgba(255, 255, 255, 0.05);
    --color-text: #FFFFFF;
    --color-text-secondary: #E5E5E5;
    --color-primary: #2AFADF;
    --color-primary-hover: #A66BF0;
    
    /* Gradients */
    --gradient-main: linear-gradient(135deg, #2AFADF 0%, #A66BF0 100%);
    --gradient-hover: linear-gradient(135deg, #A66BF0 0%, #2AFADF 100%);
    
    /* Shadows for floating effects */
    --shadow-normal: 0 10px 30px rgba(0, 0, 0, 0.3);
    --shadow-hover: 0 15px 40px rgba(42, 250, 223, 0.4);
    --shadow-glow: 0 0 20px rgba(42, 250, 223, 0.3);
}

/* Apply dark background to body */
body {
    background-color: #1A1A1A !important;
    color: #FFFFFF !important;
}

/* Ensure all cards have dark glassmorphism effect */
.card, 
.about__card, 
.education__card, 
.experience__card, 
.skill__category, 
.project__card, 
.cert__card,
.contact__form,
.contact__detail {
    background-color: rgba(255, 255, 255, 0.05) !important;
    backdrop-filter: blur(15px) !important;
    border: 1px solid rgba(255, 255, 255, 0.05) !important;
}
```

## Step 2: Download Website Files

1. **Download the three main files from the generated app:**
   - `index.html`
   - `style.css` 
   - `app.js`

2. **Update the CSS file** with the dark theme code above

3. **Create a project folder** on your computer called `harshith-portfolio`

4. **Place all files** in this folder

## Step 3: Deploy to GitHub Pages

### Method A: Direct Upload (Easiest)

1. **Create GitHub Account**
   - Go to github.com and sign up if you don't have an account

2. **Create New Repository**
   - Click "New repository"
   - Name it: `harshith-portfolio`
   - Make it Public
   - Check "Add a README file"
   - Click "Create repository"

3. **Upload Files**
   - Click "uploading an existing file"
   - Drag your three files (HTML, CSS, JS) into the upload area
   - Write commit message: "Initial portfolio upload"
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to repository Settings tab
   - Scroll to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

5. **Get Your Website URL**
   - Your site will be live at: `https://yourusername.github.io/harshith-portfolio`
   - It may take 5-10 minutes to go live

### Method B: Using GitHub Desktop (For frequent updates)

1. **Download GitHub Desktop**
   - Install from desktop.github.com

2. **Clone Repository**
   - Clone your repository to your computer

3. **Add Files**
   - Copy your website files to the cloned folder

4. **Commit and Push**
   - Open GitHub Desktop
   - Write commit message
   - Click "Commit to main"
   - Click "Push to origin"

## Step 4: Alternative Hosting (Netlify)

If GitHub Pages doesn't work or you prefer Netlify:

1. **Go to Netlify**
   - Visit netlify.com
   - Sign up for free account

2. **Deploy Site**
   - Click "Add new site" > "Deploy manually"
   - Drag your project folder to the deploy area
   - Your site goes live immediately!

3. **Get Custom Domain (Optional)**
   - Go to Site settings > Domain management
   - Add custom domain if you have one

## Step 5: Test Your Website

### Check these features work:

- ✅ **Dark Theme**: Background should be dark slate (#1A1A1A)
- ✅ **Floating Effects**: All elements should float up when hovered
- ✅ **Navigation**: Smooth scrolling between sections
- ✅ **Contact Form**: Should send emails to harshith.tadikonda@gmail.com
- ✅ **Resume Download**: Should download a text file
- ✅ **Mobile Responsive**: Check on phone/tablet
- ✅ **Gradient Text**: Name and accents should show teal-purple gradients

## Step 6: Customization Tips

### To add your actual resume PDF:

1. **Upload PDF to Google Drive or Dropbox**
2. **Get shareable link**
3. **Update the download button in JavaScript:**

```javascript
// In app.js, replace the resume download function
document.getElementById('downloadResume').addEventListener('click', function(e) {
    e.preventDefault();
    window.open('YOUR_RESUME_PDF_LINK', '_blank');
});
```

### To add project images:

1. **Upload images to a folder** in your repository
2. **Update project cards** in HTML with `<img>` tags

### To customize colors:

Change the CSS variables in `:root` section to your preferred colors.

## Troubleshooting

**If the dark theme doesn't appear:**
- Add `!important` to the background-color in body CSS
- Clear browser cache (Ctrl+F5)
- Check if CSS file is loading properly

**If floating effects don't work:**
- Make sure JavaScript file is linked correctly
- Check browser console for errors

**If contact form doesn't work:**
- Verify FormSubmit.co URL is correct
- Check spam folder for test emails

## Your Final Website Features

✅ **Professional Dark Portfolio** with Apple-inspired design  
✅ **Universal Floating Hover Effects** on all interactive elements  
✅ **Complete Bio** with your AR/VR and Gen AI background  
✅ **Education Timeline** with all three levels of education  
✅ **Experience Showcase** with Route2Market and VirtuON details  
✅ **Skills with Progress Bars** for all technical areas  
✅ **Project Portfolio** with 5 major projects  
✅ **Certifications Display** with all 6 certifications  
✅ **Working Contact Form** connected to your email  
✅ **Resume Download** functionality  
✅ **Mobile Responsive** design for all devices

Your portfolio is now ready to impress employers and clients in the AR/VR development space!