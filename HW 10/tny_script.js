"use strict";
/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Christopher Sekulovski
   Date:   11/09/22

*/
/* Display the current date and time */
document.getElementById("dataNow").innerHTML =
"m/d/y<br  />h:m:s";

/* Display the time left until New Year's Eve */
document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent ="mm";
document.getElementById("secs").textContent ="ss";

runClock();
setInterval("runClock()", 1000);

function runClock() {
/* Store the current date and time */
var currentDay = new Date();
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

/* Display the current date and time */
document.getElementById("dateNow").innerHTML =
dateStr + "<br />" + timeStr;

/* Calcualte the days until January 1st */
var newYear = new Date("January 1, 2021");
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);
var daysleft = (newYear - currentDay)/(1000*60*60*24);

/* Display the time left until New Year's Eve */
document.getElementById("days").textContent = Math.floor(daysLeft);

/* Calculate the hours left in the current day */
var hrsLeft = (daysLeft - Math.Floor(daysLeft))*24;

var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
var secsLeft = (minsLeft - Math.floor(minsLeft))*60;


document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent ="mm";
document.getElementById("secs").textContent ="ss";
}

