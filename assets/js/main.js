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
  // EDIT: add your LinkedIn URL
  linkedinUrl: "https://www.linkedin.com/in/naing-htoo-zin-109343281/",
};

// =========================================================
// CENTRALIZED PROJECT LINKS (edit URLs here)
// =========================================================
const PROJECT_URLS = {
  // EDIT: replace with your actual Social App demo URL
  socialAppDemoUrl: "YOUR_SOCIAL_APP_DEMO_URL",
};

// =========================================================
// CLINIC PROJECT CONFIGURATION (single source of truth)
// Edit project name, description, screenshots, tech stack,
// URLs, and demo credentials here.
// =========================================================
const CLINIC_PROJECT = {
  // EDIT PROJECT NAME
  name: "Clinic Management System",
  // EDIT DESCRIPTION
  description:
    "An integrated Clinic Management System designed to streamline daily healthcare operations. It provides tools for managing patient records, appointments, doctors, departments, services, and administrative activities through a centralized dashboard.",
  // EDIT PROJECT SCREENSHOTS (local files in assets/projects/)
  // Main preview image:
  image: "assets/projects/clinic-preview.png", // ADD IMAGE PATH
  // Optional extra screenshots (local files)
  screenshots: ["assets/projects/clinic-dashboard.png", "assets/projects/clinic-appointment.png"], // e.g. ["assets/projects/clinic-dashboard.png"]
  // EDIT TECHNOLOGIES
  technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
  // EDIT FEATURES
  features: [
    "Patient Records & History Management",
    "Appointment Scheduling",
    "Doctor & Staff Management",
    "Department & Service Management",
    "Admin Dashboard",
    "Centralized Clinic Administration",
  ],
  // EDIT LIVE DEMO URL
  liveDemoUrl: "https://sssccccapp.kesug.com/",
  // EDIT ADMIN PANEL URL
  adminPanelUrl: "https://myclinic-app.infinityfreeapp.com/login",
  // EDIT GITHUB URL
  githubUrl: "https://github.com/nainghtoozin/clinic-app",
  // EDIT DEMO ADMIN CREDENTIALS (placeholders - replace with real demo account)
  demoEmail: "[EDIT_DEMO_EMAIL]",
  demoPassword: "[EDIT_DEMO_PASSWORD]",
};

// =========================================================
// SOCIAL APP CONFIGURATION (centralized)
// Edit live demo URL, GitHub URL, and demo credentials here.
// =========================================================
const SOCIAL_APP = {
  // EDIT: Social App live demo URL
  demoUrl: "https://nhzsocialblog.fwh.is/?i=1",
  // EDIT: GitHub repository URL
  githubUrl: "https://github.com/nainghtoozin/social-app",
  // EDIT: dedicated demo account credentials
  demoEmail: "khantmaw@gmail.com",
  demoPassword: "password",
};

// =========================================================
// SOCIAL APP PROJECT CONFIGURATION (Featured Project 02)
// Edit description, screenshots, tech stack, and links here.
// Screenshots: place files under assets/projects/social-app/
// (e.g. social-app-preview.png, social-app-dashboard.png, ...)
// =========================================================
const SOCIAL_APP_PROJECT = {
  // EDIT PROJECT NAME
  name: "Social App",
  // EDIT DESCRIPTION
  description:
    "A social media web application that allows users to connect and interact through user profiles, posts, likes, and comments. Built with Laravel and designed to provide an interactive social networking experience.",
  // EDIT PROJECT SCREENSHOTS (local files in assets/projects/)
  // Main preview image (existing):
  image: "assets/projects/social-preview.png", // ADD IMAGE PATH
  // Optional extra screenshots (local files under assets/projects/social-app/)
  screenshots: [], // e.g. ["assets/projects/social-app/social-app-dashboard.png"]
  // EDIT TECHNOLOGIES
  technologies: ["Laravel", "PHP", "MySQL"],
  // EDIT FEATURES
  features: [
    "User Authentication",
    "User Profiles",
    "Create and Manage Posts",
    "Like and Unlike Posts",
    "Comment System",
    "Follow and Unfollow Users",
  ],
  // EDIT LIVE DEMO URL (centralized)
  liveDemoUrl: SOCIAL_APP.demoUrl,
  // EDIT ADMIN PANEL URL (not applicable)
  adminPanelUrl: "",
  // EDIT GITHUB URL
  githubUrl: SOCIAL_APP.githubUrl,
  // Demo account access (compact expandable section)
  demoAccess: true,
  demoDescription:
    "Want to explore the Social App? Use the demo account below to sign in and try the available features. No registration is required for demo access.",
  demoEmail: SOCIAL_APP.demoEmail,
  demoPassword: SOCIAL_APP.demoPassword,
  demoPasswordToggle: true,
};

// =========================================================
// EDIT FEATURED PROJECT LINKS HERE
// Two large featured showcase projects.
// Set liveDemoUrl / githubUrl to "" to show a placeholder button.
// =========================================================
const FEATURED_PROJECTS = [
  // Clinic project is sourced from CLINIC_PROJECT above (centralized config).
  { ...CLINIC_PROJECT, demoAccess: true },
  // Social App project is sourced from SOCIAL_APP_PROJECT above (centralized config).
  { ...SOCIAL_APP_PROJECT },
];

// =========================================================
// EDIT OTHER PROJECTS HERE
// Order: E-commerce Website, Bookshop & User Management System
// =========================================================
const OTHER_PROJECTS = [
  {
    name: "E-commerce Website",
    description:
      "An online shopping platform with product management, shopping cart, checkout functionality, and an administrative dashboard.",
    // Example: "assets/projects/ecommerce-preview.png"
    image: "", // ADD IMAGE PATH
    technologies: ["Laravel", "PHP", "MySQL"],
    githubUrl: "https://github.com/nainghtoozin/Book-Shops",
    liveDemoUrl: "", // No live demo - project in development
    status: "In Development",
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

function isPlaceholderUrl(url) {
  if (!url) return true;
  const v = url.trim();
  if (v === "") return true;
  if (v.toUpperCase().includes("YOUR_")) return true;
  if (v.startsWith("[") && v.endsWith("]")) return true;
  return false;
}

function actionButton(url, label, primary) {
  if (!isPlaceholderUrl(url)) {
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

    // Build the full gallery list from local images only.
    const gallery = [];
    if (project.image && project.image.trim() !== "") gallery.push(project.image);
    (project.screenshots || []).forEach((s) => {
      if (s && s.trim() !== "" && !gallery.includes(s)) gallery.push(s);
    });
    const hasImages = gallery.length > 0;

    const mainImageHtml = hasImages
      ? `<img src="${escapeHtml(gallery[0])}" alt="${escapeHtml(project.name)} screenshot" loading="lazy">`
      : placeholderImage(project.name);

    const galleryHtml = hasImages
      ? `<div class="project-gallery mt-3" role="list">
           ${gallery.map((src, i) => `
             <button type="button" class="gallery-thumb" data-gallery-id="${index}" data-gallery-index="${i}" aria-label="Open ${escapeHtml(project.name)} screenshot ${i + 1}">
               <img src="${escapeHtml(src)}" alt="${escapeHtml(project.name)} screenshot ${i + 1}" loading="lazy">
             </button>
           `).join("")}
         </div>`
      : "";

    const techs = project.technologies.map((t) => `<span class="project-tag">${escapeHtml(t)}</span>`).join("");
    const features = project.features.map((f) => `<li>${escapeHtml(f)}</li>`).join("");

    const buttons = [
      actionButton(project.liveDemoUrl, "View Live Demo", true),
      project.adminPanelUrl && project.adminPanelUrl.trim() !== ""
        ? actionButton(project.adminPanelUrl, "Admin Panel", false)
        : "",
      actionButton(project.githubUrl, "View Source Code", false),
    ].join("");

    // Demo Access section (used for the Clinic project).
    let demoAccessHtml = "";
    if (project.demoAccess) {
      const showToggle = project.demoPasswordToggle ? `
            <button type="button" class="btn btn-ghost btn-sm" data-pw-toggle aria-pressed="true">Hide Password</button>` : "";
      demoAccessHtml = `
        <div class="demo-access mt-3">
          <h6 class="mb-1"><i class="bi bi-shield-lock me-2"></i>Demo Account Available</h6>
          <p class="mb-2">${escapeHtml(project.demoDescription || "No registration required. Use the demo credentials to explore the administration dashboard.")}</p>
          <button type="button" class="btn btn-ghost btn-sm demo-toggle" data-demo-toggle aria-expanded="false">View Demo Credentials</button>
          <div class="demo-credentials mt-2" hidden>
            <div class="demo-row"><span class="demo-label">Demo Email:</span> <code class="demo-value">${escapeHtml(project.demoEmail)}</code></div>
            <div class="demo-row"><span class="demo-label">Demo Password:</span> <code class="demo-value demo-password" data-password="${escapeHtml(project.demoPassword)}">${escapeHtml(project.demoPassword)}</code></div>
            <div class="d-flex flex-wrap gap-2 mt-2">
              <button type="button" class="btn btn-ghost btn-sm" data-copy-value="${escapeHtml(project.demoEmail)}">Copy Email</button>
              <button type="button" class="btn btn-ghost btn-sm" data-copy-value="${escapeHtml(project.demoPassword)}">Copy Password</button>
              ${showToggle}
            </div>
          </div>
        </div>
      `;
    }

    // Register gallery for the lightbox.
    window.PROJECT_GALLERIES = window.PROJECT_GALLERIES || {};
    window.PROJECT_GALLERIES[index] = gallery;

    return `
      <div class="col-12">
        <article class="featured-project reveal">
          <div class="row g-4 align-items-start ${reverse ? "flex-lg-row-reverse" : ""}">
            <div class="col-lg-5">
              <div class="featured-image" ${hasImages ? `role="button" tabindex="0" onclick="openLightbox(window.PROJECT_GALLERIES[${index}], 0)" style="cursor:pointer;"` : ""}>${mainImageHtml}</div>
              ${galleryHtml}
            </div>
            <div class="col-lg-7">
              <span class="eyebrow">Featured Project ${String(index + 1).padStart(2, "0")}</span>
              <h3 class="mt-2">${escapeHtml(project.name)}</h3>
              <p class="featured-meta">${escapeHtml(project.description)}</p>
              <div class="mt-3">${techs}</div>
              <ul class="feature-list mt-3">${features}</ul>
              <div class="hero-actions mt-3">
                ${buttons}
              </div>
              ${demoAccessHtml}
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

    const inDevelopment = project.status && project.status.trim().toLowerCase() === "in development";
    const statusBadge = project.status && project.status.trim() !== ""
      ? `<span class="status-badge">${escapeHtml(project.status)}</span>`
      : "";

    // Live Demo button: hidden entirely for in-development projects.
    const liveDemoBtn = inDevelopment
      ? ""
      : actionButton(project.liveDemoUrl, "View Live Demo", true);

    // GitHub button: only if a valid repository URL exists.
    const githubBtn = !isPlaceholderUrl(project.githubUrl)
      ? actionButton(project.githubUrl, "View Source Code", false)
      : "";

    return `
      <div class="col-md-6 col-lg-4">
        <article class="project-card reveal">
          <div class="thumb">${imageHtml}</div>
          <div class="d-flex align-items-center justify-content-between gap-2 mb-1">
            <h5 class="mb-0">${escapeHtml(project.name)}</h5>
            ${statusBadge}
          </div>
          <p>${escapeHtml(project.description)}</p>
          <div class="mb-3">${techs}</div>
          <div class="d-flex gap-2 mt-auto flex-wrap">
            ${liveDemoBtn}
            ${githubBtn}
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
    if (SOCIAL.linkedinUrl) { li.href = SOCIAL.linkedinUrl; li.style.display = ""; }
    else { li.style.display = "none"; }
  }
  const footerGh = document.getElementById("footerGithub");
  if (footerGh) {
    if (SOCIAL.github) footerGh.href = SOCIAL.github;
    else footerGh.style.display = "none";
  }
  const footerLi = document.getElementById("footerLinkedin");
  if (footerLi) {
    if (SOCIAL.linkedinUrl) footerLi.href = SOCIAL.linkedinUrl;
    else footerLi.style.display = "none";
  }

  const githubContact = document.getElementById("contactGithubLink");
  if (githubContact) {
    if (SOCIAL.github) { githubContact.href = SOCIAL.github; githubContact.textContent = SOCIAL.github.replace("https://", ""); }
    else { githubContact.textContent = "Add GitHub URL"; githubContact.classList.add("placeholder-text"); }
  }
  const linkedinContact = document.getElementById("contactLinkedinLink");
  if (linkedinContact) {
    if (SOCIAL.linkedinUrl) { linkedinContact.href = SOCIAL.linkedinUrl; linkedinContact.textContent = SOCIAL.linkedinUrl.replace("https://", ""); }
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

// =========================================================
// Lightbox
// =========================================================
let lightboxImages = [];
let lightboxIndex = 0;

function updateLightbox() {
  const img = document.getElementById("lightboxImg");
  const counter = document.getElementById("lightboxCounter");
  const prev = document.getElementById("lightboxPrev");
  const next = document.getElementById("lightboxNext");
  if (!img || lightboxImages.length === 0) return;
  img.src = lightboxImages[lightboxIndex];
  img.alt = `Screenshot ${lightboxIndex + 1} of ${lightboxImages.length}`;
  if (counter) counter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
  const showNav = lightboxImages.length > 1;
  if (prev) prev.style.display = showNav ? "" : "none";
  if (next) next.style.display = showNav ? "" : "none";
}

function openLightbox(images, index) {
  if (!images || images.length === 0) return;
  lightboxImages = images.slice();
  lightboxIndex = Math.max(0, Math.min(index || 0, lightboxImages.length - 1));
  updateLightbox();
  const lb = document.getElementById("lightbox");
  if (lb) {
    lb.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  if (lb) lb.classList.remove("is-open");
  document.body.style.overflow = "";
  lightboxImages = [];
}

function nextLightbox() {
  if (lightboxImages.length === 0) return;
  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
  updateLightbox();
}

function prevLightbox() {
  if (lightboxImages.length === 0) return;
  lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  updateLightbox();
}

// =========================================================
// Copy helper
// =========================================================
async function copyText(text, btn) {
  try {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      await navigator.clipboard.writeText(text);
    } else {
      throw new Error("clipboard unavailable");
    }
  } catch (e) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.top = "-9999px";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand("copy"); } catch (err) { }
    document.body.removeChild(ta);
  }
  if (btn) {
    const original = btn.textContent;
    btn.textContent = "Copied!";
    btn.classList.add("is-copied");
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove("is-copied");
    }, 1500);
  }
}

function initLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");
  if (closeBtn) closeBtn.addEventListener("click", (e) => { e.stopPropagation(); closeLightbox(); });
  if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); prevLightbox(); });
  if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); nextLightbox(); });
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLightbox();
  });
  // touch swipe
  let startX = 0;
  lb.addEventListener("touchstart", (e) => {
    if (e.touches && e.touches.length === 1) startX = e.touches[0].clientX;
  }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (!e.changedTouches || e.changedTouches.length !== 1) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) {
      if (dx < 0) nextLightbox(); else prevLightbox();
    }
  }, { passive: true });
  // keyboard
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") prevLightbox();
    else if (e.key === "ArrowRight") nextLightbox();
  });

  // Delegated clicks: gallery thumbnails & copy buttons
  document.addEventListener("click", (e) => {
    const thumb = e.target.closest(".gallery-thumb");
    if (thumb) {
      const gid = thumb.getAttribute("data-gallery-id");
      const idx = parseInt(thumb.getAttribute("data-gallery-index"), 10) || 0;
      const gals = window.PROJECT_GALLERIES || {};
      if (gals[gid]) openLightbox(gals[gid], idx);
      return;
    }
    const copyBtn = e.target.closest("[data-copy-value]");
    if (copyBtn) {
      copyText(copyBtn.getAttribute("data-copy-value"), copyBtn);
      return;
    }
    const toggle = e.target.closest("[data-demo-toggle]");
    if (toggle) {
      const panel = toggle.parentElement.querySelector(".demo-credentials");
      if (panel) {
        const nowHidden = panel.hasAttribute("hidden");
        if (nowHidden) panel.removeAttribute("hidden");
        else panel.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", nowHidden ? "true" : "false");
        toggle.textContent = nowHidden ? "Hide Demo Credentials" : "View Demo Credentials";
      }
      return;
    }
    const pwToggle = e.target.closest("[data-pw-toggle]");
    if (pwToggle) {
      const container = pwToggle.closest(".demo-credentials");
      const pwEl = container ? container.querySelector(".demo-password") : null;
      if (pwEl) {
        const actual = pwEl.getAttribute("data-password") || "";
        const isHidden = pwEl.textContent !== actual;
        // if currently showing masked, reveal; else mask
        if (pwEl.textContent === actual) {
          pwEl.textContent = "•".repeat(actual.length || 8);
          pwToggle.textContent = "Show Password";
          pwToggle.setAttribute("aria-pressed", "false");
        } else {
          pwEl.textContent = actual;
          pwToggle.textContent = "Hide Password";
          pwToggle.setAttribute("aria-pressed", "true");
        }
      }
      return;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  hydratePersonal();
  renderSkills();
  renderFeaturedProjects();
  renderOtherProjects();
  initNavbar();
  initSmoothAnchors();
  initLightbox();
  // reveal after render
  requestAnimationFrame(() => initReveal());
});