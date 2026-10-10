// 1. Projects Dataset with Editorial Details & Highlights
const projectsData = [
    {
        id: "dishcovery",
        title: "Dishcovery",
        categories: ["developer", "uiux"],
        pills: ["UI/UX DESIGNER", "FULL-STACK"],
        role: "Full-stack Developer & UI/UX Designer (Figma)",
        icon: "fa-solid fa-utensils",
        highlight: "Recipe Matching Algorithm • SDG 12 • Full-Stack",
        image: "assets/images/projects/dishcovery.png",
        description: "Dishcovery is a recipe recommendation web app where users search recipes by name and narrow down results by entering ingredients to include or avoid. Features match percentage scoring and ingredient-avoidance filtering to reduce food waste (SDG 12).",
        learnings: "I learned how to bridge the gap between design and functionality. By working on both UI/UX and full-stack integration, I gained hands-on experience in translating visual interface mockups into working database schemas and backend API endpoints.",
        links: [
            { label: "Figma Design", url: "https://www.figma.com/design/GMDfRm8l0NP68QIrcdjdMu/SoftEng?node-id=0-1&t=kBtgJvL1HsrNAZYG-1", icon: "fa-brands fa-figma" },
            { label: "GitHub Repository", url: "https://github.com/haniahumayra/dishcovery", icon: "fa-brands fa-github" },
            { label: "Notion Project Overview", url: "https://app.notion.com/p/9cddbbb19c8f4ae89190cd0beb359aba?v=bc3fe542a08b49429e70058abaa7e187&source=copy_link", icon: "fa-solid fa-book-open" }
        ]
    },
    {
        id: "loancalc",
        title: "LoanCalc AI",
        categories: ["ai", "data", "developer"],
        pills: ["ML ENGINEER", "BACKEND LEAD"],
        role: "ML Engineer (EDA) & Backend Lead",
        icon: "fa-solid fa-chart-line",
        highlight: "4,269 Records • 11 Features • OJK SLIK to CIBIL Mapping",
        image: "assets/images/projects/loancalc.png",
        description: "A real-time loan approval prediction app powered by Flask and a Gradient Boosting Classifier trained on 4,269 records across 11 financial features. Analyzed OJK's SLIK kolektibilitas (Kol 1–5) and mapped to CIBIL credit score benchmarks.",
        learnings: "This project taught me how to think creatively around real-world constraints when data isn't available, using research and domain knowledge to adapt existing tools and bridge international datasets to local credit frameworks.",
        links: [
            { label: "Live Demo", url: "https://loan-approval-project-sandy.vercel.app/", icon: "fa-solid fa-arrow-up-right-from-square" },
            { label: "GitHub Repository", url: "https://github.com/haniahumayra/loan-approval-project", icon: "fa-brands fa-github" }
        ]
    },
    {
        id: "ruangaman",
        title: "RuangAman",
        categories: ["uiux"],
        pills: ["PRODUCT CONCEPT", "UI/UX DESIGNER"],
        role: "UI/UX Designer & Requirement Gathering Lead",
        icon: "fa-solid fa-shield-heart",
        highlight: "Anonymous by Default • AI Moderation • Gender-Inclusive",
        image: "assets/images/projects/ruangaman.png",
        description: "An anonymous digital safe-space platform built to empower survivors of sexual harassment of all genders in Indonesia. Designed with privacy by default, AI comment moderation to intercept harmful replies, no public likes, and hotline access.",
        learnings: "I sketched out early designs to explore the problem space and stress-tested requirements with community feedback. I'm passionate about building digital spaces where technology directly protects user well-being and privacy.",
        links: [
            { label: "Figma Design", url: "https://www.figma.com/design/aHCftyFfTf70GBocowo6BY/RuangAman?node-id=2011-3224&t=7esOLKLMsNQphPuX-1", icon: "fa-brands fa-figma" },
            { label: "Notion Project Overview", url: "https://app.notion.com/p/RuangAman-Project-Overview-3c482851f56280019a2eeec587b0de37?source=copy_link", icon: "fa-solid fa-book" }
        ]
    },
    {
        id: "fitfresh",
        title: "FitFresh Club",
        categories: ["uiux", "developer"],
        pills: ["UI/UX DESIGNER", "FRONTEND"],
        role: "UI/UX Designer (Figma) & Frontend Developer",
        icon: "fa-solid fa-dumbbell",
        highlight: "Tailored Workouts • Ideal Weight Tool • Clean UX",
        image: "assets/images/projects/fitfresh.png",
        description: "FitFresh Club is a web-based fitness platform providing tailored workout programs, yoga sessions, ideal body weight calculator, health blog, and training schedules. Tailored specifically for students and young adults.",
        learnings: "Good UX starts with understanding who you're designing for. Identifying our target users first made structuring content and navigation far more intentional than just building features we thought were useful.",
        links: [
            { label: "Figma Design", url: "https://www.figma.com/design/6v11JbOweXAFCPjCQfVoHt/FITFRESH?node-id=0-1&t=tnG0M0W5vUIEmLRl-1", icon: "fa-brands fa-figma" },
            { label: "GitHub Repository", url: "https://github.com/haniahumayra/FitFresh", icon: "fa-brands fa-github" }
        ]
    },
    {
        id: "kelilingi_jawa",
        title: "Kelilingi Jawa",
        categories: ["uiux"],
        pills: ["UI/UX DESIGNER"],
        role: "UI/UX Designer & Conceptual Architect",
        icon: "fa-solid fa-compass",
        highlight: "AI Matchmaking Logic • Similarity Scoring • Travel Groups",
        image: "assets/images/projects/kelilingi_jawa.png",
        description: "An AI-based open trip matchmaking platform designed for travelers in Java Island. Replaces manual participant grouping with weighted criteria and similarity scoring to pair trip members with matching preferences.",
        learnings: "In conceptual simulations, similarity scoring produced consistently better participant pairings than standard filter methods, demonstrating the impact of intelligent algorithms on user experience in travel social apps.",
        links: [
            { label: "Figma Design", url: "https://www.figma.com/design/EAd5dVOsHtVTyS0voKo1uB/AOL-AI?node-id=0-1&t=PpAbOE7STdSzsD9v-1", icon: "fa-brands fa-figma" }
        ]
    },
    {
        id: "shipdeckk",
        title: "ShipDecKK",
        categories: ["uiux"],
        pills: ["UI/UX DESIGNER"],
        role: "UI/UX Designer",
        icon: "fa-solid fa-ship",
        highlight: "Maritime Enterprise • 3 Core Services • Clean Visual Hierarchy",
        image: "assets/images/projects/shipdeckk.png",
        description: "Website design concept for a maritime enterprise offering ship design, sales, and maintenance. Solves dense industrial navigation by presenting clear core services and guided client contact flows.",
        learnings: "Simplified visual storytelling for industrial sectors by establishing strong visual hierarchy and clear call-to-actions.",
        links: [
            { label: "Figma Design", url: "https://www.figma.com/design/6aWmubdygjCGafiXif9hF0/HCI---AOL?node-id=302-104&t=mucmdQC8efaywh0P-1", icon: "fa-brands fa-figma" }
        ]
    },
    {
        id: "linguid",
        title: "LinguID",
        categories: ["ai", "developer"],
        pills: ["NLP", "DEVELOPMENT"],
        role: "AI Developer & NLP Researcher",
        icon: "fa-solid fa-language",
        highlight: "NLP Pipeline • Linguistic Feature Extraction • Classifier",
        image: "assets/images/projects/linguid.png",
        description: "Language identification and text processing system utilizing Natural Language Processing (NLP) techniques to classify language input and extract linguistic features.",
        learnings: "Explored feature extraction techniques for text classification models.",
        links: [
            { label: "Live Demo", url: " https://linguid-nlp-analysis-output.vercel.app/", icon: "fa-solid fa-arrow-up-right-from-square" },
            { label: "GitHub Repository", url: "https://github.com/haniahumayra/linguistic-NLP-analysis-output", icon: "fa-brands fa-github" }
            
        ]
    },
    {
        id: "anemia_cnn",
        title: "Anemia Detection Using CNN",
        categories: ["ai"],
        pills: ["COMPUTER VISION", "RESEARCH", "DEEP LEARNING"],
        role: "AI Researcher & Model Evaluation Lead",
        icon: "fa-solid fa-microscope",
        highlight: "Deep CNN • Medical Imagery Dataset • Academic Research",
        image: "assets/images/projects/anemia_cnn.svg",
        description: "Deep learning research applying Convolutional Neural Networks (CNN) for automated anemia detection from biological imagery datasets to assist in early clinical screening.",
        learnings: "Deepened expertise in image preprocessing, dataset augmentation, and optimizing deep convolutional neural network layers for medical image classification.",
        links: [
            { label: "View Final Paper (PDF)", url: "assets/docs/anemia_paper.pdf", icon: "fa-solid fa-file-pdf" }
        ]
    },
    {
        id: "fruits_cnn",
        title: "Fruits Classification Using CNN",
        categories: ["ai"],
        pills: ["COMPUTER VISION", "RESEARCH", "DEEP LEARNING"],
        role: "Computer Vision Specialist",
        icon: "fa-solid fa-brain",
        highlight: "Multi-Class CNN • Image Feature Maps • Hyperparameter Tuning",
        image: "assets/images/projects/fruits_cnn.svg",
        description: "Computer vision model utilizing Convolutional Neural Networks for multi-class fruit image classification, evaluating model performance across variable lighting, angles, and background conditions.",
        learnings: "Studied feature extraction maps across intermediate convolutional layers and tuned hyperparameters for multi-class classification accuracy.",
        links: [
            { label: "View Final Report (PDF)", url: "assets/docs/fruits_report.pdf", icon: "fa-solid fa-file-pdf" },
            { label: "GitHub Repository", url: "https://github.com/vebynovalisa/fruit-freshness-classification", icon: "fa-brands fa-github" }

        ]
    },
    {
        id: "portfolio_website",
        title: "Portfolio Website",
        categories: ["uiux", "developer"],
        pills: ["FRONTEND DEVELOPER", "UI/UX DESIGNER"],
        role: "Frontend Developer & UI/UX Designer",
        icon: "fa-solid fa-laptop-code",
        image: "assets/images/projects/portofolio.png",
        description: "A responsive portfolio website showcasing my projects and skills as a frontend developer and UI/UX designer.",
        learnings: "Enhanced my understanding of modern web development practices, including responsive design, accessibility, and performance optimization.",
        links: [
            { label: "GitHub Repository", url: "https://github.com/haniahumayra/Portofolio", icon: "fa-solid fa-globe" }
        ]
    }
];

// 2. DOM Elements
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Project Modal Elements
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalImageWrapper = document.getElementById('modal-image-wrapper');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalRole = document.getElementById('modal-role');
const modalPills = document.getElementById('modal-pills');
const modalDesc = document.getElementById('modal-description');
const modalLearningsBox = document.getElementById('modal-learnings-box');
const modalLearnings = document.getElementById('modal-learnings');
const modalLinks = document.getElementById('modal-links');

// CV Modal Elements
const openCvBtn = document.getElementById('open-cv-btn');
const cvModal = document.getElementById('cv-modal');
const cvModalClose = document.getElementById('cv-modal-close');

// 3. Render Enhanced Editorial Project Cards (With Visual Thumbnail Previews)
function updateFilterCounts() {
    const filterCounts = {
        all: projectsData.length,
        data: projectsData.filter(p => p.categories.includes('data')).length,
        ai: projectsData.filter(p => p.categories.includes('ai')).length,
        developer: projectsData.filter(p => p.categories.includes('developer')).length,
        uiux: projectsData.filter(p => p.categories.includes('uiux')).length
    };

    document.querySelectorAll('.filter-btn').forEach(btn => {
        const filter = btn.getAttribute('data-filter');
        const countSpan = btn.querySelector('.filter-count');
        if (countSpan && filterCounts[filter] !== undefined) {
            countSpan.textContent = filterCounts[filter];
        }
    });
}

function renderProjects(filter = 'all') {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.categories.includes(filter));

    filteredProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-id', project.id);

        const dynamicNumber = String(index + 1).padStart(2, '0');
        const pillsHTML = project.pills.map(pill => `<span class="tag-pill">${pill}</span>`).join('');

        card.innerHTML = `
            <div>
                <!-- Top Project Visual Thumbnail Preview -->
                <div class="project-card-cover">
                    <img src="${project.image}" alt="${project.title}" class="project-cover-img" loading="lazy">
                    <div class="project-cover-overlay"></div>
                    <span class="project-index-pill">
                        <span class="pill-dot"></span>
                        <span class="pill-num-text">${dynamicNumber}</span>
                    </span>
                </div>

                <!-- Card Body -->
                <div class="project-card-body">
                    <div class="project-header-row">
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-meta">
                            ${pillsHTML}
                        </div>
                    </div>
                    <p class="project-desc">${project.description}</p>
                </div>
            </div>

            <!-- Card Footer -->
            <div class="project-card-footer">
                <span>VIEW DETAILS</span>
                <div class="footer-arrow-circle">
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        `;

        card.addEventListener('click', () => openModal(project));
        projectsGrid.appendChild(card);
    });
}

// 4. Modal Functions
function openModal(project) {
    if (project.image && modalImg && modalImageWrapper) {
        modalImg.src = project.image;
        modalImg.alt = project.title;
        modalImageWrapper.style.display = 'block';
    } else if (modalImageWrapper) {
        modalImageWrapper.style.display = 'none';
    }

    modalTitle.textContent = project.title;
    modalRole.textContent = project.role;
    modalDesc.textContent = project.description;

    modalPills.innerHTML = project.pills.map(p => `<span class="tag-pill">${p}</span>`).join('');

    if (project.learnings) {
        modalLearnings.textContent = project.learnings;
        modalLearningsBox.style.display = 'block';
    } else {
        modalLearningsBox.style.display = 'none';
    }

    modalLinks.innerHTML = '';
    if (project.links && project.links.length > 0) {
        project.links.forEach(link => {
            const btn = document.createElement('a');
            btn.className = 'modal-link-btn';
            btn.href = link.url;
            btn.target = '_blank';
            btn.rel = 'noopener';
            btn.innerHTML = `<i class="${link.icon}"></i> ${link.label}`;
            modalLinks.appendChild(btn);
        });
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// CV Modal Functions
if (openCvBtn && cvModal) {
    openCvBtn.addEventListener('click', () => {
        cvModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    const closeCvModal = () => {
        cvModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    cvModalClose.addEventListener('click', closeCvModal);
    cvModal.addEventListener('click', (e) => {
        if (e.target === cvModal) closeCvModal();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (modal.classList.contains('active')) closeModal();
        if (cvModal && cvModal.classList.contains('active')) {
            cvModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// 5. Category Filtering Setup
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-filter');
        renderProjects(filterValue);
    });
});

// 6. Smooth Scroll & Section Reveal Animation
const revealSections = document.querySelectorAll('.reveal-section');

const observerOptions = {
    root: null,
    threshold: 0.05,
    rootMargin: "-30px 0px -30px 0px"
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

revealSections.forEach(section => {
    sectionObserver.observe(section);
});

// Navigation Link Click Smooth Scroll with Navbar Height Offset
const navLinks = document.querySelectorAll('.nav-link, .explore-btn');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Active Link Highlight on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    revealSections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// 6. About Pillars 3D Semi-Circle Arc Carousel (Clear Arrow & Dot Navigation)
function initPillarsArcCarousel() {
    const stage = document.getElementById('pillars-arc-stage');
    const cards = document.querySelectorAll('.pillar-arc-card');
    const dots = document.querySelectorAll('.arc-dot');
    const prevBtn = document.getElementById('arc-prev-btn');
    const nextBtn = document.getElementById('arc-next-btn');

    if (!stage || cards.length === 0) return;

    let currentIndex = 0;
    const totalCards = cards.length;

    function updateCarousel() {
        const stageWidth = stage.offsetWidth || 600;
        const isMobile = stageWidth < 480;
        const isTablet = stageWidth < 768;
        
        const xOffset = isMobile ? 110 : (isTablet ? 150 : 200);
        const zOffset = isMobile ? -50 : -80;
        const rotY = isMobile ? 18 : 25;

        cards.forEach((card, index) => {
            let diff = index - currentIndex;
            if (diff < -Math.floor(totalCards / 2)) diff += totalCards;
            if (diff > Math.floor(totalCards / 2)) diff -= totalCards;

            card.classList.remove('active', 'prev', 'next');

            if (diff === 0) {
                // Active Center Card (Facing Forward & Elevated)
                card.classList.add('active');
                card.style.transform = `translateX(0px) translateZ(35px) rotateY(0deg) scale(1)`;
                card.style.opacity = '1';
                card.style.zIndex = '10';
            } else if (diff === 1) {
                // Right Card on Semi-Circle Arc
                card.classList.add('next');
                card.style.transform = `translateX(${xOffset}px) translateZ(${zOffset}px) rotateY(-${rotY}deg) scale(0.88)`;
                card.style.opacity = '0.7';
                card.style.zIndex = '5';
            } else if (diff === -1) {
                // Left Card on Semi-Circle Arc
                card.classList.add('prev');
                card.style.transform = `translateX(-${xOffset}px) translateZ(${zOffset}px) rotateY(${rotY}deg) scale(0.88)`;
                card.style.opacity = '0.7';
                card.style.zIndex = '5';
            } else {
                card.style.transform = `translateX(${diff * xOffset * 1.5}px) translateZ(-160px) scale(0.7)`;
                card.style.opacity = '0';
                card.style.zIndex = '1';
            }
        });

        // Update Indicator Dots
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function goToIndex(index) {
        currentIndex = (index + totalCards) % totalCards;
        updateCarousel();
    }

    function next() {
        goToIndex(currentIndex + 1);
    }

    function prev() {
        goToIndex(currentIndex - 1);
    }

    // Left and Right Arrow Buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', prev);
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', next);
    }

    // Direct Click on any Card
    cards.forEach((card, index) => {
        const cardIndex = parseInt(card.getAttribute('data-index'), 10) ?? index;

        card.addEventListener('click', () => {
            goToIndex(cardIndex);
        });

        card.addEventListener('touchstart', () => {
            goToIndex(cardIndex);
        }, { passive: true });
    });

    // Dots Click Support
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToIndex(index);
        });
    });

    // Handle Resize
    window.addEventListener('resize', updateCarousel);

    // Initial positioning
    updateCarousel();
}

// Initial Render & Arc Carousel initialization
document.addEventListener('DOMContentLoaded', () => {
    initPillarsArcCarousel();
    updateFilterCounts();
    renderProjects('all');
});

// Run once immediately in case DOM is already ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initPillarsArcCarousel();
    updateFilterCounts();
    renderProjects('all');
}
