/**
 * Preethi Rajendran - Portfolio JavaScript
 * Features:
 * - Mobile navigation menu toggle & link auto-close
 * - Sticky navigation shadow & active section spy on scroll
 * - Smooth scroll behavior
 * - Project details modal window
 * - Interactive contact form submission handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initActiveNavSpy();
  initContactForm();
});

/* --------------------------------------------------
   1. Navbar & Mobile Menu
   -------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky navbar shadow toggle on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile hamburger menu toggle
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      toggleBtn.classList.toggle('open');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        toggleBtn.classList.remove('open');
      });
    });
  }
}

/* --------------------------------------------------
   2. Active Navigation Spy on Scroll
   -------------------------------------------------- */
function initActiveNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavigation);
}

/* --------------------------------------------------
   3. Project Details Modal
   -------------------------------------------------- */
const projectDetailsData = {
  pet: {
    category: 'Short-Term Python Project',
    title: 'Pet Adoption Portal',
    content: `
      <div class="modal-section">
        <h4>Overview</h4>
        <p>A web-based portal developed to connect prospective pet adopters with rescue listings. Built using Django's Model-View-Template (MVT) architecture with MySQL as the relational database backend.</p>
      </div>
      <div class="modal-section">
        <h4>Key Implementations</h4>
        <ul style="padding-left: 1.25rem; margin-top: 0.35rem;">
          <li>Configured user authentication and session management for account sign-in and registration.</li>
          <li>Engineered dynamic forms for listing pets, including secure image uploads and descriptive metadata.</li>
          <li>Implemented user-side adoption request submission workflows connecting users with pet records.</li>
          <li>Styled clean, responsive UI layouts with Bootstrap and custom CSS for mobile and desktop screens.</li>
        </ul>
      </div>
      <div class="modal-section">
        <h4>Technology Stack</h4>
        <p><strong>Backend:</strong> Python, Django &nbsp;|&nbsp; <strong>Database:</strong> MySQL &nbsp;|&nbsp; <strong>Frontend:</strong> HTML, CSS, Bootstrap</p>
      </div>
    `
  },
  iot: {
    category: 'Academic Project',
    title: 'Automatic Passenger Bridge Using IoT',
    content: `
      <div class="modal-section">
        <h4>Overview</h4>
        <p>An IoT-enabled automated railway passenger footbridge safety system built using Arduino microcontroller and integrated sensors to provide reliable, synchronized bridge movement and status alerts.</p>
      </div>
      <div class="modal-section">
        <h4>Key Implementations</h4>
        <ul style="padding-left: 1.25rem; margin-top: 0.35rem;">
          <li>Sensor integration to monitor passenger foot traffic and approaching train proximity.</li>
          <li>Automated motorized bridge operation logic programmed in C / embedded Arduino code.</li>
          <li>Integrated display panel alerting pedestrians about bridge movement status and train passage.</li>
          <li>Rigorous circuit troubleshooting, pin assignments, signal verification, and embedded testing.</li>
        </ul>
      </div>
      <div class="modal-section">
        <h4>Technology Stack</h4>
        <p><strong>Hardware:</strong> Arduino Board, Detection Sensors, Servo/Motor Actuators, Display Module &nbsp;|&nbsp; <strong>Software:</strong> Embedded C / Arduino IDE</p>
      </div>
    `
  }
};

function openProjectModal(key) {
  const modal = document.getElementById('projectModal');
  const catEl = document.getElementById('modalCategory');
  const titleEl = document.getElementById('modalTitle');
  const contentEl = document.getElementById('modalContent');

  if (projectDetailsData[key]) {
    catEl.textContent = projectDetailsData[key].category;
    titleEl.textContent = projectDetailsData[key].title;
    contentEl.innerHTML = projectDetailsData[key].content;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeProjectModal(event) {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

/* --------------------------------------------------
   4. Contact Form Handler (Interactive simulation)
   -------------------------------------------------- */
function handleFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const statusMsg = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Preparing...';

  // Construct mailto link as fallback for immediate emailing
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fa-regular fa-paper-plane"></i> Send Message';

    statusMsg.className = 'form-status-msg success';
    statusMsg.innerHTML = `
      <i class="fa-solid fa-circle-check"></i> Thank you, <strong>${name}</strong>! Your inquiry draft is ready. 
      <a href="mailto:preethirajendran2306@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}" 
         style="color: #166534; font-weight: 700; text-decoration: underline; margin-left: 4px;">
        Click here to dispatch directly via your email client
      </a>.
    `;

    form.reset();
  }, 600);
}

