const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();

// Animate toolkit bars when the skills section enters the viewport.
const skillSection = document.querySelector("#skills");
if ("IntersectionObserver" in window && skillSection) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".skill-track").forEach(track => track.classList.add("in-view"));
        observer.disconnect();
      }
    });
  }, { threshold: 0.2 });
  observer.observe(skillSection);
} else {
  document.querySelectorAll(".skill-track").forEach(track => track.classList.add("in-view"));
}

// Static GitHub Pages cannot receive form submissions without a backend.
// Prepare an email in the visitor's mail application instead.
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  document.getElementById("form-status").textContent = "Opening your email application with the message prepared…";
  window.location.href = `mailto:raj2468g@gmail.com?subject=${subject}&body=${body}`;
});
