document.addEventListener('DOMContentLoaded', () => {
    // Toggle Enquiry Form visibility
    const enquiryToggleButton = document.getElementById('enquiry-toggle');
    const enquiryForm = document.getElementById('enquiry-form');

    enquiryToggleButton.addEventListener('click', () => {
        // Toggle the visibility of the enquiry form
        enquiryForm.classList.toggle('visible');
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && enquiryForm.classList.contains('visible')) {
            enquiryForm.classList.remove('visible');
        }
    });
    
    // Handle Enquiry Form Submission
    const enquiryFormSubmit = document.getElementById('enquiry-form');
    enquiryFormSubmit.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from refreshing the page or sending data

        // Display notification
        alert('Thank you for your enquiry! We will get back to you soon.');

        // Reset the form fields
        enquiryFormSubmit.reset();

        // Optionally, hide the enquiry form after submission
        enquiryForm.classList.remove('visible');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Display success alert
        alert('Your form has been submitted successfully!');

        // Optionally, reset the form fields
        contactForm.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const slide = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;

    const updateSlidePosition = () => {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slide.length - 1;
        updateSlidePosition();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex < slide.length - 1) ? currentIndex + 1 : 0;
        updateSlidePosition();
    });

    // Auto-slide (optional)
    setInterval(() => {
        currentIndex = (currentIndex < slide.length - 1) ? currentIndex + 1 : 0;
        updateSlidePosition();
    }, 5000); // Adjust the interval (5 seconds)
});

document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".video");

    videos.forEach((video) => {
        video.pause(); // Ensure video doesn't autoplay

        video.addEventListener("mouseenter", function () {
            video.play(); // Play when hovered
        });

        video.addEventListener("mouseleave", function () {
            video.pause();
            video.currentTime = 0; // Reset to start when mouse leaves
        });
    });
});

document.getElementById('hamburger-menu').addEventListener('click', function() {
    var nav = document.querySelector('.nav');
    var hamburger = document.getElementById('hamburger-menu');

    nav.classList.toggle('open'); // Toggle navigation visibility
    hamburger.classList.toggle('open'); // Toggle hamburger to 'X'
});
