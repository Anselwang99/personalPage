# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and Vite to showcase skills, experience, and projects.

![Portfolio Preview](screenshot.png)

## Features

-   🌟 Modern, responsive design
-   🎨 Fancy animations and transitions
-   📱 Mobile-friendly layout
-   📊 Animated skill bars
-   🔄 Interactive navigation
-   📝 Contact form
-   🌓 Smooth scrolling

## Technologies Used

-   React.js
-   Vite
-   CSS3
-   Font Awesome for icons
-   Google Fonts

## Getting Started

### Prerequisites

-   Node.js (v14.0.0 or later)
-   npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Anselwang99/personalPage.git
    cd personalPage
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn
    ```

3. Set up your EmailJS configuration:

    ```bash
    # Copy the template config file
    cp src/config.template.js src/config.js
    ```

    Then edit `src/config.js` with your actual EmailJS credentials.
    You'll need to sign up at [EmailJS](https://www.emailjs.com/) to get your service ID, template ID, and public key.

4. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open your browser and visit:
    ```
    http://localhost:5173
    ```

## Deployment

To build the app for production:

```bash
npm run build
# or
yarn build
```

This will generate a `dist` folder with all the optimized files ready for deployment.

## Customization

-   Replace placeholder content in component files with your personal information
-   Update project images in the `src/assets` directory
-   Modify styles in `App.css` to match your personal branding
-   Add additional sections or features as needed

## Project Structure

```
personalPage/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   ├── SkillBar.jsx
│   │   └── Skills.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

-   [React](https://reactjs.org/)
-   [Vite](https://vitejs.dev/)
-   [Font Awesome](https://fontawesome.com/)
-   [Google Fonts](https://fonts.google.com/)
