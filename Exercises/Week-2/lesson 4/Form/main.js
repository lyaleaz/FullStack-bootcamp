function validateForm() {
    const name = document.getElementById('name').value;
    const salary = parseInt(document.getElementById('salary').value);
    const birthday = document.getElementById('birthday').value;
    const phone = document.getElementById('phone').value;

    document.getElementById('error-message').innerHTML = '';

    if (name.length <= 2) {
        displayError("Name must be longer than 2 characters");
    }

    if (salary < 10000 || salary > 16000) {
        displayError("Salary must be between 10,000 and 16,000");
    }

    if (!birthday) {
        displayError("Birthday may not be null");
    }

    if (phone.length !== 10) {
        displayError("Phone must be 10 digits long");
    }

    if (name.length > 2 && (salary >= 10000 && salary <= 16000) && birthday && phone.length === 10) {
        document.getElementById('form-container').style.display = 'none';
        showWelcomeMessage(name);
    }
}

function displayError(message) {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.innerHTML = message;
}

function showWelcomeMessage(name) {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.innerHTML = `Welcome, ${name}!`;
    document.body.appendChild(welcomeMessage);
    welcomeMessage.style.color = 'green';  
}
