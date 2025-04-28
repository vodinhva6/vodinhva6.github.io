
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
  

let currentBackgroundImage = 1;

var intro = this.document.getElementById("intro");
var news = this.document.getElementById("idNews");
var mainNews = this.document.getElementById("mainNewsId");
var subNews = this.document.querySelectorAll("#subNewsId .subNews");
if(!news.style.top)
    {
        news.style.top = 0 + 'px';
    }
mainNews.style.backgroundImage = window.getComputedStyle(subNews[0]).getPropertyValue("background-image");
function changeBackgroundImage()
{
    const backgroundImage = window.getComputedStyle(subNews[currentBackgroundImage % subNews.length]).getPropertyValue("background-image");
    mainNews.style.backgroundImage = backgroundImage;   
    currentBackgroundImage++;
}
setInterval(changeBackgroundImage,3000);

function updateNewsOpacity()
{
    var pageOff = clamp(Math.abs(window.pageYOffset),0,intro.offsetHeight) * 1.2;
    var t = (pageOff - Math.abs(intro.offsetHeight)) / intro.offsetHeight + 1;
    const currentColor = getComputedStyle(news).backgroundColor;
    const rgbValues = currentColor.match(/\d+/g);;
    const red = rgbValues[0];
    const green = rgbValues[1];
    const blue = rgbValues[2];

    news.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${t})`;
    
}

setInterval(updateNewsOpacity,100);