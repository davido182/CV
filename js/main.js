// David Ochoa Márquez - Personal Website JavaScript

// Language content data
const content = {
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    hero: {
      title: 'Ángel David Ochoa Márquez',
      subtitle: 'Analista Financiero & Desarrollador',
      description: 'Especialista en IA, Cloud Computing y PropTech con pasión por crear soluciones tecnológicas innovadoras',
      contactBtn: 'Contáctame',
      projectsBtn: 'Ver Proyectos'
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Profesional altamente analítico y proactivo con experiencia en gestión financiera y desarrollo tecnológico',
      story: 'Mi trayectoria profesional combina la gestión financiera con la innovación tecnológica. He trabajado en diversos sectores, desde instituciones gubernamentales hasta startups de IA, siempre enfocándome en optimizar procesos y crear soluciones eficientes.',
      passion: 'Me apasiona la intersección entre finanzas y tecnología, especialmente en áreas como PropTech, inteligencia artificial y cloud computing. Mi experiencia me ha permitido desarrollar una perspectiva única sobre cómo la tecnología puede transformar los procesos financieros.',
      stats: {
        experience: '7+ Años de experiencia',
        projects: '15+ Proyectos completados',
        technologies: '10+ Tecnologías dominadas'
      },
      contact: {
        email: 'adochoam@outlook.com',
        phone: '+34 644998640',
        location: 'Rotterdam, Países Bajos',
        linkedin: 'linkedin.com/in/david-ochoa-marquez'
      }
    },
    experience: {
      title: 'Experiencia Laboral',
      subtitle: 'Mi trayectoria profesional en desarrollo tecnológico y gestión financiera',
      jobs: [
        {
          title: 'Operador de Máquina Industrial con IA',
          company: 'Kobus Personeel & Organisatie',
          location: 'Rotterdam, Países Bajos',
          period: 'Febrero 2025 - Actual',
          description: 'Operación y monitoreo de máquina industrial potenciada por IA en el sector alimentario, asegurando rendimiento de producción óptimo y resolviendo interrupciones mecánicas. Capacitación a colegas en interacción con máquinas de IA.',
          technologies: ['IA Industrial', 'Mantenimiento Preventivo', 'Capacitación', 'Resolución de Problemas']
        },
        {
          title: 'Analista de Inteligencia Artificial',
          company: 'Triangle Solutions ETT S.L. / Outlier AI',
          location: 'Barcelona, España',
          period: 'Noviembre 2024 - Febrero 2025',
          description: 'Diseño y evaluación de prompts y documentación de respuestas de modelos de IA NLP/LLM. Aseguré calidad, control y precisión ajustados a cada proyecto, proporcionando retroalimentación continua.',
          technologies: ['NLP', 'LLM', 'Prompt Engineering', 'Control de Calidad']
        },
        {
          title: 'Gerente de Proyecto',
          company: 'Constructora y Consultora Herdaom Cía. Ltda.',
          location: 'Loja, Ecuador',
          period: 'Julio - Octubre 2024',
          description: 'Lideré proyecto completo de renovación de propiedades, aumentando ingresos del activo en 160%. Gestioné alcance, cronograma y presupuesto, completando exitosamente en 3 meses con período de recuperación de 25 meses.',
          technologies: ['Gestión de Proyectos', 'Análisis Financiero', 'PropTech', 'Desarrollo Web']
        },
        {
          title: 'Técnico Informático',
          company: 'Iniziar Inversiones y Proyectos S.L.',
          location: 'Salamanca, España',
          period: 'Junio - Diciembre 2023',
          description: 'Desarrollo de páginas web usando IA y métodos tradicionales (HTML, WordPress). Rediseño del sitio web oficial, aumentando tráfico online en 30% y engagement en redes sociales en 20%.',
          technologies: ['WordPress', 'HTML', 'IA', 'SEO', 'Redes Sociales']
        },
        {
          title: 'Gerente Financiero',
          company: 'Consejo de la Judicatura Loja',
          location: 'Loja, Ecuador',
          period: 'Junio 2018 - Marzo 2021',
          description: 'Lideré equipo financiero gestionando 99% de recursos financieros anuales. Asesoré departamentos de RRHH y planificación, logrando coordinación exitosa para mejorar rendimiento institucional.',
          technologies: ['SAP', 'Gestión Financiera', 'Liderazgo', 'Planificación Estratégica']
        }
      ]
    },
    skills: {
      title: 'Habilidades Técnicas',
      subtitle: 'Tecnologías y herramientas que domino para crear soluciones efectivas',
      categories: {
        programming: {
          title: 'Programación & Herramientas',
          skills: [
            { name: 'Python', level: 85 },
            { name: 'SQL', level: 80 },
            { name: 'Power BI', level: 90 },
            { name: 'JavaScript', level: 75 }
          ]
        },
        cloud: {
          title: 'Cloud & Datos',
          skills: [
            { name: 'Microsoft Azure', level: 80 },
            { name: 'AWS', level: 75 },
            { name: 'Data Pipelines', level: 70 },
            { name: 'Cloud Integration', level: 75 }
          ]
        },
        ai: {
          title: 'IA/ML',
          skills: [
            { name: 'NLP/LLM', level: 85 },
            { name: 'Prompt Engineering', level: 90 },
            { name: 'Forecasting Models', level: 70 },
            { name: 'Machine Learning', level: 65 }
          ]
        }
      }
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Algunos de mis trabajos más relevantes y soluciones innovadoras',
      items: [
        {
          title: 'PropTech MVP - DepositDigest',
          description: 'Aplicación de gestión de propiedades basada en Python con integración de base de datos local. Automatización de seguimiento de contratos de alquiler y pronóstico de ingresos.',
          technologies: ['Python', 'Base de Datos', 'PropTech', 'Machine Learning'],
          demoLink: 'https://depositdigest.lovable.app/',
          videoLink: 'https://drive.google.com/file/d/1-oFiW_rJfJ2sqHJ5N_8kjyKXQaTQeOfk/view?usp=drive_link'
        }
      ]
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Listo para colaborar? Hablemos sobre tu próximo proyecto',
      form: {
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
        send: 'Enviar Mensaje'
      },
      info: {
        email: 'adochoam@outlook.com',
        phone: '+34 644998640',
        location: 'Rotterdam, Países Bajos',
        linkedin: 'LinkedIn'
      }
    }
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      title: 'Ángel David Ochoa Márquez',
      subtitle: 'Financial Analyst & Developer',
      description: 'AI, Cloud Computing and PropTech specialist with passion for creating innovative technological solutions',
      contactBtn: 'Contact Me',
      projectsBtn: 'View Projects'
    },
    about: {
      title: 'About Me',
      subtitle: 'Highly analytical and proactive professional with background in financial management and technological development',
      story: 'My professional journey combines financial management with technological innovation. I have worked in various sectors, from government institutions to AI startups, always focusing on optimizing processes and creating efficient solutions.',
      passion: 'I am passionate about the intersection between finance and technology, especially in areas like PropTech, artificial intelligence and cloud computing. My experience has allowed me to develop a unique perspective on how technology can transform financial processes.',
      stats: {
        experience: '7+ Years of experience',
        projects: '15+ Completed projects',
        technologies: '10+ Mastered technologies'
      },
      contact: {
        email: 'adochoam@outlook.com',
        phone: '+34 644998640',
        location: 'Rotterdam, Netherlands',
        linkedin: 'linkedin.com/in/david-ochoa-marquez'
      }
    },
    experience: {
      title: 'Work Experience',
      subtitle: 'My professional journey in technological development and financial management',
      jobs: [
        {
          title: 'AI-Powered Industrial Machine Operator',
          company: 'Kobus Personeel & Organisatie',
          location: 'Rotterdam, Netherlands',
          period: 'February 2025 - Current',
          description: 'Operating and monitoring AI-powered industrial machine in food sector, ensuring optimal production performance and resolving mechanical interruptions. Training colleagues in AI-machine interaction.',
          technologies: ['Industrial AI', 'Preventive Maintenance', 'Training', 'Problem Solving']
        },
        {
          title: 'Artificial Intelligence Analyst',
          company: 'Triangle Solutions ETT S.L. / Outlier AI',
          location: 'Barcelona, Spain',
          period: 'November 2024 - February 2025',
          description: 'Design and evaluation of prompts and documentation of AI NLP/LLM model responses. Ensured quality, control and accuracy adjusted to each project, providing continuous feedback.',
          technologies: ['NLP', 'LLM', 'Prompt Engineering', 'Quality Control']
        },
        {
          title: 'Project Manager',
          company: 'Constructora y Consultora Herdaom Cía. Ltda.',
          location: 'Loja, Ecuador',
          period: 'July - October 2024',
          description: 'Led full-cycle property renovation project, increasing asset revenue by 160%. Managed scope, schedule, and budget, successfully completing within 3-month timeline with 25-month payback period.',
          technologies: ['Project Management', 'Financial Analysis', 'PropTech', 'Web Development']
        },
        {
          title: 'Computer Technician',
          company: 'Iniziar Inversiones y Proyectos S.L.',
          location: 'Salamanca, Spain',
          period: 'June - December 2023',
          description: 'Developed web pages using AI and traditional methods (HTML, WordPress). Redesigned official website, increasing online traffic by 30% and social media engagement by 20%.',
          technologies: ['WordPress', 'HTML', 'AI', 'SEO', 'Social Media']
        },
        {
          title: 'Financial Manager',
          company: 'Consejo de la Judicatura Loja',
          location: 'Loja, Ecuador',
          period: 'June 2018 - March 2021',
          description: 'Led financial team managing 99% of annual financial resources. Advised HR and planning departments, achieving successful coordination to improve institutional performance.',
          technologies: ['SAP', 'Financial Management', 'Leadership', 'Strategic Planning']
        }
      ]
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technologies and tools I master to create effective solutions',
      categories: {
        programming: {
          title: 'Programming & Tools',
          skills: [
            { name: 'Python', level: 85 },
            { name: 'SQL', level: 80 },
            { name: 'Power BI', level: 90 },
            { name: 'JavaScript', level: 75 }
          ]
        },
        cloud: {
          title: 'Cloud & Data',
          skills: [
            { name: 'Microsoft Azure', level: 80 },
            { name: 'AWS', level: 75 },
            { name: 'Data Pipelines', level: 70 },
            { name: 'Cloud Integration', level: 75 }
          ]
        },
        ai: {
          title: 'AI/ML',
          skills: [
            { name: 'NLP/LLM', level: 85 },
            { name: 'Prompt Engineering', level: 90 },
            { name: 'Forecasting Models', level: 70 },
            { name: 'Machine Learning', level: 65 }
          ]
        }
      }
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Some of my most relevant work and innovative solutions',
      items: [
        {
          title: 'PropTech MVP - DepositDigest',
          description: 'Python-based property management app with local database integration. Automated rental contract tracking and revenue forecasting.',
          technologies: ['Python', 'Database', 'PropTech', 'Machine Learning'],
          demoLink: 'https://depositdigest.lovable.app/',
          videoLink: 'https://drive.google.com/file/d/1-oFiW_rJfJ2sqHJ5N_8kjyKXQaTQeOfk/view?usp=drive_link'
        }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: 'Ready to collaborate? Let\'s talk about your next project',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message'
      },
      info: {
        email: 'adochoam@outlook.com',
        phone: '+34 644998640',
        location: 'Rotterdam, Netherlands',
        linkedin: 'LinkedIn'
      }
    }
  }
};

// Current language state
let currentLang = 'es';

// DOM elements
const elements = {
  scrollProgress: null,
  header: null,
  langButtons: null,
  navLinks: null
};

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  setupEventListeners();
  setupScrollEffects();
  setupAnimations();
  updateContent();
});

// Initialize DOM elements
function initializeElements() {
  elements.scrollProgress = document.querySelector('.scroll-progress');
  elements.header = document.querySelector('.header');
  elements.langButtons = document.querySelectorAll('.lang-btn');
  elements.navLinks = document.querySelectorAll('.nav-link');
}

// Setup event listeners
function setupEventListeners() {
  // Language switching
  elements.langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      switchLanguage(lang);
    });
  });

  // Smooth scrolling for navigation links
  elements.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmission);
  }
}

// Setup scroll effects
function setupScrollEffects() {
  window.addEventListener('scroll', () => {
    updateScrollProgress();
    updateHeaderState();
    revealElementsOnScroll();
  });
}

// Update scroll progress bar
function updateScrollProgress() {
  if (!elements.scrollProgress) return;
  
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  
  elements.scrollProgress.style.width = scrollPercent + '%';
}

// Update header state based on scroll
function updateHeaderState() {
  if (!elements.header) return;
  
  const scrollTop = window.pageYOffset;
  if (scrollTop > 100) {
    elements.header.classList.add('scrolled');
  } else {
    elements.header.classList.remove('scrolled');
  }
}

// Reveal elements on scroll
function revealElementsOnScroll() {
  const elements = document.querySelectorAll('.fade-in-up');
  const windowHeight = window.innerHeight;
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// Setup animations
function setupAnimations() {
  // Animate skill bars when they come into view
  const skillBars = document.querySelectorAll('.skill-progress');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBar = entry.target;
        const percentage = skillBar.dataset.percentage;
        skillBar.style.width = percentage + '%';
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => observer.observe(bar));
}

// Switch language
function switchLanguage(lang) {
  if (lang === currentLang) return;
  
  currentLang = lang;
  
  // Update active language button
  elements.langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Update content
  updateContent();
  
  // Store language preference
  localStorage.setItem('preferredLanguage', lang);
}

// Update content based on current language
function updateContent() {
  const data = content[currentLang];
  
  // Update navigation
  updateNavigation(data.nav);
  
  // Update hero section
  updateHeroSection(data.hero);
  
  // Update about section
  updateAboutSection(data.about);
  
  // Update experience section
  updateExperienceSection(data.experience);
  
  // Update skills section
  updateSkillsSection(data.skills);
  
  // Update projects section
  updateProjectsSection(data.projects);
  
  // Update contact section
  updateContactSection(data.contact);
}

// Update navigation content
function updateNavigation(navData) {
  const navItems = {
    'about': navData.about,
    'experience': navData.experience,
    'skills': navData.skills,
    'projects': navData.projects,
    'contact': navData.contact
  };
  
  Object.keys(navItems).forEach(key => {
    const element = document.querySelector(`[href="#${key}"]`);
    if (element) {
      element.textContent = navItems[key];
    }
  });
}

// Update hero section content
function updateHeroSection(heroData) {
  updateElement('.hero-title', heroData.title);
  updateElement('.hero-subtitle', heroData.subtitle);
  updateElement('.hero-description', heroData.description);
  updateElement('.btn-primary', heroData.contactBtn);
  updateElement('.btn-secondary', heroData.projectsBtn);
}

// Update about section content
function updateAboutSection(aboutData) {
  updateElement('#about .section-title', aboutData.title);
  updateElement('#about .section-subtitle', aboutData.subtitle);
  updateElement('.about-story', aboutData.story);
  updateElement('.about-passion', aboutData.passion);
  
  // Update stats
  updateElement('.stat-experience', aboutData.stats.experience);
  updateElement('.stat-projects', aboutData.stats.projects);
  updateElement('.stat-technologies', aboutData.stats.technologies);
  
  // Update contact info
  updateElement('.contact-email', aboutData.contact.email);
  updateElement('.contact-phone', aboutData.contact.phone);
  updateElement('.contact-location', aboutData.contact.location);
  updateElement('.contact-linkedin', aboutData.contact.linkedin);
}

// Update experience section content
function updateExperienceSection(experienceData) {
  updateElement('#experience .section-title', experienceData.title);
  updateElement('#experience .section-subtitle', experienceData.subtitle);
  
  const experienceContainer = document.querySelector('.experience-container');
  if (experienceContainer) {
    experienceContainer.innerHTML = experienceData.jobs.map(job => `
      <div class="experience-item card">
        <div class="experience-header">
          <h3 class="experience-title">${job.title}</h3>
          <div class="experience-company">${job.company}</div>
          <div class="experience-location">${job.location}</div>
          <div class="experience-period">${job.period}</div>
        </div>
        <p class="experience-description">${job.description}</p>
        <div class="tech-badges">
          ${job.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }
}

// Update skills section content
function updateSkillsSection(skillsData) {
  updateElement('#skills .section-title', skillsData.title);
  updateElement('#skills .section-subtitle', skillsData.subtitle);
  
  const skillsContainer = document.querySelector('.skills-container');
  if (skillsContainer) {
    skillsContainer.innerHTML = Object.keys(skillsData.categories).map(categoryKey => {
      const category = skillsData.categories[categoryKey];
      return `
        <div class="skill-category card">
          <h3>${category.title}</h3>
          ${category.skills.map(skill => `
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-percentage">${skill.level}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-percentage="${skill.level}"></div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }).join('');
  }
}

// Update projects section content
function updateProjectsSection(projectsData) {
  updateElement('#projects .section-title', projectsData.title);
  updateElement('#projects .section-subtitle', projectsData.subtitle);
  
  const projectsContainer = document.querySelector('.projects-container');
  if (projectsContainer) {
    projectsContainer.innerHTML = projectsData.items.map(project => `
      <div class="project-card">
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="tech-badges">
            ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.demoLink}" target="_blank" class="project-link">Demo</a>
            <a href="${project.videoLink}" target="_blank" class="project-link">Video</a>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Update contact section content
function updateContactSection(contactData) {
  updateElement('#contact .section-title', contactData.title);
  updateElement('#contact .section-subtitle', contactData.subtitle);
  
  // Update form labels
  updateElement('label[for="name"]', contactData.form.name);
  updateElement('label[for="email"]', contactData.form.email);
  updateElement('label[for="message"]', contactData.form.message);
  updateElement('.form-submit', contactData.form.send);
  
  // Update contact info
  updateElement('.contact-info-email', contactData.info.email);
  updateElement('.contact-info-phone', contactData.info.phone);
  updateElement('.contact-info-location', contactData.info.location);
  updateElement('.contact-info-linkedin', contactData.info.linkedin);
}

// Utility function to update element content
function updateElement(selector, content) {
  const element = document.querySelector(selector);
  if (element && content) {
    element.textContent = content;
  }
}

// Handle contact form submission
function handleFormSubmission(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };
  
  // Here you would typically send the data to a server
  // For now, we'll just show a success message
  alert(currentLang === 'es' ? 
    'Mensaje enviado exitosamente. Te contactaré pronto.' : 
    'Message sent successfully. I will contact you soon.'
  );
  
  e.target.reset();
}

// Load preferred language from localStorage
function loadPreferredLanguage() {
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang && content[savedLang]) {
    switchLanguage(savedLang);
  }
}

// Initialize preferred language on load
document.addEventListener('DOMContentLoaded', loadPreferredLanguage);

