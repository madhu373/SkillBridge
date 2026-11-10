export const COURSES_DATA = [
  {
    id: "python-programming-mastery",
    title: "Python Programming: Zero to Production Ready",
    subtitle: "Master core programming concepts, data structures, OOP, and real-world backend automation.",
    category: "Technology",
    topic: "Python Programming",
    level: "Beginner",
    duration: "8 Weeks",
    totalHours: "42 Hours",
    rating: 4.8,
    reviewCount: 2410,
    enrolledCount: 9480,
    price: 2499,
    originalPrice: 5999,
    featured: true,
    badge: "Bestseller",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    instructor: {
      name: "Dr. Arvind Ramanathan",
      role: "Principal Software Architect & Python Evangelist",
      experience: "14+ Years in Bengaluru Tech Hub",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      bio: "Former Tech Lead at Cisco Bengaluru and active open-source contributor. Arvind has trained over 15,000 engineers in algorithmic problem-solving and clean code.",
      rating: 4.9,
      studentsCount: 28000
    },
    learningOutcomes: [
      "Write clean, idiomatic Python code adhering to PEP 8 standards",
      "Master object-oriented programming (OOP), inheritance, and polymorphism",
      "Work with files, JSON, REST APIs, and external libraries",
      "Build automated data processing pipelines and CLI tools",
      "Implement error handling, logging, and unit testing with pytest",
      "Deploy your first production-ready web application using FastAPI"
    ],
    requirements: [
      "No prior coding experience required; basic computer literacy is sufficient",
      "A laptop or desktop (Windows, Mac, or Linux) with internet connection",
      "Willingness to spend 4-5 hours weekly on hands-on coding exercises"
    ],
    curriculum: [
      {
        module: "Module 1: Foundations & Pythonic Syntax",
        duration: "6 Hours",
        lessons: [
          { title: "Setting up Python 3.12, VS Code & Virtual Environments", duration: "35 mins", preview: true },
          { title: "Variables, Primitive Types and Memory Model", duration: "45 mins", preview: true },
          { title: "Control Flow: Conditionals and Advanced Loops", duration: "50 mins", preview: false },
          { title: "Functions, Scope, and Lambda Expressions", duration: "55 mins", preview: false }
        ]
      },
      {
        module: "Module 2: Data Structures & Algorithms Primer",
        duration: "8 Hours",
        lessons: [
          { title: "Lists, Tuples, Dictionaries and Sets in Depth", duration: "60 mins", preview: false },
          { title: "List Comprehensions & Generator Expressions", duration: "40 mins", preview: false },
          { title: "Working with Built-in Collections & Itertools", duration: "50 mins", preview: false },
          { title: "Hands-on Project: Log File Parser & Aggregator", duration: "90 mins", preview: false }
        ]
      },
      {
        module: "Module 3: Object-Oriented Programming (OOP)",
        duration: "10 Hours",
        lessons: [
          { title: "Classes, Objects, Attributes and Methods", duration: "55 mins", preview: false },
          { title: "Encapsulation, Properties, and Dunder Methods", duration: "65 mins", preview: false },
          { title: "Inheritance, Abstract Classes, and Composition", duration: "70 mins", preview: false },
          { title: "Capstone Milestone: Building a Banking Ledger System", duration: "110 mins", preview: false }
        ]
      },
      {
        module: "Module 4: Real-World APIs, Testing & Deployment",
        duration: "18 Hours",
        lessons: [
          { title: "REST APIs with Requests and JSON Serialization", duration: "60 mins", preview: false },
          { title: "Unit Testing with Pytest and Mocking", duration: "75 mins", preview: false },
          { title: "FastAPI Microservice from Scratch", duration: "120 mins", preview: false },
          { title: "Dockerizing & Deploying to Cloud", duration: "90 mins", preview: false }
        ]
      }
    ],
    reviews: [
      {
        id: "r1",
        author: "Pooja Hegde",
        role: "B.Tech CSE Student, RVCE Bengaluru",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "2 weeks ago",
        comment: "The transition from basics to building real FastAPI microservices was incredibly smooth. Best Python course for Indian college students preparing for campus placements."
      },
      {
        id: "r2",
        author: "Karthik Subramanian",
        role: "QA Engineer looking to transition to Dev",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "1 month ago",
        comment: "Dr. Arvind's explanations of OOP and memory management cleared up concepts I struggled with for years. The projects are actually resume-worthy."
      }
    ]
  },
  {
    id: "uiux-design-systems-figma",
    title: "UI/UX Design & Design Systems in Figma",
    subtitle: "From user research and wireframing to high-fidelity prototyping and scalable design systems.",
    category: "Design",
    topic: "UI/UX Design",
    level: "Beginner",
    duration: "6 Weeks",
    totalHours: "36 Hours",
    rating: 4.9,
    reviewCount: 1890,
    enrolledCount: 7200,
    price: 2999,
    originalPrice: 6999,
    featured: true,
    badge: "Trending",
    thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    instructor: {
      name: "Sneha Nair",
      role: "Lead Product Designer at FinTech Unicorn",
      experience: "9+ Years in Product Design",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      bio: "Passionate about human-centred interfaces, micro-interactions, and design systems. Guided 40+ products from napkin sketch to millions of daily active users.",
      rating: 4.9,
      studentsCount: 19500
    },
    learningOutcomes: [
      "Conduct heuristic evaluations, user interviews, and competitive audits",
      "Architect clear information hierarchies, user flows, and wireframes",
      "Master Figma Auto Layout 5.0, component variants, and design tokens",
      "Build a complete multi-brand design system from scratch",
      "Create interactive micro-animations and clickable prototypes",
      "Craft a compelling portfolio case study ready for tech job applications"
    ],
    requirements: [
      "No graphic design experience required",
      "A free Figma account and a modern web browser",
      "A notebook for sketching design layouts"
    ],
    curriculum: [
      {
        module: "Module 1: UX Foundations & User Research",
        duration: "8 Hours",
        lessons: [
          { title: "User-Centred Design Process & Double Diamond Model", duration: "45 mins", preview: true },
          { title: "Conducting Actionable User Interviews & Persona Mapping", duration: "50 mins", preview: true },
          { title: "Information Architecture, Card Sorting & Sitemaps", duration: "60 mins", preview: false }
        ]
      },
      {
        module: "Module 2: Figma Mastery & Visual Hierarchy",
        duration: "10 Hours",
        lessons: [
          { title: "Figma Interface, Vectors, and Grids", duration: "60 mins", preview: false },
          { title: "Typography, Colour Psychology, and 8pt Spacing Systems", duration: "75 mins", preview: false },
          { title: "Deep Dive: Auto Layout, Constraints & Responsive Frames", duration: "90 mins", preview: false }
        ]
      },
      {
        module: "Module 3: Design Systems & Component Architecture",
        duration: "10 Hours",
        lessons: [
          { title: "Atomic Design Principles & Token Management", duration: "60 mins", preview: false },
          { title: "Building Interactive Components, Variants & Boolean Properties", duration: "85 mins", preview: false },
          { title: "Design System Documentation & Developer Handoff", duration: "70 mins", preview: false }
        ]
      },
      {
        module: "Module 4: Interactive Prototyping & Portfolio Case Study",
        duration: "8 Hours",
        lessons: [
          { title: "Smart Animate, Micro-interactions & Mobile Transitions", duration: "60 mins", preview: false },
          { title: "Usability Testing & Iterative Feedback Loops", duration: "50 mins", preview: false },
          { title: "Structuring an Award-Winning Behance/Dribbble Case Study", duration: "90 mins", preview: false }
        ]
      }
    ],
    reviews: [
      {
        id: "r3",
        author: "Meera Krishnan",
        role: "Associate UI Designer, Swiggy",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "3 weeks ago",
        comment: "Sneha breaks down Figma Auto Layout and Tokens like no one else. Her case study framework helped me land my first product design job in Koramangala!"
      }
    ]
  },
  {
    id: "data-analytics-powerbi-sql",
    title: "Data Analytics Bootcamp: SQL, Excel & Power BI",
    subtitle: "Transform raw commercial data into actionable executive dashboards and strategic insights.",
    category: "Data Science",
    topic: "Data Analytics",
    level: "Beginner",
    duration: "10 Weeks",
    totalHours: "50 Hours",
    rating: 4.7,
    reviewCount: 3120,
    enrolledCount: 11200,
    price: 3499,
    originalPrice: 7499,
    featured: true,
    badge: "High Demand",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    instructor: {
      name: "Rajesh Varma",
      role: "VP of Business Intelligence at Analytics Corp",
      experience: "12+ Years in Enterprise Analytics",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      bio: "Rajesh advises top consumer brands across India and Southeast Asia on data governance, automated ETL pipelines, and executive dashboard design.",
      rating: 4.8,
      studentsCount: 34000
    },
    learningOutcomes: [
      "Write complex SQL queries with multi-table joins, subqueries, and window functions",
      "Model relational data schemas using star and snowflake architectures",
      "Master DAX calculations, measures, and time-intelligence in Power BI",
      "Cleanse messy datasets with Power Query and advanced Excel formulas",
      "Build interactive enterprise KPI dashboards with real-time drilldowns",
      "Present business insights convincingly to non-technical stakeholders"
    ],
    requirements: [
      "Basic familiarity with Microsoft Excel",
      "Windows machine recommended for native Power BI Desktop (or Parallels on Mac)",
      "Analytical mindset and curiosity to explore trends"
    ],
    curriculum: [
      {
        module: "Module 1: Advanced Excel & Data Wrangling",
        duration: "10 Hours",
        lessons: [
          { title: "Advanced Lookup Functions (XLOOKUP, INDEX/MATCH)", duration: "45 mins", preview: true },
          { title: "Pivot Tables, Slicers, and Dynamic Array Formulas", duration: "60 mins", preview: true },
          { title: "Data Cleaning, Text Parsing, and Validation", duration: "55 mins", preview: false }
        ]
      },
      {
        module: "Module 2: SQL for Data Analysts (PostgreSQL / MySQL)",
        duration: "15 Hours",
        lessons: [
          { title: "Database Architecture, SELECT, WHERE, and Aggregations", duration: "70 mins", preview: false },
          { title: "INNER, LEFT, RIGHT, and FULL OUTER Joins", duration: "80 mins", preview: false },
          { title: "Window Functions: ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD", duration: "90 mins", preview: false },
          { title: "CTEs, Subqueries, and Query Optimization", duration: "85 mins", preview: false }
        ]
      },
      {
        module: "Module 3: Power BI Data Modeling & DAX",
        duration: "15 Hours",
        lessons: [
          { title: "Data Ingestion & Transformation in Power Query", duration: "65 mins", preview: false },
          { title: "Star Schema Relationships and Cardinality", duration: "75 mins", preview: false },
          { title: "DAX Essentials: CALCULATE, FILTER, RELATED, and ALL", duration: "90 mins", preview: false },
          { title: "Time Intelligence: Year-over-Year, MTD, QTD Calculations", duration: "80 mins", preview: false }
        ]
      },
      {
        module: "Module 4: Business Dashboard Project & Storytelling",
        duration: "10 Hours",
        lessons: [
          { title: "E-Commerce Sales Executive Dashboard Project", duration: "120 mins", preview: false },
          { title: "Designing for Accessibility and Executive Decision Making", duration: "50 mins", preview: false },
          { title: "Publishing to Power BI Service & Automated Refresh", duration: "60 mins", preview: false }
        ]
      }
    ],
    reviews: [
      {
        id: "r4",
        author: "Devendra Saini",
        role: "Financial Analyst, Bengaluru",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "1 month ago",
        comment: "The DAX section alone is worth ten times the course price. Real-life datasets from Indian retail helped me build a great portfolio."
      }
    ]
  },
  {
    id: "fullstack-web-development-mern",
    title: "Full Stack Web Development (MERN Stack)",
    subtitle: "Build modern, responsive, full-scale web applications with React, Node.js, Express, and MongoDB.",
    category: "Technology",
    topic: "Web Development",
    level: "Intermediate",
    duration: "12 Weeks",
    totalHours: "64 Hours",
    rating: 4.9,
    reviewCount: 4210,
    enrolledCount: 14500,
    price: 3999,
    originalPrice: 8999,
    featured: true,
    badge: "Comprehensive",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    instructor: {
      name: "Rohan Mukherjee",
      role: "Staff Engineer & Tech Speaker",
      experience: "11+ Years Full Stack Experience",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
      bio: "Rohan has engineered high-throughput web architectures serving 10M+ users. Passionate about React internals, clean architecture, and TypeScript.",
      rating: 4.9,
      studentsCount: 42000
    },
    learningOutcomes: [
      "Build dynamic single-page applications with modern React 18 & Hooks",
      "Implement robust state management with Redux Toolkit and Context API",
      "Create RESTful microservices and auth systems using Node.js & Express",
      "Model and index scalable NoSQL databases with MongoDB & Mongoose",
      "Integrate JWT authentication, role-based access control, and payment gateways",
      "Deploy full-stack applications to AWS and Vercel with CI/CD"
    ],
    requirements: [
      "Basic understanding of HTML, CSS, and fundamental JavaScript (ES6)",
      "Node.js installed on your computer",
      "Dedication to complete 4 substantial portfolio projects"
    ],
    curriculum: [
      {
        module: "Module 1: Modern JavaScript & React Deep Dive",
        duration: "16 Hours",
        lessons: [
          { title: "ES6+ Modern Syntax, Closures, and Async/Await", duration: "60 mins", preview: true },
          { title: "React Component Lifecycle, Virtual DOM & JSX", duration: "75 mins", preview: true },
          { title: "Hooks in Action: useState, useEffect, useMemo, useRef", duration: "90 mins", preview: false },
          { title: "Custom Hooks & Clean Architecture in React", duration: "80 mins", preview: false }
        ]
      },
      {
        module: "Module 2: Server-Side Engineering with Node & Express",
        duration: "16 Hours",
        lessons: [
          { title: "Node.js Event Loop, Streams, and Modular Architecture", duration: "60 mins", preview: false },
          { title: "RESTful API Design Standards & Middleware Pipeline", duration: "70 mins", preview: false },
          { title: "Security Best Practices: Helmet, Rate Limiting, CORS, and Sanitization", duration: "65 mins", preview: false }
        ]
      },
      {
        module: "Module 3: Database Modeling & Authentication",
        duration: "16 Hours",
        lessons: [
          { title: "MongoDB Schemas, Relationships, and Aggregation Pipelines", duration: "85 mins", preview: false },
          { title: "Secure User Authentication with bcrypt and JWT", duration: "90 mins", preview: false },
          { title: "Stripe / Razorpay Payment Gateway Integration", duration: "95 mins", preview: false }
        ]
      },
      {
        module: "Module 4: Full Stack SaaS Capstone & Deployment",
        duration: "16 Hours",
        lessons: [
          { title: "Building a Full Collaborative Task Management Platform", duration: "180 mins", preview: false },
          { title: "Production Build, Docker, and Cloud Deployment", duration: "90 mins", preview: false }
        ]
      }
    ],
    reviews: [
      {
        id: "r5",
        author: "Aman Gupta",
        role: "Software Engineer at Freshworks",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "2 months ago",
        comment: "The capstone project was the centerpiece of my portfolio. The interviewers in Bangalore specifically praised the code quality and security middleware!"
      }
    ]
  },
  {
    id: "ai-prompt-engineering-genai",
    title: "Artificial Intelligence & Generative AI for Engineers",
    subtitle: "Harness LLMs, build RAG systems, automate workflows, and deploy enterprise AI applications.",
    category: "Technology",
    topic: "Artificial Intelligence",
    level: "Intermediate",
    duration: "6 Weeks",
    totalHours: "32 Hours",
    rating: 4.8,
    reviewCount: 1650,
    enrolledCount: 6800,
    price: 3299,
    originalPrice: 7999,
    featured: false,
    badge: "Cutting-Edge",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
    instructor: {
      name: "Dr. Ananya Sen",
      role: "Lead AI Researcher & Ex-DeepMind Fellow",
      experience: "10+ Years in NLP and Deep Learning",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      bio: "Dr. Ananya has published 18+ papers on attention mechanisms and multimodal transformers. She advises Indian SaaS startups on integrating agentic AI architectures.",
      rating: 4.9,
      studentsCount: 16200
    },
    learningOutcomes: [
      "Master prompt engineering techniques (Few-Shot, Chain-of-Thought, ReAct)",
      "Build Retrieval-Augmented Generation (RAG) pipelines using LangChain & LlamaIndex",
      "Work with Vector Databases (Pinecone, ChromaDB, pgvector)",
      "Fine-tune lightweight open-source models using LoRA and PEFT",
      "Build autonomous agents with tool-calling capabilities",
      "Evaluate LLM outputs for hallucination, safety, and latency"
    ],
    requirements: [
      "Intermediate Python programming proficiency",
      "Basic understanding of APIs and JSON data",
      "Curiosity about Large Language Models"
    ],
    curriculum: [
      {
        module: "Module 1: LLM Architecture & Prompt Engineering",
        duration: "8 Hours",
        lessons: [
          { title: "Transformers, Attention Mechanisms, and Tokenization", duration: "50 mins", preview: true },
          { title: "Structured Prompting, System Prompts, and Guardrails", duration: "60 mins", preview: true },
          { title: "Function Calling & Structured Outputs (JSON Schema)", duration: "70 mins", preview: false }
        ]
      },
      {
        module: "Module 2: RAG (Retrieval-Augmented Generation)",
        duration: "10 Hours",
        lessons: [
          { title: "Document Chunking Strategies and Embedding Models", duration: "60 mins", preview: false },
          { title: "Vector Databases: Indexing, Distance Metrics, and Retrieval", duration: "80 mins", preview: false },
          { title: "Advanced RAG: Hybrid Search, Re-ranking & Contextual Compression", duration: "90 mins", preview: false }
        ]
      },
      {
        module: "Module 3: Autonomous AI Agents & Production",
        duration: "14 Hours",
        lessons: [
          { title: "Building Multi-Step Autonomous Agents with Tools", duration: "85 mins", preview: false },
          { title: "Evaluating LLM Performance & Preventing Hallucinations", duration: "70 mins", preview: false },
          { title: "Deploying Enterprise AI Assistants with FastAPI & Streamlit", duration: "110 mins", preview: false }
        ]
      }
    ],
    reviews: [
      {
        id: "r6",
        author: "Vikas Deshmukh",
        role: "Senior Backend Developer",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "3 weeks ago",
        comment: "The hands-on RAG module with hybrid search and re-ranking helped us reduce our company search latency by 40%."
      }
    ]
  },
  {
    id: "machine-learning-python-scikit-learn",
    title: "Applied Machine Learning with Python & Scikit-Learn",
    subtitle: "From exploratory data analysis and feature engineering to supervised algorithms and model evaluation.",
    category: "Data Science",
    topic: "Machine Learning",
    level: "Intermediate",
    duration: "8 Weeks",
    totalHours: "40 Hours",
    rating: 4.8,
    reviewCount: 2150,
    enrolledCount: 8900,
    price: 2999,
    originalPrice: 6499,
    featured: false,
    badge: "Industry Standard",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    instructor: {
      name: "Prof. S. Ranganathan",
      role: "Adjunct Professor & AI Consultant",
      experience: "15+ Years in Machine Learning",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      bio: "Former Principal Data Scientist at GE Healthcare. Mentored hundreds of analytics professionals into successful machine learning engineering careers.",
      rating: 4.8,
      studentsCount: 22000
    },
    learningOutcomes: [
      "Master exploratory data analysis with Pandas, NumPy, Seaborn, and Matplotlib",
      "Perform robust feature engineering, scaling, and categorical encoding",
      "Implement classification, regression, and clustering algorithms",
      "Prevent overfitting using cross-validation and regularisation (L1/L2)",
      "Evaluate models using ROC-AUC, precision-recall, and confusion matrices",
      "Export and deploy trained Scikit-learn pipelines with ONNX and Flask"
    ],
    requirements: [
      "Python programming fundamentals",
      "High school mathematics (basic linear algebra and calculus concepts)"
    ],
    curriculum: [
      {
        module: "Module 1: Exploratory Analysis & Preprocessing",
        duration: "10 Hours",
        lessons: [
          { title: "Pandas Indexing, Filtering, GroupBy, and Transformations", duration: "60 mins", preview: true },
          { title: "Handling Missing Data, Outliers, and Skewed Distributions", duration: "60 mins", preview: true },
          { title: "Feature Scaling, Normalization, and One-Hot Encoding", duration: "50 mins", preview: false }
        ]
      },
      {
        module: "Module 2: Supervised Learning (Regression & Classification)",
        duration: "15 Hours",
        lessons: [
          { title: "Linear & Logistic Regression with Mathematical Intuition", duration: "75 mins", preview: false },
          { title: "Decision Trees, Random Forests, and Gradient Boosting (XGBoost)", duration: "90 mins", preview: false },
          { title: "Hyperparameter Tuning with GridSearch & Optuna", duration: "70 mins", preview: false }
        ]
      },
      {
        module: "Module 3: Unsupervised Learning & Real-World Capstone",
        duration: "15 Hours",
        lessons: [
          { title: "K-Means Clustering, DBSCAN, and Dimensionality Reduction (PCA)", duration: "80 mins", preview: false },
          { title: "Customer Churn Prediction End-to-End Pipeline Project", duration: "120 mins", preview: false },
          { title: "Model Packaging, Serialization & Web API Deployment", duration: "80 mins", preview: false }
        ]
      }
    ],
    reviews: [
      {
        id: "r7",
        author: "Shreya Joshi",
        role: "Data Science Associate, Pune",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "1 month ago",
        comment: "The mathematical intuition behind XGBoost and regularisation was explained with extreme clarity. Excellent practical exercises."
      }
    ]
  },
  {
    id: "cloud-computing-devops-aws",
    title: "Cloud Computing & DevOps: AWS, Docker & Kubernetes",
    subtitle: "Design resilient cloud infrastructure, automate CI/CD pipelines, and orchestrate containers.",
    category: "Cloud Computing",
    topic: "Cloud Computing",
    level: "Advanced",
    duration: "10 Weeks",
    totalHours: "52 Hours",
    rating: 4.9,
    reviewCount: 1780,
    enrolledCount: 7100,
    price: 3799,
    originalPrice: 8499,
    featured: false,
    badge: "Enterprise",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    instructor: {
      name: "Tariq Mansoor",
      role: "Lead Cloud Architect (AWS & CKA Certified)",
      experience: "13+ Years in Systems & Cloud Infrastructure",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      bio: "Tariq manages multi-region cloud infrastructures for tier-1 telecommunication clients. Passionate about infrastructure-as-code and zero-downtime rollouts.",
      rating: 4.9,
      studentsCount: 18500
    },
    learningOutcomes: [
      "Architect highly-available, secure cloud environments on AWS (VPC, EC2, RDS, S3)",
      "Containerize microservices using Docker multi-stage builds",
      "Orchestrate workloads with Kubernetes (Pods, Deployments, Ingress, Helm)",
      "Implement Infrastructure-as-Code using Terraform",
      "Automate deployment pipelines using GitHub Actions and ArgoCD",
      "Monitor system health using Prometheus and Grafana dashboards"
    ],
    requirements: [
      "Familiarity with Linux terminal commands and basic networking concepts",
      "An active AWS Free Tier account",
      "A computer with minimum 8GB RAM to run Docker locally"
    ],
    curriculum: [
      {
        module: "Module 1: AWS Core Infrastructure & Networking",
        duration: "12 Hours",
        lessons: [
          { title: "VPC Design: Subnets, Route Tables, Internet Gateways & NAT", duration: "70 mins", preview: true },
          { title: "EC2 Auto Scaling Groups, Elastic Load Balancing & Security Groups", duration: "80 mins", preview: true },
          { title: "S3 Storage Classes, Lifecycle Rules & IAM Policies", duration: "65 mins", preview: false }
        ]
      },
      {
        module: "Module 2: Containerization with Docker",
        duration: "12 Hours",
        lessons: [
          { title: "Docker Architecture, Images, Layers, and Storage", duration: "60 mins", preview: false },
          { title: "Docker Compose for Multi-Container Local Environments", duration: "75 mins", preview: false },
          { title: "Multi-Stage Dockerfiles for Minimal Production Footprints", duration: "65 mins", preview: false }
        ]
      },
      {
        module: "Module 3: Kubernetes Orchestration (K8s)",
        duration: "16 Hours",
        lessons: [
          { title: "Kubernetes Cluster Architecture & Control Plane Components", duration: "80 mins", preview: false },
          { title: "Deployments, Services, ConfigMaps, and Secrets", duration: "90 mins", preview: false },
          { title: "Ingress Controllers, SSL/TLS, and Helm Charts", duration: "85 mins", preview: false }
        ]
      },
      {
        module: "Module 4: CI/CD & Infrastructure as Code (Terraform)",
        duration: "12 Hours",
        lessons: [
          { title: "Terraform Providers, State Management, and Modularization", duration: "80 mins", preview: false },
          { title: "Automated Blue-Green CI/CD Pipeline with GitHub Actions", duration: "100 mins", preview: false }
        ]
      }
    ],
    reviews: [
      {
        id: "r8",
        author: "Naveen Reddy",
        role: "DevOps Engineer, Hyderabad",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "2 weeks ago",
        comment: "Passed my AWS Solutions Architect Associate and CKA within 3 months of finishing this course. The real Kubernetes cluster labs are outstanding."
      }
    ]
  },
  {
    id: "growth-digital-marketing-masterclass",
    title: "Growth & Digital Marketing Masterclass",
    subtitle: "Scale customer acquisition with Google Ads, Meta Ads, SEO, content funnels, and data analytics.",
    category: "Marketing",
    topic: "Digital Marketing",
    level: "Beginner",
    duration: "6 Weeks",
    totalHours: "30 Hours",
    rating: 4.7,
    reviewCount: 1540,
    enrolledCount: 6200,
    price: 2199,
    originalPrice: 4999,
    featured: false,
    badge: "Practical",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    instructor: {
      name: "Priyanka Sen",
      role: "Head of Growth at D2C Consumer Brand",
      experience: "8+ Years in Digital Acquisition",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
      bio: "Scaled advertising spends profitably from ₹50,000 to over ₹3 Crore monthly. Specialises in creative experimentation, CAC optimization, and retention funnels.",
      rating: 4.8,
      studentsCount: 14000
    },
    learningOutcomes: [
      "Master high-ROI Google Search and Performance Max campaigns",
      "Design high-converting Meta (Facebook & Instagram) ad creatives and funnels",
      "Conduct technical SEO audits and keyword research for organic ranking",
      "Build automated email nurture flows with Klaviyo and Mailchimp",
      "Analyse customer acquisition cost (CAC) and customer lifetime value (LTV)",
      "Set up Google Analytics 4 (GA4) and Google Tag Manager events"
    ],
    requirements: [
      "No technical marketing background needed",
      "Access to a computer and internet",
      "A passion for consumer psychology and data-driven storytelling"
    ],
    curriculum: [
      {
        module: "Module 1: Modern Marketing Funnels & Brand Positioning",
        duration: "6 Hours",
        lessons: [
          { title: "The AARRR Pirate Metrics Framework for Startups", duration: "40 mins", preview: true },
          { title: "Defining ICP, Buyer Personas, and Value Propositions", duration: "45 mins", preview: true },
          { title: "Landing Page Conversion Rate Optimization (CRO)", duration: "55 mins", preview: false }
        ]
      },
      {
        module: "Module 2: Paid Acquisition (Google & Meta Ads)",
        duration: "10 Hours",
        lessons: [
          { title: "Google Search Ads: Keywords, Match Types, Quality Score", duration: "75 mins", preview: false },
          { title: "Meta Ads Manager: Audience Targeting, Advantage+, Creative Fatigue", duration: "85 mins", preview: false },
          { title: "Ad Copywriting & High-Converting Video Scripts", duration: "60 mins", preview: false }
        ]
      },
      {
        module: "Module 3: Organic Growth & Retention Marketing",
        duration: "8 Hours",
        lessons: [
          { title: "Technical SEO, Core Web Vitals, and Backlink Strategy", duration: "60 mins", preview: false },
          { title: "Email Marketing Automations: Welcome, Abandoned Cart, Win-back", duration: "65 mins", preview: false }
        ]
      },
      {
        module: "Module 4: Analytics, GA4 & Attribution Modeling",
        duration: "6 Hours",
        lessons: [
          { title: "Setting up Google Tag Manager and GA4 Custom Events", duration: "60 mins", preview: false },
          { title: "Multi-Touch Attribution and CAC/LTV Unit Economics", duration: "70 mins", preview: false }
        ]
      }
    ],
    reviews: [
      {
        id: "r9",
        author: "Kavita Rao",
        role: "Founder, Handcrafted Jewels Bengaluru",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "1 month ago",
        comment: "Helped me cut my Meta ad spend wastage by 35% while doubling order conversions. The Indian market case studies are exceptionally relevant."
      }
    ]
  },
  {
    id: "business-analytics-financial-modeling",
    title: "Business Analytics & Corporate Financial Modeling",
    subtitle: "Make data-backed corporate investment decisions with scenario planning and valuation models.",
    category: "Business",
    topic: "Business Analytics",
    level: "Intermediate",
    duration: "8 Weeks",
    totalHours: "38 Hours",
    rating: 4.8,
    reviewCount: 1420,
    enrolledCount: 5400,
    price: 3199,
    originalPrice: 6999,
    featured: false,
    badge: "Finance",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    instructor: {
      name: "Siddharth Jain, CFA",
      role: "Investment Banking & Corporate Finance Advisor",
      experience: "12+ Years in M&A and Private Equity",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
      bio: "Siddharth has modeled over $1.5B in M&A transactions across technology and healthcare sectors. Trains corporate finance teams at leading consulting firms.",
      rating: 4.9,
      studentsCount: 11000
    },
    learningOutcomes: [
      "Build dynamic 3-statement financial models (Income, Balance Sheet, Cash Flow)",
      "Perform Discounted Cash Flow (DCF) and Comparable Company Valuations",
      "Model sensitivity analysis, Monte Carlo simulations, and stress tests",
      "Analyse unit economics, working capital cycles, and debt covenants",
      "Create pitch-ready board decks and financial executive summaries"
    ],
    requirements: [
      "Familiarity with basic accounting concepts (P&L, Balance Sheet)",
      "Microsoft Excel (2016 or newer recommended)"
    ],
    curriculum: [
      {
        module: "Module 1: 3-Statement Modeling Architecture",
        duration: "10 Hours",
        lessons: [
          { title: "Building the Integrated Income Statement & Revenue Schedules", duration: "60 mins", preview: true },
          { title: "Working Capital, Debt Schedules, and Depreciation waterfall", duration: "75 mins", preview: true },
          { title: "Balancing the Balance Sheet and Cash Flow Statement", duration: "80 mins", preview: false }
        ]
      },
      {
        module: "Module 2: Corporate Valuation Methodologies",
        duration: "12 Hours",
        lessons: [
          { title: "Discounted Cash Flow (DCF): WACC & Terminal Value Calculations", duration: "90 mins", preview: false },
          { title: "Trading & Transaction Comps (EV/EBITDA, P/E Multiples)", duration: "80 mins", preview: false }
        ]
      },
      {
        module: "Module 3: Scenario Planning & M&A Analysis",
        duration: "16 Hours",
        lessons: [
          { title: "Scenario Managers, Data Tables, and Stress Testing", duration: "75 mins", preview: false },
          { title: "Mergers & Acquisitions (M&A) Accretion/Dilution Analysis", duration: "95 mins", preview: false }
        ]
      }
    ],
    reviews: [
      {
        id: "r10",
        author: "Rahul Batra",
        role: "Corporate Finance Analyst",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "2 months ago",
        comment: "The template alone is worth gold. Very structured course that prepared me for my boutique investment banking interviews in Mumbai."
      }
    ]
  },
  {
    id: "cybersecurity-network-defense",
    title: "Cybersecurity & Practical Network Defense",
    subtitle: "Protect enterprise networks, identify vulnerabilities, perform ethical hacking, and enforce security policies.",
    category: "Technology",
    topic: "Cybersecurity",
    level: "Intermediate",
    duration: "8 Weeks",
    totalHours: "44 Hours",
    rating: 4.8,
    reviewCount: 1680,
    enrolledCount: 6100,
    price: 3499,
    originalPrice: 7999,
    featured: false,
    badge: "High Security",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    instructor: {
      name: "Vikramaditya Rao",
      role: "CISO & Offensive Security Specialist (OSCP)",
      experience: "14+ Years in Cyber Defense",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      bio: "Former red team lead for global financial institutions. Certified Ethical Hacker and regular contributor to vulnerability disclosure programs.",
      rating: 4.9,
      studentsCount: 17800
    },
    learningOutcomes: [
      "Understand the MITRE ATT&CK framework and common cyber attack vectors",
      "Perform network scanning, packet analysis, and reconnaissance with Wireshark & Nmap",
      "Identify OWASP Top 10 web vulnerabilities (SQLi, XSS, CSRF, SSRF)",
      "Configure firewalls, IDS/IPS, and secure VPN connections",
      "Conduct incident response investigations using SIEM logs",
      "Enforce Zero-Trust architecture in modern cloud environments"
    ],
    requirements: [
      "Basic understanding of TCP/IP networking (IP addresses, ports, DNS)",
      "Comfort using a command line interface",
      "Laptop capable of running virtual machines (VirtualBox / VMware)"
    ],
    curriculum: [
      {
        module: "Module 1: Network Security & Packet Inspection",
        duration: "10 Hours",
        lessons: [
          { title: "OSI Model, TCP Handshakes, and Network Protocols", duration: "50 mins", preview: true },
          { title: "Deep Packet Analysis with Wireshark", duration: "70 mins", preview: true },
          { title: "Port Scanning & Network Mapping with Nmap", duration: "60 mins", preview: false }
        ]
      },
      {
        module: "Module 2: Web Application Security & OWASP",
        duration: "14 Hours",
        lessons: [
          { title: "SQL Injection (SQLi) Detection & Mitigation", duration: "80 mins", preview: false },
          { title: "Cross-Site Scripting (XSS) and CSRF Defenses", duration: "75 mins", preview: false },
          { title: "Authentication Bypass, Session Hijacking & JWT Flaws", duration: "70 mins", preview: false }
        ]
      },
      {
        module: "Module 3: Defensive Ops, SIEM & Incident Response",
        duration: "20 Hours",
        lessons: [
          { title: "Setting up a SIEM (Wazuh / Splunk) for Log Monitoring", duration: "85 mins", preview: false },
          { title: "Simulated Incident Response: Containment & Remediation", duration: "110 mins", preview: false }
        ]
      }
    ],
    reviews: [
      {
        id: "r11",
        author: "Prateek Bansal",
        role: "SOC Analyst, Bengaluru",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "3 weeks ago",
        comment: "The live Wireshark packet capture analysis was eye-opening. Best hands-on course for anyone looking to enter SOC analyst roles."
      }
    ]
  },
  {
    id: "tech-product-management-fundamentals",
    title: "Tech Product Management: Concept to Launch",
    subtitle: "Define product strategy, run agile sprints, write PRDs, prioritize roadmaps, and ship successful features.",
    category: "Business",
    topic: "Product Management",
    level: "Beginner",
    duration: "6 Weeks",
    totalHours: "28 Hours",
    rating: 4.9,
    reviewCount: 2280,
    enrolledCount: 8400,
    price: 2799,
    originalPrice: 6499,
    featured: true,
    badge: "Leadership",
    thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    instructor: {
      name: "Aditi Mathur",
      role: "VP of Product at B2B SaaS Unicorn",
      experience: "11+ Years Shipping Global Tech Products",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      bio: "Aditi has led product teams at Flipkart and Microsoft India. Passionate about product-led growth, agile discovery, and mentoring aspiring PMs.",
      rating: 4.9,
      studentsCount: 26000
    },
    learningOutcomes: [
      "Formulate compelling product visions and North Star metrics",
      "Write comprehensive Product Requirement Documents (PRDs) that engineers love",
      "Prioritise roadmaps with RICE, Kano, and MoSCoW frameworks",
      "Run effective Agile/Scrum sprints, user story mapping, and retrospectives",
      "Design and evaluate A/B experiments with statistical significance",
      "Navigate product launch go-to-market (GTM) strategies seamlessly"
    ],
    requirements: [
      "No coding experience necessary",
      "Curiosity about how tech apps solve user problems",
      "Strong communication and critical thinking skills"
    ],
    curriculum: [
      {
        module: "Module 1: The Product Mindset & Problem Discovery",
        duration: "6 Hours",
        lessons: [
          { title: "What Does a Great Tech PM Really Do?", duration: "45 mins", preview: true },
          { title: "Jobs To Be Done (JTBD) and Customer Problem Framing", duration: "50 mins", preview: true },
          { title: "Competitive Teardowns & Market Sizing (TAM/SAM/SOM)", duration: "55 mins", preview: false }
        ]
      },
      {
        module: "Module 2: PRDs, Specs & Agile Execution",
        duration: "10 Hours",
        lessons: [
          { title: "Writing Clear, Actionable PRDs and User Stories", duration: "70 mins", preview: false },
          { title: "Feature Prioritization Frameworks in Practice (RICE)", duration: "60 mins", preview: false },
          { title: "Working with Engineering: Sprint Planning & Tech Debt", duration: "65 mins", preview: false }
        ]
      },
      {
        module: "Module 3: Growth Metrics, Experimentation & GTM",
        duration: "12 Hours",
        lessons: [
          { title: "North Star Metrics, Retention Curves & Cohort Analysis", duration: "75 mins", preview: false },
          { title: "Designing Robust A/B Tests with Statistical Confidence", duration: "65 mins", preview: false },
          { title: "Go-to-Market Strategy, Launch Checklist & Case Study", duration: "80 mins", preview: false }
        ]
      }
    ],
    reviews: [
      {
        id: "r12",
        author: "Abhishek Tandon",
        role: "Associate Product Manager, Bengaluru",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "1 month ago",
        comment: "The PRD feedback and interview frameworks gave me the exact confidence I needed to transition from software engineering to product management."
      }
    ]
  },
  {
    id: "graphic-design-brand-identity",
    title: "Brand Identity & Visual Graphic Design",
    subtitle: "Design iconic brand identities, typography guidelines, vector assets, and commercial packaging.",
    category: "Design",
    topic: "Graphic Design",
    level: "Beginner",
    duration: "6 Weeks",
    totalHours: "30 Hours",
    rating: 4.8,
    reviewCount: 1390,
    enrolledCount: 5100,
    price: 2299,
    originalPrice: 5499,
    featured: false,
    badge: "Creative",
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    instructor: {
      name: "Tanvi Deshpande",
      role: "Creative Director & Brand Consultant",
      experience: "10+ Years in Visual Branding",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      bio: "Tanvi has developed brand identities for over 60 Indian lifestyle brands, restaurants, and tech startups. Known for timeless typography and storytelling.",
      rating: 4.8,
      studentsCount: 13500
    },
    learningOutcomes: [
      "Master vector illustration and logo design in Adobe Illustrator / Figma",
      "Develop cohesive brand guidelines (colour palettes, type pairing, imagery)",
      "Design commercial packaging, marketing collateral, and social media kits",
      "Understand print production standards (CMYK vs RGB, bleed, DPI)",
      "Pitch visual brand identities professionally to corporate clients"
    ],
    requirements: [
      "No graphic design experience required",
      "Adobe Illustrator or vector design software (Figma works well too)",
      "Enthusiasm for typography, shapes, and visual storytelling"
    ],
    curriculum: [
      {
        module: "Module 1: Principles of Visual Design & Vector Art",
        duration: "8 Hours",
        lessons: [
          { title: "Visual Balance, Contrast, Repetition, and Alignment", duration: "45 mins", preview: true },
          { title: "Pen Tool Mastery and Bezier Curves in Practice", duration: "60 mins", preview: true },
          { title: "Color Theory: Harmonies, Hues, and Accessibility", duration: "50 mins", preview: false }
        ]
      },
      {
        module: "Module 2: Logo Design & Brand Identity Systems",
        duration: "12 Hours",
        lessons: [
          { title: "From Concept Sketch to Geometric Logo Mark", duration: "80 mins", preview: false },
          { title: "Typography Selection, Font Pairing, and Kerning", duration: "70 mins", preview: false },
          { title: "Creating the Comprehensive Brand Style Guide PDF", duration: "90 mins", preview: false }
        ]
      },
      {
        module: "Module 3: Real-World Brand Rollout & Mockups",
        duration: "10 Hours",
        lessons: [
          { title: "Photorealistic 3D Mockups in Photoshop", duration: "65 mins", preview: false },
          { title: "Social Media Templates & Commercial Packaging Prep", duration: "75 mins", preview: false },
          { title: "Client Presentation Deck & Contract Preparation", duration: "60 mins", preview: false }
        ]
      }
    ],
    reviews: [
      {
        id: "r13",
        author: "Deepika Murthy",
        role: "Freelance Brand Designer",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "3 weeks ago",
        comment: "Tanvi's lessons on typography pairing and creating professional brand guideline books transformed how I pitch to my freelance clients."
      }
    ]
  }
];

export const CATEGORIES_LIST = [
  { id: "Technology", name: "Technology", icon: "Code2", courseCount: 4, desc: "Software, Web Dev, Python, Cybersecurity" },
  { id: "Data Science", name: "Data Science", icon: "BarChart3", courseCount: 2, desc: "Analytics, Power BI, Machine Learning, SQL" },
  { id: "Business", name: "Business", icon: "Briefcase", courseCount: 2, desc: "Product Management, Financial Modeling" },
  { id: "Design", name: "Design", icon: "Palette", courseCount: 2, desc: "UI/UX, Figma, Brand Identity, Graphic Design" },
  { id: "Marketing", name: "Marketing", icon: "TrendingUp", courseCount: 1, desc: "Digital Growth, Meta/Google Ads, SEO" },
  { id: "Cloud Computing", name: "Cloud Computing", icon: "Cloud", courseCount: 1, desc: "AWS, Docker, Kubernetes, DevOps" }
];
