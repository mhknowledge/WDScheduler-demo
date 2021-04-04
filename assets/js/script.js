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
removeBtnEl.on('click', function handleRemovedItem(event) {
    var btnClicked = $(event.target);
    location.reload();
   localStorage.removeItem();
});

function handleEventInput(event) {
    //Prevent the default behavior
    event.preventDefault();
    console.log('Current Day: ' + currentDayEl.text());
    console.log('Current Time: ', currentTimeEl.text());
    console.log('Scheduled: ', currentEventEl.val());
    
    var activities = [];
    function addActivity() {
        var inp = document.getElementById('eventInput');
        activities.push(inp.value);
        inp.value="";
    }
    
    localStorage.setItem("activities", JSON.stringify(activities));

}
saveBtnEl.on('click', handleEventInput);

//color rows
var hr = (new Date()).getHours();
var startTime = 8;
for (var i = 0; i <= 10; i++){
    var rowi = document.querySelector("#row"+i);
    if (hr >= startTime+i && hr < startTime+i+1){
        rowi.toggleClass('.past');
    }else if (hr < startTime+i+1){
        rowi.toggleClass(".present");
    } else {rowi.toggleClass(".future");
        }
}

















