Node.js Microservice with CI/CD Pipeline
This repository demonstrates a Node.js microservice integrated with a robust CI/CD pipeline using GitHub Actions. It encompasses best practices for development, testing, containerization, and deployment.

🧰 Features
TypeScript for type-safe development

Jest for unit testing

ESLint for code linting

Docker for containerization

GitHub Actions for CI/CD automation

Trivy for vulnerability scanning

Kubernetes manifests for deployment

📁 Project Structure
csharp
Copy
Edit
node-cicd-demo/
├── .github/
│   └── workflows/       # GitHub Actions workflows
├── k8s/                 # Kubernetes deployment manifests
├── src/                 # Source code
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore rules
├── Dockerfile           # Docker build instructions
├── README.md            # Project documentation
├── babel.config.js      # Babel configuration
├── jest.config.js       # Jest configuration
├── package.json         # NPM dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── yarn.lock            # Yarn lockfile
🚀 Getting Started
Prerequisites
Node.js installed

Docker installed

Yarn installed (optional, if using Yarn)

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Sumanth12-afk/node-cicd-demo.git
cd node-cicd-demo
Install dependencies:

Using NPM:

bash
Copy
Edit
npm install
Or using Yarn:

bash
Copy
Edit
yarn install
🧪 Development Workflow
Run in Development Mode
bash
Copy
Edit
npm run dev
Or with Yarn:

bash
Copy
Edit
yarn dev
Run Tests
bash
Copy
Edit
npm test
Or with Yarn:

bash
Copy
Edit
yarn test
Lint the Code
bash
Copy
Edit
npm run lint
Or with Yarn:

bash
Copy
Edit
yarn lint
Build the Application
bash
Copy
Edit
npm run build
Or with Yarn:

bash
Copy
Edit
yarn build
🐳 Dockerization
Build Docker Image
bash
Copy
Edit
docker build -t node-cicd-demo .
Run Docker Container
bash
Copy
Edit
docker run -p 3000:3000 node-cicd-demo
⚙️ CI/CD Pipeline with GitHub Actions
The CI/CD pipeline is defined in .github/workflows/ and includes the following steps:

Install Dependencies: Sets up the Node.js environment and installs project dependencies.

Lint: Runs ESLint to ensure code quality.

Test: Executes unit tests using Jest.

Build: Compiles the TypeScript code.

Docker Build & Push: Builds the Docker image and pushes it to GitHub Container Registry.

Security Scan: Uses Trivy to scan the Docker image for vulnerabilities.

Deploy to Kubernetes: Applies Kubernetes manifests to deploy the application.

Triggering the Pipeline
The pipeline is triggered on:

Push to the main branch

Pull requests targeting the main branch

☸️ Kubernetes Deployment
Kubernetes manifests are located in the k8s/ directory. To deploy the application:

Ensure you have access to a Kubernetes cluster.

Apply the manifests:

bash
Copy
Edit
kubectl apply -f k8s/


🙌 Acknowledgements
Node.js

TypeScript

Jest

ESLint

Docker

GitHub Actions

Trivy

Kubernetes
