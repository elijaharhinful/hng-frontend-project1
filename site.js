// Function to update the current day of the week
function updateDayOfTheWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    const currentDayOfWeek = daysOfWeek[currentDayIndex];
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    dayOfWeekElement.textContent = currentDayOfWeek;
}

// Function to update the current UTC time in milliseconds
function updateUTCTime() {
    const currentUTCTime = Date.now();
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    utcTimeElement.textContent = currentUTCTime;
}

// Call the functions to update the elements
updateDayOfTheWeek();
updateUTCTime();

// Update the time every second
setInterval(updateUTCTime, 1000);