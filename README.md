
# Little Lemon Restaurant — Front-End (React)

A modern web application built with **React 19 + Vite** providing **Little Lemon** customers a complete digital experience including table reservations, interactive menu browsing, and online payments.

> **Live Demo:**  
> [https://lemon-front.netlify.app](https://lemon-front.netlify.app)

---

## Table of Contents

1. [Key Features](#key-features)  
2. [Search & Sorting Functionality](#search--sorting-functionality)  
3. [Screenshots](#screenshots)  
4. [Tech Stack](#tech-stack)  
5. [Installation & Usage](#installation--usage)  
6. [Project Structure](#project-structure)  
7. [Testing](#testing)  
8. [Continuous Deployment](#continuous-deployment)  
9. [Roadmap](#roadmap)  
10. [Contributing](#contributing)  
11. [License](#license)  
12. [Author](#author)

---

## Key Features

* **Table Reservation System** connected to the backend REST API (Django + simpleJWT) for real-time availability and booking.  
* **Responsive Design** with a mobile-first approach using Tailwind CSS and ShadCN UI.  
* **Dark/Light Theme Toggle** for improved accessibility and customization.  
* **Stripe Integration** for seamless and secure online payments.  
* **Accessibility (WCAG 2.1 AA)**: keyboard navigation, ARIA roles, and audit-tested UX.  
* **Modular Architecture** with reusable components and context API for state management.   
* **Automated Testing** using Jest and React Testing Library.  
* **CI/CD Pipeline** via Netlify + GitHub Actions.

---

## Search & Sorting Functionality

- **Search Bar:** Easily locate menu items or reservations by keywords (e.g., name, category).
- **Dynamic Sorting:** Sort items by price, alphabetical order.
- **Filters:** Filter by category.

---

## Tech Stack

| Category           | Stack                                     |
| ------------------ | ----------------------------------------- |
| Language           | JavaScript (ES2022)                       |
| Framework          | React 19.1 + Vite                         |
| Routing            | React Router DOM 7                        |
| State Management   | Context API + useReducer                  |
| API Requests       | Fetch                                     |
| Styling            | Tailwind CSS + ShadCN UI                  |
| Theming            | Dark/Light Mode Toggle                    |
| Payments           | Stripe API                                |
| Testing            | Jest, React Testing Library               |
| DevOps             | Netlify, GitHub Actions                   |
| Formatting         | ESLint, Prettier,                         |

---

## Installation & Usage

### Prerequisites

* **Node.js ≥ 20**  
* **npm ≥ 10** (or pnpm/yarn)

### Steps

```bash
git clone https://github.com/ludvin7x/lemon_front-end.git
cd lemon_front-end
npm install
node generateEnvFiles.js  # Configure API URL and Stripe keys
npm run dev
```

App will be available at: **http://localhost:5173**

---

## Roadmap

<details>
<summary><strong>Version History</strong></summary>

    ### ✅ v1.3.0 - Theming Support
    - Added Light/Dark mode toggle for enhanced accessibility.

    ### ✅ v1.2.0 - Stripe Payment Integration
    - Implemented Stripe integration for seamless and secure payments.
    - Created custom payment form with success/failure handling and validation.

    ### ✅ v1.1.0 - UI Migration to Tailwind + ShadCN
    - Replaced Bootstrap with Tailwind CSS and ShadCN components for a cleaner, more modern, and flexible design system.
    - Improved responsiveness and accessibility across all screen sizes.

    ### ✅ v1.0.0 - Full Release
    - Feature-complete launch with booking, menu browsing, and user interaction flows.

    ---

     #### 🚀 v0.6.0 – Performance & SEO
    - Optimize Core Web Vitals (LCP, FID, CLS) for speed and responsiveness.
    - Lazy load images and components.
    - Add structured metadata and improve SEO with semantic HTML.

    ### ✅ v0.5.0 - Core Infrastructure & User Management
    - Migrated frontend to React + Vite for fast builds and development.
    - Initialized Bootstrap framework for base UI consistency.
    - Developed user registration, login, and secure authentication flow.
    - Connected frontend to Django backend via REST API.

    ### ✅ v0.4.0 - Security & Detail Views
    - JWT-based authentication added for protected API access.
    - Created detailed view page for each menu item.

    """

</details>


## Contributing

1. Open an issue (`bug`, `enhancement`, `question`).  
2. Fork the repo → `git checkout -b feat/feature-name`  
3. Run tests → `npm test`  
4. Create a PR with clear description and link to issue.

---

## Author

Ludwing — [GitHub Profile](https://github.com/ludvin7x)