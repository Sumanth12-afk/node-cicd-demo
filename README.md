# Node.js Microservice with CI/CD Pipeline

This is a Node.js microservice with a complete CI/CD pipeline using GitHub Actions.

## Pipeline Features

- Unit testing with Jest
- ESLint code quality checks
- TypeScript build
- Docker image creation and push to GitHub Container Registry
- Trivy vulnerability scanning
- Automatic Kubernetes deployment updates

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run in development mode:
```bash
npm run dev
```

3. Run tests:
```bash
npm test
```

4. Run linting:
```bash
npm run lint
```

5. Build the application:
```bash
npm run build
```

## CI/CD Pipeline

The pipeline is triggered on:
- Push to main branch
- Pull requests to main branch

### Pipeline Stages

1. **Test and Build**
   - Install dependencies
   - Run unit tests
   - Run ESLint checks
   - Build TypeScript code

2. **Docker**
   - Build Docker image
   - Push to GitHub Container Registry
   - Run Trivy vulnerability scan

3. **Deployment**
   - Update Kubernetes deployment with new image tag
   - Commit and push changes

## Configuration

Before using this pipeline:

1. Ensure your repository has access to GitHub Container Registry
2. Update the Kubernetes deployment file with your actual image name
3. Configure appropriate secrets in your GitHub repository settings
