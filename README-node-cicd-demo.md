# 🚀 Node.js Microservice with CI/CD Pipeline

This repository demonstrates a Node.js microservice integrated with a robust CI/CD pipeline using GitHub Actions. It encompasses best practices for development, testing, containerization, security scanning, and deployment.

---

## 📦 Features

- ✅ **Unit Testing** with [Jest](https://jestjs.io/)
- 🧹 **Code Quality Checks** using [ESLint](https://eslint.org/)
- 🛠️ **TypeScript Compilation**
- 🐳 **Docker Image Creation** and push to GitHub Container Registry
- 🔍 **Security Scanning** with [Trivy](https://aquasecurity.github.io/trivy/)
- ☸️ **Automated Kubernetes Deployment Updates**

---

## 🛠️ Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run in Development Mode**
   ```bash
   npm run dev
   ```

3. **Execute Tests**
   ```bash
   npm test
   ```

4. **Lint the Codebase**
   ```bash
   npm run lint
   ```

5. **Build the Application**
   ```bash
   npm run build
   ```

---

## ⚙️ CI/CD Pipeline Overview

The CI/CD pipeline is configured using GitHub Actions and is triggered on:

- Push events to the `main` branch
- Pull requests targeting the `main` branch

### Pipeline Steps:

1. **Checkout Code**: Retrieves the latest code from the repository.
2. **Set Up Node.js Environment**: Configures the Node.js version for the workflow.
3. **Install Dependencies**: Installs project dependencies using `npm`.
4. **Run Linting**: Checks code quality using ESLint.
5. **Execute Tests**: Runs unit tests with Jest.
6. **Build Project**: Compiles TypeScript to JavaScript.
7. **Build Docker Image**: Creates a Docker image of the application.
8. **Push to GitHub Container Registry**: Uploads the Docker image to GHCR.
9. **Security Scan with Trivy**: Scans the Docker image for vulnerabilities.
10. **Deploy to Kubernetes**: Updates the Kubernetes deployment with the new image.

---

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── cicd.yml          # GitHub Actions workflow file
├── k8s/                      # Kubernetes deployment manifests
├── src/                      # Source code directory
├── .eslintrc.json            # ESLint configuration
├── Dockerfile                # Docker configuration
├── jest.config.js            # Jest configuration
├── package.json              # Project metadata and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

---

## 🔐 Secrets Configuration

To enable the CI/CD pipeline, set the following secrets in your GitHub repository:

- `GHCR_USERNAME`: Your GitHub Container Registry username.
- `GHCR_TOKEN`: A personal access token with `write:packages` scope.
- `KUBE_CONFIG`: Base64-encoded Kubernetes configuration file for deployment access.

---

## 🧪 Testing

The project utilizes [Jest](https://jestjs.io/) for unit testing. Tests are located in the `src/` directory alongside the code they test. To run tests:

```bash
npm test
```

---

## 🐳 Docker

The `Dockerfile` is configured to:

- Use an official Node.js base image.
- Set the working directory.
- Copy project files.
- Install dependencies.
- Build the application.
- Expose the application port.
- Define the default command to run the app.

To build and run the Docker image locally:

```bash
docker build -t node-cicd-demo .
docker run -p 3000:3000 node-cicd-demo
```

---

## ☸️ Kubernetes Deployment

Kubernetes manifests are located in the `k8s/` directory. The deployment is configured to pull the latest Docker image from GitHub Container Registry. Ensure your Kubernetes cluster is configured to authenticate with GHCR.

To apply the Kubernetes manifests:

```bash
kubectl apply -f k8s/
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Contact

For questions or support, please open an issue in this repository or contact [Sumanth12-afk](https://github.com/Sumanth12-afk).