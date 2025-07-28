document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here

    // Event listener for form submission
    document.getElementById('addToCartForm').addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Retrieve form data
        const formData = {
            pname: document.getElementById('pname').value,
            price: document.getElementById('price').value,
            quantity: document.getElementById('quantity').value
        };

        // Log form data for debugging
        console.log(formData.pname);
        console.log(formData.price);
        console.log(formData.quantity);

        // Fetch request to submit form data
        fetch('http://localhost:3001/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'items added to the cart') {
                // Redirect to billing page with form data as parameters
                window.location.href = `billing.html?pname=${formData.pname}&price=${formData.price}&quantity=${formData.quantity}`;
            } else {
                console.log('Adding items to cart failed:', data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
