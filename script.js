// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.themeToggle = document.getElementById('theme-toggle');
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupEventListeners();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        this.updateThemeIcon();
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
    }

    updateThemeIcon() {
        const icon = this.themeToggle.querySelector('i');
        if (this.theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    setupEventListeners() {
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }
}

// Mobile Menu Management
class MobileMenu {
    constructor() {
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.navMenu = document.querySelector('.nav-menu');
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.mobileMenuBtn.addEventListener('click', () => {
            this.toggleMenu();
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navMenu.contains(e.target) && !this.mobileMenuBtn.contains(e.target)) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.mobileMenuBtn.classList.toggle('active');
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.mobileMenuBtn.classList.remove('active');
    }
}

// Smooth Scrolling
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Animation on Scroll
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.release-card, .year-card').forEach(el => {
            observer.observe(el);
        });
    }
}

// Navigation Scroll Effect
class NavigationScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }

    handleScroll() {
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 100) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }
}

// Utility Functions
class Utils {
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static formatDate(date) {
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) return 'Added today';
        if (diffDays === 2) return 'Added yesterday';
        if (diffDays < 7) return `Added ${diffDays} days ago`;
        if (diffDays < 30) return `Added ${Math.floor(diffDays / 7)} weeks ago`;
        return `Added ${Math.floor(diffDays / 30)} months ago`;
    }
}

// PDF Viewer/Download Handler
class PDFHandler {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('pdf-download') || 
                e.target.closest('.pdf-download')) {
                e.preventDefault();
                this.handlePDFAction(e.target.closest('.pdf-download'));
            }
        });
    }

    handlePDFAction(element) {
        const pdfPath = element.getAttribute('data-pdf');
        const action = element.getAttribute('data-action') || 'download';
        
        if (action === 'view') {
            this.openPDF(pdfPath);
        } else {
            this.downloadPDF(pdfPath);
        }
    }

    openPDF(pdfPath) {
        window.open(pdfPath, '_blank');
    }

    downloadPDF(pdfPath) {
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = pdfPath.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Search Functionality
class SearchManager {
    constructor() {
        this.searchInput = document.querySelector('.search-input');
        this.searchResults = document.querySelector('.search-results');
        this.init();
    }

    init() {
        if (this.searchInput) {
            this.setupEventListeners();
        }
    }

    setupEventListeners() {
        this.searchInput.addEventListener('input', Utils.debounce((e) => {
            this.handleSearch(e.target.value);
        }, 300));
    }

    handleSearch(query) {
        if (query.length < 2) {
            this.hideResults();
            return;
        }

        // Simulate search results (in real app, this would be API call)
        const results = this.searchContent(query);
        this.displayResults(results);
    }

    searchContent(query) {
        // This would be replaced with actual search logic
        const mockResults = [
            { title: 'Mathematics Unit 1', type: 'Notes', year: '1st Year' },
            { title: 'Physics PYQs 2023', type: 'PYQs', year: '2nd Year' },
            { title: 'Computer Science Lab Manual', type: 'Lab Manual', year: '3rd Year' }
        ];

        return mockResults.filter(result => 
            result.title.toLowerCase().includes(query.toLowerCase())
        );
    }

    displayResults(results) {
        if (!this.searchResults) return;

        this.searchResults.innerHTML = '';
        
        if (results.length === 0) {
            this.searchResults.innerHTML = '<div class="no-results">No results found</div>';
        } else {
            results.forEach(result => {
                const resultElement = document.createElement('div');
                resultElement.className = 'search-result-item';
                resultElement.innerHTML = `
                    <h4>${result.title}</h4>
                    <p>${result.type} • ${result.year}</p>
                `;
                this.searchResults.appendChild(resultElement);
            });
        }

        this.searchResults.style.display = 'block';
    }

    hideResults() {
        if (this.searchResults) {
            this.searchResults.style.display = 'none';
        }
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme manager
    new ThemeManager();
    
    // Initialize mobile menu
    new MobileMenu();
    
    // Initialize smooth scrolling
    new SmoothScroll();
    
    // Initialize scroll animations
    new ScrollAnimations();
    
    // Initialize navigation scroll effect
    new NavigationScroll();
    
    // Initialize PDF handler
    new PDFHandler();
    
    // Initialize search functionality
    new SearchManager();

    // Add loading animation
    document.body.classList.add('loaded');
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .navbar.scrolled {
        background: var(--nav-bg);
        box-shadow: var(--shadow);
    }

    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--nav-bg);
        padding: 20px;
        border-top: 1px solid var(--border);
        box-shadow: var(--shadow);
    }

    .mobile-menu-btn.active i {
        transform: rotate(90deg);
    }

    .mobile-menu-btn i {
        transition: transform 0.3s ease;
    }

    body.loaded {
        opacity: 1;
    }

    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .search-results {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--card-bg);
        border: 1px solid var(--border);
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        max-height: 300px;
        overflow-y: auto;
        display: none;
        z-index: 1000;
    }

    .search-result-item {
        padding: 15px;
        border-bottom: 1px solid var(--border);
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .search-result-item:hover {
        background: var(--surface);
    }

    .search-result-item:last-child {
        border-bottom: none;
    }

    .search-result-item h4 {
        margin: 0 0 5px 0;
        color: var(--text-primary);
    }

    .search-result-item p {
        margin: 0;
        color: var(--text-secondary);
        font-size: 0.9rem;
    }

    .no-results {
        padding: 20px;
        text-align: center;
        color: var(--text-secondary);
    }
`;
document.head.appendChild(style); 