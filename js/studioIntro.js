function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
  
var intro = this.document.getElementById("studioIntro");
function updateNewsOpacity()
{
    var pageOff = clamp(Math.abs(window.pageYOffset),0,intro.offsetHeight) * 1.5;
    var t = (pageOff - Math.abs(intro.offsetHeight)) / intro.offsetHeight + 1;
    const currentColor = getComputedStyle(news).backgroundColor;
    const rgbValues = currentColor.match(/\d+/g);;
    const red = rgbValues[0];
    const green = rgbValues[1];
    const blue = rgbValues[2];
    
    intro.style.opacity = t;
    
}

setInterval(updateNewsOpacity,100);

let selectingJobPos = 0;
let selecttingNames = 0;

let jobPosition = ["DIRECTOR", "PROGRAMMER", "ARTIST"];
let directorNames = ["VÕ ĐÌNH VĂN"];
let programmerNames = ["NGUYỄN VĂN PHÚ", "NGUYỄN VĂN NGỌC", "NGUYỄN VĂN DƯƠNG", "NGUYỄN VĂN VÂN"];
let artistNames = ["PHAN HẠNH NHƯ", "NGUYỄN VĂN HUY"];
let directorStatement = ["\"Hạnh phúc đến từ những việc nhỏ nhặt nhất, \n trong đó bao gồm cả việc được đi vệ sinh\""]
let programmerStatement = ["Ò ó o o","Ò ó o o o","Ò ó o o o o","Ò ó o o o o o"];
let artistStatment = ["Đẹp đẹp nữa đẹp mãi", "Đẹp đẹp nữa đẹp mãi"];

var jobPosElement = this.document.getElementById("jobPosition");


var memberName = this.document.getElementById("memberName");
let counter = 0;

var statement = this.document.getElementById("statement");

var leftButton = this.document.getElementById("turnLeft");
let intervalId;
jobPosElement.textContent = jobPosition[selectingJobPos];
leftButton.addEventListener("click", (Event)=>{
    selectingJobPos--;
    counter = 0;
    selecttingNames = 0;
    if(selectingJobPos < 0)
        selectingJobPos = jobPosition.length;
    else if(selectingJobPos > jobPosition.length - 1)
        selectingJobPos = 0;
    jobPosElement.textContent = jobPosition[selectingJobPos];
    ChangeMemberName();
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(ChangeMemberName,2000);
} );

var rightButton = this.document.getElementById("turnRight");
rightButton.addEventListener("click", (Event)=>{
    selectingJobPos++;
    counter = 0;
    selecttingNames = 0;
    if(selectingJobPos < 0)
        selectingJobPos = jobPosition.length;
    else if(selectingJobPos > jobPosition.length - 1)
        selectingJobPos = 0;
    jobPosElement.textContent = jobPosition[selectingJobPos];
    ChangeMemberName();
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(ChangeMemberName,2000);
} );

ChangeMemberName();

function ChangeMemberName(){
  
   
    switch(selectingJobPos)
    {
        case 0:
            {
                selecttingNames = counter % directorNames.length ;
                memberName.textContent = directorNames[selecttingNames];
                statement.innerText = directorStatement[selecttingNames];
                break;
            }
        case 1:
            {
                selecttingNames = counter % programmerNames.length;
                memberName.textContent = programmerNames[selecttingNames];
                statement.innerText = programmerStatement[selecttingNames];
                break;
            }
        case 2:
            {
                selecttingNames = counter % artistNames.length;
                memberName.textContent = artistNames[selecttingNames];
                statement.innerText = artistStatment[selecttingNames];
                break;
            }
    };
    counter++;
  
}

intervalId = setInterval(ChangeMemberName,2000);