document.addEventListener('DOMContentLoaded', function() {
    // Attempt to retrieve userID from URL parameters or localStorage
    const params = new URLSearchParams(window.location.search);
    let userID = params.get('pt') || localStorage.getItem('userID');
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

    // Update element visibility based on userID
    updateVisibility(userID, loggedInUserBase, loggedInUserBaseMobile, loggedOutUserBase, loggedOutUserBaseMobile);

    // Update localStorage and variables if parameters are provided
    if (params.get('pt')) {
        userID = params.get('pt'); // Ensure the latest userID is used
        localStorage.setItem('userID', userID);
    }
    if (payStatus) localStorage.setItem('payStatus', payStatus);
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

function updateVisibility(userID, loggedInUserBase, loggedInUserBaseMobile, loggedOutUserBase, loggedOutUserBaseMobile) {
    const displayLoggedIn = userID ? 'flex' : 'none';
    const displayLoggedOut = userID ? 'none' : 'flex';

    if (loggedInUserBase) loggedInUserBase.style.display = displayLoggedIn;
    if (loggedInUserBaseMobile) loggedInUserBaseMobile.style.display = displayLoggedIn;
    if (loggedOutUserBase) loggedOutUserBase.style.display = displayLoggedOut;
    if (loggedOutUserBaseMobile) loggedOutUserBaseMobile.style.display = displayLoggedOut;
}



