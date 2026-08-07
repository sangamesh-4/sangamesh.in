import "../styles/contact.css";

export function Contact() {
  return `
    <section class="contact" id="contact">

      <div class="container contact-container">

        <!-- ================= HEADER ================= -->
        <div class="contact-header">
          <h2 class="section-title">
            Did I spark your interest?
          </h2>
          <p class="section-subtitle">
            Let's Start a Conversation
          </p>
        </div>

        <!-- ================= MINIMALIST CONTACT LIST (IMAGE 1 REFERENCE) ================= -->
        <div class="contact-list">

          <!-- EMAIL ITEM -->
          <div class="contact-item copy-email-trigger" title="Click to copy email">
            <div class="item-icon">
              <i class="far fa-envelope"></i>
            </div>
            <div class="item-details">
              <span class="item-label">Email</span>
              <strong class="item-value">sanguh411@gmail.com</strong>
            </div>
          </div>

          <!-- LOCATION ITEM -->
          <div class="contact-item">
            <div class="item-icon">
              <i class="fas fa-location-dot"></i>
            </div>
            <div class="item-details">
              <span class="item-label">Location</span>
              <strong class="item-value">Bengaluru, India</strong>
            </div>
          </div>

        </div>

        <!-- ================= SOCIAL MEDIA ROW (IMAGE 1 REFERENCE) ================= -->
        <div class="contact-social-section">
          <h4 class="social-heading">Social Media</h4>
          <div class="contact-social-links">
            <a
              href="https://linkedin.com/in/h-sangamesh"
              target="_blank"
              rel="noopener noreferrer"
              class="minimal-social-link"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/sangamesh-4"
              target="_blank"
              rel="noopener noreferrer"
              class="minimal-social-link"
              title="GitHub"
              aria-label="GitHub"
            >
              <i class="fab fa-github"></i>
            </a>

            <a
              href="mailto:sanguh411@gmail.com"
              class="minimal-social-link copy-email-trigger"
              title="Email"
              aria-label="Email"
            >
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <!-- ================= FOOTER ================= -->
        <div class="contact-footer">
          <p>© 2026 H Sangamesh. Built with Passion & AI Precision.</p>
        </div>

      </div>

    </section>
  `;
}