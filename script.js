document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally

    // Form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a simple status message
    const status = document.getElementById('form-status');
    status.textContent = `Thank you for your message, ${name}! I'll get back to you at ${email}.`;

    // Here, you could add code to send the form data to your email or a server
});
