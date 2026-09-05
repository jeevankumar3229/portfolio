const express = require('express');
const router = express.Router();

let totalApiRequests = 42;
const startTime = Date.now();

// Request counter middleware
router.use((req, res, next) => {
  totalApiRequests++;
  next();
});

// Resume & Portfolio Data
const portfolioData = {
  profile: {
    name: "JEEVAN KUMAR",
    title: "Software Development Engineer I – Backend (Node.js)",
    headline: "Results-driven Backend Developer specializing in scalable REST APIs, Cloud architecture & Full-Stack Node.js/React applications.",
    email: "jeevankumar3229@gmail.com",
    phone: "+91-9113245858",
    location: "Karkala, Udupi - 576121, Karnataka, India",
    linkedin: "https://linkedin.com/in/jeevan-kumar-6659451a0",
    github: "https://github.com/jeevankumar3229",
    summary: "Results-driven Backend Developer with 1.5+ years of hands-on experience designing, developing, and deploying scalable server-side applications using Node.js and Express.js. Currently serving as SDE I (Full-Time) at Capillary Technologies, engineering RESTful APIs for enterprise-grade mobile and data migration projects. Proven track record of developing 20+ production APIs, implementing structured error handling, and collaborating with cross-functional teams in Agile environments. Proficient in leveraging AI-assisted development tools (Claude AI, ChatGPT, Cursor IDE, GitHub Copilot) to write optimized, cleaner code and accelerate delivery cycles.",
    metrics: [
      { label: "Experience", value: "1.5+ Yrs", subtext: "Backend & Full-Stack SDE" },
      { label: "Production APIs Built", value: "20+", subtext: "Enterprise Node.js endpoints" },
      { label: "Engineering CGPA", value: "9.2 / 10", subtext: "Computer Science & Engg." },
      { label: "Cloud & Serverless", value: "AWS", subtext: "Lambda, DynamoDB, S3, SQS" }
    ],
    languagesSpoken: ["English", "Kannada", "Hindi", "Tulu"]
  },

  skills: {
    backend: [
      { name: "Node.js", level: 95, category: "Backend" },
      { name: "Express.js", level: 92, category: "Backend" },
      { name: "RESTful API Design", level: 95, category: "Backend" },
      { name: "Sequelize ORM", level: 85, category: "Backend" },
      { name: "JWT Authentication", level: 90, category: "Backend" },
      { name: "Microservices & MVC Pattern", level: 88, category: "Backend" }
    ],
    cloudAndAWS: [
      { name: "AWS Lambda", level: 88, category: "Cloud" },
      { name: "Amazon DynamoDB", level: 85, category: "Cloud" },
      { name: "Amazon CloudWatch Logs", level: 90, category: "Cloud" },
      { name: "Amazon S3", level: 88, category: "Cloud" },
      { name: "Amazon SQS", level: 82, category: "Cloud" },
      { name: "AWS API Gateway & IAM", level: 85, category: "Cloud" }
    ],
    databases: [
      { name: "MongoDB", level: 88, category: "Database" },
      { name: "MySQL", level: 90, category: "Database" },
      { name: "DynamoDB", level: 85, category: "Database" }
    ],
    frontend: [
      { name: "React.js", level: 85, category: "Frontend" },
      { name: "JavaScript (ES6+)", level: 92, category: "Frontend" },
      { name: "HTML5 & CSS3", level: 90, category: "Frontend" },
      { name: "Bootstrap & Responsive UI", level: 85, category: "Frontend" },
      { name: "React Context API & Router", level: 85, category: "Frontend" }
    ],
    languages: [
      { name: "JavaScript (ES6+)", level: 95, category: "Languages" },
      { name: "Java", level: 80, category: "Languages" },
      { name: "Python", level: 78, category: "Languages" },
      { name: "C / C#", level: 75, category: "Languages" },
      { name: "SQL", level: 88, category: "Languages" }
    ],
    toolsAndDevOps: [
      { name: "Git & GitHub", level: 92, category: "Tools" },
      { name: "Postman API Testing", level: 95, category: "Tools" },
      { name: "VS Code / Cursor IDE", level: 95, category: "Tools" },
      { name: "Antigravity IDE", level: 90, category: "Tools" },
      { name: "ChatGPT & Claude AI & GitHub Copilot", level: 95, category: "AI Tools" }
    ]
  },

  experience: [
    {
      id: "exp-1",
      role: "Software Development Engineer I – Backend (Node.js)",
      company: "Capillary Technologies",
      location: "Mysore, Karnataka",
      type: "Full-Time Employee",
      period: "Jan 2026 – Present",
      highlights: [
        "Continuing to own and extend backend API development for enterprise client projects as a direct full-time employee.",
        "Driving backend architecture improvements, performance optimizations, and code quality initiatives across active projects.",
        "Developing and maintaining serverless functions using AWS Lambda, integrating with Amazon DynamoDB for scalable data storage.",
        "Monitoring application health and diagnosing production issues using Amazon CloudWatch Logs for real-time observability.",
        "Mentoring contract trainees and contributing to sprint planning, technical reviews, and cross-team collaboration.",
        "Built backend validation tools that reduced manual data verification effort and accelerated project delivery timelines.",
        "Leveraged Claude AI and Cursor IDE to accelerate code reviews, identify edge-case bugs, and refactor complex API logic, reducing debugging time."
      ],
      tags: ["Node.js", "Express.js", "AWS Lambda", "DynamoDB", "CloudWatch", "REST APIs", "Agile"]
    },
    {
      id: "exp-2",
      role: "Software Development Engineer – Backend (Node.js)",
      company: "Capillary Technologies (Contract via MountBlue Technologies)",
      location: "Mysore, Karnataka",
      type: "Contract",
      period: "Dec 2024 – Dec 2025",
      highlights: [
        "Engineered and deployed 20+ RESTful APIs using Node.js and Express.js, supporting seamless user interactions across multiple enterprise client modules.",
        "Collaborated on 30+ API endpoints, optimizing data retrieval and response handling to ensure fast, reliable performance.",
        "Implemented structured error handling and input validation across all API layers, reducing backend-related bug reports and improving application stability.",
        "Developed and integrated RESTful APIs to validate and process large-scale datasets, ensuring data accuracy across cross-organization workflows.",
        "Built and deployed serverless workflows using AWS Lambda, leveraging Amazon DynamoDB for efficient, scalable data storage and retrieval.",
        "Utilized Amazon CloudWatch Logs to monitor API performance, trace errors, and maintain visibility into backend service health.",
        "Defined API contracts with frontend and QA engineers, resolving integration issues and delivering production-ready features under Agile sprints."
      ],
      tags: ["Node.js", "Express.js", "MySQL", "AWS Lambda", "Postman", "REST Architecture"]
    },
    {
      id: "exp-3",
      role: "Trainee Software Engineer – Full Stack (React.js, Node.js)",
      company: "MountBlue Technologies",
      location: "Bangalore, Karnataka",
      type: "Full Stack Training",
      period: "Sep 2024 – Nov 2024",
      highlights: [
        "Completed intensive full-stack training covering React.js front-end development and Node.js / Express.js backend fundamentals, delivering production-grade web applications with real-world complexity.",
        "Built responsive front-end interfaces using React.js, and developed server-side functionality with Node.js, Express.js.",
        "Integrated React.js components with RESTful APIs."
      ],
      tags: ["React.js", "Node.js", "Express.js", "JavaScript ES6+", "HTML5/CSS3"]
    },
    {
      id: "exp-4",
      role: "Graduate Engineering Trainee - Product Training",
      company: "GlowTouch Technologies",
      location: "Mangalore, Karnataka",
      type: "Product Trainee",
      period: "May 2024 – Aug 2024",
      highlights: [
        "Handled customer chats with a concurrency of 4 at a time, resolving technical issues efficiently.",
        "Performed basic website troubleshooting and resolved downtime-related issues for clients.",
        "Gained working knowledge of domain management and email troubleshooting."
      ],
      tags: ["Technical Troubleshooting", "Domain Management", "Customer Support"]
    },
    {
      id: "exp-5",
      role: "Programming Engineer",
      company: "Winman Software India LLP",
      location: "Mangalore, Karnataka",
      type: "Temporary Employee",
      period: "Mar 2024 – Apr 2024",
      highlights: [
        "Tested company products to identify and report defects, ensuring software quality and reliability.",
        "Contributed to the research team by investigating topics and presenting possible solutions."
      ],
      tags: ["Software Testing", "Quality Assurance", "Defect Tracking"]
    },
    {
      id: "exp-6",
      role: "Software Engineering Intern – C# / ASP.NET",
      company: "Resideo Smart Home Technologies",
      location: "Bangalore / Remote",
      type: "Internship",
      period: "Feb 2023 – Aug 2023",
      highlights: [
        "Worked on Web API, Event Hub, and IoT Hub using C# and ASP.NET.",
        "Implemented Proof-of-Concept (POC) projects related to Web API, Event Hub, and IoT Hub integrations."
      ],
      tags: ["C#", "ASP.NET", "Web API", "IoT Hub", "Event Hub"]
    }
  ],

  projects: [
    {
      id: "organ-donation-system",
      title: "Online Organ Donation System",
      category: "Full-Stack & Backend",
      techStack: ["Node.js", "Express.js", "JavaScript (ES6+)", "SQL", "MySQL", "EJS", "HTML5", "CSS3", "Resend API"],
      summary: "Full-stack medical management web platform connecting organ donors, doctors, and hospitals with multi-role dashboards and automated email alerts.",
      highlights: [
        "Developed a responsive web-based Organ Donation System connecting donors, doctors, and hospitals to streamline organ registration, requests, and matching.",
        "Designed and normalized a relational database schema across 7 core entities (Donors, Doctors, Organ Inventory, Power of Attorney) ensuring data integrity and query efficiency.",
        "Implemented multi-user authentication and session management to direct Donors and Doctors to dedicated management dashboards with role-specific access.",
        "Created dynamic, user-friendly interfaces with security-question password recovery and automated email notifications for real-time donor and request alerts."
      ],
      githubUrl: "https://github.com/jeevankumar3229",
      featured: true
    },
    {
      id: "threadcraft-ecommerce",
      title: "ThreadCraft E-Commerce Storefront",
      category: "Full-Stack",
      techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Node.js (HTTP API)", "REST API", "Browser LocalStorage"],
      summary: "Full-stack e-commerce application with real-time price calculations, single-product details, persistent shopping cart, and custom Node.js payment API.",
      highlights: [
        "Developed a full-stack, responsive e-commerce storefront for browsing, selecting, and purchasing men's and women's fashion apparel.",
        "Organized products into structured categories (shirts, outerwear, etc.) with dedicated single-product detail views.",
        "Built an interactive shopping cart featuring real-time price calculations, quantity adjustments, subtotal tracking, and persistent storage via browser LocalStorage.",
        "Designed an end-to-end checkout flow guiding users from cart review through shipping details to payment processing.",
        "Implemented backend payment processing with a custom Node.js server handling mock card payments via a REST API endpoint (/api/process-payment).",
        "Automated order receipts with dynamic transaction IDs, order numbers, timestamps, and payment confirmation details upon successful orders."
      ],
      githubUrl: "https://github.com/jeevankumar3229",
      featured: true
    },
    {
      id: "rest-countries-explorer",
      title: "REST Countries Explorer",
      category: "Frontend & API Integration",
      techStack: ["React.js", "React Router", "REST API", "Context API", "JavaScript", "CSS3"],
      summary: "Interactive country statistics explorer featuring subregion filtering, global light/dark theme state management, and detailed border country navigation.",
      highlights: [
        "Integrated with the REST Countries API to fetch and display data for all countries on a responsive homepage with search and region/subregion filter functionality.",
        "Implemented dynamic subregion filtering based on selected region, and sorting by population and area in ascending/descending order.",
        "Built a detail page using React Router allowing users to view in-depth country information and navigate through border countries.",
        "Implemented light/dark mode theme toggling using React Context API, with state managed globally across the application."
      ],
      githubUrl: "https://github.com/jeevankumar3229",
      featured: true
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering – Computer Science & Engineering",
      institution: "Mangalore Institute of Technology & Engineering (MITE)",
      location: "Mangalore, Karnataka",
      period: "2019 – 2023",
      score: "CGPA: 9.2 / 10",
      details: "Focused on Data Structures, Database Systems, Software Engineering, Web Technologies, and Cloud Infrastructure."
    },
    {
      degree: "Senior Secondary (12th Grade)",
      institution: "S.D.P.T Pre-University College",
      location: "Kateel, Karnataka",
      period: "2018 – 2019",
      score: "Grade: 93.17%",
      details: "Physics, Chemistry, Mathematics, Computer Science specialization."
    }
  ],

  certifications: [
    {
      title: "Learn Programming with Java – An Interactive Way",
      issuer: "Infosys Springboard",
      description: "Java basics, OOP principles, Encapsulation, Exception Handling."
    },
    {
      title: "Software Engineering",
      issuer: "Swayam NPTEL",
      description: "Requirement analysis, System Design, OOP Concepts, SDLC methodologies."
    },
    {
      title: "The Complete 2023 Web Development Bootcamp",
      issuer: "Udemy",
      description: "Full-stack web development, Node.js, Express, React, RESTful APIs."
    }
  ]
};

// GET Profile
router.get('/profile', (req, res) => {
  res.json({ success: true, data: portfolioData.profile });
});

// GET Skills
router.get('/skills', (req, res) => {
  res.json({ success: true, data: portfolioData.skills });
});

// GET Experience
router.get('/experience', (req, res) => {
  res.json({ success: true, data: portfolioData.experience });
});

// GET Projects
router.get('/projects', (req, res) => {
  const category = req.query.category;
  if (category && category !== 'All') {
    const filtered = portfolioData.projects.filter(p => 
      p.category.toLowerCase().includes(category.toLowerCase()) || 
      p.techStack.some(t => t.toLowerCase().includes(category.toLowerCase()))
    );
    return res.json({ success: true, count: filtered.length, data: filtered });
  }
  res.json({ success: true, count: portfolioData.projects.length, data: portfolioData.projects });
});

// GET Education & Certifications
router.get('/education', (req, res) => {
  res.json({
    success: true,
    data: {
      education: portfolioData.education,
      certifications: portfolioData.certifications
    }
  });
});

// GET Server Live Stats & Observability metrics
router.get('/stats', (req, res) => {
  const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);
  const memoryUsage = process.memoryUsage();

  res.json({
    success: true,
    serverTime: new Date().toISOString(),
    status: "HEALTHY",
    nodeVersion: process.version,
    uptimeSeconds,
    totalApiRequests,
    memoryUsageMB: {
      rss: (memoryUsage.rss / 1024 / 1024).toFixed(2),
      heapTotal: (memoryUsage.heapTotal / 1024 / 1024).toFixed(2),
      heapUsed: (memoryUsage.heapUsed / 1024 / 1024).toFixed(2)
    },
    activeServices: ["Node.js API Router", "Express Engine", "CORS Middleware", "JSON Parser"]
  });
});

const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const messagesFilePath = path.join(__dirname, '../messages.json');

// Helper to load messages from disk
const loadSavedMessages = () => {
  try {
    if (fs.existsSync(messagesFilePath)) {
      const fileData = fs.readFileSync(messagesFilePath, 'utf8');
      return JSON.parse(fileData);
    }
  } catch (err) {
    console.error('Failed to load saved messages from file:', err.message);
  }
  return [];
};

const contactMessages = loadSavedMessages();

const https = require('https');

const sendViaResend = (apiKey, name, email, subject, message, targetEmail) => {
  return new Promise((resolve) => {
    const postData = JSON.stringify({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [targetEmail],
      reply_to: email,
      subject: `[Portfolio Message] ${subject || 'New Contact Form Submission'}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0284c7;">New Portfolio Contact Message</h2>
          <p><strong>From:</strong> ${name} (&lt;${email}&gt;)</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f8fafc; padding: 16px; border-left: 4px solid #0284c7; border-radius: 4px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `
    });

    const req = https.request('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve(res.statusCode >= 200 && res.statusCode < 300));
    });

    req.on('error', (err) => {
      console.error('Resend API Error:', err.message);
      resolve(false);
    });

    req.write(postData);
    req.end();
  });
};

// Create Nodemailer Transporter
const createEmailTransporter = () => {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (user && pass && pass.trim().length > 0) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE === 'true' || true,
      auth: { user, pass }
    });
  }
  return null;
};

// GET all submitted contact messages
router.get('/messages', (req, res) => {
  res.json({
    success: true,
    totalMessages: contactMessages.length,
    data: contactMessages
  });
});

// POST Contact Form Endpoint
router.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Validation Failed: Name, Email, and Message are required fields."
    });
  }

  const newMessage = {
    id: `msg-${Date.now()}`,
    name: name.trim(),
    email: email.trim(),
    subject: subject ? subject.trim() : 'General Portfolio Inquiry',
    message: message.trim(),
    timestamp: new Date().toISOString()
  };

  contactMessages.push(newMessage);

  // 1. Save to JSON File
  try {
    fs.writeFileSync(messagesFilePath, JSON.stringify(contactMessages, null, 2), 'utf8');
  } catch (err) {
    console.error('Failed to save message to messages.json:', err.message);
  }

  // 2. Attempt Real Email Delivery (Gmail SMTP or Resend API)
  const targetEmail = process.env.RECIPIENT_EMAIL || 'jeevankumar3229@gmail.com';
  const transporter = createEmailTransporter();
  let emailSent = false;
  let deliveryStatusText = '';

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"${name} via Portfolio" <${process.env.SMTP_USER}>`,
        to: targetEmail,
        replyTo: email,
        subject: `📬 [Portfolio Message] ${newMessage.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 24px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #0284c7; border-bottom: 2px solid #0284c7; padding-bottom: 10px; margin-top: 0;">New Contact Form Message</h2>
            <p><strong>From Name:</strong> ${name}</p>
            <p><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #0284c7;">${email}</a></p>
            <p><strong>Subject:</strong> ${newMessage.subject}</p>
            <p><strong>Received At:</strong> ${new Date(newMessage.timestamp).toLocaleString()}</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p><strong>Message Content:</strong></p>
            <div style="background-color: #f8fafc; padding: 16px; border-left: 4px solid #0284c7; border-radius: 4px; font-size: 15px; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        `
      });
      emailSent = true;
      deliveryStatusText = `Real email sent to ${targetEmail} via Nodemailer Gmail SMTP`;
    } catch (err) {
      console.error('Nodemailer SMTP Error:', err.message);
      deliveryStatusText = `SMTP Error: ${err.message}`;
    }
  }

  // 3. Fallback: Resend API
  if (!emailSent && process.env.RESEND_API_KEY) {
    const resendSuccess = await sendViaResend(process.env.RESEND_API_KEY, name, email, newMessage.subject, message, targetEmail);
    if (resendSuccess) {
      emailSent = true;
      deliveryStatusText = `Real email delivered to ${targetEmail} via Resend API`;
    }
  }

  if (!emailSent) {
    deliveryStatusText = `Saved to server/messages.json. To send to ${targetEmail}, add your Gmail App Password to server/.env under SMTP_PASS or add RESEND_API_KEY.`;
  }

  console.log(`====================================================`);
  console.log(`📬 NEW CONTACT MESSAGE RECEIVED!`);
  console.log(`ID: ${newMessage.id}`);
  console.log(`From: ${newMessage.name} (${newMessage.email})`);
  console.log(`To Target Email: ${targetEmail}`);
  console.log(`Status: ${deliveryStatusText}`);
  console.log(`====================================================`);

  res.status(201).json({
    success: true,
    message: `Thank you, ${name}! Your message has been received and saved.`,
    data: {
      ...newMessage,
      emailSent,
      deliveryStatusText
    }
  });
});

// Demo Endpoint 1: Organ Donation Match Simulation
router.post('/demo/organ-donation/match', (req, res) => {
  const { organType, bloodGroup, urgency } = req.body;
  if (!organType || !bloodGroup) {
    return res.status(400).json({
      success: false,
      error: "Please select an Organ Type and Blood Group to run the backend match query."
    });
  }

  const mockDonors = [
    { donorId: "DNR-8092", organ: organType, bloodGroup: bloodGroup, distanceKm: 12.4, status: "Available", VerifiedByDoctor: "Dr. K. Sharma (MITE Hospital)" },
    { donorId: "DNR-4120", organ: organType, bloodGroup: bloodGroup, distanceKm: 28.1, status: "Available", VerifiedByDoctor: "Dr. A. Rao (KMC Mangalore)" }
  ];

  res.json({
    success: true,
    query: { organType, bloodGroup, urgency: urgency || "Standard" },
    matchesFound: mockDonors.length,
    executionTimeMs: 14,
    databaseEntitiesChecked: ["Donors", "Doctors", "OrganInventory", "Hospitals"],
    results: mockDonors
  });
});

// Demo Endpoint 2: ThreadCraft Payment & Receipt Processing
router.post('/demo/threadcraft/checkout', (req, res) => {
  const { items, customerName, cardNumber } = req.body;
  const itemCount = Array.isArray(items) ? items.length : 1;
  const mockSubtotal = itemCount * 49.99;
  const tax = mockSubtotal * 0.08;
  const totalAmount = mockSubtotal + tax;

  const receipt = {
    transactionId: `TXN-${Math.floor(100000 + Math.random() * 900000)}`,
    orderNumber: `ORD-${Date.now()}`,
    timestamp: new Date().toISOString(),
    customer: customerName || "Guest Purchaser",
    cardLast4: cardNumber ? cardNumber.slice(-4) : "4242",
    summary: {
      itemCount,
      subtotal: `$${mockSubtotal.toFixed(2)}`,
      tax: `$${tax.toFixed(2)}`,
      total: `$${totalAmount.toFixed(2)}`
    },
    status: "PAYMENT_SUCCESSFUL",
    paymentGatewayResponse: "200 OK - Card Charged via Node.js Mock REST API"
  };

  res.json({
    success: true,
    receipt
  });
});

module.exports = router;
