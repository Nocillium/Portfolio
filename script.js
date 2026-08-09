const navToggle = document.querySelector('.mobile-nav-toggle');
const navMenu = document.querySelector('.site-nav');
const techItems = document.querySelectorAll('.tech-item');
const stackDetailText = document.querySelector('.stack-detail-text');
const revealElements = document.querySelectorAll('.reveal, .reveal-item');

function toggleMenu() {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navMenu.classList.toggle('open');
}

function closeMenu() {
  navToggle.setAttribute('aria-expanded', 'false');
  navMenu.classList.remove('open');
}

navToggle.addEventListener('click', toggleMenu);
navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

techItems.forEach((button) => {
  button.addEventListener('mouseenter', () => {
    stackDetailText.textContent = button.dataset.detail;
  });
  button.addEventListener('focus', () => {
    stackDetailText.textContent = button.dataset.detail;
  });
});

const projectData = {
  'project-ai-hr-assistant': {
    title: 'AI HR Assistant',
    category: 'AI Agents • Business Automation',
    tools: 'OpenAI Platform, OpenAI Assistants, OpenAI Vector Store, Vercel',
    overview: 'An AI-powered HR assistant designed to help with HR administrative tasks by classifying requests and routing questions to specialized agents.',
    howItWorks: 'User requests are first protected by a jailbreak guardrail, then passed to a classification agent. The classification agent directs the request to a specialized HR agent for job descriptions, interviews, onboarding, or general hiring questions.',
    features: [
      'AI HR assistant',
      'OpenAI Assistants',
      'Built-in Vector Store',
      'Knowledge retrieval',
      'Request classification',
      'Specialized AI agents',
      'Jailbreak protection',
      'Scope control',
    ],
    businessValue: 'Provides HR teams with a centralized AI assistant capable of answering HR questions using the organization’s internal knowledge while keeping conversations on scope.',
    architecture: 'User → Jailbreak Guardrail → Classification Agent → Specialized AI Agent → Response',
    gallery: ['assets/ai_agent_assistant.png'],
  },
  'project-ai-appointment-setter': {
    title: 'AI Appointment Setter Voice Agent',
    category: 'Voice AI • Workflow Automation',
    tools: 'Bland AI, Make, Google Calendar, Google Ecosystem, Webhooks',
    overview: 'A voice agent that qualifies appointment requests, checks calendar availability through Make, and schedules or suggests alternatives automatically.',
    howItWorks: 'The customer interacts with an AI voice agent, which determines interest and appointment details. A webhook routes the request to Make, which validates calendar availability and returns a confirmation or alternative time.',
    features: [
      'AI voice conversations',
      'Appointment qualification',
      'Appointment scheduling',
      'Webhook integration',
      'Calendar availability checking',
      'Conditional routing',
      'Automated confirmation',
      'Alternative appointment handling',
    ],
    businessValue: 'Automates appointment scheduling through AI voice conversations, reducing manual coordination and improving responsiveness.',
    architecture: 'Customer → AI Voice Agent → Appointment Request → Webhook → Make → Calendar Availability Check → Confirmation / Alternative Time',
    gallery: ['assets/bland_proj2.png'],
  },
  'project-ai-rental-voice-agent': {
    title: 'AI Rental Management Voice Agent',
    category: 'Voice AI • Business Automation',
    tools: 'Bland AI, Webhooks, REST APIs, External Rental System',
    overview: 'A conversational voice system that validates rental details, retrieves records via API, handles extensions, and executes fallback paths when needed.',
    howItWorks: 'The system gathers customer and rental details, validates identities and rental IDs, retrieves rental info, processes extension requests, and confirms changes or transfers to a human agent if validation fails.',
    features: [
      'Customer information collection',
      'Last-name validation',
      'Rental ID validation',
      'Rental information retrieval',
      'REST API integration',
      'Rental extension handling',
      'Extension quote retrieval',
      'Customer confirmation',
      'API error handling',
      'Human agent transfer',
      'Fallback handling',
      'Call termination',
    ],
    businessValue: 'Demonstrates how voice AI can integrate with external systems and execute multi-step business logic for rental operations.',
    architecture: 'Customer → AI Voice Agent → Validation → API Retrieval → Extension Handling → Confirmation / Transfer',
    gallery: ['assets/bland_rental1.png', 'assets/bland_rental2.png', 'assets/bland_rental3.png'],
  },
  'project-ai-business-process-automation': {
    title: 'AI Business Process Automation',
    category: 'Workflow Automation • AI Agents',
    tools: 'Make, OpenAI, Google Sheets, Google Docs, Gmail, HTTP, Webhooks',
    overview: 'A business workflow that ingests data, applies AI analysis, and routes results through Google productivity tools and HTTP endpoints.',
    howItWorks: 'Incoming data enters via webhook, then AI processes the content and routes results to Google Sheets, Google Docs, Gmail, or HTTP destinations based on workflow rules.',
    features: [
      'Webhook automation',
      'AI processing',
      'Conditional routing',
      'Google Sheets integration',
      'Google Docs integration',
      'Gmail integration',
      'HTTP/API integration',
      'Multi-path automation',
    ],
    businessValue: 'Connects AI with business applications to automate repetitive data processing and communication tasks.',
    architecture: 'Webhook → OpenAI → Router → Google Sheets / Google Docs → AI Processing → Router → Gmail / HTTP / Google Sheets',
    gallery: ['assets/make_project1.png'],
  },
  'project-multi-stage-ai-data-processing': {
    title: 'Multi-Stage AI Data Processing Automation',
    category: 'AI Agents • Workflow Automation',
    tools: 'Make, OpenAI, Google Sheets, Gmail, Routers',
    overview: 'A multi-stage AI workflow that processes information across conditional branches and delivers the right business path.',
    howItWorks: 'Information is evaluated in stages, with routers and conditionals directing data through AI analysis, sheet updates, and email delivery based on workflow rules.',
    features: [
      'Multi-stage AI processing',
      'Conditional routing',
      'Google Sheets integration',
      'Automated email communication',
      'AI-generated content',
      'Data lookup',
      'Data updates',
      'Multiple workflow branches',
    ],
    businessValue: 'Combines multiple AI and automation processes into a larger business workflow that adapts to different outcomes.',
    architecture: 'Input → AI analysis → Router → Google Sheets / Gmail → Outcome delivery',
    gallery: ['assets/make_project2.png'],
  },
  'project-enterprise-rag-chatbot-assistant': {
    title: 'Enterprise RAG Chatbot Assistant',
    category: 'RAG • AI Agents',
    tools: 'n8n, OpenAI, OpenRouter, Google Gemini, PostgreSQL, Supabase, Mistral, Slack, REST APIs',
    overview: 'An enterprise RAG assistant that enables users to query large business document collections through a retrieval and AI response pipeline.',
    howItWorks: 'Documents are ingested, chunked, enriched, embedded, and stored in a vector database. Queries are rewritten, hybrid-searched, fused, deduplicated, ranked, and delivered to the AI agent with context.',
    features: [
      'Enterprise RAG architecture',
      'Large document processing',
      'Semantic chunking',
      'Contextual enrichment',
      'Query rewriting',
      'Query expansion',
      'Hybrid retrieval',
      'Vector search',
      'Keyword search',
      'Deduplication',
      'Re-ranking',
      'Persistent memory',
      'OCR processing',
    ],
    businessValue: 'Provides an AI knowledge assistant that can search large internal document collections and return context-aware answers.',
    architecture: 'Documents → Processing → Embeddings → Vector Database | Query → Rewriting → Hybrid Search → Fusion → AI Agent → Response',
    gallery: ['assets/n8n_project1.jpg'],
  },
  'project-ai-incident-management-automation': {
    title: 'AI Incident Management Automation',
    category: 'IT Automation • Workflow Automation',
    tools: 'n8n, OpenAI, Jira, Google Sheets, Gmail, Slack',
    overview: 'An AI workflow that triages incidents, creates Jira tickets, and updates tracking and notifications through team channels.',
    howItWorks: 'Incident reports are analyzed and classified by AI, then Jira issues are created and updated while Google Sheets and Slack keep the team informed through the lifecycle.',
    features: [
      'AI-powered incident triage',
      'Automatic severity classification',
      'Intelligent team assignment',
      'Automatic Jira ticket creation',
      'Google Sheets tracking',
      'Gmail notifications',
      'Slack alerts',
      'Jira status monitoring',
      'Automated resolution tracking',
      'Resolution notifications',
    ],
    businessValue: 'Reduces manual incident handling by connecting AI triage, ticket creation, tracking, and communication into one automated workflow.',
    architecture: 'Incident → AI Triage → Jira Issue → Tracking → Notification → Resolution',
    gallery: ['assets/n8n_project2.png'],
  },
  'project-powerbi-dashboards': {
    title: 'Power BI Business Intelligence Dashboards',
    category: 'Business Intelligence • Data Analytics',
    tools: 'Microsoft Power BI, DAX, Power Query, Data Modeling, Data Transformation, KPI Development, Excel Data Integration',
    overview: 'A collection of Power BI business intelligence dashboards designed to transform operational and business data into interactive, decision-ready reports. The dashboards provide visibility into sales performance, churn and retention, repossessions, collections, account status, sales goals, productivity, billed hours, invoice performance, and operational KPIs.',
    howItWorks: 'Sales Churn Dashboard: Monitors 90-day sales, repossessed and retained accounts, retention and repossession rates, location-level performance, average down payment, average days held, deferred payments, and principal received across locations including Campbellsville and Bowling Green. Collections Dashboard: Tracks total accounts, current and late accounts, promise-to-pay, repossession-in-process, overdue accounts, write-off metrics, and payment schedules to help collection teams prioritize action. Sales Performance Dashboard: Measures monthly sales goals, units sold, units remaining, down payment metrics, DCC and iStash performance, retail sales, and gross revenue across Retail, Bowling Green, Campbellsville, and DR45 locations. ReGo / Productivity Dashboard: Monitors invoice performance, billed hours for current and previous weeks, and individual technician productivity using KPI gauges and a detailed performance table.',
    features: [
      'Interactive Business Dashboards',
      'KPI Tracking',
      'DAX Measures',
      'Data Modeling',
      'Power Query',
      'Sales Analytics',
      'Collections Analytics',
      'Productivity Analytics',
      'Retention & Churn Analysis',
      'Operational Reporting',
      'Location-Level Analysis',
      'Automated Data Refresh',
    ],
    businessValue: 'Transforms raw operational and business data into actionable dashboards that allow management to monitor performance, identify issues, track KPIs, and make data-driven decisions. Delivers faster access to business insights, centralized reporting, easier KPI monitoring, improved operational visibility, data-driven decision making, and reduced dependence on manually prepared reports.',
    architecture: 'Data Sources → Power Query → Data Model → DAX Calculations → Power BI Dashboards → Business Insights',
    galleryItems: [
      { src: 'assets/powerbi_1.png', caption: 'Sales Churn Dashboard' },
      { src: 'assets/powerbi_2.png', caption: 'Collections Dashboard' },
      { src: 'assets/powerbi_3.png', caption: 'Sales Performance Dashboard' },
      { src: 'assets/powerbi_4.png', caption: 'ReGo / Productivity Dashboard' },
    ],
  },
  'project-ai-lead-response-sales-automation': {
    title: 'AI Lead Response & Sales Automation',
    category: 'Sales Automation • AI Agents',
    tools: 'Zapier, AI by Zapier, HubSpot, Gmail, Slack, Asana',
    overview: 'An AI-driven lead response workflow that classifies email replies and automates CRM updates, notifications, and follow-up tasks.',
    howItWorks: 'The workflow analyzes incoming email responses, updates HubSpot records, and routes leads through positive, unclear, or unsubscribe workflows with automation in Slack and Asana.',
    features: [
      'AI lead classification',
      'Automated email processing',
      'HubSpot integration',
      'Lead status updates',
      'Conditional paths',
      'Slack notifications',
      'Automated follow-up tasks',
      'Asana integration',
      'Sales workflow automation',
    ],
    businessValue: 'Automatically converts email responses into structured sales actions, reducing manual lead sorting and follow-up work.',
    architecture: 'Response → HubSpot check → AI classification → Workflow branch → Update CRM / Notify / Task creation',
    gallery: ['assets/zapier_project1.jpg'],
  },
};

const projectOverlay = document.getElementById('projectModalOverlay');
const projectModalInner = document.querySelector('.project-modal-inner');
const projectOpenButtons = document.querySelectorAll('.project-open');
const projectCloseButton = document.querySelector('.modal-close');
const lightboxOverlay = document.getElementById('projectLightbox');
const lightboxCloseButton = document.querySelector('.lightbox-close');
const lightboxImage = document.querySelector('.lightbox-image');

function openProjectModal(projectKey) {
  const project = projectData[projectKey];
  if (!project) return;

  projectModalInner.innerHTML = `
    <div class="project-meta">
      <div class="project-field">
        <strong>Project</strong>
        <p>${project.title}</p>
      </div>
      <div class="project-field">
        <strong>Category</strong>
        <p>${project.category}</p>
      </div>
      <div class="project-field">
        <strong>Tools Used</strong>
        <p>${project.tools}</p>
      </div>
      <div class="project-field">
        <strong>Architecture</strong>
        <p>${project.architecture}</p>
      </div>
    </div>
    <div class="project-sections">
      <div>
        <h3>${project.title}</h3>
        <p>${project.overview}</p>
      </div>
      <div>
        <h4>How It Works</h4>
        <p>${project.howItWorks}</p>
      </div>
      <div>
        <h4>Key Features</h4>
        <ul>${project.features.map((feature) => `<li>${feature}</li>`).join('')}</ul>
      </div>
      <div>
        <h4>Business Value</h4>
        <p>${project.businessValue}</p>
      </div>
      <div class="project-gallery">
        ${(project.galleryItems
          ? project.galleryItems.map(({src, caption}) => `<figure class="project-gallery-item"><img src="${src}" alt="${caption}" data-src="${src}" /><figcaption>${caption}</figcaption></figure>`)
          : project.gallery.map((src) => `<img src="${src}" alt="${project.title} screenshot" data-src="${src}" />`))
          .join('')}
      </div>
    </div>
  `;

  projectOverlay.classList.remove('hidden');
  projectOverlay.setAttribute('aria-hidden', 'false');
}

function closeProjectModal() {
  projectOverlay.classList.add('hidden');
  projectOverlay.setAttribute('aria-hidden', 'true');
}

function openLightbox(src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightboxOverlay.classList.remove('hidden');
  lightboxOverlay.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  lightboxOverlay.classList.add('hidden');
  lightboxOverlay.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
}

projectOpenButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openProjectModal(button.dataset.target);
  });
});

projectCloseButton.addEventListener('click', closeProjectModal);
projectOverlay.addEventListener('click', (event) => {
  if (event.target === projectOverlay) closeProjectModal();
});

lightboxCloseButton.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', (event) => {
  if (event.target === lightboxOverlay) closeLightbox();
});

projectOverlay.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeProjectModal();
});

lightboxOverlay.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});

const projectGalleryObserver = new MutationObserver(() => {
  document.querySelectorAll('.project-gallery img').forEach((image) => {
    image.addEventListener('click', () => openLightbox(image.dataset.src, image.alt));
  });
});
projectGalleryObserver.observe(projectModalInner, { childList: true, subtree: true });

document.querySelectorAll('.cert-image-card img').forEach((image) => {
  image.addEventListener('click', () => openLightbox(image.src, image.alt));
});

function revealAllSections() {
  revealElements.forEach((element) => element.classList.add('visible'));
}

function initRevealObserver() {
  if (!('IntersectionObserver' in window)) {
    revealAllSections();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((element) => observer.observe(element));

  setTimeout(() => {
    if ([...revealElements].some((element) => !element.classList.contains('visible'))) {
      revealAllSections();
    }
  }, 1500);
}

window.addEventListener('load', () => {
  initRevealObserver();
  setTimeout(() => {
    if ([...revealElements].some((element) => !element.classList.contains('visible'))) {
      revealAllSections();
    }
  }, 2500);
});

// Wait for EmailJS to load
// Simple form validation for Formspree
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    const fields = Array.from(contactForm.querySelectorAll('[required]'));
    let valid = true;

    fields.forEach((field) => {
      const errorElement = field.parentElement.querySelector('.field-error');
      if (!field.value.trim()) {
        valid = false;
        errorElement.textContent = 'This field is required.';
      } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        valid = false;
        errorElement.textContent = 'Enter a valid email address.';
      } else {
        errorElement.textContent = '';
      }
    });

    if (!valid) {
      event.preventDefault();
    }
  });
}
