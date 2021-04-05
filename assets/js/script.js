//Task1: when the planner is opened the current day & time is displayed
var currentDayEl = $('#currentDay');
var currentTimeEl = $('.currentTime');
var currentEventEl = $('input[type="text"]');
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
    
    var activities = [];
    
    function addActivity() {
        var inp0 = document.getElementById('eventInput0');
        var inp1 = document.getElementById('eventInput1');
        var inp2 = document.getElementById('eventInput2');
        var inp3= document.getElementById('eventInput3');
        var inp4 = document.getElementById('eventInput4');
        var inp5 = document.getElementById('eventInput5');
        var inp6 = document.getElementById('eventInput6');
        var inp7 = document.getElementById('eventInput7');
        var inp8 = document.getElementById('eventInput8');
        var inp9 = document.getElementById('eventInput9');
        activities.push('inp0','inp1','inp2','inp3','inp4','inp5','inp6','inp7', 'inp8','inp9'); 
        console.table(activities);
       
    }
    localStorage.setItem("activities", JSON.stringify(activities));

}





//color code rows
// var hr = (new Date()).getHours();
// console.log(hr);
// var startTime = 8;
// for (var i = 0; i <= 12; i++){
//     var rowEl = document.querySelector("#row"+i);
//     if (hr >= startTime+i && hr < startTime+i+1){
//         rowEl.toggleClass('.past');
//     }else if (hr < startTime+i+1){
//         rowEl.toggleClass(".present");
//     } else if (hr > startTime ) {
//         rowEl.toggleClass(".future");
//         }
// }

















