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
