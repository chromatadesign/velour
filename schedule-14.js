document.addEventListener('DOMContentLoaded', function() {
  var timeDivs = document.querySelectorAll('.time-txt');

  timeDivs.forEach(function(div) {
    div.addEventListener('click', function() {
      // Remove 'checked' class from all time-txt divs
      timeDivs.forEach(function(innerDiv) {
        innerDiv.classList.remove('checked');
      });

      // Add 'checked' class to the clicked div
      div.classList.add('checked');
    });
  });
});

function formatDate(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();

    return `${dayOfWeek}, ${month}. ${dayOfMonth}`;
}

function updateDate(divId, daysToAdd) {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + daysToAdd);

    const formattedDate = formatDate(futureDate);

    document.getElementById(divId).innerText = formattedDate;
}

// Update to 90 days
for (let i = 2; i <= 90; i++) {
    updateDate(`day-${i}`, i);
}

// Sample input strings
var inputString0to30 = document.getElementById("schedule-text-0-30").textContent;
var inputString31to60 = document.getElementById("schedule-text-31-60").textContent;
var inputString61to90 = document.getElementById("schedule-text-61-90").textContent;

// Initialize availability arrays for each day
for (let i = 0; i <= 90; i++) {
    window[`Day${i}Availability`] = [];
}

// Function to parse and extract availability
function parseAvailability(input, startDay) {
    var match;
    var regex = /\[S(\d+): ([^[\]]*)\]\[A\1: ([^[\]]*)\]/g;

    while ((match = regex.exec(input)) !== null) {
        var day = parseInt(match[1]) + startDay;
        var sList = match[2].split(',').map(num => num.trim());
        var aList = match[3].split(',').map(num => num.trim());

        // Remove common numbers from sList
        var filteredSList = sList.filter(num => {
            var firstNumberInGroup = num.split('-')[0];
            var isCommonNumber = aList.some(aNum => aNum.startsWith(firstNumberInGroup));
            return !isCommonNumber;
        });

        // Assign the filtered list to the corresponding DayAvailability variable
        window[`Day${day}Availability`] = filteredSList;
    }
}

// Call the function with the input strings
parseAvailability(inputString0to30, 0);
parseAvailability(inputString31to60, 31);
parseAvailability(inputString61to90, 61);

function convertMilitaryTimeToStandard(time) {
    let hours = parseInt(time.substring(0, 2), 10);
    let minutes = time.substring(2, 4);
    let suffix = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${suffix}`;
}

function addDaysToDate(days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

function processDayAvailability(day, availability) {
    const divId = `times-${day}`;
    const div = document.getElementById(divId);

    if (availability.length === 0) {
        const dayDiv = document.getElementById(`day-${day}-div`);
        dayDiv.style.display = 'none';
        return;
    }

    const dateValue = addDaysToDate(day); // Calculate the date based on the day

    availability.forEach(value => {
        const time = convertMilitaryTimeToStandard(value.substring(0, 4));
        const [_, office, room] = value.split('-');

        // Create radio input
        const radioInput = document.createElement('input');
        radioInput.setAttribute('type', 'radio');
        radioInput.setAttribute('name', 'times');
        radioInput.setAttribute('class', 'time-radio');
        radioInput.setAttribute('Office', office);
        radioInput.setAttribute('Room', room);
        radioInput.setAttribute('date', dateValue); // Add the date attribute

        // Create label for the radio input
        const label = document.createElement('label');
        label.appendChild(radioInput);

        // Create span for the time text
        const timeText = document.createElement('span');
        timeText.setAttribute('class', 'time-txt');
        timeText.textContent = time;

        label.appendChild(timeText);
        div.appendChild(label);
    });
}

// Update to 90 days
for (let day = 0; day <= 90; day++) {
    const availabilityArray = window[`Day${day}Availability`];
    processDayAvailability(day, availabilityArray);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.time-txt').forEach(function(div) {
        div.addEventListener('click', function() {
            // Find the associated radio input
            var radioInput = this.previousElementSibling;

            // Get the values from the radio input's attributes
            var officeValue = radioInput.getAttribute('Office');
            var roomValue = radioInput.getAttribute('Room');
            var dateValue = radioInput.getAttribute('Date'); // e.g., "4/20/2024"

            // Get the displayed text value of the clicked div
            var timeValue = this.textContent; // e.g., "1:00 pm"

            // Paste the values into the form fields
            document.getElementById('office').value = officeValue;
            document.getElementById('room').value = roomValue;
            document.getElementById('time').value = timeValue;
            document.getElementById('date').value = dateValue;
            const errorMessageDiv = document.getElementById('error-message');
            const confirmationMessageDiv = document.getElementById('confirmation-message');
            const submitAppBtnDiv = document.getElementById('submit-app-btn');
            errorMessageDiv.style.display = 'none';
            confirmationMessageDiv.style.display = 'flex';
            submitAppBtnDiv.style.display = 'block';

            // Paste the time value into the app-time-txt div
            document.getElementById('app-time-txt').textContent = timeValue;

            // Format the date and paste into the app-date-txt div
            var formattedDate = formatDate(dateValue); // Assuming this function returns the date in a desired format
            document.getElementById('app-date-txt').textContent = formattedDate;

            // Combine date and time, and update the app-start-date-time input field
            var dateTimeString = combineDateTime(dateValue, timeValue);
            document.getElementById('app-start-date-time').value = dateTimeString;

        });
    });
});

function formatDate(dateStr) {
    // Assuming this function formats the date as needed; it's a placeholder here
    return dateStr; // Placeholder implementation
}

function combineDateTime(dateValue, timeValue) {
    // Convert the dateValue to YYYY-MM-DD
    var [month, day, year] = dateValue.split('/');
    var formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

    // Convert timeValue to 24-hour format HH:MM:SS
    var timeParts = timeValue.match(/(\d+):(\d+) (\w+)/);
    var hours = parseInt(timeParts[1], 10);
    var minutes = timeParts[2];
    var meridian = timeParts[3];

    if (meridian.toLowerCase() === 'pm' && hours < 12) {
        hours += 12;
    } else if (meridian.toLowerCase() === 'am' && hours === 12) {
        hours = 0;
    }

    var formattedTime = `${hours.toString().padStart(2, '0')}:${minutes}:00`;

    // Combine date and time
    return `${formattedDate}T${formattedTime}`;
}

document.addEventListener('DOMContentLoaded', function() {
    // Function to update the content of the input field and app-location-txt div
    function updateContent(locationValue, appLocationText) {
        // Update the input field value
        document.getElementById('location').value = locationValue;

        // Update the text content of the app-location-txt div
        document.getElementById('app-location-txt').textContent = appLocationText;

        // Call function to update additional fields based on location
        updateFieldsForLocation(locationValue);
    }

    // Function to update fields and displays based on location selection
    function updateFieldsForLocation(locationValue) {
        const startDateField = document.getElementById('app-start-date-time');
        const dateField = document.getElementById('date');
        const timeField = document.getElementById('time');
        const officeField = document.getElementById('office');
        const roomField = document.getElementById('room');
        const confirmationMessage = document.getElementById('confirmation-message');
        const errorMessage = document.getElementById('error-message');

        if (locationValue === 'Concierge') {
            // Set values for Concierge
            startDateField.value = '2024-05-15T01:00:00';
            dateField.value = '5/15/2024';
            timeField.value = '1:00 am';
            officeField.value = '1';
            roomField.value = '1';
            confirmationMessage.style.display = 'none';
            errorMessage.style.display = 'none';
        } else if (locationValue === 'In-Suite') {
            // Clear values for In-Suite
            startDateField.value = '';
            dateField.value = '';
            timeField.value = '';
            officeField.value = '';
            roomField.value = '';
            confirmationMessage.style.display = 'none';
            errorMessage.style.display = 'flex';
        }
    }

    // Event listener for the concierge div
    document.getElementById('concierge').addEventListener('click', function() {
        updateContent('Concierge', 'a concierge');
    });

    // Event listener for the in-suite div
    document.getElementById('in-suite').addEventListener('click', function() {
        updateContent('In-Suite', 'an in-suite');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const parentDiv = document.getElementById('times-0');
    const currentTime = new Date();

    if (parentDiv) {
        const timeLabels = parentDiv.getElementsByTagName('label');

        Array.from(timeLabels).forEach(label => {
            const timeSpan = label.getElementsByClassName('time-txt')[0];
            if (!timeSpan) return;

            const timeText = timeSpan.textContent || timeSpan.innerText;
            const divTime = new Date(currentTime.toDateString() + ' ' + timeText);

            const timeDifference = divTime - currentTime;
            const twoHoursFifteenMinutes = 2.15 * 60 * 60 * 1000; // Convert hours to milliseconds

            // Check if the time is in the past or within the next 2.15 hours
            if (timeDifference < 0 || timeDifference <= twoHoursFifteenMinutes) {
                label.parentNode.removeChild(label);
            }
        });
    }
});



