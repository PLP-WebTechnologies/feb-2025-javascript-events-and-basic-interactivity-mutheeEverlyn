// Smooth scroll to contact section
document.getElementById("scrollToContact").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });
  
  // Contact form validation
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");
  
    if (!name || !email || !message) {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill in all fields.";
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formMessage.style.color = "red";
      formMessage.textContent = "Please enter a valid email address.";
      return;
    }
  
    formMessage.style.color = "green";
    formMessage.textContent = "Thank you! Your message has been sent.";

    //clear the form inputs
    this.reset();

     //Clear the success message after 3 seconds
  setTimeout(() => {
    formMessage.textContent = "";
  }, 3000);
  });
  
