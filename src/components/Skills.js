const skillCategories = [
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    title: "Programming",
    description: "Building robust, scalable, and maintainable software using modern programming languages.",
    progress: 95,
    skills: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS"]
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>`,
    title: "AI & Machine Learning",
    description: "Developing intelligent systems using machine learning, Generative AI and LLM technologies.",
    progress: 92,
    skills: ["Scikit-learn", "TensorFlow", "XGBoost", "LangChain", "LLMs", "RAG", "GraphRAG"]
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    title: "Data Analytics",
    description: "Transforming raw data into meaningful insights through analytics and visualization.",
    progress: 90,
    skills: ["Pandas", "NumPy", "EDA", "Statistics", "Power BI", "Tableau"]
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    title: "Web Development",
    description: "Creating modern, responsive web applications with clean UI and scalable architecture.",
    progress: 88,
    skills: ["Streamlit", "REST APIs", "React", "Git", "GitHub", "Vite"]
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    title: "Tools & Platforms",
    description: "Daily development tools and collaborative platforms used throughout projects.",
    progress: 90,
    skills: ["VS Code", "Postman", "Jupyter", "PyCharm", "SQLite", "GitHub"]
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    title: "Databases",
    description: "Working with relational and vector databases for AI-powered applications.",
    progress: 86,
    skills: ["MySQL", "SQLite", "Neo4j", "ChromaDB"]
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    title: "Deployment",
    description: "Deploying machine learning and web applications using modern cloud platforms.",
    progress: 84,
    skills: ["Streamlit Cloud", "Render", "GitHub Pages", "Vercel"]
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    title: "Professional Skills",
    description: "Essential soft skills that help deliver projects efficiently and collaborate effectively.",
    progress: 96,
    skills: ["Problem Solving", "Leadership", "Communication", "Teamwork", "Adaptability"]
  }
];

const stats = [
  {
    number: "15+",
    title: "Technologies",
    subtitle: "Hands-on Experience"
  },
  {
    number: "6+",
    title: "AI Projects",
    subtitle: "Real-world Applications"
  },
  {
    number: "3+",
    title: "Certifications",
    subtitle: "Professional Learning"
  }
];

export function Skills() {
  return `
    <section class="skills section" id="skills">

      <div class="container">

        <h2 class="section-title">
          Skills & Expertise
        </h2>

        <p class="section-subtitle">
          A diverse collection of technologies, frameworks and tools used to build AI-powered applications,
          machine learning solutions and scalable software.
        </p>

        <div class="skills-stats">
          ${stats.map(stat => `
            <div class="stat-card">
              <h3 class="stat-number">${stat.number}</h3>
              <div>
                <h4>${stat.title}</h4>
                <p>${stat.subtitle}</p>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="skills-grid">
          ${skillCategories.map(category => `
            <div class="skill-card">

              <div class="skill-header">
                <div class="skill-icon">
                  ${category.icon}
                </div>
                <div>
                  <h3>${category.title}</h3>
                  <p>${category.description}</p>
                </div>
              </div>

              <div class="skill-tags">
                ${category.skills.map(skill => `
                  <span class="skill-badge">${skill}</span>
                `).join("")}
              </div>

              <div class="progress-wrapper">
                <div class="progress-fill" style="width:${category.progress}%"></div>
              </div>

              <div class="progress-text">
                <span>Proficiency</span>
                <strong>${category.progress}%</strong>
              </div>

            </div>
          `).join("")}
        </div>

      </div>

    </section>
  `;
}