🚀 Node CI/CD Demo
This project is a complete CI/CD demonstration for a Node.js application using GitHub Actions, Docker, and Kubernetes. It automates testing, linting, building, scanning, and deploying the app to a Kubernetes cluster.

📁 Folder Structure
bash
Copy
Edit
node-cicd-demo/
├── .github/workflows/        # GitHub Actions for CI/CD
│   └── main.yml              # Main workflow file
├── k8s/                      # Kubernetes manifests
│   └── deployment.yaml       # Kubernetes deployment config
├── src/                      # Application source code
│   └── index.ts              # Main Node.js/Express file
├── .eslintrc.json            # ESLint configuration
├── babel.config.js           # Babel configuration for transpiling
├── jest.config.js            # Jest test configuration
├── tsconfig.json             # TypeScript compiler configuration
├── Dockerfile                # Docker image build instructions
├── package.json              # Node.js project metadata & scripts
├── package-lock.json         # Dependency lock file
└── README.md                 # Project documentation
✅ Features
CI/CD pipeline using GitHub Actions

Linting with ESLint

Unit testing with Jest

TypeScript support

Docker image build and push

Vulnerability scanning with Trivy

Kubernetes deployment via kubectl

🔧 Prerequisites
Make sure you have the following installed:

Node.js (v16+ recommended)

npm

Docker

Git

Kubernetes CLI (kubectl)

GitHub account and access to GitHub Actions

Trivy (for vulnerability scanning)

🔨 Local Setup
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
3. Run the App Locally
bash
Copy
Edit
npm run dev
App will start on http://localhost:3000

🧪 Testing & Linting
Run Tests
bash
Copy
Edit
npm test
Lint Code
bash
Copy
Edit
npm run lint
🐳 Docker Build & Run
Build Docker Image
bash
Copy
Edit
docker build -t node-cicd-demo .
Run Container
bash
Copy
Edit
docker run -p 3000:3000 node-cicd-demo
⚙️ CI/CD Pipeline Overview
The GitHub Actions workflow (.github/workflows/main.yml) is triggered on push or pull request to main.

Pipeline Steps:
Checkout Code

Install Dependencies

Linting

Unit Testing

Build (Transpile)

Docker Build

Trivy Scan

Push to GitHub Container Registry

Deploy to Kubernetes using kubectl

🔐 GitHub Secrets Required
Set the following secrets in your GitHub repo:

Secret Name	Description
GHCR_USERNAME	Your GitHub username
GHCR_TOKEN	GitHub PAT with write:packages permission
KUBE_CONFIG	Base64-encoded kubeconfig for your cluster
TRIVY_TOKEN	(Optional) Token for Trivy (if needed)

☸️ Kubernetes Deployment
To deploy manually:

bash
Copy
Edit
kubectl apply -f k8s/deployment.yaml
The deployment file includes configuration for replicas, container image, ports, and more.

📦 Scripts (from package.json)
Script	Description
dev	Start app using ts-node-dev
lint	Run ESLint
test	Run Jest unit tests
build	Compile TypeScript to JS

📞 Contact
For questions or support, please raise an issue in the repository.
