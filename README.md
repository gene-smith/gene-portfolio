# Gene Portfolio

[![Deploy to GitHub Pages](https://github.com/gene-smith/genesmith_gatsby2020/actions/workflows/deploy.yml/badge.svg)](https://github.com/gene-smith/genesmith_gatsby2020/actions/workflows/deploy.yml)

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a dynamic resume section powered by YAML data and automatic deployment to GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/gene-smith/genesmith_gatsby2020.git
   cd genesmith_gatsby2020
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview  # Preview the production build locally
```

## 📁 Project Structure

```
gene-portfolio/
├── public/
│   ├── resume.yaml          # Resume data (edit this!)
│   └── resume.pdf           # PDF version of resume
├── src/
│   ├── components/          # React components
│   ├── pages/              # Page components
│   ├── contexts/           # React contexts (theme, etc.)
│   ├── hooks/              # Custom React hooks
│   └── utils/              # Utility functions
├── .github/workflows/      # GitHub Actions for deployment
└── package.json
```

## Resume Data Management

This project includes a data-driven resume section that displays information stored in a YAML file. To update the resume information displayed in the application, follow these steps:

### Updating Resume Data

1. **Locate the `resume.yaml` file**:
   - The file is located in the `/public` directory: `public/resume.yaml`.

2. **Edit the YAML File**:
   - Open the `resume.yaml` file in a text editor.
   - Add or edit entries under the `experience`, `education`, `skills`, and `certifications` sections as needed.
   - Save the file.

Here's an example structure of the `resume.yaml`:

```yaml
experience:
  - position: "Senior Software Engineer"
    company: "TechCorp Solutions"
    duration: "Jan 2022 - Present"
    details: "Lead frontend development using React, TypeScript, and Tailwind CSS."

education:
  - degree: "Bachelor of Science in Computer Science"
    institution: "State University"
    duration: "2015 - 2019"

skills:
  - "JavaScript"
  - "React"
  - "Tailwind CSS"

certifications:
  - title: "AWS Certified Solutions Architect"
    issuer: "Amazon Web Services"
    year: "2023"
```

3. **Validate Your Changes** (Optional):
   - Run `npm run validate-resume` to check your YAML file for errors before testing.
   - This script will verify the structure and required fields.

4. **Run the Application**:
   - Ensure that your local development server is running with `npm run dev`.
   - Changes to the YAML file will be reflected automatically in the application.

### Troubleshooting

- **Fetching Errors**: Make sure the `resume.yaml` is correctly placed in the `/public` directory so it's accessible to the client-side application.
- **Invalid YAML**: Ensure that the YAML syntax is correct. Use online YAML validators or run `npm run validate-resume`.
- **Missing Fields**: The validation script will warn you about missing required fields like `position`, `company`, `duration` for experience entries.

## 🛠 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check for issues
- `npm run lint:fix` - Run ESLint and automatically fix issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted
- `npm run validate-resume` - Validate the resume.yaml file
- `npm run test` - Run unit tests in watch mode
- `npm run test:run` - Run unit tests once
- `npm run test:ui` - Run unit tests with UI
- `npm run deploy` - Deploy to GitHub Pages

### Code Quality

This project uses ESLint and Prettier for code quality and formatting:

- **ESLint**: Configured with React-specific rules and best practices
- **Prettier**: Ensures consistent code formatting across the project

Run `npm run lint` and `npm run format` before committing changes.

### Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **UI Components**: Headless UI, Heroicons, React Icons
- **Animation**: Framer Motion
- **Routing**: React Router DOM
- **Development**: ESLint, Prettier
- **Deployment**: GitHub Pages via GitHub Actions

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment**: Every push to the `main` branch triggers automatic deployment via GitHub Actions
2. **Manual Deployment**: Run `npm run deploy` to deploy manually
3. **Status**: Check the deployment status badge at the top of this README

### Deployment Configuration

- The site is deployed to: `https://gene-smith.github.io/genesmith_gatsby2020`
- GitHub Actions workflow: `.github/workflows/deploy.yml`
- Build output: `dist/` directory

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`npm run lint && npm run format:check`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
