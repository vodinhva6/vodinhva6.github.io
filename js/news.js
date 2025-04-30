let currentBackgroundImage = 1;

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

