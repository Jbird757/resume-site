# The About Me of a Website About Me

> **AI Disclosure:** The July 2026 application modernization, framework upgrades, AWS security hardening, architectural review, and documentation were performed collaboratively using **AI pair programming** (Google DeepMind Antigravity).

Welcome to the behind-the-scenes look at my personal portfolio and resume website. 

The site is built with **React 19** and **Vite 5**, styled using **Bootstrap 5**, and deployed serverlessly to **AWS (S3 + CloudFront)** via **Terraform** and **GitHub Actions** CI/CD pipelines.

---

## 🚀 2026 Modernization Update

In July 2026, the application underwent a comprehensive modernization effort:

* **Build Tooling (CRA → Vite 5):** Migrated from deprecated Create React App (`react-scripts`) to **Vite 5**, dropping production build times from ~15s down to **1.15s** (92% faster) and enabling instant Hot Module Replacement (HMR).
* **React 19 & React Router 7 Upgrade:** Upgraded core UI dependencies to **React 19** and **React Router 7**, fixing dependency security advisories.
* **Node 22 LTS & Terraform 1.9:** Updated environment runtime and CI/CD pipelines to **Node 22 LTS**, **Terraform 1.9.8**, and **AWS Provider `~> 5.80.0`**.
* **Data Decoupling Layer:** Separated raw content from UI components into clean JSON data files ([src/data/resume.json](file:///Users/jay/Documents/repos/resume-site/src/data/resume.json) and [src/data/projects.json](file:///Users/jay/Documents/repos/resume-site/src/data/projects.json)).
* **98% CSS Purge:** Stripped 11,500+ duplicate framework rules from [App.css](file:///Users/jay/Documents/repos/resume-site/src/App.css), shrinking custom stylesheet size from 253 KB down to 4 KB.
* **AWS Security Hardening:** 
  * Enforced explicit **S3 Bucket Public Access Block** (`aws_s3_bucket_public_access_block`).
  * Injected **CloudFront HTTP Security Headers** (`Strict-Transport-Security`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`).
  * Automated **CloudFront CDN Cache Invalidation** (`aws cloudfront create-invalidation`) in GitHub Actions.
  * Expanded geographic distribution whitelist across North America, East Asia, and Western Europe.
* **AI-Assisted Engineering & Documentation:** The 2026 modernization refactoring, framework upgrades, security/architecture audits ([REPOSITORY_REVIEW.md](file:///Users/jay/Documents/repos/resume-site/REPOSITORY_REVIEW.md)), and documentation were completed collaboratively using **AI pair programming** (Google DeepMind's Antigravity agentic coding assistant).

---

## 🛠️ Local Development & Scripts

### Prerequisites
* **Node.js:** `v22.x` (managed via `nvm`)
* **Terraform:** `v1.9.8` (managed via `tfenv`)
* **AWS CLI:** `v2.x`

### Available Commands

* **`npm start`** or **`npm run dev`**: Launches Vite dev server at [http://localhost:3000](http://localhost:3000) with instant HMR.
* **`npm test`**: Runs the Vitest test suite (15 unit & integration tests).
* **`npm run test:coverage`**: Runs Vitest with v8 code coverage reporting.
* **`npm run build`**: Compiles production static bundle to `./build` in ~1s.
* **`npm run preview`**: Serves the compiled production build locally for verification.

### Infrastructure & AWS Resource Management

```bash
cd terraform
terraform init
terraform plan
```

---

## 📄 Repository Reports

Detailed architectural, security, and dependency audit reports are maintained in [REPOSITORY_REVIEW.md](file:///Users/jay/Documents/repos/resume-site/REPOSITORY_REVIEW.md).
