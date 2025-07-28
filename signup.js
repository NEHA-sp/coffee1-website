document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const password = form.elements['password'].value;

        // Here you can perform additional validation if needed

        // Simulate account creation (replace this with actual backend logic)
        // For demonstration purposes, I'm using a setTimeout to mimic asynchronous behavior
        setTimeout(function() {
            alert('Account created successfully!');
            
            // Redirect to index.html with username as URL parameter
            const username = encodeURIComponent(name); // Encode username for URL
            window.location.href = `index2.html?username=${username}`;
        }, 1000); // Delay for 1 second (to simulate asynchronous operation)
    });
});
