# SkillBridge: Premium Course Discovery and Enrolment Platform

> **Discover Your Potential. Build Your Future.**  
> An Academic Internship UX/UI Redesign & Frontend Engineering Project.

---

## 1. Project Overview

**SkillBridge** is a user-centred, high-conversion EdTech web platform engineered to solve the persistent drop-off problem encountered by online learners in India's technology education ecosystem. 

Designed for a fictional Bangalore-based upskilling academy, the platform modernizes course listing, discovery, information architecture, and the checkout funnel into a seamless, accessible SaaS experience.

---

## 2. Problem Statement

A Bangalore-based online upskilling academy operates a course listing and enrolment portal. While traffic volume is healthy, analytics revealed that **over 65% of aspiring learners abandon the platform before completing course discovery and enrolment**.

### Core Usability Pain Points Identified:
1. **Information Clutter & Lack of Transparency**: Course pages on traditional platforms bury syllabus specifics, prerequisites, and true costs beneath aggressive sales timers and unclear recurring subscription plans.
2. **Search & Filter Fatigue**: Users struggle to quickly narrow down courses by career level, duration, and specific technical tools.
3. **High-Friction Checkout Flows**: Excessive form fields, mandatory account verification steps before viewing prices, and multi-page checkouts cause high bounce rates.
4. **Accessibility & Linguistic Inequity**: Tech platforms rarely cater to low-vision learners or vernacular Indian language speakers who seek career acceleration.

---

## 3. Project Objectives

- **Effortless Discovery**: Provide instantaneous keyword search, multi-faceted filtering (categories, difficulty levels, pricing tiers, durations, ratings), and sorting.
- **Radical Information Clarity**: Deliver crystal-clear curriculum breakdowns with expandable module accordions, lesson durations, prerequisites, instructor credentials, and verified student feedback.
- **Frictionless 60-Second Enrolment**: Minimize form inputs to 4 essential fields with real-time validation, transparent ₹ pricing, and instant redirection to learning.
- **Persistent Student Hub**: Enable learners to track active progress, launch interactive simulated lessons, and generate verifiable completion certificates stored via browser `LocalStorage`.
- **Inclusive Design**: Implement a one-click **Low-Vision / High-Contrast Mode** and full bilingual **Hindi / English** translation support.

---

## 4. Key Features

| Feature | Description |
| :--- | :--- |
| **Bilingual Navigation & Content** | Instant English & Hindi switcher across navigation, landing page hero, categories, and course catalog. |
| **Low-Vision Accessibility Mode** | Dynamic 110% font scaling, high-contrast borders, boosted typography weights, and prominent focus rings adhering to WCAG 2.1 AA. |
| **Instant Multi-Faceted Catalog** | Real-time filtering by Category, Level, Price Range, Duration, and Rating with individual tag dismissal and "Reset All". |
| **Transparent Pricing** | Clear display in Indian Rupees (₹), original vs. discounted prices, and ₹0 demo voucher verification. |
| **Interactive Syllabus Accordion** | Expandable/collapsible modules with preview tags and duration badges. |
| **Single-Step Validated Checkout** | Client-side validation with helpful error alerts, phone number format checks (+91), and privacy commitments. |
| **Interactive Learning Dashboard** | Track enrolled courses, visual progress bars, interactive classroom modal with lesson progression, and completion certificates. |
| **LocalStorage Persistence** | Demo enrolments and learner progress persist across browser refreshes without requiring a backend database. |

---

## 5. Technology Stack

- **Frontend Core**: React 18+ (Functional Components & Hooks)
- **Tooling & Bundler**: Vite 6+
- **Styling**: Tailwind CSS 3.4+ (Custom design tokens matching brand guidelines)
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Animations & Micro-interactions**: `canvas-confetti`, Tailwind transition utilities
- **State Management**: React Context API (`LanguageContext`, `AccessibilityContext`, `EnrolmentContext`)
- **Data Persistence**: Browser `localStorage` API

---

## 6. Installation & Local Development Instructions

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or `npm.cmd` on Windows)

### Steps to Run

1. **Clone or navigate to the project directory**:
   ```bash
   cd c:/Users/Madhumithra/OneDrive/Desktop/SKILLBUILDER
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # On Windows systems with script restrictions:
   npm.cmd install
   ```

3. **Start the local Vite development server**:
   ```bash
   npm run dev
   # Or:
   npm.cmd run dev
   ```

4. **Open in your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) (or the port displayed in your terminal).

5. **Build for production**:
   ```bash
   npm run build
   # Or:
   npm.cmd run build
   ```

---

## 7. Demo Data & Persistence

The platform comes pre-seeded with **12 realistic courses** spanning Python, Full Stack Web Development, UI/UX Design, Data Analytics, AI/LLMs, Machine Learning, AWS Cloud & DevOps, Growth Marketing, Business Analytics, Cybersecurity, Product Management, and Brand Design.

Any new course enrolled via the `/enrol` flow will immediately reflect in the **My Learning** dashboard, where you can simulate classroom progression and download verified completion certificates.
