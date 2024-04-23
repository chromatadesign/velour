setTimeout(() => {
    // Find all elements with the class 'hidden-cart-item'
    const hiddenCartItems = document.querySelectorAll('.hidden-cart-item');
    let serviceTitles = []; // Array to hold the titles

    // Object to store the keyword checks
    let keywordCheck = {
        "Botox": false,
        "Fillers": false,
        "PDO Threads": false,
        "PDO Thread Lift": false,
        "Smooth Threads": false,
        "PRP Injections": false,
        "Kybella": false,
        "Biostimulators": false,
        "Chemical Peels": false,
        "Microneedling": false,
        "Filler Dissolving": false,
        "Skinvive": false
    };

    hiddenCartItems.forEach(hiddenCartItem => {
        // Create a new div with class 'cart-item'
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        // Create and append the 'cart-image' div
        const cartImage = document.createElement('div');
        cartImage.className = 'cart-image';
        const hiddenCartImage = hiddenCartItem.querySelector('.hidden-cart-image');
        if (hiddenCartImage) {
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
        const selectedServiceTitle = hiddenCartItem.querySelector('.selected-service-title');
        if (selectedServiceTitle) {
            cartItemTitle.textContent = selectedServiceTitle.textContent;
            serviceTitles.push(selectedServiceTitle.textContent.trim());

            // Check for each keyword
            Object.keys(keywordCheck).forEach(key => {
                if (selectedServiceTitle.textContent.includes(key)) {
                    keywordCheck[key] = true;
                }
            });
        }
        cartItemInfo.appendChild(cartItemTitle);
        cartItem.appendChild(cartItemInfo);
        const selectedServicesGroup = document.getElementById('selected-services-group');
        if (selectedServicesGroup) {
            selectedServicesGroup.appendChild(cartItem);
        }
    });

    // Update the 'selected-services' input field with the joined service titles
    if (serviceTitles.length > 0) {
        const selectedServicesInput = document.getElementById('selected-services');
        if (selectedServicesInput) {
            selectedServicesInput.value = serviceTitles.join(', ');
        }
    }

    // Set the value for each keyword input field
    Object.keys(keywordCheck).forEach(key => {
        const inputId = key.toLowerCase().replace(/ /g, '-');
        const inputField = document.getElementById(inputId);
        if (inputField) {
            inputField.value = keywordCheck[key] ? "true" : "false";
        }
    });
}, 1000); // Delay execution by 1 second

