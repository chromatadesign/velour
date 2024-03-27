// Code to initialize, handle user variables from URL, and logout functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize from URL parameters upon page load
    const params = new URLSearchParams(window.location.search);
    const userID = params.get('pt');
    const payStatus = params.get('card');
    const firstName = params.get('firstName');
    const lastName = params.get('lastName');
    const email = params.get('email');

    // Elements
    const loggedInUserBase = document.getElementById('logged-in-user-base');
    const loggedInUserBaseMobile = document.getElementById('logged-in-user-base-mobile');
    const loggedOutUserBase = document.getElementById('logged-out-user-base');
    const loggedOutUserBaseMobile = document.getElementById('logged-out-user-base-mobile');
    const logoutBtn = document.getElementById('log-user-out-btn');
    const logoutBtnMobile = document.getElementById('log-user-out-btn-mobile');

    // Set visibility based on login status
    updateVisibility(userID, loggedInUserBase, loggedInUserBaseMobile, loggedOutUserBase, loggedOutUserBaseMobile);

    // Set user data if available
    if (userID && payStatus) {
        localStorage.setItem('userID', userID);
        localStorage.setItem('payStatus', payStatus);
    }
    if (firstName) localStorage.setItem('firstName', firstName);
    if (lastName) localStorage.setItem('lastName', lastName);
    if (email) localStorage.setItem('email', email);

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

// Function to update visibility of elements based on user login status
function updateVisibility(userID, loggedInUserBase, loggedInUserBaseMobile, loggedOutUserBase, loggedOutUserBaseMobile) {
    const displayLoggedIn = userID ? 'flex' : 'none';
    const displayLoggedOut = userID ? 'none' : 'flex';

    if (loggedInUserBase) loggedInUserBase.style.display = displayLoggedIn;
    if (loggedInUserBaseMobile) loggedInUserBaseMobile.style.display = displayLoggedIn;
    if (loggedOutUserBase) loggedOutUserBase.style.display = displayLoggedOut;
    if (loggedOutUserBaseMobile) loggedOutUserBaseMobile.style.display = displayLoggedOut;
}



