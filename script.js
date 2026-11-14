const ctaButton = document.getElementById("cta-button");
const message = document.getElementById("message");

if (ctaButton && message) {
  ctaButton.addEventListener("click", () => {
    message.textContent = "Thanks for visiting Sky Enterprises.";
  });
}
