var textInput = document.querySelector (".textInput");

var timeDisplayEl = document.querySelector("#currentDay")


// 
// }
$(".saveBtn").on("click",function(){
  var textValue = $(this).siblings(".description").val()
  var divId = $(this).parent().attr("id")
  window.localStorage.setItem(divId,textValue)
})
$("#9 .description").val(localStorage.getItem("9"))

function timeUpdater () {
  var currentTime = moment().hours()


  $(".time-block").each(function(){
  var divTime = $(this).attr("id")
  if (divTime<currentTime){
    $(this).addClass("past")
  }
  else if (divTime==currentTime){
    $(this).addClass("present")
  }
  else if (divTime>currentTime){
    $(this).addClass("future")
  }
  
  })


}
timeUpdater()
function displayTime() {
    var rightNow = moment().format("MMM DD, YYYY  hh:mm:ss");
    timeDisplayEl.textContent = rightNow +"PM";
  }
  displayTime()
   

// var studentGrade = {
  //  student: student.value,
 //   grade: grade.value,
 //   comment: comment.value.trim()
 // };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
 // localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
//}