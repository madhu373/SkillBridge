# SkillBridge Project Structure & Architecture

This document outlines the directory structure, code organization, and functional responsibilities of all modules within the SkillBridge codebase.

```
SKILLBUILDER/
├── docs/                               # Academic & Portfolio Documentation
│   ├── README.md                       # Executive summary, features, and setup guide
│   ├── DESIGN_SYSTEM.md                # Color tokens, typography, elevation, and accessibility
│   ├── PROJECT_STRUCTURE.md            # Directory map and file responsibilities (this file)
│   └── UX_RESEARCH.md                  # UX research methodology, competitor audits, and survey templates
│
├── public/                             # Static public assets and icons
│
├── src/                                # Main Application Source Code
│   ├── components/                     # Modular Reusable UI Components
│   │   ├── Badge.jsx                   # Reusable status, difficulty, and category chip
│   │   ├── CertificateModal.jsx        # Verifiable completion certificate modal with print/PDF support
│   │   ├── CourseCard.jsx              # Course thumbnail, tags, pricing, and action buttons
│   │   ├── FilterSidebar.jsx           # Multi-faceted filter sidebar (categories, levels, price, duration, rating)
│   │   ├── Footer.jsx                  # Global footer with Bangalore hub contact and platform links
│   │   ├── LessonModal.jsx             # Interactive virtual classroom modal with lesson progression
│   │   ├── Modal.jsx                   # Accessible dialog overlay with escape key and focus trap
│   │   ├── Navbar.jsx                  # Top navigation, language switcher, low-vision toggle, and learner profile
│   │   ├── ProgressBar.jsx             # Accessible animated completion progress bar
│   │   ├── RatingStars.jsx             # 5-star rating display with numerical score and count
│   │   └── SearchBar.jsx               # Instant keyword search input with quick suggestion chips
│   │
│   ├── context/                        # React Context State Providers
│   │   ├── AccessibilityContext.jsx    # Manages low-vision / high-contrast view toggle and class persistence
│   │   ├── EnrolmentContext.jsx        # Manages course enrolments, progress tracking, and LocalStorage sync
│   │   └── LanguageContext.jsx         # Manages English / Hindi language toggle and translation lookups
│   │
│   ├── data/                           # Data Models & Localization Dictionaries
│   │   ├── coursesData.js              # 12 detailed realistic courses with curriculums, instructors, and reviews
│   │   └── translations.js             # Comprehensive English and Hindi translation dictionaries
│   │
│   ├── pages/                          # Application Route Views
│   │   ├── AboutUsPage.jsx             # Academic case study background, pedagogy, and Bangalore hub context
│   │   ├── CourseDetailsPage.jsx       # Course syllabus accordion, pricing, instructor spotlight, and sticky sidebar
│   │   ├── EnrolmentConfirmationPage.jsx # Celebration screen, order ID, enrolled summary, and dashboard redirect
│   │   ├── EnrolmentPage.jsx           # Single-step checkout with real-time validation and ₹ pricing summary
│   │   ├── ExploreCoursesPage.jsx      # Course discovery portal with live search, filters, sorting, and empty state
│   │   ├── HomePage.jsx                # Landing page: hero, search, categories, featured tracks, why us, reviews, CTA
│   │   └── MyLearningPage.jsx          # Learner dashboard: KPI metrics, in-progress tracks, and certificates
│   │
│   ├── App.jsx                         # Main router setup, context nesting, and scroll restoration
│   ├── index.css                       # Tailwind base, accessibility overrides, and custom scrollbars
│   └── main.jsx                        # React root entry point
│
├── index.html                          # HTML shell with Google Fonts (Poppins & Inter)
├── package.json                        # Dependencies, scripts, and package metadata
├── postcss.config.js                   # PostCSS pipeline configuration
├── tailwind.config.js                  # Tailwind theme customizations (colors, fonts, shadows)
└── vite.config.js                      # Vite development and build configuration
```

---

## Component & State Flow

```
                      ┌──────────────────────┐
                      │     BrowserRouter    │
                      └──────────┬───────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
│ LanguageProvider │   │ AccessibilityCtx │   │ EnrolmentContext │
└────────┬─────────┘   └────────┬─────────┘   └────────┬─────────┘
         │                      │                      │
         └──────────────────────┼──────────────────────┘
                                │
                      ┌─────────▼─────────┐
                      │    Navbar & App   │
                      └─────────┬─────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        ▼                       ▼                       ▼
 ┌──────────────┐        ┌──────────────┐        ┌──────────────┐
 │   HomePage   │        │ExploreCourses│        │CourseDetails │
 └──────────────┘        └──────┬───────┘        └──────┬───────┘
                                │                       │
                                ▼                       ▼
                        ┌──────────────┐        ┌──────────────┐
                        │ EnrolmentPage│───────►│ Confirmation │
                        └──────────────┘        └───────┬──────┘
                                                        │
                                                        ▼
                                                ┌──────────────┐
                                                │  MyLearning  │
                                                └──────────────┘
```

---

## Data Schema & Persistence Model

### Course Object Schema (`COURSES_DATA`):
- `id` (String): Unique URL slug (e.g., `"python-programming-mastery"`)
- `title` (String): Full course program title
- `subtitle` (String): Value-driven one-sentence description
- `category` (String): Technology, Data Science, Business, Design, Marketing, Cloud Computing
- `level` (String): Beginner, Intermediate, Advanced
- `duration` (String): Course length (e.g., `"8 Weeks"`)
- `totalHours` (String): Total contact hours (e.g., `"42 Hours"`)
- `rating` (Number): Float rating (e.g., `4.8`)
- `reviewCount` (Number): Number of verified learner reviews
- `price` (Number): Current discounted price in INR
- `originalPrice` (Number): Original reference price in INR
- `thumbnail` (String): High-resolution imagery URL
- `instructor` (Object): `{ name, role, experience, avatar, bio, rating, studentsCount }`
- `learningOutcomes` (Array of Strings): Key bullet takeaways
- `curriculum` (Array of Module Objects): Each with `module`, `duration`, and `lessons` (`title`, `duration`, `preview`)
- `requirements` (Array of Strings): Prerequisites for students
- `reviews` (Array of Review Objects): Verified student comments with avatar, role, and star rating

### Enrolment Record Schema (`localStorage` key: `'skillbridge_enrolments'`):
- `enrolmentId` (String): Formatted order ID (e.g. `"SB-2026-7841"`)
- `courseId` (String): Reference to course ID
- `courseTitle` (String): Course name for quick display
- `enrolledAt` (ISO Timestamp): Time of registration
- `progress` (Number): Percentage (0 to 100)
- `completedLessons` (Number): Count of finished lessons
- `totalLessons` (Number): Total lessons in course
- `lastAccessed` (String): Recency string (e.g., `"Today"`, `"Just now"`)
- `learner` (Object): `{ fullName, email, phone, qualification }`
