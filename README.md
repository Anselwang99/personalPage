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
    # Copy the template environment file
    cp .env.local.example .env.local
    ```

    Then edit `.env.local` with your actual EmailJS credentials.
    You'll need to sign up at [EmailJS](https://www.emailjs.com/) to get your service ID, template ID, and public key.

    ```
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

    Alternatively, you can still use the config file approach:

    ```bash
    # Copy the template config file
    cp src/config.template.js src/config.js
    ```

    Then edit `src/config.js` with your actual EmailJS credentials.

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

## Deployment

### GitHub Actions

This project is set up with GitHub Actions for automatic deployment to GitHub Pages. The workflow file is located at `.github/workflows/deploy.yml`.

To set up GitHub Actions deployment:

1. Add the following secrets to your GitHub repository settings:

    - `EMAILJS_SERVICE_ID`: Your EmailJS service ID
    - `EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
    - `EMAILJS_PUBLIC_KEY`: Your EmailJS public key

2. Push your changes to the `main` branch to trigger the deployment workflow.

The GitHub Actions workflow will:

1. Check out the code
2. Create an environment file with your EmailJS credentials
3. Install dependencies
4. Build the project
5. Deploy to GitHub Pages

### Manual Deployment

You can deploy the site manually:

```bash
# Build the production version
npm run build

# Deploy to a hosting service of your choice
# The build output will be in the 'dist' directory
```

### Docker Deployment to Google Cloud Run

This project is also set up for containerized deployment to Google Cloud Run:

1. Authenticate with Google Cloud:

    ```bash
    gcloud auth login
    ```

2. Configure Docker to use Google Cloud credentials:

    ```bash
    gcloud auth configure-docker gcr.io
    ```

3. Build and push the Docker image:

    ```bash
    docker build -t gcr.io/YOUR_PROJECT_ID/personal-portfolio:latest .
    docker push gcr.io/YOUR_PROJECT_ID/personal-portfolio:latest
    ```

4. Deploy to Google Cloud Run:
    ```bash
    gcloud run deploy personal-portfolio \
      --image gcr.io/YOUR_PROJECT_ID/personal-portfolio:latest \
      --platform managed \
      --region us-central1 \
      --allow-unauthenticated
    ```

For automated deployments, check the GitHub workflow file at `.github/workflows/google-cloud-run.yml`.

## License

MIT License - see LICENSE file for details.
