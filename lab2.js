//enums - research this as this is not covered in the lecture
//enums make a PROTO object, each member increments by one, you cannot loop over it, TRY IT
// enums start at 0 but if you seed it January = 2, it'll start at that value and go up by one.
//enums use directions up, down, left and right
//enums cannot have duplicate values
var months;
(function (months) {
    months[months["January"] = 1] = "January";
    months[months["February"] = 2] = "February";
    months[months["March"] = 3] = "March";
    months[months["April"] = 4] = "April";
    months[months["May"] = 5] = "May";
    months[months["June"] = 6] = "June";
    months[months["July"] = 7] = "July";
    months[months["August"] = 8] = "August";
    months[months["September"] = 9] = "September";
    months[months["October"] = 10] = "October";
    months[months["Novemeber"] = 11] = "Novemeber";
    months[months["December"] = 12] = "December";
})(months || (months = {}));
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
console.log("Months enum");
console.log(months);
console.log("January: " + months.January);
console.log("Month 1: " + months[1]);
//html elements
var pTodayDate = document.getElementById('p--today-date');
//Today's date
var today = new Date();
console.log(today);
//today's month
console.log(today.getMonth());
var todayMonth = months[today.getMonth()];
//today's day of the week
console.log(today.getDay());
var todayDayOfWeek = days[today.getDay()];
//today's day of month
console.log(today.getDate());
//today's year
console.log(today.getFullYear());
//display today's date to page
pTodayDate.innerHTML = "Today is  " + todayDayOfWeek + ", " + todayMonth + " " + today.getDate() + ", " + today.getFullYear() + ".";
