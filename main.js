const contact = {
    whatsapp: "34616391186",
    email: "conpdepetit@gmail.com",
    instagram: "pdepetit"
};

const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const dropdown = document.querySelector(".nav-dropdown");
const dropdownTrigger = document.querySelector(".nav-trigger");

if (header && toggle) {
    toggle.addEventListener("click", () => {
        const isOpen = header.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });
}

if (dropdown && dropdownTrigger) {
    dropdownTrigger.addEventListener("click", () => {
        dropdown.classList.toggle("dropdown-open");
    });
}

// Header scroll shadow
if (header) {
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 12);
    }, { passive: true });
}

document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
});

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    const message = link.getAttribute("data-whatsapp");
    link.href = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
    link.target = "_blank";
    link.rel = "noopener";
});

document.querySelectorAll("[data-email]").forEach((link) => {
    const subject = link.getAttribute("data-email");
    link.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;
});

document.querySelectorAll("[data-instagram]").forEach((link) => {
    link.href = `https://www.instagram.com/${contact.instagram}`;
    link.target = "_blank";
    link.rel = "noopener";
});

document.querySelectorAll("[data-phone]").forEach((link) => {
    link.href = `tel:+${contact.whatsapp}`;
});

// Inject proper SVG icons into social links
const icons = {
    instagram: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4.5"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>`,
    email: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
    </svg>`
};

document.querySelectorAll("[data-instagram]").forEach((link) => {
    link.innerHTML = icons.instagram;
});

document.querySelectorAll("[data-whatsapp].social-link").forEach((link) => {
    link.innerHTML = icons.whatsapp;
});

document.querySelectorAll("[data-email].social-link").forEach((link) => {
    link.innerHTML = icons.email;
});
