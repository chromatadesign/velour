function initAutocomplete() {
    var autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('address'), {types: ['geocode']}
    );

    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        var city = '';
        var state = '';
        var zip = '';

        place.address_components.forEach(function(component) {
            var addressType = component.types[0];
            switch (addressType) {
                case 'locality':
                    city = component.long_name;
                    break;
                case 'administrative_area_level_1':
                    state = component.short_name;
                    break;
                case 'postal_code':
                    zip = component.long_name;
                    break;
            }
        });

        // Update values and manually trigger input events
        updateFieldAndTriggerEvent('city', city);
        updateFieldAndTriggerEvent('state', state);
        updateFieldAndTriggerEvent('zip', zip);

        // Set the address field value and clean it up
        var addressField = document.getElementById('address');
        var filteredAddress = filterAddress(place.formatted_address, city, state);
        updateFieldAndTriggerEvent('address', filteredAddress);
    });
}

function updateFieldAndTriggerEvent(fieldId, value) {
    var field = document.getElementById(fieldId);
    field.value = value;
    field.dispatchEvent(new Event('input', { bubbles: true }));
}

function filterAddress(fullAddress, city, state) {
    var address = fullAddress;
    var partsToRemove = [city, state, ", USA"];

    partsToRemove.forEach(part => {
        var regex = new RegExp(part + '\\s*,\\s*|\\s+' + part, 'gi');
        address = address.replace(regex, '');
    });

    return address.replace(/,,+/g, ',').replace(/,\s*$/, '').trim();
}


