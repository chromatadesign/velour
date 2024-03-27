//Code to obtain user variables from URL
window.onload = function() {
    const params = new URLSearchParams(window.location.search); // Use window.location.search for query params

    // Extract parameters
    const userID = params.get('pt');
    const payStatus = params.get('card');
    const firstName = params.get('firstName');
    const lastName = params.get('lastName');
    const email = params.get('email');

    // Check and set userID and payStatus
    if (userID && payStatus) {
        localStorage.setItem('userID', userID);
        localStorage.setItem('payStatus', payStatus);
    }

    // Check and set firstName, lastName, and email
    if (firstName) {
        localStorage.setItem('firstName', firstName);
    }
    if (lastName) {
        localStorage.setItem('lastName', lastName);
    }
    if (email) {
        localStorage.setItem('email', email);
    }
};


//Code to erase user variables from local storage if user clicks log-out button
document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('log-user-out-btn');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Clear specific localStorage items
            localStorage.removeItem('userID');
            localStorage.removeItem('payStatus');
            localStorage.removeItem('firstName');
            localStorage.removeItem('lastName');
            localStorage.removeItem('email');

            // Refresh the page
            window.location.reload();
        });
    }
});


