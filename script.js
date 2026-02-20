/* ================================
   EMAILJS INITIALIZATION
================================ */

(function () {
    emailjs.init("dNOJtXar5_-4IfI9X"); 
})();

/* ================================
   CONTACT FORM HANDLER
================================ */

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    formStatus.textContent = "Sending message...";
    formStatus.style.color = "#ff8c42";

    emailjs.sendForm(
        "service_m7756bm",   // e.g. service_xxxxx
        "template_g14bifm",  // e.g. template_xxxxx
        this
    )
    .then(() => {
        formStatus.textContent = "Message sent successfully!";
        formStatus.style.color = "green";
        contactForm.reset();
    })
    .catch(() => {
        formStatus.textContent = "Failed to send message. Please try again.";
        formStatus.style.color = "red";
    });
});

/* ================================
   EXISTING BUTTONS (OPTIONAL)
================================ */

// Explore Campus Button
const learnMoreBtn = document.getElementById("learnMoreBtn");
if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", () => {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    });
}

// Admissions Button
const admissionBtn = document.getElementById("admissionBtn");
const admissionMessage = document.getElementById("admissionMessage");

if (admissionBtn) {
    admissionBtn.addEventListener("click", () => {
        admissionMessage.textContent =
            "Eligibility details are available on the official portal.";
    });
}
