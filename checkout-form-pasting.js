document.addEventListener('DOMContentLoaded', function() {
    const ptField = document.getElementById('pt');
    const aptField = document.getElementById('apt');
    const loggedOutForm = document.getElementById('logged-out-form');
    const loggedInForm = document.getElementById('logged-in-form');
    const creditAuthContainer = document.getElementById('credit-auth-container');
    const phoneField = document.getElementById('Phone');
    const dobField = document.getElementById('dob');
    const addressField = document.getElementById('address');
    const cityField = document.getElementById('city');
    const stateField = document.getElementById('state');
    const zipField = document.getElementById('zip');
    const firstNameField = document.getElementById('First-Name');
    const lastNameField = document.getElementById('Last-Name');
    const firstNameBox = document.getElementById("logged-in-first-name");
    const lastNameBox = document.getElementById("logged-in-last-name");
    const emailBox = document.getElementById("logged-in-email");
    const emailField = document.getElementById('Email');
    const cardField = document.getElementById('card');
    const ccAuthTokenField = document.getElementById('cc-auth-token');
    const submitWrapper = document.getElementById('submit-wrap');
    const dobInput = document.getElementById('dob-input'); // This is the external input field if exists

    // Retrieve values from local storage
    const userID = localStorage.getItem('userID');
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const email = localStorage.getItem('email');
    const payStatus = localStorage.getItem('payStatus');
    let velourApt = localStorage.getItem('velour-apt');

    function triggerInputEvent(field) {
        const event = new Event('input', { bubbles: true });
        field.dispatchEvent(event);
    }

    function setFieldValue(field, value) {
        field.value = value;
        setTimeout(() => triggerInputEvent(field), 0);
    }

    if (dobInput) {
        dobInput.addEventListener('change', function() {
            setFieldValue(dobField, dobInput.value);
        });
    }

    if (userID) {
        setFieldValue(ptField, userID);
        loggedOutForm.style.display = 'none';
        loggedInForm.style.display = 'flex';
        firstNameBox.textContent = firstName;
        lastNameBox.textContent = lastName;
        emailBox.textContent = email;

        setFieldValue(phoneField, "214-556-7890");
        setFieldValue(dobField, "1900-01-01");
        setFieldValue(addressField, "123 Street");
        setFieldValue(cityField, "City");
        setFieldValue(stateField, "State");
        setFieldValue(zipField, "12345");
    } else {
        setFieldValue(ptField, "New");
    }

    setFieldValue(firstNameField, firstName || (userID ? "No Name Found" : ""));
    setFieldValue(lastNameField, lastName || (userID ? "No Name Found" : ""));
    setFieldValue(emailField, email || (userID ? "NoEmailFound@velourmd.com" : ""));
    setFieldValue(cardField, payStatus || "no");

    if (payStatus === 'yes') {
        creditAuthContainer.style.display = 'none';
        submitWrapper.style.display = 'flex';
        setFieldValue(ccAuthTokenField, "yes");
    }
    if (velourApt) {
        try {
            velourApt = JSON.parse(velourApt).value;
        } catch (e) {
            console.error('Error parsing velour-apt:', e);
            velourApt = 'new'; 
        }
        setFieldValue(aptField, velourApt);
    } else {
        setFieldValue(aptField, "new");
    }
    updateDisplay();
});
