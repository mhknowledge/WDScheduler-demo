//Task1: when the planner is opened the current day & time is displayed
var currentDayEl = $('#currentDay');
var currentTimeEl = $('.currentTime');
var currentEventEl = $('#eventInput');
var removeBtnEl = $('.removeBtn');
var saveBtnEl = $('.saveBtn');
function showDay() {
    var today = moment().format('dddd');
    currentDayEl.text(today);
} setInterval(showDay, 500);

function showClock() {
    var TicToc = moment().format('MMM DD, YYYY hh:mm:ssA');
    currentTimeEl.text(TicToc);
} setInterval(showClock, 500);



//code to handle schedule event input
removeBtnEl.on('click', function() {
    location.reload(".row");
});

function handleEventInput(event) {
    //Prevent the default behavior
    event.preventDefault();
    console.log('Current Day: ', currentDayEl.val());
    console.log('Current Time: ', currentTimeEl.val());
    console.log('Scheduled: ', currentEventEl.val());
       
}
saveBtnEl.on('click', handleEventInput);




















