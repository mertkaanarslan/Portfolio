# Mert Kaan Arslan - Portfolio Website

Modern, responsive portfolio website showcasing my work as an Instructional Technology Specialist & Educator.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Bilingual Support**: English and Turkish language toggle
- **Smooth Animations**: Engaging scroll animations and transitions
- **Modern UI**: Clean and professional design with gradient accents
- **Interactive Elements**: Animated skill bars, hover effects, and smooth scrolling

## 📁 Project Structure

```
portfolio/
├── index.html      # Main HTML file
├── style.css       # Stylesheet
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons

## 📦 Installation & Setup

### Option 1: Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

### Option 2: GitHub Pages Deployment

#### Step 1: Create a New Repository on GitHub

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio` or `mertkaan-portfolio`)
5. Make it **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

#### Step 2: Upload Files to GitHub

**Using GitHub Web Interface:**

1. In your new repository, click "uploading an existing file"
2. Drag and drop all files from the `portfolio` folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md` (optional)
3. Add a commit message (e.g., "Initial portfolio upload")
4. Click "Commit changes"

**Using Git Command Line:**

```bash
# Navigate to the portfolio folder
cd portfolio

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section (in the left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"
7. Wait a few minutes for GitHub to build your site
8. Your site will be available at: `https://YOUR_USERNAME.github.io/REPO_NAME/`

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --primary-color: #6366f1;    /* Change this */
    --secondary-color: #8b5cf6;  /* Change this */
    /* ... other variables */
}
```

### Updating Content

- **Personal Information**: Edit the HTML in `index.html`
- **Skills**: Modify the skill items in the Skills section
- **Projects**: Update project cards in the Projects section
- **Experience**: Edit timeline items in the Experience section
- **Education**: Update education cards in the Education section

### Adding Your Photo

Replace the profile placeholder:

1. Add your image to the portfolio folder (e.g., `profile.jpg`)
2. In `index.html`, find the `.profile-placeholder` div
3. Replace it with:
```html
<img src="profile.jpg" alt="Your Name" class="profile-image">
```
4. Add CSS for `.profile-image` in `style.css`:
```css
.profile-image {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: var(--shadow-lg);
}
```

## 📧 Contact Form

The contact form is currently set up as a demo. To make it functional:

1. Set up a backend service (e.g., Formspree, EmailJS, or your own server)
2. Update the form submission handler in `script.js`
3. Add your API endpoint or service configuration

**Example with EmailJS:**

```javascript
// Install EmailJS: npm install @emailjs/browser
import emailjs from '@emailjs/browser';

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
        await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm);
        alert('Message sent successfully!');
        contactForm.reset();
    } catch (error) {
        alert('Error sending message. Please try again.');
    }
});
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mert Kaan Arslan**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- Email: [Your Email]

## 🙏 Acknowledgments

- Font Awesome for icons
- Modern CSS techniques and best practices
- Responsive design principles

---

**Note**: Remember to update all placeholder content with your actual information before deploying!

