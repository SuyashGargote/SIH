// Function to toggle between login and signup forms
function toggleForm() {
    const formTitle = document.getElementById('form-title');
    const confirmPasswordContainer = document.getElementById('confirm-password-container');
    const usernameContainer = document.getElementById('username-container');
    const toggleLink = document.querySelector('.toggle-form a');
    const loginButtons = document.getElementById('login-buttons');

    if (formTitle.textContent === 'Login') {
        formTitle.textContent = 'Sign Up';
        confirmPasswordContainer.style.display = 'block';
        usernameContainer.style.display = 'block';
        loginButtons.style.display = 'none';
        toggleLink.textContent = 'Already have an account? Log in here.';
    } else {
        formTitle.textContent = 'Login';
        confirmPasswordContainer.style.display = 'none';
        usernameContainer.style.display = 'none';
        loginButtons.style.display = 'flex';
        toggleLink.textContent = "Don't have an account? Sign up here.";
    }
}

// Function for login as mentor
function loginAsMentor() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email === '' || password === '') {
        alert('Please fill in all fields');
        return false;
    }

    // Add your mentor login logic here
    alert('Logging in as Mentor');
}

// Function for login as mentee
function loginAsMentee() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email === '' || password === '') {
        alert('Please fill in all fields');
        return false;
    }

    // Add your mentee login logic here
    alert('Logging in as Mentee');
}

// Basic form validation
function validateForm() {
    const formTitle = document.getElementById('form-title').textContent;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (formTitle === 'Sign Up' && password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }
    return true;
}
