const OgDateObj = new Date();

//const DAY = "March 11, 2021";
//Im so goated
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAY =
  months[OgDateObj.getMonth()] +
  " " +
  OgDateObj.getDate() +
  ", " +
  OgDateObj.getFullYear();

class TimerPog {
  constructor(_date) {
    this.date = _date;

    var dateObj = document.createElement("p");
    document.body.appendChild(dateObj);

    var x = setInterval(function () {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = _date - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      dateObj.innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        dateObj.innerHTML = "Ended";
      }
    }, 500);
  }
}

class weekdayTimer {
  constructor(_date) {
    this.date = _date;

    var dateObj = document.createElement("p");
    document.body.appendChild(dateObj);

    var x = setInterval(function () {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = _date - now;

      var weekendDays = Math.floor((distance / (1000 * 60 * 60 * 24) / 7) * 2);

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24)) - weekendDays;
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      dateObj.innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        dateObj.innerHTML = "Pog";
      }
    }, 500);
  }
}

var sciTimer = new TimerPog(new Date(DAY + " 8:43:0"));
var healthSciTimer = new TimerPog(new Date(DAY + " 9:40:0"));
var socStudTimer = new TimerPog(new Date(DAY + " 10:37:0"));
var connectTimer = new TimerPog(new Date(DAY + " 12:04:0"));
var mathTimer = new TimerPog(new Date(DAY + " 13:01:0"));
var elaTimer = new TimerPog(new Date(DAY + " 13:58:0"));
var spanishTimer = new TimerPog(new Date(DAY + " 14:55:0"));
var endofyearTimer = new TimerPog(new Date("June 10, 2022 10:45:0"));
var endofyearweekday = new weekdayTimer(new Date("June 10, 2022 10:45:0"));
var endofuniverseTimer = new TimerPog(new Date("June 10, 9999 10:45:0"));
