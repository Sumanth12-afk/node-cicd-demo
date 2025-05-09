Node.js CI/CD Demo
A modern Node.js microservice that demonstrates a complete CI/CD pipeline using GitHub Actions, Docker, and Kubernetes. This project showcases best practices in DevOps automation, including testing, linting, containerization, security scanning, and automated deployment.

🚀 Features
TypeScript-based Node.js microservice

Unit testing with Jest

Code quality checks using ESLint

Docker image creation and push to GitHub Container Registry (GHCR)

Security scanning with Trivy

Automated deployment to Kubernetes cluster

CI/CD pipeline powered by GitHub Actions
GitHub
DEV Community

📁 Project Structure
bash
Copy
Edit

node-cicd-demo/
├── .github/workflows/    # CI/CD workflows
├── k8s/                  # Kubernetes manifests
├── src/                  # Application source code
├── Dockerfile            # Docker build instructions
├── jest.config.js        # Jest configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project metadata and scripts
└── README.md             # Project documentation
🛠️ Technologies Used
Node.js

TypeScript

Jest

ESLint

Docker

GitHub Actions

Trivy

Kubernetes
DEV Community
+3
Teco Tutorials
+3
LogRocket Blog
+3
Medium
+2
Medium
+2
DEV Community
+2
GitHub
+1
LogRocket Blog
+1

⚙️ Getting Started
Prerequisites
Node.js (v14 or higher)

Docker

kubectl configured for your cluster

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Sumanth12-afk/node-cicd-demo.git
cd node-cicd-demo
Install dependencies:

bash
Copy
Edit
npm install
LogRocket Blog

Run the application in development mode:

bash
Copy
Edit
npm run dev
🧪 Running Tests and Linting
Run unit tests:

bash
Copy
Edit
npm test
Run ESLint:

bash
Copy
Edit
npm run lint
Build the application:

bash
Copy
Edit
npm run build
DEV Community
+4
Teco Tutorials
+4
LogRocket Blog
+4

🔄 CI/CD Pipeline Overview
The CI/CD pipeline is defined using GitHub Actions and is triggered on:
Teco Tutorials
+2
LogRocket Blog
+2
DEV Community
+2

Pushes to the main branch

Pull requests targeting the main branch
LogRocket Blog
+1
Teco Tutorials
+1

Pipeline Steps
Checkout Code: Retrieves the latest code from the repository.

Install Dependencies: Installs project dependencies using npm.

Linting: Checks code quality using ESLint.

Testing: Runs unit tests with Jest.

Build: Compiles TypeScript to JavaScript.

Docker Build: Builds a Docker image of the application.

Security Scan: Scans the Docker image for vulnerabilities using Trivy.

Push to GHCR: Pushes the Docker image to GitHub Container Registry.

Deploy to Kubernetes: Applies Kubernetes manifests to deploy the application.
GitHub
+1
GitHub
+1
Teco Tutorials

🐳 Docker Usage
Build Docker Image
bash
Copy
Edit
docker build -t ghcr.io/<your-username>/node-cicd-demo:latest .
Run Docker Container
bash
Copy
Edit
docker run -p 3000:3000 ghcr.io/<your-username>/node-cicd-demo:latest
☸️ Kubernetes Deployment
Kubernetes manifests are located in the k8s/ directory.

Apply Manifests
bash
Copy
Edit
kubectl apply -f k8s/
Check Deployment Status
bash
Copy
Edit
kubectl get pods
🔐 GitHub Secrets Configuration
To enable the CI/CD pipeline, set the following secrets in your GitHub repository:

GHCR_USERNAME: Your GitHub username.

GHCR_TOKEN: A GitHub Personal Access Token with write:packages scope.

KUBE_CONFIG: Base64-encoded Kubernetes config file content.
Teco Tutorials

🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.

Create a new branch: git checkout -b feature/your-feature-name.

Commit your changes: git commit -m 'Add your feature'.

Push to the branch: git push origin feature/your-feature-name.

Open a pull request.

📄 License
This project is licensed under the MIT License.

For more information, visit the GitHub repository.
