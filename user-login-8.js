document.addEventListener('DOMContentLoaded', function() {
    // Retrieve values from URL parameters or localStorage
    const params = new URLSearchParams(window.location.search);
    let userID = params.get('pt') || localStorage.getItem('userID');
    let firstName = params.get('ptF') || localStorage.getItem('firstName');
    const payStatus = params.get('card') || localStorage.getItem('payStatus');
    const lastName = params.get('ptL') || localStorage.getItem('lastName');
    const email = params.get('ptE') || localStorage.getItem('email');
    let aptValue = params.get('apt');

    // Manage the 'apt' value from the URL
    if (aptValue) {
        localStorage.setItem('velour-apt', JSON.stringify({ value: aptValue, timestamp: new Date().getTime() }));
    } else {
        let storedApt = localStorage.getItem('velour-apt');
        if (storedApt) {
            storedApt = JSON.parse(storedApt);
            const oneHourAgo = new Date().getTime() - (60 * 60 * 1000);
            if (storedApt.timestamp < oneHourAgo) {
                localStorage.removeItem('velour-apt');
            }
        }
    }

    // Elements
    const loggedInUserBase = document.getElementById('logged-in-user-base');
    const loggedInUserBaseMobile = document.getElementById('logged-in-user-base-mobile');
    const loggedOutUserBase = document.getElementById('logged-out-user-base');
    const loggedOutUserBaseMobile = document.getElementById('logged-out-user-base-mobile');
    const userNameDiv = document.getElementById('user-name');
    const userNameMobileDiv = document.getElementById('user-name-mobile');
    const logoutBtn = document.getElementById('log-user-out-btn');
    const logoutBtnMobile = document.getElementById('log-user-out-btn-mobile');

    // Update element visibility based on userID
    updateVisibility(userID, loggedInUserBase, loggedInUserBaseMobile, loggedOutUserBase, loggedOutUserBaseMobile);

    // Set the userName in respective divs if available
    if (firstName) {
        updateUserName(firstName, userNameDiv, userNameMobileDiv);
    }

    // Update localStorage with parameters if provided
    if (params.has('pt')) {
        userID = params.get('pt'); // Ensure the latest userID is used
        localStorage.setItem('userID', userID);
    }
    if (params.has('ptF')) {
        firstName = params.get('ptF'); // Update firstName with URL parameter
        localStorage.setItem('firstName', firstName);
    }
    if (payStatus) {
        localStorage.setItem('payStatus', payStatus);
    }
    if (lastName) {
        localStorage.setItem('lastName', lastName);
    }
    if (email) {
        localStorage.setItem('email', email);
    }

    // Logout functionality
    [logoutBtn, logoutBtnMobile].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', function() {
                ['userID', 'payStatus', 'firstName', 'lastName', 'email'].forEach(key => localStorage.removeItem(key));
                window.location.href = 'https://www.velourmd.com';
            });
        }
    });
});

function updateVisibility(userID, loggedInUserBase, loggedInUserBaseMobile, loggedOutUserBase, loggedOutUserBaseMobile) {
    const displayLoggedIn = userID ? 'flex' : 'none';
    const displayLoggedOut = userID ? 'none' : 'flex';

    if (loggedInUserBase) loggedInUserBase.style.display = displayLoggedIn;
    if (loggedInUserBaseMobile) loggedInUserBaseMobile.style.display = displayLoggedIn;
    if (loggedOutUserBase) loggedOutUserBase.style.display = displayLoggedOut;
    if (loggedOutUserBaseMobile) loggedOutUserBaseMobile.style.display = displayLoggedOut;
}

function updateUserName(firstName, userNameDiv, userNameMobileDiv) {
    if (userNameDiv) userNameDiv.textContent = firstName;
    if (userNameMobileDiv) userNameMobileDiv.textContent = firstName;
}

