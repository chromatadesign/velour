<script>
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
</script>
