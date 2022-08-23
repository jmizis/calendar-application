var textInput = document.querySelector (".textInput");

var timeDisplayEl = document.querySelector("#currentDay")


// 
// This function creates my local storage for my text area
$(".saveBtn").on("click",function(){
  var textValue = $(this).siblings(".description").val()
  var divId = $(this).parent().attr("id")
  window.localStorage.setItem(divId,textValue)
})

// Breaks down the hours 
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))

// This function creates my current time to average down and will allow my calendar to have diffrent color for past, present, and future.
function timeUpdater () {
  var currentTime = moment().hours()


  $(".time-block").each(function(){
    var divTime = $(this).attr("id")
    console.log(divTime)
    
    if (divTime<currentTime){
      console.log($(this));
      $(this)[0].classList.add(".past")
      
    } else if (divTime==currentTime){
      //works
      $(this)[0].classList.add(".present")
    } else {
      $(this)[0].classList.add(".future")
    }
  })

};
 
timeUpdater();
// Display the current time on top of my application

function displayTime() {
    var rightNow = moment().format("MMM DD, YYYY  hh:mm:ss");
    timeDisplayEl.textContent = rightNow +"PM";
  }
  displayTime()
  

//