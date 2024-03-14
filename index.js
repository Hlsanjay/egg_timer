// timmer
function setTimerDuration() {
    var durationInput = document.getElementById('duration');
    var totalTimeInMinutes = parseInt(durationInput.value, 10);

    if (isNaN(totalTimeInMinutes) || totalTimeInMinutes <= 0) {
        alert("Please enter a valid positive number for the timer duration in minutes.");
        return;
    }

    // Save the duration in sessionStorage to pass it to the next page
    sessionStorage.setItem('totalTimeInMinutes', totalTimeInMinutes);

    // Redirect to the timer page
    window.location.href = "timer.html";
}

// stopwatch
function stopwatch() {
    var durationInput = document.getElementById('duration');
    var totalTimeInMinutes = parseInt(durationInput.value, 10);

    // if (isNaN(totalTimeInMinutes) || totalTimeInMinutes <= 0) {
    //     alert("Please enter a valid positive number for the timer duration in minutes.");
    //     return;
    // }

    // Save the duration in sessionStorage to pass it to the next page
    sessionStorage.setItem('totalTimeInMinutes', totalTimeInMinutes);

    // Redirect to the timer page
    window.location.href = "stopwatch.html";
}


// alaram
function handleAlarm() {
    var durationInput = document.getElementById('duration');
    var totalTimeInMinutes = parseInt(durationInput.value, 10);

    // if (isNaN(totalTimeInMinutes) || totalTimeInMinutes <= 0) {
    //     alert("Please enter a valid positive number for the timer duration in minutes.");
    //     return;
    // }

    // Save the duration in sessionStorage to pass it to the next page
    sessionStorage.setItem('totalTimeInMinutes', totalTimeInMinutes);

    // Redirect to the timer page
    window.location.href = "alrem.html";
}

// clock
function updateClock() {
    var today = new Date();
    var hours = today.getHours() % 12; // Ensure 12-hour format
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    var hourDeg = (hours + minutes / 60) * 360 / 12;
    var minuteDeg = (minutes + seconds / 60) * 360 / 60;
    var secondDeg = seconds * 360 / 60;

    document.querySelector(".hour-hand").style.transform = `translate(-50%, -100%) rotate(${0 + hourDeg}deg)`;
    document.querySelector(".minute-hand").style.transform = `translate(-50%, -100%) rotate(${0 + minuteDeg}deg)`;
    document.querySelector(".second-hand").style.transform = `translate(-50%, -100%) rotate(${0 + secondDeg}deg)`;
}

document.addEventListener('DOMContentLoaded', function () {
    updateClock();  // Initial update

    setInterval(updateClock, 1000);  // Update every second
});

// Radio

