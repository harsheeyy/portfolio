// Harshith Tadikonda Portfolio - Enhanced JavaScript with Universal Hover Effects
// Perfect center alignment and comprehensive cursor hover interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScrolling();
    initNavigationEffects();
    initScrollAnimations();
    initUniversalHoverEffects();
    initResumeDownload();
    initContactForm();
    initPerformanceOptimizations();
    initAccessibility();
    initCursorEffects();
    
    console.log('🚀 Harshith Tadikonda Portfolio loaded successfully!');
    console.log('🎨 Dark theme with glassmorphism effects active');
    console.log('✨ Universal floating hover effects initialized');
    console.log('📱 Perfect center alignment applied');
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update URL without triggering scroll
                history.pushState(null, null, targetId);
                
                // Add visual feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });
}

// Enhanced navigation effects with scroll behavior
function initNavigationEffects() {
    const nav = document.getElementById('nav');
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateNav() {
        const currentScrollY = window.scrollY;
        
        // Enhanced glassmorphism effect based on scroll
        if (currentScrollY > 50) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
            nav.style.backdropFilter = 'blur(25px)';
            nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
            nav.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.9)';
            nav.style.backdropFilter = 'blur(20px)';
            nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
            nav.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
        }
        
        // Hide/show nav on scroll direction (optional)
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // nav.style.transform = 'translateY(-100%)'; // Uncomment to hide nav on scroll down
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNav);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

// Enhanced scroll animations with Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animate-in');
                
                // Staggered animation for grid items
                const gridItems = entry.target.querySelectorAll('.hover-element');
                gridItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                        item.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });
    
    // Observe hover elements that aren't in navigation
    const hoverElements = document.querySelectorAll('.hover-element');
    hoverElements.forEach(element => {
        if (!element.closest('.nav')) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(element);
        }
    });
}

// Universal hover effects system
function initUniversalHoverEffects() {
    const hoverElements = document.querySelectorAll('.hover-element');
    
    hoverElements.forEach(element => {
        // Add cursor pointer
        element.style.cursor = 'pointer';
        
        // Mouse enter event
        element.addEventListener('mouseenter', function() {
            handleHoverEnter(this);
        });
        
        // Mouse leave event
        element.addEventListener('mouseleave', function() {
            handleHoverLeave(this);
        });
        
        // Touch events for mobile
        element.addEventListener('touchstart', function() {
            handleHoverEnter(this);
        });
        
        element.addEventListener('touchend', function() {
            setTimeout(() => handleHoverLeave(this), 150);
        });
    });
}

// Enhanced hover enter effects based on element type
function handleHoverEnter(element) {
    element.style.willChange = 'transform, box-shadow, filter, background';
    
    // Card elements (education, experience, projects, certifications)
    if (element.classList.contains('education__card') || 
        element.classList.contains('experience__card') ||
        element.classList.contains('project__card') ||
        element.classList.contains('cert__card')) {
        
        element.style.transform = 'translateY(-12px) scale(1.02)';
        element.style.filter = 'brightness(1.1)';
        element.style.zIndex = '10';
        
        if (element.classList.contains('project__card') || element.classList.contains('cert__card')) {
            element.style.boxShadow = '0 20px 40px rgba(166, 107, 240, 0.4)';
            element.style.borderColor = 'rgba(166, 107, 240, 0.3)';
        } else {
            element.style.boxShadow = '0 20px 40px rgba(42, 250, 223, 0.4)';
            element.style.borderColor = 'rgba(42, 250, 223, 0.3)';
        }
    }
    
    // Skill tags
    else if (element.classList.contains('skill-tag')) {
        element.style.transform = 'translateY(-8px) scale(1.05)';
        element.style.boxShadow = '0 0 20px rgba(42, 250, 223, 0.4)';
        element.style.background = 'rgba(42, 250, 223, 0.2)';
        element.style.borderColor = '#2AFADF';
        element.style.color = '#2AFADF';
    }
    
    // Buttons
    else if (element.classList.contains('btn')) {
        element.style.transform = 'translateY(-6px) scale(1.04)';
        
        if (element.classList.contains('btn--primary')) {
            element.style.boxShadow = '0 15px 35px rgba(42, 250, 223, 0.5)';
        } else {
            element.style.boxShadow = '0 15px 35px rgba(255, 255, 255, 0.2)';
            element.style.borderColor = 'rgba(42, 250, 223, 0.5)';
        }
    }
    
    // Navigation links
    else if (element.closest('.nav__links')) {
        element.style.transform = 'translateY(-4px) scale(1.05)';
        element.style.boxShadow = '0 8px 20px rgba(42, 250, 223, 0.4)';
        element.style.background = 'rgba(42, 250, 223, 0.1)';
    }
    
    // Form controls
    else if (element.classList.contains('form-control')) {
        element.style.transform = 'translateY(-4px)';
        element.style.boxShadow = '0 0 20px rgba(42, 250, 223, 0.4)';
        element.style.borderColor = 'rgba(42, 250, 223, 0.5)';
    }
    
    // Contact items and general cards
    else if (element.classList.contains('contact-item') || 
             element.classList.contains('about__bio')) {
        element.style.transform = 'translateY(-10px) scale(1.02)';
        element.style.boxShadow = '0 15px 35px rgba(42, 250, 223, 0.3)';
        element.style.borderColor = 'rgba(42, 250, 223, 0.3)';
        element.style.filter = 'brightness(1.1)';
    }
    
    // Achievement list items
    else if (element.tagName === 'LI' && element.closest('.experience__achievements')) {
        element.style.transform = 'translateX(8px)';
        element.style.color = 'rgba(255, 255, 255, 0.9)';
        element.style.paddingLeft = '24px';
    }
    
    // Default hover effect for other elements
    else {
        element.style.transform = 'translateY(-8px) scale(1.02)';
        element.style.boxShadow = '0 12px 25px rgba(42, 250, 223, 0.3)';
        element.style.filter = 'brightness(1.05)';
    }
    
    element.style.transition = 'all 0.3s cubic-bezier(0.2, 1, 0.22, 1)';
}

// Hover leave effects
function handleHoverLeave(element) {
    element.style.transform = 'translateY(0) scale(1)';
    element.style.boxShadow = '';
    element.style.filter = '';
    element.style.background = '';
    element.style.borderColor = '';
    element.style.color = '';
    element.style.zIndex = '';
    element.style.paddingLeft = '';
    element.style.transition = 'all 0.3s cubic-bezier(0.2, 1, 0.22, 1)';
    
    setTimeout(() => {
        element.style.willChange = 'auto';
    }, 300);
}

// Enhanced cursor effects
function initCursorEffects() {
    // Create custom cursor dot
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, #2AFADF 0%, #A66BF0 100%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: all 0.3s ease;
        transform: translate(-50%, -50%);
    `;
    document.body.appendChild(cursor);
    
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.opacity = '0.7';
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    // Enhance cursor on hover elements
    const hoverElements = document.querySelectorAll('.hover-element');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.opacity = '1';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.opacity = '0.7';
        });
    });
}

// Resume download functionality
function initResumeDownload() {
    const downloadBtn = document.getElementById('downloadResume');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show loading state
            const originalText = this.textContent;
            this.textContent = 'Downloading...';
            this.disabled = true;
            this.style.opacity = '0.7';
            
            // Add loading spinner
            const spinner = document.createElement('div');
            spinner.className = 'btn-spinner';
            spinner.innerHTML = '⟳';
            spinner.style.cssText = `
                display: inline-block;
                animation: spin 1s linear infinite;
                margin-left: 8px;
            `;
            this.appendChild(spinner);
            
            // Generate and download resume
            setTimeout(() => {
                const resumeContent = generateResumeContent();
                const blob = new Blob([resumeContent], { type: 'text/plain' });
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'Harshith_Tadikonda_Resume.txt';
                
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
                
                // Reset button
                if (this.contains(spinner)) {
                    this.removeChild(spinner);
                }
                this.textContent = originalText;
                this.disabled = false;
                this.style.opacity = '1';
                
                showNotification('Resume downloaded successfully! 📄', 'success');
            }, 1500);
        });
    }
}

// Generate comprehensive resume content
function generateResumeContent() {
    return `
═══════════════════════════════════════════════════════════════════════════════
                            HARSHITH TADIKONDA
                    AR/VR Developer & Gen AI Innovator
═══════════════════════════════════════════════════════════════════════════════

CONTACT INFORMATION
Email: harshith.tadikonda@gmail.com
Phone: (+91) 6305864173
LinkedIn: https://in.linkedin.com/in/harsheeyy
Location: Hyderabad, Telangana, India

═══════════════════════════════════════════════════════════════════════════════
                              PROFESSIONAL SUMMARY
═══════════════════════════════════════════════════════════════════════════════

I'm a results-driven technology enthusiast with hands-on experience in product 
development, business analysis, and AR/VR innovation. Skilled in UI/UX design, 
data analytics, and agile methodologies, I specialize in building user-centric 
digital solutions that solve real-world problems.

I've developed AI-based virtual try-on applications, collaborated with early-stage 
startups to define product strategies, and published research on Augmented 
Reality-based Parking Management Systems at the IEEE ICIRCA 2025 Conference, 
demonstrating my ability to blend innovation with practical impact.

I leverage advanced AI tools and prompt engineering techniques to streamline 
workflows, generate creative content, and accelerate product ideation, with 
hands-on proficiency in tools like ChatGPT, Midjourney, and other generative AI 
platforms. Backed by certifications in Generative AI and Machine Learning.

═══════════════════════════════════════════════════════════════════════════════
                                  EDUCATION
═══════════════════════════════════════════════════════════════════════════════

Bachelor of Technology - Computer Science Engineering
SRM Institute of Science and Technology | 2021 - Present | CGPA: 8.14

Grade XII (High School)
FIITJEE Junior College | 2019 - 2021 | Grade: 64.7%

Grade X (Secondary School)
FIITJEE World School | 2018 - 2019 | CGPA: 8.3

═══════════════════════════════════════════════════════════════════════════════
                            PROFESSIONAL EXPERIENCE
═══════════════════════════════════════════════════════════════════════════════

Business Analyst & Product Strategist Intern | Route2Market | Apr 2024 - May 2024
• Designed and deployed an offline navigation system with drone control interfaces using Unity
• Conducted extensive API research for offline features, improving system stability in remote areas
• Collaborated to build a VR flight control system enhancing drone operations and user experience

Product Development Intern (AR Developer) | VirtuON | Jan 2024 - Mar 2024
• Led product design and development for virtual trial solutions, enhancing AR customer experience
• Implemented deep learning image translation for personalized user suggestions
• Provided market insights and pitched ideas to investors, increasing project funding
• Analyzed user engagement metrics, increasing AR feature adoption by 20%

═══════════════════════════════════════════════════════════════════════════════
                                   PROJECTS
═══════════════════════════════════════════════════════════════════════════════

Virtual Trail on AR & AI (Major Project)
Immersive AR+AI guided exploration with real-time navigation and context-aware insights.

AR Parking Management (IEEE ICIRCA 2025 Publication)
AR overlays for parking spot discovery, directions, and payments. Reduces congestion and improves efficiency.

UI/UX Developer – E-Mobility App (Design Project)
Designed intuitive EV app UI in Figma; improved user satisfaction by 18%. Coordinated hackathon media, raising participation by 25%.

FPS Shooter Game (Game Development)
Unity 3D game with multiplayer, weapon customization, and immersive gameplay.

Data Analytics for Business Insights (Analytics Project)
Python, Tableau, MySQL: 30% reporting accuracy boost for retail analytics.

VR Hospital Tour (Healthcare VR)
Comedian-guided VR experience to make hospital visits engaging and less intimidating.

═══════════════════════════════════════════════════════════════════════════════
                               TECHNICAL SKILLS
═══════════════════════════════════════════════════════════════════════════════

Programming Languages: Python, C++, SQL
AR/VR Development: Unity, AR/VR Technologies
UI/UX Design: Figma, Design Systems
Generative AI: Advanced AI Tools, Prompt Engineering
Data Analytics: Tableau, MySQL, Statistical Analysis
Methodologies: Agile Development, Business Analysis

═══════════════════════════════════════════════════════════════════════════════
                               CERTIFICATIONS
═══════════════════════════════════════════════════════════════════════════════

• OCI 2024 Generative AI Professional (Oracle)
• AWS Academy ML Foundations (Amazon Web Services)
• Python Essentials 1 (Cisco)
• Agile Methodology Virtual Experience (Cognizant)
• Data Analytics Job Simulation (Quantium)
• Networking Basics (Cisco)

═══════════════════════════════════════════════════════════════════════════════
                          ADDITIONAL QUALIFICATIONS
═══════════════════════════════════════════════════════════════════════════════

Languages: Telugu (Native), English, Hindi, Tamil
IELTS Score: 7.0 bands

Publications:
Enhancing Parking Management with Augmented Reality - Accepted for publication at IEEE ICIRCA conference (Upcoming). Explores AR tech to improve parking space identification, real-time navigation, and efficiency in urban environments.

Volunteering:
PRAGYATHON, Hackathon Event Management - Recorded and edited promotional videos for a hackathon. Successfully pitched content to venture capitalists, resulting in funding for future projects.

Hobbies: Writing, Photography, Movie Criticism, Traveling, Exploring

═══════════════════════════════════════════════════════════════════════════════
Generated on ${new Date().toLocaleDateString()}
═══════════════════════════════════════════════════════════════════════════════
`;
}

// Enhanced contact form functionality
function initContactForm() {
    const form = document.querySelector('.contact__form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            
            // Add loading spinner
            const spinner = document.createElement('div');
            spinner.className = 'btn-spinner';
            spinner.innerHTML = '⟳';
            spinner.style.cssText = `
                display: inline-block;
                animation: spin 1s linear infinite;
                margin-left: 8px;
            `;
            submitBtn.appendChild(spinner);
            
            // Simulate form submission
            setTimeout(() => {
                // Remove spinner
                if (submitBtn.contains(spinner)) {
                    submitBtn.removeChild(spinner);
                }
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                
                // Show success message
                showNotification('Message sent successfully! I will get back to you soon. 📧', 'success');
                
                // Reset form with animation
                form.reset();
                
                // Animate form fields
                const formControls = form.querySelectorAll('.form-control');
                formControls.forEach((control, index) => {
                    setTimeout(() => {
                        control.style.transform = 'scale(0.98)';
                        setTimeout(() => {
                            control.style.transform = '';
                        }, 150);
                    }, index * 100);
                });
                
                // Uncomment the next line for actual form submission
                // form.submit();
            }, 2000);
        });
        
        // Real-time validation
        const inputs = form.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearValidation);
        });
    }
}

// Field validation with enhanced UX
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    clearValidation({ target: field });
    
    let isValid = true;
    let message = '';
    
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        message = 'This field is required';
    } else if (field.type === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        message = 'Please enter a valid email address';
    }
    
    if (!isValid) {
        field.style.borderColor = '#ff5459';
        field.style.boxShadow = '0 0 0 3px rgba(255, 84, 89, 0.3)';
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #ff5459;
            font-size: 12px;
            margin-top: 4px;
            text-align: center;
            animation: fadeIn 0.3s ease-out;
        `;
        field.parentNode.appendChild(errorDiv);
    }
}

// Clear validation styling
function clearValidation(e) {
    const field = e.target;
    field.style.borderColor = '';
    field.style.boxShadow = '';
    
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Performance optimizations
function initPerformanceOptimizations() {
    // Optimize scroll events
    let scrollTimer = null;
    window.addEventListener('scroll', () => {
        if (scrollTimer !== null) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(() => {
            // Scroll ended, perform cleanup if needed
        }, 150);
    }, { passive: true });
    
    // Preload critical resources
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
    });
}

// Accessibility enhancements
function initAccessibility() {
    // Keyboard navigation for hover elements
    const hoverElements = document.querySelectorAll('.hover-element');
    
    hoverElements.forEach(element => {
        // Add tabindex for keyboard navigation
        if (!element.hasAttribute('tabindex') && 
            (element.tagName === 'DIV' || element.tagName === 'SPAN')) {
            element.setAttribute('tabindex', '0');
        }
        
        // Keyboard interaction
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                if (e.key === ' ') e.preventDefault();
                
                if (this.tagName === 'A' || this.tagName === 'BUTTON') {
                    this.click();
                } else {
                    // Trigger hover effect
                    handleHoverEnter(this);
                    setTimeout(() => handleHoverLeave(this), 500);
                }
            }
        });
        
        // Focus styles
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #2AFADF';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // Skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#about';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #2AFADF;
        color: #0a0a0a;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        font-weight: 600;
        transition: top 0.3s ease;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Enhanced notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    
    const styles = {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '16px',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(42, 250, 223, 0.3)',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.2, 1, 0.22, 1)',
        fontWeight: '500',
        boxShadow: '0 8px 32px rgba(42, 250, 223, 0.3)',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        maxWidth: '350px',
        cursor: 'pointer'
    };
    
    if (type === 'success') {
        styles.background = 'rgba(42, 250, 223, 0.95)';
        styles.color = '#0a0a0a';
        styles.border = '1px solid rgba(42, 250, 223, 0.5)';
    } else if (type === 'error') {
        styles.background = 'rgba(255, 84, 89, 0.95)';
        styles.color = '#ffffff';
        styles.border = '1px solid rgba(255, 84, 89, 0.5)';
        styles.boxShadow = '0 8px 32px rgba(255, 84, 89, 0.3)';
    }
    
    Object.assign(notification.style, styles);
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
    
    // Click to dismiss
    notification.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    });
}

// Add necessary CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .btn-spinner {
        animation: spin 1s linear infinite;
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out;
    }
    
    /* Hide default cursor on hover elements */
    .hover-element:hover {
        cursor: none;
    }
    
    /* Enhanced scrollbar */
    ::-webkit-scrollbar {
        width: 12px;
    }
    
    ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 6px;
    }
    
    ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #2AFADF, #A66BF0);
        border-radius: 6px;
        border: 2px solid rgba(10, 10, 10, 1);
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #A66BF0, #2AFADF);
    }
    
    /* Custom cursor styles */
    .custom-cursor {
        mix-blend-mode: difference;
    }
    
    /* Performance optimizations */
    .hover-element {
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
    }
    
    /* Selection styles */
    ::selection {
        background: rgba(42, 250, 223, 0.3);
        color: #ffffff;
    }
    
    ::-moz-selection {
        background: rgba(42, 250, 223, 0.3);
        color: #ffffff;
    }
`;

document.head.appendChild(style);

// Initialize theme and final setup
document.addEventListener('DOMContentLoaded', function() {
    // Force dark theme
    document.documentElement.setAttribute('data-color-scheme', 'dark');
    document.body.classList.add('dark-theme');
    
    // Add performance class
    document.body.classList.add('performance-optimized');
    
    // Welcome message
    setTimeout(() => {
        showNotification('Welcome to Harshith\'s Portfolio! 🚀 Hover over elements to see them float!', 'success');
    }, 1000);
});