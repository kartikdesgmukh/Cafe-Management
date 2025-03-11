document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const signupForm = document.getElementById('signupForm');

    // Add a submit event listener to the form
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form inputs
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validate inputs
        if (!validateUsername(username)) {
            alert('Username must be at least 3 characters long.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!validatePassword(password)) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        // If all validations pass, proceed with form submission
        const formData = {
            username: username,
            email: email,
            password: password,
        };

        // Log the form data (for testing purposes)
        console.log('Form Data:', formData);

        // Display a success message
        alert('Signup successful!');

        // Optionally, send the data to a server using fetch() or XMLHttpRequest
        // sendFormDataToServer(formData);
    });

    // Validation functions
    function validateUsername(username) {
        return username.length >= 3;
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }

    // Function to send form data to a server (example using fetch)
    function sendFormDataToServer(formData) {
        fetch('submit_form.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Server Response:', data);
                alert('Signup successful!');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
    }
});