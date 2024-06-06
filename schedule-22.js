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
updateDate('day-22', 22);
updateDate('day-23', 23);
updateDate('day-24', 24);
updateDate('day-25', 25);
updateDate('day-26', 26);
updateDate('day-27', 27);
updateDate('day-28', 28);
updateDate('day-29', 29);
updateDate('day-30', 30);
updateDate('day-31', 31);
updateDate('day-32', 32);
updateDate('day-33', 33);
updateDate('day-34', 34);
updateDate('day-35', 35);
updateDate('day-36', 36);
updateDate('day-37', 37);
updateDate('day-38', 38);
updateDate('day-39', 39);
updateDate('day-40', 40);
updateDate('day-41', 41);
updateDate('day-42', 42);
updateDate('day-43', 43);
updateDate('day-44', 44);
updateDate('day-45', 45);
updateDate('day-46', 46);
updateDate('day-47', 47);
updateDate('day-48', 48);
updateDate('day-49', 49);
updateDate('day-50', 50);
updateDate('day-51', 51);
updateDate('day-52', 52);
updateDate('day-53', 53);
updateDate('day-54', 54);
updateDate('day-55', 55);
updateDate('day-56', 56);
updateDate('day-57', 57);
updateDate('day-58', 58);
updateDate('day-59', 59);
updateDate('day-60', 60);
updateDate('day-61', 61);
updateDate('day-62', 62);
updateDate('day-63', 63);
updateDate('day-64', 64);
updateDate('day-65', 65);
updateDate('day-66', 66);
updateDate('day-67', 67);
updateDate('day-68', 68);
updateDate('day-69', 69);
updateDate('day-70', 70);
updateDate('day-71', 71);
updateDate('day-72', 72);
updateDate('day-73', 73);
updateDate('day-74', 74);
updateDate('day-75', 75);
updateDate('day-76', 76);
updateDate('day-77', 77);
updateDate('day-78', 78);
updateDate('day-79', 79);
updateDate('day-80', 80);
updateDate('day-81', 81);
updateDate('day-82', 82);
updateDate('day-83', 83);
updateDate('day-84', 84);
updateDate('day-85', 85);
updateDate('day-86', 86);
updateDate('day-87', 87);
updateDate('day-88', 88);
updateDate('day-89', 89);
updateDate('day-90', 90);

// Get the inner text of each div
const text1 = document.getElementById("schedule-text-0-30").innerText;
const text2 = document.getElementById("schedule-text-31-60").innerText;
const text3 = document.getElementById("schedule-text-61-90").innerText;

// Combine the inner text values
const inputString = text1 + text2 + text3;

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
var Day22Availability = [];
var Day23Availability = [];
var Day24Availability = [];
var Day25Availability = [];
var Day26Availability = [];
var Day27Availability = [];
var Day28Availability = [];
var Day29Availability = [];
var Day30Availability = [];
var Day31Availability = [];
var Day32Availability = [];
var Day33Availability = [];
var Day34Availability = [];
var Day35Availability = [];
var Day36Availability = [];
var Day37Availability = [];
var Day38Availability = [];
var Day39Availability = [];
var Day40Availability = [];
var Day41Availability = [];
var Day42Availability = [];
var Day43Availability = [];
var Day44Availability = [];
var Day45Availability = [];
var Day46Availability = [];
var Day47Availability = [];
var Day48Availability = [];
var Day49Availability = [];
var Day50Availability = [];
var Day51Availability = [];
var Day52Availability = [];
var Day53Availability = [];
var Day54Availability = [];
var Day55Availability = [];
var Day56Availability = [];
var Day57Availability = [];
var Day58Availability = [];
var Day59Availability = [];
var Day60Availability = [];
var Day61Availability = [];
var Day62Availability = [];
var Day63Availability = [];
var Day64Availability = [];
var Day65Availability = [];
var Day66Availability = [];
var Day67Availability = [];
var Day68Availability = [];
var Day69Availability = [];
var Day70Availability = [];
var Day71Availability = [];
var Day72Availability = [];
var Day73Availability = [];
var Day74Availability = [];
var Day75Availability = [];
var Day76Availability = [];
var Day77Availability = [];
var Day78Availability = [];
var Day79Availability = [];
var Day80Availability = [];
var Day81Availability = [];
var Day82Availability = [];
var Day83Availability = [];
var Day84Availability = [];
var Day85Availability = [];
var Day86Availability = [];
var Day87Availability = [];
var Day88Availability = [];
var Day89Availability = [];
var Day90Availability = [];



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


function formatDate(dateString) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];

    var date = new Date(dateString);
    var dayOfWeek = days[date.getDay()];
    var month = months[date.getMonth()];
    var dayOfMonth = date.getDate();

    return `${dayOfWeek}, ${month} ${dayOfMonth}`;
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
