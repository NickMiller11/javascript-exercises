/*
There are a lot of exciting classes offered in our region. We wrote a small
script that checks which ones are still upcoming and compatible with our
calendar. We must be available to attend all sessions of a particular class
in order to sign up for it. We can always arrange that on weekends, but for
weekdays we have to check whether our calendar is free.

Although the code below runs, something is wrong with it. Why is everything
except for the Back To The Future Movie Night in the list of compatible classes?
*/
var TODAY = toDate("2018-08-05");

function toDate(string) {
  return new Date(string + "T00:00:00");
}

function toString(date) {
  return date.getFullYear() + "-"
       + formattedMonth(date) + "-"
       + formattedDate(date);
}

function formattedMonth(date) {
  var month = date.getMonth() + 1;
  return month > 9 ? "" + month : "0" + month;
}

function formattedDate(date) {
  var day = date.getDate();
  return day > 9 ? "" + day : "0" + day;
}

function isInThePast(date) {
  return date < TODAY;
}

function isWeekday(date) {
  return date.getDay() >= 1 &&
         date.getDay() <= 5;
}

var myCalendar = {
  "2018-08-13": ["JS debugging exercises"],
  "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
  "2018-08-15": ["Read 'Demystifying Rails'"],
  "2018-08-16": [],
  "2018-08-30": ["Drone video project plan"],
  "2018-09-10": ["Annual servicing of race bike"],
  "2018-09-12": ["Study"],
  "2018-11-02": ["Birthday Party"],
  "2018-11-03": ["Birthday Party"],
}

var offeredClasses = {
  "Back To The Future Movie Night": ["2018-07-30"],
  "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
  "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
  "Mike's Hikes": ["2018-08-16"],
  "Gordon Ramsey Master Class": ["2018-09-11", "2018-09-12"],
  "Powerboating 101": ["2018-09-15", "2018-09-16"],
  "Discover Parachuting": ["2018-11-02"],
};

function getCompatibleEvents(classes, calendar) {
  function isAvailable(date) {
    var dateStr = toString(date);
    return !calendar[dateStr] || calendar[dateStr].length === 0;
  };

  var compatibleClasses = [];

  Object.keys(classes).forEach(function(className) {
    var classDates = classes[className].map(toDate);

    if (classDates.some(isInThePast)) {
      return;
    }

    if (classDates.filter(isWeekday).every(isAvailable)) {
      compatibleClasses.push(className);
    }
  });

  return compatibleClasses;
}

console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]

/*
Wow, there were several things wrong with this, all in the toString function
- need to use getFullYear instead of getYear
- need to format the month so that it returns a month with a 0 prepended if less than 9
- add 1 to the return value of the getMonth function
- need to use getDate instead of getDay
- need to format the day so that it returns a day with the 0 prepended if less than 9
*/
