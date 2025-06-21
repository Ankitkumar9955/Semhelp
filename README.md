# SemHelp - Study Materials Hub

A modern, responsive, and interactive website designed to help students find study materials, notes, and previous year questions (PYQs) for each subject, divided into units.

## 🌟 Features

### ✅ Core Features
- **Home Page**: Hero section with modern layout, new releases section, and year selection
- **Year-wise Navigation**: Organized content by academic years (1st, 2nd, 3rd, 4th)
- **Subject Pages**: Dedicated pages for each subject with unit-wise materials
- **PDF Integration**: Download/View functionality for study materials
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop

### 🎨 Design Features
- Modern UI with smooth animations and transitions
- CSS Grid and Flexbox for responsive layouts
- Inter font family for clean typography
- Font Awesome icons for visual appeal
- Hover effects and interactive elements

### 📱 Responsive Features
- Mobile-first approach
- Adaptive navigation menu
- Responsive card layouts
- Touch-friendly interactions

## 🗂 Project Structure

```
SemHelp/
├── index.html              # Homepage
├── year1.html              # 1st Year subjects
├── year2.html              # 2nd Year subjects
├── year3.html              # 3rd Year subjects
├── year4.html              # 4th Year subjects
├── subjects/               # Subject-specific pages
│   ├── mathematics.html    # (To be added)
│   ├── physics.html        # (To be added)
│   └── ...                 # (More subjects)
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # JavaScript functionality
├── assets/
│   └── images/            # Image assets
├── pdfs/                  # PDF study materials
│   ├── unit1.pdf          # (To be added)
│   ├── pyq_math_sem1.pdf  # (To be added)
│   └── ...                # (More PDFs)
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for PDF functionality)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Navigate through the website to explore different years and subjects

### For PDF Functionality
To enable PDF viewing/downloading:
1. Set up a local web server (e.g., Live Server in VS Code)
2. Place PDF files in the `pdfs/` folder
3. Update subject pages with correct PDF file paths

## 🎯 Usage

### Navigation Flow
1. **Home Page**: Select your academic year
2. **Year Page**: Choose your subject
3. **Subject Page**: Access unit-wise materials and PYQs
4. **Download/View**: Click on PDF links to access study materials

### Theme Switching
- Click the moon/sun icon in the top navigation
- Theme preference is saved in localStorage
- Works across all pages

### Mobile Navigation
- Hamburger menu for mobile devices
- Touch-friendly card interactions
- Responsive layouts for all screen sizes

## 🛠 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

### Key JavaScript Classes
- `ThemeManager`: Handles dark/light theme switching
- `MobileMenu`: Mobile navigation functionality
- `SmoothScroll`: Smooth scrolling for anchor links
- `ScrollAnimations`: Intersection Observer for animations
- `NavigationScroll`: Navbar scroll effects
- `PDFHandler`: PDF download/view functionality
- `SearchManager`: Search functionality (ready for backend integration)

### CSS Features
- CSS Custom Properties for theming
- CSS Grid for responsive layouts
- Flexbox for component layouts
- CSS Animations and Transitions
- Mobile-first responsive design

## 📋 To-Do List

### Immediate Tasks
- [ ] Add subject-specific pages (mathematics.html, physics.html, etc.)
- [ ] Create PDF files for study materials
- [ ] Add actual content for each subject
- [ ] Implement search functionality with backend

### Future Enhancements
- [ ] Backend integration for dynamic content
- [ ] User authentication system
- [ ] Progress tracking for students
- [ ] Discussion forum
- [ ] Mobile app version
- [ ] Admin panel for content management

## 🎨 Customization

### Adding New Subjects
1. Create a new HTML file in the `subjects/` folder
2. Follow the existing subject page structure
3. Add PDF files to the `pdfs/` folder
4. Update navigation links

### Modifying Styles
- Edit `css/style.css` for visual changes
- CSS variables are defined at the top for easy theming
- Responsive breakpoints are clearly marked

### Adding JavaScript Features
- Extend existing classes in `js/script.js`
- Follow the modular class-based architecture
- Add new functionality while maintaining existing features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For support or questions:
- Email: info@semhelp.com
- Phone: +91 1234567890

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Modern CSS techniques and best practices
- Responsive design principles

---

**SemHelp** - Empowering students with quality study materials and resources. 📚✨ 