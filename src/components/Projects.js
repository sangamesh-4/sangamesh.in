import economicImg from "../assets/projects/economic-intelligence.png";
import healthcareImg from "../assets/projects/healthcare-crm.png";
import businessAgentImg from "../assets/projects/business-agent.png";
import carPriceImg from "../assets/projects/car-price.png";
import placementImg from "../assets/projects/placement-predictor.png";

const projects = [
  {
    category: "Generative AI",
    title: "Hybrid Economic Intelligence Platform",
    image: economicImg,
    description:
      "Enterprise-grade AI platform integrating GraphRAG, vector search, knowledge graphs and LLMs to deliver intelligent economic insights from structured and unstructured financial data.",
    tech: ["Python", "LangChain", "Neo4j", "ChromaDB", "Streamlit"],
    github:
      "https://github.com/sangamesh-4/HYBRID-GRAPH-RAG-ECONOMIC-INTELLIGENCE-PLATFORM",
    demo:
      "https://economic-forecaster-ai-by-me-for-you-sangu0121.streamlit.app/",
  },

  {
    category: "Full Stack AI",
    title: "Healthcare Intelligence CRM",
    image: healthcareImg,
    description:
      "Modern AI-enabled CRM designed for healthcare professionals with intelligent patient management, automation workflows, analytics dashboards and AI-assisted interactions.",
    tech: ["Python", "Streamlit", "LLM", "SQLite", "REST API"],
    github:
      "https://github.com/sangamesh-4/AIVOA-Assignment",
    demo:
      "https://aivoa-assignment-nvnany56uzb6hmzvu7uiws.streamlit.app/",
  },

  {
    category: "AI Agent",
    title: "Autonomous Business Intelligence Agent",
    image: businessAgentImg,
    description:
      "AI reporting assistant capable of generating business reports, extracting insights, summarizing datasets and automating analytical workflows using large language models.",
    tech: ["Python", "LLM", "Pandas", "Plotly", "Streamlit"],
    github:
      "https://github.com/sangamesh-4/pmo-reporting-agent",
    demo:
      "https://pmo-reporting-agent-3utps4aojgetfgegvwxfud.streamlit.app/",
  },

  {
    category: "Machine Learning",
    title: "Car Price Prediction System",
    image: carPriceImg,
    description:
      "Production-ready machine learning application for predicting used vehicle prices using feature engineering, ensemble learning and interactive visual analytics.",
    tech: ["Python", "XGBoost", "Scikit-learn", "Streamlit", "Pandas"],
    github:
      "https://github.com/sangamesh-4/AutoIntel-AI",
    demo:
      "https://cars24-ml-project-sh0121.streamlit.app/",
  },

  {
    category: "Machine Learning",
    title: "AI Placement Prediction System",
    image: placementImg,
    description:
      "Predictive analytics platform that estimates placement opportunities using academic and aptitude features with an intuitive web interface for students.",
    tech: ["Python", "Scikit-learn", "Pandas", "Streamlit", "NumPy"],
    github:
      "https://github.com/sangamesh-4/AI-Student_Placement_Predictor",
    demo:
      "https://ai-studentplacementpredictor-2421.streamlit.app/",
  },
];

const filterCategories = [
  "All",
  "Generative AI",
  "Full Stack AI",
  "AI Agent",
  "Machine Learning"
];

export function Projects() {
  return `
    <section id="projects" class="projects">

      <div class="container">

        <h2 class="section-title">
          Things I've Built
        </h2>

        <p class="section-subtitle">
          A collection of AI, Machine Learning and Full Stack applications built to solve real-world business problems.
        </p>

        <!-- Dynamic Category Filter Tabs -->
        <div class="project-filters" id="project-filters">
          ${filterCategories
            .map(
              (cat, idx) => `
                <button
                  class="filter-btn ${idx === 0 ? "active" : ""}"
                  data-filter="${cat}"
                >
                  ${cat}
                </button>
              `
            )
            .join("")}
        </div>

        <div class="projects-grid" id="projects-grid">

          ${projects
            .map(
              (project) => `
              
              <article class="project-card" data-category="${project.category}">

                <div class="project-image">
                  <img src="${project.image}" alt="${project.title}">
                </div>

                <div class="project-content">

                  <span class="project-type">
                    ${project.category}
                  </span>

                  <h3>
                    ${project.title}
                  </h3>

                  <p>
                    ${project.description}
                  </p>

                  <div class="tech-stack">
                    ${project.tech
                      .map(
                        (tech) => `
                          <span class="skill-badge">${tech}</span>
                        `
                      )
                      .join("")}
                  </div>

                  <div class="project-links">

                    <a
                      href="${project.demo}"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="demo-btn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M7 17L17 7"></path>
                        <path d="M7 7h10v10"></path>
                      </svg>
                      <span>Live Demo</span>
                    </a>

                    <a
                      href="${project.github}"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="github-btn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.02c-3.2.69-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.67.41.35.77 1.04.77 2.1v3.11c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
                      </svg>
                      <span>Source Code</span>
                    </a>

                  </div>

                </div>

              </article>

            `
            )
            .join("")}

        </div>

      </div>

    </section>
  `;
}