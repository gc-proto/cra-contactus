$(document).ready(function() {
var holidays = {};
holidays["4-19"] = true;
holidays["4-21"] = true;
holidays["4-22"] = true;


$(".need-date").each(function(index, element) {
  var el = $(element);
  var date = new Date();
  var hour = date.getHours();
  var day = date.getDay();
  var month = date.getMonth();
  var dayOfMonth = date.getDate();

  var lineOpen = Number(el.data("day" + day + "-open"));
  var lineClose = Number(el.data("day" + day + "-close"));

  var closeClock = (lineClose - 12);


  console.log(lineOpen, lineClose);
  var isHoliday = holidays["" + month + "-" + dayOfMonth + ""];

  if (!isHoliday && hour >= lineOpen && hour <= lineClose) {
    el.find(".open-or-closed").html('<label class="label label-success">' + lineOpen +'am to ' + closeClock +'pm today</label>');
  } else {
    el.find(".open-or-closed").html('<p>Closed today</p>');
  }
});
});
