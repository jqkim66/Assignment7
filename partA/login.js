$(document).ready(() => {
    // Helper function to validate northeastern e-mail
    function isValidNortheasternEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@northeastern\.edu$/;
        return regex.test(email);
    }

    // Validates the login form fields
    function validateForm() {
        let valid = true;

        const email = $('#email').val();
        if (!email || !isValidNortheasternEmail(email)) {
            $('#emailError').text('Please enter a valid northeastern email.');
            valid = false;
        } else {
            $('#emailError').text('');
        }

        const username = $('#username').val();
        if (!username || username.length < 3 || username.length > 50 || /[^a-zA-Z0-9_]/.test(username)) {
            $('#usernameError').text('Username must be between 3-50 characters and no special characters.');
            valid = false;
        } else {
            $('#usernameError').text('');
        }

        const password = $('#password').val();
        if (!password || password.length < 6 || password.length > 50) {
            $('#passwordError').text('Password must be between 6-50 characters.');
            valid = false;
        } else {
            $('#passwordError').text('');
        }

        const confirmPassword = $('#confirmPassword').val();
        if (password !== confirmPassword) {
            $('#confirmPasswordError').text('Passwords do not match.');
            valid = false;
        } else {
            $('#confirmPasswordError').text('');
        }

        // Enable/Disable the login button
        $('#loginBtn').prop('disabled', !valid);

        return valid;
    }

    // Attach event listeners
    $('#email, #username, #password, #confirmPassword').on('input', validateForm);

    $('#loginBtn').click(() => {
        if (validateForm()) {
            localStorage.setItem('username', $('#username').val());  // Store the username for the next page
            window.location.href = 'calculator.html';  // Redirect to calculator page
        }
    });
});
