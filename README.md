🚀 Node CI/CD Demo
This project is a complete CI/CD demonstration for a Node.js application using GitHub Actions, Docker, and Kubernetes. It automates testing, linting, building, scanning, and deploying the app to a Kubernetes cluster.
________________________________________
📁 Folder Structure
bash
CopyEdit
node-cicd-demo/
├── .github/workflows/        # GitHub Actions workflows
│   └── main.yml              # CI/CD pipeline configuration
├── k8s/                      # Kubernetes manifests
│   └── deployment.yaml       # App deployment configuration
├── src/                      # Node.js source code
│   └── index.ts              # Entry point of the app
├── .eslintrc.json            # ESLint config
├── babel.config.js           # Babel transpiler config
├── jest.config.js            # Jest unit test config
├── tsconfig.json             # TypeScript config
├── Dockerfile                # Docker image definition
├── package.json              # Project dependencies & scripts
├── package-lock.json         # Dependency versions
└── README.md                 # Project documentation
________________________________________
✅ Features
•	GitHub Actions CI/CD pipeline
•	TypeScript + Babel for development
•	ESLint for code quality
•	Jest for unit testing
•	Docker containerization
•	Vulnerability scanning with Trivy
•	Kubernetes deployment via manifests
________________________________________
🔧 Prerequisites
Make sure you have these installed:
•	Node.js (v16+)
•	npm
•	Docker
•	Git
•	kubectl
•	Trivy
•	GitHub account with Actions enabled
________________________________________
🛠️ Setup Instructions
1. Clone the Repository
bash
CopyEdit
git clone https://github.com/Sumanth12-afk/node-cicd-demo.git
cd node-cicd-demo
2. Install Dependencies
bash
CopyEdit
npm install
3. Run the Application Locally
bash
CopyEdit
npm run dev
Visit http://localhost:3000 in your browser.
________________________________________
🧪 Testing & Linting
Run Tests
bash
CopyEdit
npm test
Lint the Code
bash
CopyEdit
npm run lint
________________________________________
🐳 Docker Commands
Build Docker Image
bash
CopyEdit
docker build -t node-cicd-demo .
Run Docker Container
bash
CopyEdit
docker run -p 3000:3000 node-cicd-demo
________________________________________
⚙️ GitHub Actions CI/CD
Triggered On
•	Push to main
•	Pull request to main
Pipeline Steps
1.	Checkout repository
2.	Install npm packages
3.	Lint the code
4.	Run unit tests
5.	Compile TypeScript
6.	Build Docker image
7.	Scan Docker image with Trivy
8.	Push image to GitHub Container Registry
9.	Deploy to Kubernetes via kubectl
________________________________________
🔐 GitHub Secrets (Required)
Secret Name	Description
GHCR_USERNAME	Your GitHub username
GHCR_TOKEN	Personal Access Token with write:packages permissions
KUBE_CONFIG	Base64 encoded contents of your Kubernetes ~/.kube/config
TRIVY_TOKEN	(Optional) Auth token if needed for Trivy
________________________________________
☸️ Kubernetes Deployment
To deploy manually:
bash
CopyEdit
kubectl apply -f k8s/deployment.yaml
________________________________________
📜 NPM Scripts
Script	Description
npm run dev	Start app in development mode
npm test	Run unit tests with Jest
npm run lint	Run ESLint for code quality check
npm run build	Compile TypeScript to JavaScript
________________________________________
📬 Support
Have a question or issue?
Open a GitHub Issue here: node-cicd-demo/issues

