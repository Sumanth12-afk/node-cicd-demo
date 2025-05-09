📁 Repository Structure & File Purposes
1. .github/workflows/
Contains GitHub Actions workflow files that define automated processes triggered by repository events.

CI/CD Workflow: Automates tasks like testing, linting, building, Docker image creation, vulnerability scanning, and deployment upon code changes.

2. src/
Houses the application's source code.
GitHub

index.ts: Main entry point of the application.

3. k8s/
Contains Kubernetes manifests for deploying the application.

deployment.yaml: Defines the deployment configuration for Kubernetes.
GitHub
+5
GitHub
+5
reflectoring.io
+5

4. Configuration Files
.eslintrc.json: ESLint configuration for code quality and style enforcement.

babel.config.js: Babel configuration for transpiling TypeScript to JavaScript.

jest.config.js: Jest configuration for running unit tests.

tsconfig.json: TypeScript compiler options.

5. Project Metadata
package.json & package-lock.json: Define project metadata, scripts, and dependencies.

6. Dockerfile
Instructions to build a Docker image of the application.
reflectoring.io

7. .gitignore
Specifies files and directories to be ignored by Git.

8. README.md
Provides an overview of the project, setup instructions, and CI/CD pipeline details.

🛠️ Prerequisites
To work with this project locally, ensure the following are installed:

Node.js

npm

Docker
reflectoring.io
+1
The GitHub Blog
+1

Git

Kubernetes CLI (kubectl)

Trivy for vulnerability scanning

🚀 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/Sumanth12-afk/node-cicd-demo.git
cd node-cicd-demo
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run in Development Mode
bash
Copy
Edit
npm run dev
4. Run Tests
bash
Copy
Edit
npm test
5. Lint the Code
bash
Copy
Edit
npm run lint
6. Build the Application
bash
Copy
Edit
npm run build
⚙️ CI/CD Pipeline Overview
The CI/CD pipeline is configured to trigger on:

Pushes to the main branch

Pull requests targeting the main branch
GitHub

Pipeline Steps:
Checkout Code: Retrieve the latest code from the repository.

Install Dependencies: Run npm install to install project dependencies.

Linting: Execute ESLint to ensure code quality.

Testing: Run unit tests using Jest.
GitHub

Build: Compile TypeScript to JavaScript.
Medium
+2
Teco Tutorials
+2
GitHub
+2

Docker Image Creation: Build a Docker image of the application.
GitHub

Vulnerability Scanning: Use Trivy to scan the Docker image for vulnerabilities.
GitHub
+1
The GitHub Blog
+1

Push to GitHub Container Registry: Upload the Docker image to GitHub's Container Registry.

Deploy to Kubernetes: Apply Kubernetes manifests to deploy the application.

🔐 GitHub Secrets Configuration
To enable the CI/CD pipeline, set the following secrets in your GitHub repository:

GHCR_USERNAME: Your GitHub username.
GitHub
+1
LogRocket Blog
+1

GHCR_TOKEN: A GitHub Personal Access Token with write:packages and read:packages scopes.

KUBE_CONFIG: Base64-encoded Kubernetes configuration file content.

TRIVY_TOKEN: (Optional) Token for Trivy if required for private repositories.

📦 Docker Image Management
The Dockerfile defines the steps to build the application's Docker image. The CI/CD pipeline automates the building and pushing of this image to GitHub's Container Registry.
DEV Community

☸️ Kubernetes Deployment
The k8s/deployment.yaml file contains the Kubernetes deployment configuration. The CI/CD pipeline applies this configuration to update the application deployment in the Kubernetes cluster.

📄 Summary
This repository exemplifies a robust CI/CD setup for a Node.js microservice, integrating best practices for code quality, testing, containerization, security, and deployment. By leveraging GitHub Actions, Docker, Trivy, and Kubernetes, it provides an automated and efficient workflow for modern application development and deployment.

For more details, visit the repository: Sumanth12-afk/node-cicd-demo
