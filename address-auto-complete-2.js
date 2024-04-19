function initAutocomplete() {
    var autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('address'), {types: ['geocode']}
    );

    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        var city = '';
        var state = '';
        var zip = '';
        var partsToRemove = [];

        for (var i = 0; i < place.address_components.length; i++) {
            var component = place.address_components[i];
            var addressType = component.types[0];

            if (addressType === 'locality') {
                city = component['long_name'];
                partsToRemove.push(city);
            } else if (addressType === 'administrative_area_level_1') {
                state = component['short_name'];
                partsToRemove.push(state);
            } else if (addressType === 'postal_code') {
                zip = component['long_name'];
            }
        }

        // Immediately update values
        document.getElementById('city').value = city;
        document.getElementById('state').value = state;
        document.getElementById('zip').value = zip;

        // Adjust the address field by removing city and state
        var addressField = document.getElementById('address');
        var addressValue = addressField.value;

        // Regular expression to remove parts
        partsToRemove.forEach(function(part) {
            var regex = new RegExp(part + '\\s*,\\s*|\\s+' + part, 'gi');
            addressValue = addressValue.replace(regex, '');
        });
        addressValue = addressValue.replace(/, USA$/, '');
        addressValue = addressValue.replace(/,,+/g, ',').replace(/,\s*$/, '').trim();
        addressField.value = addressValue;

        // Trigger the input events after the updates
        triggerInputEvent(document.getElementById('city'));
        triggerInputEvent(document.getElementById('state'));
        triggerInputEvent(document.getElementById('zip'));
        triggerInputEvent(addressField);
    });
}

// Helper function to trigger 'input' event
function triggerInputEvent(field) {
    var event = new Event('input', { bubbles: true });
    field.dispatchEvent(event);
}

