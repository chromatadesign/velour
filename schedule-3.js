
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


updateDate('day-2', 2);
updateDate('day-3', 3);
updateDate('day-4', 4);
updateDate('day-5', 5);
updateDate('day-6', 6);
updateDate('day-7', 7);
updateDate('day-8', 8);
updateDate('day-9', 9);
updateDate('day-10', 10);
updateDate('day-11', 11);
updateDate('day-12', 12);
updateDate('day-13', 13);
updateDate('day-14', 14);
updateDate('day-15', 15);
updateDate('day-16', 16);
updateDate('day-17', 17);
updateDate('day-18', 18);
updateDate('day-19', 19);
updateDate('day-20', 20);
updateDate('day-21', 21);

// Sample input string
var inputString = document.getElementById("schedule-text").textContent;

// Initialize availability arrays for each day
var Day0Availability = [];
var Day1Availability = [];
var Day2Availability = [];
var Day3Availability = [];
var Day4Availability = [];
var Day5Availability = [];
var Day6Availability = [];
var Day7Availability = [];
var Day8Availability = [];
var Day9Availability = [];
var Day10Availability = [];
var Day11Availability = [];
var Day12Availability = [];
var Day13Availability = [];
var Day14Availability = [];
var Day15Availability = [];
var Day16Availability = [];
var Day17Availability = [];
var Day18Availability = [];
var Day19Availability = [];
var Day20Availability = [];
var Day21Availability = [];

// Function to parse and extract availability
function parseAvailability(input) {
    var match;
    var regex = /\[S(\d+): ([^[\]]*)\]\[A\1: ([^[\]]*)\]/g;

    while ((match = regex.exec(input)) !== null) {
        var day = parseInt(match[1]);
        var sList = match[2].split(',').map(num => num.trim());
        var aList = match[3].split(',').map(num => num.trim());

        // Remove common numbers from sList
        var filteredSList = sList.filter(num => {
            var firstNumberInGroup = num.split('-')[0];
            var isCommonNumber = aList.some(aNum => aNum.startsWith(firstNumberInGroup));
            return !isCommonNumber;
        });

        // Assign the filtered list to the corresponding DayAvailability variable
        eval("Day" + day + "Availability = filteredSList;");
    }
}

// Call the function with the input string
parseAvailability(inputString);



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

for (let day = 0; day <= 21; day++) {
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


function formatDate(dateString) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];

    var date = new Date(dateString);
    var dayOfWeek = days[date.getDay()];
    var month = months[date.getMonth()];
    var dayOfMonth = date.getDate();

    return `${dayOfWeek}, ${month} ${dayOfMonth}`;
}



document.addEventListener('click', function(event) {
    // Check if the clicked element or its parent has the 'time-txt' class
    var target = event.target;
    if (target.matches('.time-txt') || target.closest('.time-txt')) {
        // Hide the 'error-message' div
        var errorMessage = document.getElementById('error-message');
        if (errorMessage) {
            errorMessage.style.display = 'none';
        }

        // Show the 'confirmation-message' div
        var confirmationMessage = document.getElementById('confirmation-message');
        if (confirmationMessage) {
            confirmationMessage.style.display = 'flex';
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Function to update the content of the input field and app-location-txt div
    function updateContent(locationValue, appLocationText) {
        // Update the input field value
        document.getElementById('location').value = locationValue;

        // Update the text content of the app-location-txt div
        document.getElementById('app-location-txt').textContent = appLocationText;
    }

    // Event listener for the concierge div
    document.getElementById('concierge').addEventListener('click', function () {
        updateContent('Concierge', 'a concierge');
    });

    // Event listener for the in-suite div
    document.getElementById('in-suite').addEventListener('click', function () {
        updateContent('In-Suite', 'an in-suite');
    });
});




// Get the elements by their IDs
var dobInput = document.getElementById('dob-input');
var dob = document.getElementById('dob');

// Add an event listener to the 'dob-input' element
dobInput.addEventListener('change', function() {
    // Set the value of 'dob' to be the same as the value of 'dob-input'
    dob.value = dobInput.value;
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

