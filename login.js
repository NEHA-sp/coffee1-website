document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        username: document.getElementById('username').value,
     
        password: document.getElementById('password').value
    };

    fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Login successful') {
            // Redirect to home page with username as a parameter
            window.location.href = `index2.html?username=${formData.username}`;
            
        } else {
            console.log('Login failed:', data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});