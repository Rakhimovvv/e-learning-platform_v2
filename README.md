# E-Learning Platform API

A comprehensive backend system for an online education platform, built with scalability and performance in mind.

## 🛠 Tech Stack
* **Backend:** Node.js with NestJS Framework
* **Database:** PostgreSQL
* **Containerization:** Docker & Docker Compose
* **Language:** TypeScript

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Clone the repository
```bash
git clone git@github.com:Rakhimovvv/e-learning-platform-v2.git
cd e-learning-platform-v2
2. Install Dependencies
Bash

npm install
# or if you prefer yarn
yarn install
3. Setup Infrastructure (Docker)
The project uses Docker to manage the PostgreSQL database. Run the following command to start the database container:

Bash

docker-compose up -d
4. Run the Application
Bash

# Development mode
npm run start:dev

# Production mode
npm run start:prod
🐳 Database Configuration
The docker-compose.yaml file is pre-configured with the following credentials:

User: admin

Password: mypassword

DB Name: elearning

Port: 5432

📂 Project Structure
src/ - Contains the source code (Modules, Controllers, Services).

docker-compose.yaml - Docker infrastructure configuration.

package.json - Project dependencies and scripts.

👤 Author
Ulugbek Rakhimov - GitHub Profile


---

### Buni qanday saqlash kerak?
1. VS Code-da `README.md` faylini oching.
2. Ichidagi hamma narsani o'chirib, mana shu inglizcha matnni joylang.
3. Saqlang (**Ctrl + S**).
4. Terminalda quyidagi buyruqlar bilan GitHub'ga yuboring:

```bash
git add README.md
git commit -m "docs: update README with professional english version"
git push origin main
