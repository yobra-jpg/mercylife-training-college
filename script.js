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
</script>
document.addEventListener("DOMContentLoaded", function () {
    const videoFiles = [
        "video1.mp4",
        "video2.mp4",
        "video3.mp4"
    ];

    let currentIndex = 0;
    const videoElement = document.getElementById("video-slideshow");

    function playNextVideo() {
        videoElement.src = videoFiles[currentIndex];
        videoElement.play();

        currentIndex = (currentIndex + 1) % videoFiles.length;

        videoElement.onended = playNextVideo;
    }

    playNextVideo();
});
const slideshow = document.getElementById('slideshow');
const slides = slideshow.getElementsByTagName('li');
const totalSlides = slides.length;
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.transform = 'translateX(100%)';
  currentSlide = (n + totalSlides) % totalSlides;
  slides[currentSlide].style.transform = 'translateX(0)';
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Initial show
showSlide(currentSlide);

// Event listeners for next/previous buttons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    // Example credentials (you can replace these with a database check in a real application)
    const validUsername = "student";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
        // Redirect to the student dashboard
        window.location.href = "dashboard.html"; // Change to your dashboard page
    } else {
        errorMsg.textContent = "Invalid username or password.";
    }
});
