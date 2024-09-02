document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for icons
  document.getElementById("home-icon").addEventListener("click", function () {
    document
      .getElementById("home-section")
      .scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("skills-icon").addEventListener("click", function () {
    document
      .getElementById("skills-section")
      .scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("about-icon").addEventListener("click", function () {
    document
      .getElementById("about-section")
      .scrollIntoView({ behavior: "smooth" });
  });

  document
    .getElementById("projects-icon")
    .addEventListener("click", function () {
      document
        .getElementById("projects-section")
        .scrollIntoView({ behavior: "smooth" });
    });

  document
    .getElementById("certificate-icon")
    .addEventListener("click", function () {
      document
        .getElementById("certificate-section")
        .scrollIntoView({ behavior: "smooth" });
    });

  document
    .getElementById("contact-icon")
    .addEventListener("click", function () {
      document
        .getElementById("contact-section")
        .scrollIntoView({ behavior: "smooth" });
    });

  // Filter skill cards
  const buttons = document.querySelectorAll(".nav button");
  const cards = document.querySelectorAll(".skill-cards .card");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      cards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Certificate modal
  document
    .getElementById("certificate-item")
    .addEventListener("click", function () {
      document.getElementById("certificate-modal");
    });
});

// Modal functions
function showConfirmationModal() {
  document.getElementById("confirmation-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("confirmation-modal").style.display = "none";
}

function confirmSendEmail() {
  closeModal();
  sendEmail();
}

function sendEmail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_alie5f4", "template_sk1wis2", parms)
    .then(alert("Email sent successfully"));
}
