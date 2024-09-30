(function () {
    // Get HTML elements for hours, minutes, seconds, and am/pm
    var myHours = document.querySelector(".hours");
    var myMinutes = document.querySelector(".minutes");
    var mySeconds = document.querySelector(".seconds");
    var myAmpm = document.querySelector(".ampm");
    // Function that refreshes every second
    setInterval(function () {
        var date = new Date();
        var newHours = date.getHours();
        var newMinutes = date.getMinutes();
        var newSeconds = date.getSeconds();
        // Determine AM or PM
        var period = newHours >= 12 ? "PM" : "AM";
        // Convert 24-hour time to 12-hour format
        newHours = newHours % 12 || 12;
        // Add leading zero for single-digit hours, minutes, and seconds
        var formattedHours = newHours < 10 ? "0" + newHours : newHours.toString();
        var formattedMinutes = newMinutes < 10 ? "0" + newMinutes : newMinutes.toString();
        var formattedSeconds = newSeconds < 10 ? "0" + newSeconds : newSeconds.toString();
        // Ensure elements are not null before updating
        if (myHours && myMinutes && mySeconds && myAmpm) {
            myHours.innerHTML = formattedHours;
            myMinutes.innerHTML = formattedMinutes;
            mySeconds.innerHTML = formattedSeconds;
            myAmpm.innerHTML = period;
        }
    }, 1000);
})();
