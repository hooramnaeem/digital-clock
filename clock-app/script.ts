
(() => {
    // Get HTML elements for hours, minutes, seconds, and am/pm
let myHours: HTMLElement | null = document.querySelector(".hours");
let myMinutes: HTMLElement | null = document.querySelector(".minutes");
let mySeconds: HTMLElement | null = document.querySelector(".seconds");
let myAmpm: HTMLElement | null = document.querySelector(".ampm");

// Function that refreshes every second
setInterval(() => {
    let date: Date = new Date();
    let newHours: number = date.getHours();
    let newMinutes: number = date.getMinutes();
    let newSeconds: number = date.getSeconds();
    
    // Determine AM or PM
    let period: string = newHours >= 12 ? "PM" : "AM";

    // Convert 24-hour time to 12-hour format
    newHours = newHours % 12 || 12;

    // Add leading zero for single-digit hours, minutes, and seconds
    const formattedHours: string = newHours < 10 ? "0" + newHours : newHours.toString();
    const formattedMinutes: string = newMinutes < 10 ? "0" + newMinutes : newMinutes.toString();
    const formattedSeconds: string = newSeconds < 10 ? "0" + newSeconds : newSeconds.toString();

    // Ensure elements are not null before updating
    if (myHours && myMinutes && mySeconds && myAmpm) {
        myHours.innerHTML = formattedHours;
       myMinutes.innerHTML = formattedMinutes;
        mySeconds.innerHTML = formattedSeconds;
        myAmpm.innerHTML = period;
    }

}, 1000);
})();

