//Based off lecture code.

/*Set the date displayed in the calendar*/
var thisDay = new Date();

/* Write the calendar to the element with id calendar*/
document.getElementById("eventCalendar").innerHTML = createCalendar(thisDay);

/*Create the calender table*/
function createCalendar(calDate) {
    var calendarHTML = "<table id='eventCalendar_table'>";
    calendarHTML += currentMonth(calDate);
    calendarHTML += weekdays();
    calendarHTML += days(calDate);
    calendarHTML += "</table>";
    return calendarHTML;
}

/*Helps to display the month*/
function currentMonth(calDate) {
    var monthName = ["January",
                     "Febuary",
                     "March",
                     "April",
                     "May",
                     "June",
                     "July",
                     "August",
                     "September",
                     "October",
                     "November",
                     "December"];


    var thisMonth = calDate.getMonth();
    var thisYear = calDate.getFullYear();

    return "<caption id='currentMonth'>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

// Used to display the weekdays
function weekdays() {
    var dayName = ["SUN",
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT"
    ];

    var rowHTML = "<tr>";


    for (var i = 0; i < dayName.length; i++) {
        rowHTML += "<th class='eventCalendar_weekdays'>" + dayName[i] + "</th>";
    }

    rowHTML += "</tr>";
    return rowHTML;
}

//Determines how many days are in the month
function daysInMonth(calDays) {
    var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var thisYear = calDays.getFullYear();
    var thisMonth = calDays.getMonth();

    if (thisYear % 4 === 0) {
        if (thisYear % 100 != 0 || thisYear % 400 === 0) {
            dayCount[1] = 29;
        }
    }

    return dayCount[thisMonth];
}

//writes the rows for each week
function days(calDate) {

    var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
    var weekDay = day.getDay();

    var htmlCode = "<tr>";

    for (var i = 0; i < weekDay; i++) {
        htmlCode += "<td></td>";
    }

    var totalDays = daysInMonth(calDate);

    var highlightDay = calDate.getDate();

    for (var i = 1; i < totalDays; i++) {
        day.setDate(i);
        weekDay = day.getDay();
        if (weekDay === 0) {
            htmlCode += "<tr>";
        }
        if (highlightDay === i) {
            htmlCode += "<td class = 'eventCalendar_dates' id='eventCalendar_today'>" + i + dayEvent[i] + "</td>";
        } else {
            htmlCode += "<td class = 'eventCalendar_dates'>" + i + dayEvent[i] + "</td>";
        }

        if (weekDay === 6) {
            htmlCode += "</tr>";
        }
    }

    return htmlCode;

}