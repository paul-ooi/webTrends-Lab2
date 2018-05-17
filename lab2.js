//enums - research this as this is not covered in the lecture
//enums make a PROTO object, each member increments by one, you cannot loop over it, TRY IT
// enums start at 0 but if you seed it January = 2, it'll start at that value and go up by one.
//enums use directions up, down, left and right
//enums cannot have duplicate values
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["Novemeber"] = 10] = "Novemeber";
    months[months["December"] = 11] = "December";
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
// console.log("Months enum");
// console.log(months);
// console.log("January: " + months.January);
// console.log("Month 1: " + months[1]);
//html elements
var pTodayDate = document.getElementById('p--today-date');
var birthdayButton = document.getElementById('button--birthday');
var birthdayMessage = document.getElementById('p--birthday-message');
var userDate = document.getElementById('input--date-picker');
/**
 * CREATE AND OUTPUT DATE TO HTML PAGE
 */
//Today's date
var today = new Date();
// console.log(today);
//today's month
// console.log(today.getMonth());
var todayMonth = months[today.getMonth()];
//today's day of the week
// console.log(today.getDay());
var todayDayOfWeek = days[today.getDay()];
//today's day of month
// console.log(today.getDate());    
//today's year
// console.log(today.getFullYear());
//display today's date to page
pTodayDate.innerHTML = "Today is  " + todayDayOfWeek + ", " + todayMonth + " " + today.getDate() + ", " + today.getFullYear() + ".";
/**
 * GET BIRTHDAY DATE FROM USER AND OUTPUT BIRTHDAY MESSAGE
 */
birthdayButton.addEventListener('click', function () {
    birthdayMessage.innerHTML = getBirthday();
}, false);
function getBirthday() {
    var dateOfBirth = new Date(Date.parse(userDate.value)); // GET THE UTC TIME VALUE WHEN THE USER CLICKS
    var timedifference = new Date().getTimezoneOffset() * 60 * 1000; //GET THE MILLISECOND DIFFERENCE BETWEEN LOCAL AND UTC 
    dateOfBirth = new Date(dateOfBirth.setMilliseconds(dateOfBirth.getMilliseconds() + timedifference)); //UPDATE THE DATE VALUE WITH THE 
    console.log(dateOfBirth);
    console.log(today);
    if (dateOfBirth > today) {
        return "Invalid Birthday. Must be before today.";
    }
    //RETURN 'HAPPY BIRTHDAY' IF THE USER'S BIRTHDAY IS TODAY
    if ((dateOfBirth.getMonth() === today.getMonth()) && (dateOfBirth.getDate() === today.getDate())) {
        return "Happy Birthday!";
    }
    //GET DATES FOR THIS YEAR AND NEXT YEAR BIRTHDAYS
    var currentYearBirthday = new Date(today.getFullYear() + "-" + (dateOfBirth.getMonth() + 1) + "-" + dateOfBirth.getDate());
    var nextYearBirthday = new Date(today.getFullYear() + 1 + "-" + (dateOfBirth.getMonth() + 1) + "-" + dateOfBirth.getDate());
    //CHECK IF THE BIRTHDAY IS STILL AHEAD THIS YEAR, OR ALREADY PAST
    if (today < currentYearBirthday) {
        return "Your birthday will be on " + days[currentYearBirthday.getDay()] + ", " + months[currentYearBirthday.getMonth()] + " " + currentYearBirthday.getDate() + ", " + currentYearBirthday.getFullYear();
    }
    else {
        return "Your birthday this year already past, your next one will be on " + days[nextYearBirthday.getDay()] + ", " + months[nextYearBirthday.getMonth()] + " " + nextYearBirthday.getDate() + ", " + nextYearBirthday.getFullYear();
    }
} //END GET BIRTHDAY
