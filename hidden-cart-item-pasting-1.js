setTimeout(() => {
    // Find all elements with the class 'hidden-cart-item'
    const hiddenCartItems = document.querySelectorAll('.hidden-cart-item');
    let serviceTitles = []; // Array to hold the titles

    hiddenCartItems.forEach(hiddenCartItem => {
        // Create a new div with class 'cart-item'
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        // Create and append the 'cart-image' div
        const cartImage = document.createElement('div');
        cartImage.className = 'cart-image';
        // Find the 'img' element within 'hidden-cart-image'
        const hiddenCartImage = hiddenCartItem.querySelector('.hidden-cart-image');
        if (hiddenCartImage) {
            // Clone the 'img' element and append it to 'cart-image'
            const clonedImage = hiddenCartImage.cloneNode(true);
            cartImage.appendChild(clonedImage);
        }
        cartItem.appendChild(cartImage);

        // Create and append the 'cart-item-info' div
        const cartItemInfo = document.createElement('div');
        cartItemInfo.className = 'cart-item-info';

        // Create and append the 'cart-item-title' div
        const cartItemTitle = document.createElement('div');
        cartItemTitle.className = 'cart-item-title';
        // Find the 'selected-service-title' and copy its text content
        const selectedServiceTitle = hiddenCartItem.querySelector('.selected-service-title');
        if (selectedServiceTitle) {
            cartItemTitle.textContent = selectedServiceTitle.textContent;
            // Add the title to the array
            serviceTitles.push(selectedServiceTitle.textContent.trim());
        }
        cartItemInfo.appendChild(cartItemTitle);

        // Append 'cart-item-info' to 'cart-item'
        cartItem.appendChild(cartItemInfo);

        // Append 'cart-item' to the 'selected-services-group' div
        const selectedServicesGroup = document.getElementById('selected-services-group');
        if (selectedServicesGroup) {
            selectedServicesGroup.appendChild(cartItem);
        }
    });

    // After collecting all service titles, join them with commas and set the value of the 'selected-services' input field
    if (serviceTitles.length > 0) {
        const selectedServicesInput = document.getElementById('selected-services');
        if (selectedServicesInput) {
            selectedServicesInput.value = serviceTitles.join(', ');
        }
    }
}, 1000); // Delay execution by 1 second

