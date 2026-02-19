// Blog Data
const blogs = [
    {
        id: 1,
        title: 'The Future of Artificial Intelligence',
        category: 'ai',
        date: 'Dec 15, 2024',
        author: 'Harshitha',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
        description: 'Exploring how AI is transforming industries and shaping our future with machine learning and deep learning technologies.',
        content: `Artificial Intelligence has become one of the most transformative technologies of our time. From healthcare to finance, AI is revolutionizing how we work and live.
        
        Machine learning algorithms are now capable of processing vast amounts of data, identifying patterns, and making predictions with unprecedented accuracy. Deep learning, a subset of machine learning, has enabled breakthroughs in image recognition, natural language processing, and autonomous systems.
        
        As we look to the future, AI promises to solve some of humanity's greatest challenges, from climate change to disease prevention. However, it also raises important questions about ethics, privacy, and the future of work.
        
        The key to harnessing AI's potential lies in responsible development and deployment, ensuring that these powerful technologies benefit all of humanity.`
    },
    {
        id: 2,
        title: 'Modern Web Development Trends 2024',
        category: 'webdev',
        date: 'Dec 12, 2024',
        author: 'Harshitha',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800',
        description: 'Discover the latest trends in web development including React, Next.js, and modern CSS frameworks.',
        content: `Web development continues to evolve at a rapid pace. In 2024, we're seeing exciting trends that are reshaping how we build web applications.
        
        React and Next.js have become the go-to frameworks for building modern, performant web applications. Server-side rendering and static site generation are now standard practices for improving performance and SEO.
        
        CSS has also evolved significantly with the introduction of container queries, CSS Grid enhancements, and new color functions. Tailwind CSS and other utility-first frameworks have gained massive popularity.
        
        The focus on web performance, accessibility, and user experience has never been stronger. Tools like Lighthouse and Web Vitals help developers create better experiences for all users.`
    },
    {
        id: 3,
        title: 'Mastering JavaScript ES2024 Features',
        category: 'programming',
        date: 'Dec 10, 2024',
        author: 'Harshitha',
        image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800',
        description: 'Learn about the newest JavaScript features and how they can improve your code quality and productivity.',
        content: `JavaScript continues to evolve with new features that make development more efficient and enjoyable. ES2024 brings several exciting additions to the language.
        
        New array methods like groupBy and toSorted provide more functional programming capabilities. The pipeline operator promises to make code more readable and maintainable.
        
        Temporal API is finally here, offering a modern solution to date and time handling in JavaScript. This addresses one of the language's longest-standing pain points.
        
        Understanding these new features and when to use them is crucial for modern JavaScript developers. They enable us to write cleaner, more maintainable code.`
    },
    {
        id: 4,
        title: 'Cloud Computing: AWS vs Azure vs GCP',
        category: 'technology',
        date: 'Dec 8, 2024',
        author: 'Harshitha',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
        description: 'A comprehensive comparison of the three major cloud platforms and their unique offerings.',
        content: `Cloud computing has become the backbone of modern software infrastructure. AWS, Azure, and GCP each offer unique advantages for different use cases.
        
        AWS leads in market share and offers the most comprehensive set of services. Its mature ecosystem and extensive documentation make it a popular choice for enterprises.
        
        Azure integrates seamlessly with Microsoft's ecosystem, making it ideal for organizations already using Microsoft products. Its hybrid cloud capabilities are particularly strong.
        
        GCP excels in data analytics and machine learning services, leveraging Google's expertise in these areas. Its pricing model is often more competitive for certain workloads.`
    },
    {
        id: 5,
        title: 'Building Scalable APIs with Node.js',
        category: 'programming',
        date: 'Dec 5, 2024',
        author: 'Harshitha',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
        description: 'Best practices for creating robust and scalable REST APIs using Node.js and Express.',
        content: `Node.js has become the de facto standard for building backend APIs. Its non-blocking I/O model makes it perfect for handling concurrent requests efficiently.
        
        When building scalable APIs, proper architecture is crucial. Implementing middleware for authentication, validation, and error handling creates a robust foundation.
        
        Database optimization, caching strategies, and load balancing are essential for handling high traffic. Tools like Redis and MongoDB work excellently with Node.js.
        
        Security should never be an afterthought. Implementing rate limiting, input validation, and proper authentication mechanisms protects your API from common vulnerabilities.`
    },
    {
        id: 6,
        title: 'Machine Learning for Beginners',
        category: 'ai',
        date: 'Dec 3, 2024',
        author: 'Harshitha',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800',
        description: 'Start your journey into machine learning with this comprehensive beginner-friendly guide.',
        content: `Machine learning might seem intimidating, but it's more accessible than ever. This guide will help you take your first steps into this exciting field.
        
        Understanding the basics of supervised and unsupervised learning is crucial. Linear regression and classification are great starting points for practical applications.
        
        Python has emerged as the primary language for machine learning, with libraries like scikit-learn, TensorFlow, and PyTorch making implementation straightforward.
        
        The key to learning machine learning is practice. Start with simple projects, gradually increasing complexity as you build confidence and understanding.`
    },
    {
        id: 7,
        title: 'Responsive Design Best Practices',
        category: 'webdev',
        date: 'Dec 1, 2024',
        author: 'Harshitha',
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800',
        description: 'Master the art of creating websites that look great on all devices with modern CSS techniques.',
        content: `Responsive design is no longer optional—it's essential. With users accessing websites from countless devices, your design must adapt seamlessly.
        
        CSS Grid and Flexbox provide powerful tools for creating flexible layouts. Understanding when to use each is key to efficient responsive design.
        
        Mobile-first design philosophy ensures your site works well on smaller screens first, then enhances the experience for larger displays.
        
        Testing across real devices and using browser developer tools helps identify and fix responsive design issues before they reach users.`
    },
    {
        id: 8,
        title: 'Cybersecurity in the Modern Age',
        category: 'technology',
        date: 'Nov 28, 2024',
        author: 'Harshitha',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
        description: 'Understanding the importance of cybersecurity and how to protect your digital assets.',
        content: `Cybersecurity threats are evolving constantly, making security awareness more important than ever. Understanding common attack vectors is the first step in protection.
        
        Phishing attacks remain one of the most common threats. Training users to recognize suspicious emails and links is crucial for organizational security.
        
        Implementing multi-factor authentication, regular security updates, and strong password policies creates multiple layers of defense.
        
        Zero-trust architecture is becoming the new standard, assuming no user or system should be trusted by default, regardless of location.`
    },
    {
        id: 9,
        title: 'Python for Data Science',
        category: 'programming',
        date: 'Nov 25, 2024',
        author: 'Harshitha',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
        description: 'Learn how Python has become the leading language for data science and analytics.',
        content: `Python's simplicity and powerful libraries have made it the language of choice for data science. Libraries like Pandas, NumPy, and Matplotlib form the foundation of data analysis.
        
        Data cleaning and preprocessing often take up most of a data scientist's time. Pandas provides intuitive tools for handling missing data, transforming datasets, and merging data sources.
        
        Visualization is crucial for understanding data and communicating insights. Matplotlib, Seaborn, and Plotly offer various options for creating compelling visualizations.
        
        Jupyter Notebooks have revolutionized how data scientists work, allowing for interactive exploration and documentation of analysis workflows.`
    }
];

let currentCategory = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderBlogs(blogs);
    setupEventListeners();
    setupScrollAnimations();
});

// Event Listeners
function setupEventListeners() {
    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Update active link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Category filter
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            currentCategory = category;
            
            // Update active category
            document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            // Filter blogs
            const filtered = category === 'all' ? blogs : blogs.filter(blog => blog.category === category);
            renderBlogs(filtered);
            
            // Scroll to blogs
            document.getElementById('blogs').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Contact form
    document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);

    // Modal close
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('blogModal').addEventListener('click', (e) => {
        if (e.target.id === 'blogModal') closeModal();
    });

    // Back to top
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Render Blogs
function renderBlogs(blogsToRender) {
    const grid = document.getElementById('blogGrid');
    
    grid.innerHTML = blogsToRender.map(blog => `
        <div class="blog-card" onclick="openBlogModal(${blog.id})">
            <img src="${blog.image}" alt="${blog.title}" class="blog-image">
            <div class="blog-content">
                <span class="blog-category">${blog.category}</span>
                <h3 class="blog-title">${blog.title}</h3>
                <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> ${blog.date}</span>
                    <span><i class="far fa-user"></i> ${blog.author}</span>
                </div>
                <p class="blog-description">${blog.description}</p>
                <button class="read-more-btn">Read More <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    `).join('');
}

// Open Blog Modal
function openBlogModal(blogId) {
    const blog = blogs.find(b => b.id === blogId);
    if (!blog) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <img src="${blog.image}" alt="${blog.title}" class="modal-image">
        <h1 class="modal-title">${blog.title}</h1>
        <div class="modal-meta">
            <span><i class="far fa-calendar"></i> ${blog.date}</span>
            <span><i class="far fa-user"></i> ${blog.author}</span>
            <span><i class="fas fa-tag"></i> ${blog.category}</span>
        </div>
        <div class="modal-text">
            ${blog.content.split('\n').map(p => p.trim() ? `<p>${p.trim()}</p>` : '').join('')}
        </div>
    `;

    document.getElementById('blogModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    document.getElementById('blogModal').classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Form Validation and Submit
function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error-msg').forEach(msg => msg.textContent = '');
    
    // Validate name
    if (name.length < 2) {
        document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }
    
    // Validate message
    if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
        isValid = false;
    }
    
    if (isValid) {
        // Show success message
        document.getElementById('successMsg').classList.add('show');
        document.getElementById('contactForm').reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            document.getElementById('successMsg').classList.remove('show');
        }, 5000);
    }
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Close modal with Escape
    if (e.key === 'Escape' && document.getElementById('blogModal').classList.contains('show')) {
        closeModal();
    }
});
