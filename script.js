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
<script>
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission to allow validation

        // Grab form elements
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        const formMessage = document.getElementById("formMessage");

        // Grab error message elements
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");

        // Clear previous errors
        nameError.style.display = "none";
        emailError.style.display = "none";
        messageError.style.display = "none";

        let isValid = true;

        // Name Validation
        if (name.value.trim() === "") {
            nameError.textContent = "Name is required.";
            nameError.style.display = "block";
            isValid = false;
        }

        // Email Validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            emailError.style.display = "block";
            isValid = false;
        }

        // Message Validation
        if (message.value.trim() === "") {
            messageError.textContent = "Message cannot be empty.";
            messageError.style.display = "block";
            isValid = false;
        }

        // If form is valid, proceed with submission
        if (isValid) {
            const formData = new FormData(this);

            fetch(this.action, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            })
                .then((response) => {
                    if (response.ok) {
                        formMessage.style.display = "block";
                        formMessage.style.color = "green";
                        formMessage.textContent = "Thank you! Your message has been sent.";
                        this.reset(); // Clear form fields
                    } else {
                        throw new Error("Network response was not ok.");
                    }
                })
                .catch((error) => {
                    formMessage.style.display = "block";
                    formMessage.style.color = "red";
                    formMessage.textContent = "Oops! Something went wrong. Please try again.";
                });
        }
    });



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (
