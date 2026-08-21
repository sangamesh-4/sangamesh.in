export function Hero() {
    return `
    <section id="hero" class="hero hero-impact-entry">

        <!-- Ambient Glow Orbs -->
        <div class="hero-glow-orb orb-1"></div>
        <div class="hero-glow-orb orb-2"></div>

        <div class="container hero-container">

            <!-- LEFT COLUMN: CONTENT -->
            <div class="hero-content">

                <h1>
                    Hi, I am <span class="hero-name">Sangamesh H</span>
                </h1>

                <!-- DYNAMIC TYPEWRITER SUBTITLE (MATCHING IMAGE 1 REFERENCE) -->
                <h2 class="hero-typewriter">
                    <span id="typewriter"></span><span class="typewriter-cursor">|</span>
                </h2>

                <p class="hero-description">
                    Experienced in building production-ready ML pipelines, Knowledge Graph Retrieval-Augmented Generation (GraphRAG) platforms, and interactive analytics dashboards.
                </p>

                <div class="hero-buttons">

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn-primary btn-download"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        <span>Download Resume</span>
                    </a>

                    <a href="#contact" class="btn-secondary">
                        <span>Hire me!</span>
                    </a>

                </div>

                <!-- SOCIAL ICON ROW (FONTAWESOME RELIABLE ICONS) -->
                <div class="hero-socials">

                    <a
                        href="https://linkedin.com/in/h-sangamesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="social-btn linkedin-btn"
                        title="LinkedIn"
                        aria-label="LinkedIn Profile"
                    >
                        <i class="fab fa-linkedin-in"></i>
                    </a>

                    <a
                        href="https://github.com/sangamesh-4"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="social-btn github-btn"
                        title="GitHub"
                        aria-label="GitHub Profile"
                    >
                        <i class="fab fa-github"></i>
                    </a>

                    <a
                        href="mailto:sanguh411@gmail.com"
                        class="social-btn email-btn copy-email-trigger"
                        title="Email (Click to copy)"
                        aria-label="Email Address"
                    >
                        <i class="fas fa-envelope"></i>
                    </a>

                </div>

            </div>

            <!-- RIGHT COLUMN: HERO VISUAL AVATAR & QUICK STATS -->
            <div class="hero-visual">

                <div class="avatar-wrapper">
                    <!-- Ambient Tilted Backdrop Card (Clipped to top half) -->
                    <div class="tilted-backdrop-container">
                        <div class="tilted-backdrop"></div>
                    </div>
                    
                    <!-- Circular Avatar Mask -->
                    <div class="avatar-circle">
                        <img 
                            src="/hero-profile.png" 
                            alt="Sangamesh H" 
                            class="avatar-img"
                        />
                    </div>

                    <!-- Blinking Open to Work Pill Badge -->
                    <div class="open-to-work-pill blinking-pill">
                        <span class="dot pulse-dot"></span>
                        <span>Open to Work</span>
                    </div>
                </div>

                <!-- Quick Stats 2-Card Row -->
                <div class="hero-quick-stats">
                    <div class="stat-mini-card">
                        <span class="stat-val">0-1</span>
                        <span class="stat-lbl">Years Experience</span>
                    </div>
                    <div class="stat-mini-card">
                        <span class="stat-val">7+</span>
                        <span class="stat-lbl">Projects Completed</span>
                    </div>
                </div>

            </div>

        </div>

        <!-- BOTTOM SCROLL INDICATOR -->
        <a href="#about" class="hero-scroll-indicator" aria-label="Scroll down">
            <span>Explore my work</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </a>

    </section>
    `;
}
