const contact = {
    whatsapp: "34616391186",
    email: "conpdepetit@gmail.com",
    instagram: "pdepetit"
};

const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const dropdown = document.querySelector(".nav-dropdown");
const dropdownToggle = dropdown?.querySelector(".nav-dropdown-toggle");
const dropdownMenu = dropdown?.querySelector(".dropdown-menu");

if (header && toggle) {
    toggle.addEventListener("click", () => {
        const isOpen = header.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });
}

if (dropdown && dropdownToggle && dropdownMenu) {
    const desktopHover = window.matchMedia("(min-width: 761px) and (hover: hover)");
    const setDropdownOpen = (isOpen) => {
        dropdown.classList.toggle("dropdown-open", isOpen);
        dropdownToggle.setAttribute("aria-expanded", String(isOpen));
    };

    dropdownToggle.addEventListener("click", () => {
        setDropdownOpen(!dropdown.classList.contains("dropdown-open"));
    });

    dropdown.addEventListener("pointerenter", (event) => {
        if (desktopHover.matches && event.pointerType === "mouse") {
            setDropdownOpen(true);
        }
    });

    dropdown.addEventListener("pointerleave", (event) => {
        if (desktopHover.matches && event.pointerType === "mouse"
            && !dropdownMenu.contains(document.activeElement)) {
            setDropdownOpen(false);
        }
    });

    dropdown.addEventListener("focusout", (event) => {
        if (!dropdown.contains(event.relatedTarget)) {
            setDropdownOpen(false);
        }
    });

    dropdown.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && dropdown.classList.contains("dropdown-open")) {
            dropdownToggle.focus();
            setDropdownOpen(false);
        }
    });

    document.addEventListener("click", (event) => {
        if (!dropdown.contains(event.target)) {
            setDropdownOpen(false);
        }
    });

    dropdownMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            setDropdownOpen(false);
            header?.classList.remove("nav-open");
            toggle?.setAttribute("aria-expanded", "false");
        });
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
