export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'drf' | 'mvt' | 'fullstack';
  categoryLabel: string;
  githubUrl: string;
  description: string;
  technologies: string[];
  features: string[];
  highlight: string;
  details: {
    problem: string;
    solution: string;
    architecture: string;
    authentication: string;
    database: string;
    apiEndpoints: { method: string; path: string; desc: string }[];
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; tag: string }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
}

export const DEVELOPER_PROFILE = {
  name: "Praveen Kumar Saravanan",
  shortName: "Praveen Kumar",
  title: "Python Backend Developer",
  subTitle: "Django & DRF Developer",
  primaryPositioning: "Python Backend Developer / Python Full Stack Developer",
  tagline: "Python Developer specializing in Django, Django REST Framework, REST APIs and database-driven web applications.",
  experienceYears: "1.5+",
  experienceLabel: "1.5+ Years of Hands-on Experience",
  location: "Salem, Tamil Nadu, India",
  email: "praveenkrsslm69@gmail.com",
  phone: "7598152270",
  formattedPhone: "+91 7598152270",
  github: "https://github.com/Praveen-Kr-S",
  aboutParagraphs: [
    "I am a Python Django Developer and Backend Developer with 1.5+ years of hands-on experience in Django, Django REST Framework and REST API development.",
    "I have experience building backend applications, authentication systems, CRUD APIs and database-driven web solutions.",
    "I have worked with PostgreSQL, MySQL, React.js, AWS and Docker, and have practical experience with Agile/Scrum development practices.",
    "I have also mentored 150+ students and conducted coding sessions, technical workshops and interview preparation programs at Livewire."
  ],
  coreStrengths: [
    "Python",
    "Django",
    "Django REST Framework",
    "REST API development",
    "JWT Authentication",
    "CRUD APIs",
    "PostgreSQL",
    "MySQL",
    "React.js",
    "AWS",
    "Docker",
    "Git/GitHub",
    "Postman",
    "Razorpay integration",
    "Role-Based Access Control",
    "MVT/MVC architecture"
  ]
};

export const HIGHLIGHTS_METRICS = [
  { value: "1.5+", label: "Years Experience", description: "Hands-on Django & Python backend development" },
  { value: "5+", label: "Real-time Projects", description: "Designed & built for demonstration and mentorship" },
  { value: "10+", label: "RESTful APIs", description: "Documented & tested with Postman in Job Portal system" },
  { value: "150+", label: "Students Mentored", description: "In Python, Django, REST APIs & web architecture" },
  { value: "50+", label: "Technical Sessions", description: "Workshops, coding sessions & interview preparation" },
  { value: "20+", label: "Python Projects Guided", description: "Covering OOP, file handling, modules & architecture" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Development",
    description: "Core backend engineering with scalable MVC/MVT architectures and robust REST APIs",
    iconName: "Server",
    skills: [
      { name: "Python", tag: "Language" },
      { name: "Django", tag: "Framework" },
      { name: "Django REST Framework", tag: "API Framework" },
      { name: "REST APIs", tag: "Architecture" },
      { name: "JWT Authentication", tag: "Security" },
      { name: "CRUD Operations", tag: "Core" },
      { name: "MVT Architecture", tag: "Pattern" },
      { name: "MVC Architecture", tag: "Pattern" },
      { name: "Role-Based Access Control", tag: "Authorization" }
    ]
  },
  {
    title: "Database Engineering",
    description: "Relational schema design, ORM query optimization, and transaction integrity",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", tag: "Primary RDBMS" },
      { name: "MySQL", tag: "Relational DB" },
      { name: "SQLite3", tag: "Embedded DB" }
    ]
  },
  {
    title: "Cloud & DevOps",
    description: "Deployment environments, server virtualization, and cloud infrastructure primitives",
    iconName: "Cloud",
    skills: [
      { name: "AWS EC2", tag: "Compute" },
      { name: "AWS S3", tag: "Storage" },
      { name: "AWS RDS", tag: "Managed DB" },
      { name: "Docker", tag: "Virtualization" },
      { name: "Containerization", tag: "DevOps" }
    ]
  },
  {
    title: "Frontend Engineering",
    description: "Responsive interfaces and client integration with backend REST endpoints",
    iconName: "Layout",
    skills: [
      { name: "HTML5", tag: "Markup" },
      { name: "CSS3", tag: "Styling" },
      { name: "JavaScript", tag: "Language" },
      { name: "React.js", tag: "UI Library" },
      { name: "Bootstrap", tag: "CSS Framework" },
      { name: "Tailwind CSS", tag: "CSS Framework" }
    ]
  },
  {
    title: "Development Tools",
    description: "Version control, API test suites, and software engineering toolchains",
    iconName: "Wrench",
    skills: [
      { name: "Git", tag: "VCS" },
      { name: "GitHub", tag: "Collaboration" },
      { name: "Postman", tag: "API Testing" },
      { name: "VS Code", tag: "Editor" },
      { name: "Eclipse", tag: "IDE" }
    ]
  },
  {
    title: "Integrations & Other",
    description: "Payment gateways, engineering practices, and business analysis tools",
    iconName: "Cpu",
    skills: [
      { name: "Razorpay Payment Gateway", tag: "Fintech" },
      { name: "Agile Methodology", tag: "Process" },
      { name: "Scrum Framework", tag: "Process" },
      { name: "Core Java", tag: "Language" },
      { name: "Power BI", tag: "Analytics" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "job-portal-system",
    title: "Job Portal System",
    subtitle: "Enterprise Recruitment & Candidate Pipeline Platform",
    category: "fullstack",
    categoryLabel: "Django REST Framework + React.js",
    githubUrl: "https://github.com/Praveen-Kr-S/Job_Portal_System_Django-React.git",
    description: "Full-stack Job Portal application developed using Django REST Framework and React.js featuring dual-role recruiter and job seeker workflows, RBAC authorization, and 10+ RESTful APIs.",
    technologies: ["Django REST Framework", "React.js", "PostgreSQL", "MySQL", "JWT", "Bootstrap", "Postman"],
    highlight: "10+ RESTful APIs with Role-Based Access Control",
    features: [
      "Recruiter and job seeker roles with strict permission boundaries",
      "Role-Based Access Control (RBAC) implemented in DRF permission classes",
      "JSON Web Token (JWT) stateless authentication with token refresh",
      "Recruiter job posting, applicant review, and status tracking",
      "Job seeker profile management, resume submission, and application history",
      "Comprehensive CRUD operations across users, jobs, and applications",
      "Dual database support for PostgreSQL production and MySQL testing",
      "Full API test suite verified via Postman collections"
    ],
    details: {
      problem: "Traditional job application portals often lack granular separation between employer management and applicant data, leading to permission leaks and sluggish monolithic query performance.",
      solution: "Engineered a decoupled full-stack architecture with a lightweight React frontend communicating with Django REST Framework backend APIs. Implemented strict Role-Based Access Control (RBAC) ensuring recruiters only view and modify relevant applications while seekers have safe access to their personal submissions.",
      architecture: "Decoupled client-server architecture: React SPA client interacts with DRF ViewSets via JSON over HTTPS. Django middleware verifies JWT bearer tokens before dispatching to custom permission classes (`IsRecruiter`, `IsApplicant`).",
      authentication: "JWT (JSON Web Token) authentication using simplejwt. Secure access token transmission via Bearer authorization headers with automatic refresh handling.",
      database: "Normalized relational schema with PostgreSQL (and MySQL compatibility) comprising User, RecruiterProfile, SeekerProfile, JobListing, Application, and Category models with indexed foreign keys.",
      apiEndpoints: [
        { method: "POST", path: "/api/v1/auth/token/", desc: "Obtain JWT access & refresh token pair" },
        { method: "GET", path: "/api/v1/jobs/", desc: "List filtered job listings with search & pagination" },
        { method: "POST", path: "/api/v1/jobs/", desc: "Create new job opening (Recruiter role required)" },
        { method: "POST", path: "/api/v1/jobs/{id}/apply/", desc: "Submit application with resume details" },
        { method: "GET", path: "/api/v1/recruiter/applicants/", desc: "Review all applicants for recruiter's listings" }
      ]
    }
  },
  {
    id: "shopeasy-ecommerce",
    title: "ShopEasy – E-Commerce Web Application",
    subtitle: "Full-Stack Online Store with Razorpay Payment Gateway",
    category: "mvt",
    categoryLabel: "Django MVT Architecture",
    githubUrl: "https://github.com/Praveen-Kr-S/shopeasy-django-ecommerce",
    description: "Full-stack e-commerce application developed using Django MVT architecture with secure Razorpay payment integration, session-based cart management, and comprehensive admin dashboard.",
    technologies: ["Django MVT", "Python", "Razorpay", "HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Django ORM"],
    highlight: "Real-time Razorpay Payment Integration & Session Cart",
    features: [
      "Dynamic product catalog with category filtering and keyword search",
      "Session-based shopping cart enabling seamless guest & authenticated shopping",
      "Secure user authentication and profile order history tracking",
      "Seamless Razorpay payment gateway integration with signature verification",
      "Comprehensive admin dashboard for inventory, orders, and user management",
      "Django ORM query optimization to prevent N+1 queries during catalog rendering",
      "CRUD operations for category management, product variants, and stock tracking",
      "Automated order confirmation and status updates"
    ],
    details: {
      problem: "Small and medium businesses require a reliable, self-hosted e-commerce system that handles payment reconciliation, session state for shopping carts, and dynamic inventory adjustments without expensive enterprise licensing.",
      solution: "Built ShopEasy using Django's Model-View-Template (MVT) pattern, combining server-side template rendering for optimal SEO and rapid page loads with asynchronous Razorpay checkout scripts for frictionless transactions.",
      architecture: "Classic Django MVT architecture: URL routing maps to Class-Based and Functional Views, which query Django ORM models and render dynamic Bootstrap 5 templates with custom context processors for persistent cart state.",
      authentication: "Django built-in authentication system with custom user model attributes, password hashing via PBKDF2, session cookies, and login-required decorators.",
      database: "Relational database schema with models for Category, Product, Cart, CartItem, Order, and OrderItem with transactional atomic rollbacks upon payment failures.",
      apiEndpoints: [
        { method: "GET", path: "/products/", desc: "Catalog view with category filters and pagination" },
        { method: "POST", path: "/cart/add/<id>/", desc: "Session-based item addition with quantity validation" },
        { method: "POST", path: "/checkout/payment/", desc: "Create Razorpay order and generate transaction signature" },
        { method: "POST", path: "/checkout/verify/", desc: "Verify cryptographic Razorpay HMAC signature" },
        { method: "GET", path: "/orders/history/", desc: "User order status and itemized purchase breakdown" }
      ]
    }
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    subtitle: "Academic Records, Attendance & Marks Management DRF Backend",
    category: "drf",
    categoryLabel: "Django REST Framework",
    githubUrl: "https://github.com/Praveen-Kr-S/Student-Management-System-Using-DRF",
    description: "Robust REST API backend built with Django REST Framework and PostgreSQL for educational institutions to manage student registrations, course enrollments, attendance records, and grades.",
    technologies: ["Django REST Framework", "PostgreSQL", "JWT", "REST API", "Postman", "Python"],
    highlight: "Role-Based Access for Admin, Teacher, and Student Users",
    features: [
      "Student registration and academic profile records management",
      "Attendance tracking module with date-range filters and percentage aggregation",
      "Marks and grading management with subject-wise evaluation endpoints",
      "Course enrollment system with prerequisite validations",
      "CRUD REST APIs designed following OpenAPI best practices",
      "JSON Web Token (JWT) authentication for secure client communication",
      "Granular Role-Based Access Control (Admin, Teacher, Student roles)",
      "PostgreSQL relational backend tested with comprehensive Postman test suite"
    ],
    details: {
      problem: "Educational institutions frequently suffer from fragmented student data where attendance, marks, and enrollments reside in disconnected spreadsheets, hindering timely student reporting.",
      solution: "Constructed a centralized RESTful API service using Django REST Framework that standardizes data schemas across courses, attendance, and grading, enforcing data validation at the serializer level.",
      architecture: "Django REST Framework API service structured with separate app domains (`accounts`, `academics`, `attendance`, `grades`), using ModelSerializers, GenericAPIViews, and custom permission filters.",
      authentication: "JWT authentication with custom token payload claims encoding the user's institutional role (Admin / Teacher / Student) for client-side routing and backend policy checks.",
      database: "PostgreSQL relational database with foreign key relationships between Student, Teacher, Course, Enrollment, AttendanceRecord, and Grade models with unique constraints preventing duplicate attendance entries.",
      apiEndpoints: [
        { method: "POST", path: "/api/students/register/", desc: "Register student profile with assigned roll number" },
        { method: "GET", path: "/api/attendance/?course_id=&date=", desc: "Fetch course attendance report with summary" },
        { method: "POST", path: "/api/attendance/mark/", desc: "Batch mark attendance by instructor role" },
        { method: "GET", path: "/api/grades/my-report/", desc: "Student endpoint to inspect term grades and GPA" },
        { method: "POST", path: "/api/courses/enroll/", desc: "Enroll student into selected academic module" }
      ]
    }
  },
  {
    id: "business-inventory-management",
    title: "Business Inventory Management System",
    subtitle: "Stock Tracking, Order Processing & Automated GST Billing",
    category: "mvt",
    categoryLabel: "Django MVT Architecture",
    githubUrl: "https://github.com/Praveen-Kr-S/django-business-inventory-management.git",
    description: "Business management web application developed in Django MVT to streamline warehouse stock tracking, customer orders, automated invoice generation, and GST calculation.",
    technologies: ["Django MVT", "Django Forms", "Django Models", "HTML/CSS", "Python", "SQLite3 / MySQL"],
    highlight: "Automated Billing & Indian GST Tax Calculations",
    features: [
      "Real-time product inventory tracking with low-stock alerts",
      "Customer ledger and contact management system",
      "Order processing pipeline from quotation to dispatch",
      "Automated invoice billing system with GST calculation rules",
      "Multi-role user authentication with Admin and Staff permissions",
      "Role-Based Access Control preventing unauthorized stock modifications",
      "Comprehensive CRUD operations across products, suppliers, and transactions",
      "Django Forms with server-side validation and CSRF security"
    ],
    details: {
      problem: "Small retail and wholesale businesses struggle with manual billing errors, inventory stockouts, and complex tax calculations under the GST regime when using basic spreadsheets.",
      solution: "Developed an intuitive Django MVT web platform with automated billing logic that instantly calculates CGST, SGST, and IGST based on product HSN codes, while dynamically updating warehouse stock quantities upon order completion.",
      architecture: "Monolithic Django application utilizing ModelForms for sanitized user input, database transactions to prevent inventory race conditions, and customized template tags for currency and invoice formatting.",
      authentication: "Django standard authentication with user permission groups (`Admin` has full ledger/pricing access, `Staff` restricted to invoice creation and stock queries).",
      database: "Relational database schema with models: Product, Category, Customer, Order, OrderItem, and Invoice with foreign key cascades and calculated subtotal fields.",
      apiEndpoints: [
        { method: "GET", path: "/inventory/", desc: "Inventory catalog with low-stock threshold warning" },
        { method: "POST", path: "/inventory/product/new/", desc: "Add new inventory SKU with tax rates & pricing" },
        { method: "POST", path: "/orders/create/", desc: "Create customer order and reserve stock" },
        { method: "GET", path: "/billing/invoice/<id>/print/", desc: "Generate printable GST compliant tax invoice" }
      ]
    }
  }
];

export const EXPERIENCE_HISTORY: ExperienceItem[] = [
  {
    role: "Python Full Stack Trainer",
    company: "Livewire",
    location: "Salem, Tamil Nadu, India",
    period: "November 2024 – Present",
    type: "Full-Time Technical Role",
    description: "Driving hands-on Python and Django backend engineering curricula, designing production-grade demonstration architectures, and mentoring aspiring software developers.",
    responsibilities: [
      "Designed and built 5+ real-time backend projects using Django and DRF for demonstration, architectural review, and student mentorship.",
      "Worked with PostgreSQL and MySQL for database-driven applications, schema modeling, and ORM query optimization.",
      "Conducted coding sessions and technical workshops covering REST API design, HTTP status codes, and API security.",
      "Mentored 150+ students in Python, Django, REST APIs and web development principles.",
      "Reviewed projects involving Django REST Framework, JWT authentication and React.js integration.",
      "Delivered training on Docker, AWS cloud basics and Agile/Scrum methodology.",
      "Guided development of 20+ core Python projects covering OOP, functions, file handling, exception handling, modules and packages."
    ],
    techStack: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "MySQL",
      "JWT",
      "React.js",
      "Docker",
      "AWS",
      "Postman",
      "Agile/Scrum"
    ]
  }
];

export const CERTIFICATIONS = [
  {
    title: "B2E – Full Stack Development using Python",
    issuer: "Livewire / EC-Council",
    date: "January 2026",
    credentialId: "Verified Credential",
    description: "Comprehensive certification covering Python core concepts, Django MVC/MVT framework, Django REST Framework, database design with PostgreSQL/MySQL, frontend integration, and cloud fundamentals."
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering – Mechanical Engineering",
    institution: "Knowledge Institute of Technology",
    location: "Salem, Tamil Nadu",
    period: "2017 – 2021",
    description: "Built strong foundation in engineering mathematics, problem-solving, and analytical thinking before transitioning full-time into software engineering and Python backend systems."
  }
];
