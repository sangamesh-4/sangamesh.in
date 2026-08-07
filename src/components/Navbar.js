export function Navbar() {
    return `
    <header class="navbar">

        <div class="nav-container">

            <a href="#hero" class="logo">
                <span class="logo-accent">&lt;/&gt;</span> Sangamesh H
            </a>

            <nav class="nav-links">

                <a href="#hero" class="nav-item">
                    <i class="fas fa-house"></i>
                    <span>Home</span>
                </a>

                <a href="#about" class="nav-item">
                    <i class="fas fa-user-tie"></i>
                    <span>About</span>
                </a>

                <a href="#skills" class="nav-item">
                    <i class="fas fa-code"></i>
                    <span>Skills</span>
                </a>

                <a href="#experience" class="nav-item">
                    <i class="fas fa-briefcase"></i>
                    <span>Experience</span>
                </a>

                <a href="#achievements" class="nav-item">
                    <i class="fas fa-award"></i>
                    <span>Achievements</span>
                </a>

                <a href="#projects" class="nav-item">
                    <i class="fas fa-cubes"></i>
                    <span>Projects</span>
                </a>

                <a href="#contact" class="nav-item">
                    <i class="fas fa-paper-plane"></i>
                    <span>Contact</span>
                </a>

            </nav>

        </div>

    </header>
    `;
}