//Responsive Navbar
function toggleMenu() {
    var navbar = document.getElementById("navbarNav");
    navbar.classList.toggle("active");
    }
    document.addEventListener("click", function(event) {
    var navbar = document.getElementById("navbarNav");
    var hamburger = document.getElementById("hamburger"); // ID of the hamburger button
    
    if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
    navbar.classList.remove("active");
    }
    })
    //Services Slideshow/////////
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    let index = 0;

    function showSlide(i) {
        index = (i + dots.length) % dots.length;
        slides.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === index);
        });
    }

    function autoSlide() {
        showSlide(index + 1);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => showSlide(i));
    });

    setInterval(autoSlide, 5000);
   ///CONTACT form
   // Function to send form data via WhatsApp
function sendViaWhatsApp() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    const phoneNumber = "254743714202"; // Replace with your WhatsApp phone number in international format (e.g., 254712345678 for Kenya)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        `Hello, my name is ${name}.\nEmail: ${email}\nMessage: ${message}`
    )}`;
    window.open(whatsappUrl, '_blank');
}

// Function to send form data via Email
function sendViaEmail() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    const emailSubject = `Message from ${name}`;
    const emailBody = `Hello,\n\nYou have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`;
    const emailRecipient = "omondiwellington011@gmail"; // Replace with your email address
    const mailtoUrl = `mailto:${emailRecipient}?subject=${encodeURIComponent(
        emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
}

// Attach event listeners to buttons
document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    if (event.submitter.textContent.includes('Whatsapp')) {
        sendViaWhatsApp();
    } else if (event.submitter.textContent.includes('Email')) {
        sendViaEmail();
    }
});
