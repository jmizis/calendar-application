var textInput = document.querySelector (".textInput");
var saveButton = document.querySelector("#save");
var timeDisplayEl = document.querySelector("#currentDay")


function saveInformation() {
    var newData = formContent.value;
    var data = localStorage.getItem("textInput" + index, newData)
}


var textArea = $("<textarea>");
textArea.text("");
textArea.appendTo(textInput)

saveButton.addEventListener("click", function(){
    saveInformation
    console.log("save")
})

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY  hh:mm:ss');
    timeDisplayEl.text(rightNow +"PM");
  }
  


// var studentGrade = {
  //  student: student.value,
 //   grade: grade.value,
 //   comment: comment.value.trim()
 // };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
 // localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
//}