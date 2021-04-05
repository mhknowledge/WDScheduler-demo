//Task1: when the planner is opened the current day & time is displayed
var currentDayEl = $('#currentDay');
var currentTimeEl = $('.currentTime');
var currentEventEl = document.getElementsByName('eventInput[]');
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
saveBtnEl.on('click', handleEventInput);

removeBtnEl.on('click', handleRemovedItem);


function handleRemovedItem(event) {
    var btnClicked = $(event.target);
    location.reload();
   localStorage.removeItem();
}

function handleEventInput(event) {
    //Prevent the default behavior
    event.preventDefault();
    console.log('Current Day: ' + currentDayEl.text());
    console.log('Current Time: ', currentTimeEl.text());
    console.log('Scheduled: ', currentEventEl);
    
    
    
    function addActivity() {
        
        localStorage.setItem("currentEventEl", JSON.stringify(currentEventEl));
        
    
        
       
    }
    

}





//color code rows
var hr = (new Date()).getHours();
console.log("It is now: " + hr);
var startTime = 8;
for (var i = 0; i <= 12; i++){
    var rowEl = document.querySelector("#row"+i);
    if (hr >= startTime+i && hr < startTime+i+1){
        rowEl.toggleClass('.past');
    }else if (hr < startTime+i+1){
        rowEl.toggleClass(".present");
    } else if (hr > startTime ) {
        rowEl.toggleClass(".future");
        }
}

















