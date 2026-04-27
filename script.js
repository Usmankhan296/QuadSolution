document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const offset = 90; // navbar height

      const topPosition = target.offsetTop - offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth"
      });
    }
  });
});

// ==========================
// BUTTON CLICK EFFECT
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // page reload rokta hai

  const name = form.querySelector("input[type='text']").value;
  const email = form.querySelector("input[type='email']").value;
  const message = form.querySelector("textarea").value;

  if (name === "" || email === "" || message === "") {
    alert("⚠️ Please fill all required fields!");
  } else {
    alert("✅ Form submitted successfully!");

    form.reset(); // form clear ho jaye ga
  }
});



// get started....
const btn = document.querySelector(".main button");

btn.addEventListener("click", () => {
  const contactSection = document.querySelector("#contact");

  contactSection.scrollIntoView({
    behavior: "smooth"
  });
});




const cards = document.querySelectorAll(".card");
const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close-btn");

// Different descriptions
const serviceDetails = [
  "We verify provider licenses, qualifications, and experience for approval.",
  "We enroll providers with major insurance companies quickly.",
  "We handle claims, billing, and revenue cycle efficiently.",
  "We manage CAQH profiles and keep them updated.",
  "We ensure compliance with healthcare laws and documentation.",
  "We handle revalidation and renew credentials on time."
];

// CLICK EVENT
cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";

    modalTitle.innerText = card.querySelector("h2").innerText;
    modalText.innerText = serviceDetails[index];
  });
});

// CLOSE BUTTON
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// CLICK OUTSIDE CLOSE
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// process...


window.addEventListener("DOMContentLoaded", () => {

  const steps = document.querySelectorAll(".timeline-item");

  console.log("Steps found:", steps.length);

  steps.forEach(step => {
    step.addEventListener("click", () => {

      console.log("clicked");

      steps.forEach(s => s.classList.remove("active"));

      step.classList.add("active");

    });
  });

});

// animation
const elements = document.querySelectorAll(".animate");

function reveal() {
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    } else {
      el.classList.remove("show"); // 🔥 reset for re-animation
    }
  });
}

window.addEventListener("scroll", reveal);


const text = `Quad Solutions is a professional medical credentialing and healthcare support company focused on delivering reliable and efficient services to healthcare providers. We understand the challenges that clinics, hospitals, and practitioners face when dealing with credentialing, insurance enrollment, and compliance requirements.

Our mission is to simplify these complex processes by providing accurate, timely, and fully managed solutions. From initial data collection to final approval, our team ensures every step is handled with precision and care.

At Quad Solutions, we offer a range of services including provider credentialing, insurance network enrollment, medical billing support, and CAQH profile management. Our goal is to reduce administrative burden, minimize delays, and help healthcare professionals focus on what matters most — delivering excellent patient care.
Quad Solutions is a professional medical credentialing and healthcare support company focused on delivering reliable and efficient services to healthcare providers. We understand the challenges that clinics, hospitals, and practitioners face when dealing with credentialing, insurance enrollment, and compliance requirements.



`;

let i = 0;
const speed = 0; // speed control

function typeWriter() {
  if (i < text.length) {
    document.getElementById("aboutText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});


document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  console.log("Hamburger:", hamburger); // debug

  hamburger.addEventListener("click", () => {
    console.log("clicked");
    navLinks.classList.toggle("show");
  });

});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {

    // toggle active class
    item.classList.toggle("active");

  });
});