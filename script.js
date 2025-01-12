// Simple JavaScript to handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
    document.getElementById("contact-form").reset();
});
if (response.ok) {
  messageBox.className = 'success';
  messageBox.textContent = 'Thank you! Your message has been sent.';
} else {
  messageBox.className = 'error';
  messageBox.textContent = 'Oops! Something went wrong. Please try again.';
}
