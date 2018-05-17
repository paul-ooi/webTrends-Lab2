//enums - research this as this is not covered in the lecture
//enums make a PROTO object, each member increments by one, you cannot loop over it, TRY IT
// enums start at 0 but if you seed it January = 2, it'll start at that value and go up by one.
//enums use directions up, down, left and right
//enums cannot have duplicate values
enum months {
    January = 1,
    February,
    March,
    April,
    May, 
    June, 
    July,
    August,
    September,
    October,
    Novemeber,
    December
}

enum days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
console.log("Months enum");
console.log(months);
console.log("January: " + months.January);
console.log("Month 1: " + months[1]);

//html elements
let pTodayDate = document.getElementById('p--today-date');

//Today's date
let today : Date = new Date();
console.log(today);

//today's month
console.log(today.getMonth());
let todayMonth : string = months[today.getMonth()];

//today's day of the week
console.log(today.getDay());
let todayDayOfWeek : string = days[today.getDay()];

//today's day of month
console.log(today.getDate());


//today's year
console.log(today.getFullYear());

//display today's date to page
pTodayDate.innerHTML = `Today is  ${todayDayOfWeek }, ${ todayMonth } ${ today.getDate() }, ${ today.getFullYear() }.`;