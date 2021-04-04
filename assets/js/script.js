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
    
    $('input').on("blur", function(){
        $(this).val(function(i, val) {
            
            return val.toUpperCase();
        });
        
    });
$('input').ready(function(){
    $('removeBtn').click(function(){
        /*clear all input type*/
        $('event-input input[type="text"]' ).val('');
    });
});

















    // function removeElement(removeBtn){
    //     var element = document.getElementbyId();
    //     element.parentNode.removechild(element);
    // }
    
    // $('input').on("blur", function(){
    //     $(this).val(function(i, val){

    //     return val.;
    // });
    // });
    // $('removeBtn').addEventListener('click', removeElement("input") );




    // var eventItem = $('event-input').val();
    // let saveInput = JSON.stringify(input);

    // var input = document.getElementById("event-input");
    
    
    
    // localStorage.setItem("input", saveInput);
    // console.log(localStorage);
    // //show event
    // currentEventEl.append(eventItem);
    
   
    // $('.saveBtn').click(function () {
    // saveInput.push({
    //     item = "input",
    //     time: "TicToc",
    //     })
    //     localStorage.setItem("event", JSON.stringify(saveInput));
    // });
