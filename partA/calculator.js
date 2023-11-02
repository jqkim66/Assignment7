$(document).ready(() => {
    // Display the logged-in username
    const username = localStorage.getItem('username');
    $('#usernameDisplay').text(username);

    function validateNumbers() {
        let valid = true;
        const num1Str = $('#num1').val();
        const num1 = parseFloat(num1Str);
        if (!(/^-?\d+(\.\d+)?$/.test(num1Str)) || !isFinite(num1)) {
            $('#num1Error').text('Please enter a valid number.');
            valid = false;
        } else {
            $('#num1Error').text('');
        }
        alert(num1);
        const num2Str = $('#num2').val();
        const num2 = parseFloat(num2Str);
        if (!(/^-?\d+(\.\d+)?$/.test(num2Str)) || !isFinite(num2)) {
            $('#num2Error').text('Please enter a valid number.');
            valid = false;
        } else {
            $('#num2Error').text('');
        }

        return valid;
    }

    const calculate = (op, num1, num2) => {
        switch (op) {
            case 'add':
                return num1 + num2;
            case 'subtract':
                return num1 - num2;
            case 'multiply':
                return num1 * num2;
            case 'divide':
                if (num2 === 0) {
                    $('#num2Error').text('Cannot divide by zero!');
                    valid = false;
                    return 'Error';
                } else {
                    $('#num2Error').text('');
                }
                return num1 / num2;
            default:
                return 'Error';
        }
    }

    $('button[data-op]').click((event) => {
        if (validateNumbers()) {
            const op = $(event.target).data('op');
            const num1 = parseFloat($('#num1').val());
            const num2 = parseFloat($('#num2').val());
            const result = calculate(op, num1, num2);
            $('#result').val(result);
        }
    });
});
