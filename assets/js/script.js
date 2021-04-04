//Task1: when the planner is opened the current day & time is displayed
var currentDayEl = $('#currentDay');
var currentTimeEl = $('.currentTime');
var currentEventEl = $('#eventInput');

function showDay() {
    var today = moment().format('dddd');
    currentDayEl.text(today);
} setInterval(showDay, 500);

function showClock() {
    var TicToc = moment().format('MMM DD, YYYY hh:mm:ssA');
    currentTimeEl.text(TicToc);
} setInterval(showClock, 500);


//code to handle schedule event input
function scheduleEvent(event){
    event.preventDefault();

    var eventItem = $('input[name="event-input"]').val();


    //show event
    currentEventEl.append(eventItem);

    var input = document.getElementById("event-input");
localStorage.setItem('event-input', JSON.stringify(event-input));

}





 