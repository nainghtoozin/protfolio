/* =========================================================
   Portfolio Configuration & Logic
   Edit personal info, links, projects below.
   ========================================================= */

// =========================================================
// EDIT YOUR PERSONAL INFORMATION HERE
// =========================================================
const PERSONAL = {
  name: "Naing Htoo Zin",
  role: "Junior Web Developer",
  intro:
    "Motivated junior web developer with hands-on experience in PHP, Laravel, MySQL, and Bootstrap. Eager to learn, build, and contribute to real-world projects while growing as a full-stack developer.",
  shortIntro:
    "I build clean, responsive, and user-focused web applications with modern technologies.",
  location: "Mingaladon Township, Yangon",
  email: "nainghtoo09798@gmail.com",
  phone: "+95 9 796 209 436",
  phoneTel: "+959796209436",
  profileImage: "assets/profile image.jpg",
};

// =========================================================
// EDIT YOUR SOCIAL LINKS HERE
// Leave empty string "" to hide/disable the link.
// =========================================================
const SOCIAL = {
  github: "https://github.com/nainghtoozin",
  linkedin: "", // EDIT: add your LinkedIn URL
};

// =========================================================
// EDIT FEATURED PROJECT LINKS HERE
// Two large featured showcase projects.
// Set liveDemoUrl / githubUrl to "" to show a placeholder button.
// =========================================================
const FEATURED_PROJECTS = [
  {
    // EDIT PROJECT NAME
    name: "Clinic Management System",
    // EDIT DESCRIPTION
    description:
      "A full-featured clinic management system handling patient records, appointments, doctors, and an admin dashboard. Deployed live for real-world use.",
    // EDIT PROJECT SCREENSHOTS (local files in assets/projects/)
    // Example: "assets/projects/clinic-preview.png"
    image: "", // ADD IMAGE PATH
    // Optional extra screenshots (local files)
    screenshots: [], // e.g. ["assets/projects/clinic-dashboard.png"]
    // EDIT TECHNOLOGIES
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    // EDIT FEATURES
    features: [
      "Patient records & history management",
      "Appointment scheduling",
      "Doctor & staff management",
      "Admin dashboard",
    ],
    // EDIT LIVE DEMO URL
    liveDemoUrl: "https://sssccccapp.kesug.com/",
    // EDIT ADMIN PANEL URL
    adminPanelUrl: "https://myclinic-app.infinityfreeapp.com/login",
    // EDIT GITHUB URL
    githubUrl: "https://github.com/nainghtoozin/clinic-app",
  },
  {
    // EDIT PROJECT NAME
    name: "E-commerce Website",
    // EDIT DESCRIPTION
    description:
      "An online shopping platform with product management, shopping cart, checkout flow, and an admin panel for managing the store.",
    // EDIT PROJECT SCREENSHOTS (local files in assets/projects/)
    // Example: "assets/projects/ecommerce-preview.png"
    image: "", // ADD IMAGE PATH
    // Optional extra screenshots (local files)
    screenshots: [], // e.g. ["assets/projects/ecommerce-dashboard.png"]
    // EDIT TECHNOLOGIES
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    // EDIT FEATURES
    features: [
      "Product catalog & categories",
      "Shopping cart & checkout",
      "Order management",
      "Admin panel",
    ],
    // EDIT LIVE DEMO URL
    liveDemoUrl: "", // ADD LIVE DEMO URL
    // EDIT ADMIN PANEL URL (optional)
    adminPanelUrl: "", // ADD ADMIN PANEL URL
    // EDIT GITHUB URL
    githubUrl: "https://github.com/nainghtoozin/Book-Shops",
  },
];

// =========================================================
// EDIT OTHER PROJECTS HERE
// =========================================================
const OTHER_PROJECTS = [
  {
    name: "Social App",
    description:
      "Social media application with authentication, posts, likes, comments, and user profiles.",
    // Example: "assets/projects/social-preview.png"
    image: "assets/projects/social-preview.png", // ADD IMAGE PATH
    technologies: ["Laravel", "PHP", "MySQL"],
    githubUrl: "https://github.com/nainghtoozin/social-app",
    liveDemoUrl: "", // ADD LIVE DEMO URL
  },
  {
    name: "Bookshop & User Management System",
    description:
      "PHP-based system for managing books, users, roles, and authentication.",
    // Example: "assets/projects/bookshop-preview.png"
    image: "", // ADD IMAGE PATH
    technologies: ["PHP", "MySQL", "Bootstrap"],
    githubUrl: "",
    liveDemoUrl: "",
  },
];

// =========================================================
// SKILLS CONFIG (edit to add/remove)
// =========================================================
const SKILLS = {
  Frontend: [
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
  ],
  Backend: [
    { name: "PHP", icon: "devicon-php-plain colored" },
    { name: "Laravel", icon: "devicon-laravel-original colored" },
  ],
  Database: [
    { name: "MySQL", icon: "devicon-mysql-original colored" },
    { name: "SQLite", icon: "devicon-sqlite-plain colored" },
  ],
  Tools: [
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "Composer", icon: "devicon-composer-line" },
    { name: "npm", icon: "devicon-npm-original-wordmark colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
  ],
};

// =========================================================
// Utility
// =========================================================
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function placeholderImage(text) {
  return `<div class="placeholder">[ADD IMAGE PATH]<br><small>${escapeHtml(text)}</small></div>`;
}

function actionButton(url, label, primary) {
  if (url && url.trim() !== "") {
    const cls = primary ? "btn-primary-custom" : "btn-ghost";
    return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="btn ${cls}">${label}</a>`;
  }
  return `<span class="btn btn-ghost disabled" aria-disabled="true" title="Add URL in main.js">${label} (add URL)</span>`;
}

// =========================================================
// Renderers
// =========================================================
function renderFeaturedProjects() {
  const container = document.getElementById("featuredProjects");
  if (!container) return;
  container.innerHTML = FEATURED_PROJECTS.map((project, index) => {
    const reverse = index % 2 === 1;
    const imageHtml = project.image && project.image.trim() !== ""
      ? `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.name)} screenshot" loading="lazy">`
      : placeholderImage(project.name);

    const extraShots = (project.screenshots || [])
      .filter((s) => s && s.trim() !== "")
      .map((s) => `<img src="${escapeHtml(s)}" alt="${escapeHtml(project.name)} screenshot" loading="lazy" style="width:72px;height:48px;object-fit:cover;border-radius:8px;border:1px solid var(--border);">`)
      .join("");

    const techs = project.technologies.map((t) => `<span class="project-tag">${escapeHtml(t)}</span>`).join("");
    const features = project.features.map((f) => `<li>${escapeHtml(f)}</li>`).join("");

    const buttons = [
      actionButton(project.liveDemoUrl, "View Live Demo", true),
      project.adminPanelUrl && project.adminPanelUrl.trim() !== ""
        ? actionButton(project.adminPanelUrl, "Admin Panel", false)
        : "",
      actionButton(project.githubUrl, "View Source Code", false),
    ].join("");

    return `
      <div class="col-12">
        <article class="featured-project reveal">
          <div class="row g-4 align-items-center ${reverse ? "flex-lg-row-reverse" : ""}">
            <div class="col-lg-6">
              <div class="featured-image">${imageHtml}</div>
              ${extraShots ? `<div class="d-flex flex-wrap gap-2 mt-3">${extraShots}</div>` : ""}
            </div>
            <div class="col-lg-6">
              <span class="eyebrow">Featured Project ${String(index + 1).padStart(2, "0")}</span>
              <h3 class="mt-2">${escapeHtml(project.name)}</h3>
              <p class="featured-meta">${escapeHtml(project.description)}</p>
              <div class="mt-3">${techs}</div>
              <ul class="feature-list mt-3">${features}</ul>
              <div class="hero-actions mt-3">
                ${buttons}
              </div>
            </div>
          </div>
        </article>
      </div>
    `;
  }).join("");
}

function renderOtherProjects() {
  const container = document.getElementById("otherProjects");
  if (!container) return;
  container.innerHTML = OTHER_PROJECTS.map((project) => {
    const imageHtml = project.image && project.image.trim() !== ""
      ? `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.name)} screenshot" loading="lazy">`
      : placeholderImage(project.name);
    const techs = project.technologies.map((t) => `<span class="project-tag">${escapeHtml(t)}</span>`).join("");
    return `
      <div class="col-md-6 col-lg-4">
        <article class="project-card reveal">
          <div class="thumb">${imageHtml}</div>
          <h5>${escapeHtml(project.name)}</h5>
          <p>${escapeHtml(project.description)}</p>
          <div class="mb-3">${techs}</div>
          <div class="d-flex gap-2 mt-auto">
            ${actionButton(project.liveDemoUrl, "View Live Demo", true)}
            ${actionButton(project.githubUrl, "View Source Code", false)}
          </div>
        </article>
      </div>
    `;
  }).join("");
}

function renderSkills() {
  const container = document.getElementById("skillsGrid");
  if (!container) return;
  const icons = {
    Frontend: "bi bi-code-slash",
    Backend: "bi bi-server",
    Database: "bi bi-database",
    Tools: "bi bi-tools",
  };
  container.innerHTML = Object.keys(SKILLS).map((group) => {
    const chips = SKILLS[group].map((s) => `
      <span class="skill-chip"><i class="${escapeHtml(s.icon)}"></i>${escapeHtml(s.name)}</span>
    `).join("");
    return `
      <div class="col-md-6 col-lg-3">
        <div class="skill-group reveal">
          <h4><span class="icon"><i class="${icons[group]}"></i></span>${escapeHtml(group)}</h4>
          <div>${chips}</div>
        </div>
      </div>
    `;
  }).join("");
}

// =========================================================
// Personal info hydration
// =========================================================
function hydratePersonal() {
  const set = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };
  set("heroName", PERSONAL.name);
  set("heroRole", PERSONAL.role);
  set("heroIntro", PERSONAL.intro);
  set("heroShort", PERSONAL.shortIntro);
  set("aboutLocation", PERSONAL.location);
  set("contactEmailText", PERSONAL.email);
  set("contactPhoneText", PERSONAL.phone);
  set("contactLocationText", PERSONAL.location);

  const profileImg = document.getElementById("profileImage");
  if (profileImg) profileImg.src = PERSONAL.profileImage;

  const emailLink = document.getElementById("contactEmailLink");
  if (emailLink) emailLink.href = `mailto:${PERSONAL.email}`;

  const phoneLink = document.getElementById("contactPhoneLink");
  if (phoneLink) phoneLink.href = `tel:${PERSONAL.phoneTel}`;

  // Social links
  const gh = document.getElementById("socialGithub");
  if (gh) {
    if (SOCIAL.github) { gh.href = SOCIAL.github; gh.style.display = ""; }
    else { gh.style.display = "none"; }
  }
  const li = document.getElementById("socialLinkedin");
  if (li) {
    if (SOCIAL.linkedin) { li.href = SOCIAL.linkedin; li.style.display = ""; }
    else { li.style.display = "none"; }
  }
  const footerGh = document.getElementById("footerGithub");
  if (footerGh) {
    if (SOCIAL.github) footerGh.href = SOCIAL.github;
    else footerGh.style.display = "none";
  }
  const footerLi = document.getElementById("footerLinkedin");
  if (footerLi) {
    if (SOCIAL.linkedin) footerLi.href = SOCIAL.linkedin;
    else footerLi.style.display = "none";
  }

  const githubContact = document.getElementById("contactGithubLink");
  if (githubContact) {
    if (SOCIAL.github) { githubContact.href = SOCIAL.github; githubContact.textContent = SOCIAL.github.replace("https://", ""); }
    else { githubContact.textContent = "Add GitHub URL"; githubContact.classList.add("placeholder-text"); }
  }
  const linkedinContact = document.getElementById("contactLinkedinLink");
  if (linkedinContact) {
    if (SOCIAL.linkedin) { linkedinContact.href = SOCIAL.linkedin; linkedinContact.textContent = SOCIAL.linkedin.replace("https://", ""); }
    else { linkedinContact.textContent = "Add LinkedIn URL"; linkedinContact.classList.add("placeholder-text"); }
  }
}

// =========================================================
// UI Enhancements
// =========================================================
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el) => observer.observe(el));
}

function initNavbar() {
  const nav = document.querySelector(".navbar");
  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // close mobile menu on link click
  document.querySelectorAll(".navbar .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const collapse = document.getElementById("navbarNav");
      if (collapse && collapse.classList.contains("show")) {
        const toggler = document.querySelector(".navbar-toggler");
        if (toggler) toggler.click();
      }
    });
  });
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  hydratePersonal();
  renderSkills();
  renderFeaturedProjects();
  renderOtherProjects();
  initNavbar();
  initSmoothAnchors();
  // reveal after render
  requestAnimationFrame(() => initReveal());
});