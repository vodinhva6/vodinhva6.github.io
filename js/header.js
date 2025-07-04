
let lastScrollTop = 0;
let lastTimestamp = 0;
var div = this.document.getElementById("movingdiv");
window.addEventListener('scroll', function() 
{
    const currentTimestamp = performance.now();
    const currentScrollTop = window.pageYOffset;

    const deltaTime = currentTimestamp - lastTimestamp;
    const deltaScroll = currentScrollTop - lastScrollTop;
    const absDeltalScroll = Math.abs(currentScrollTop - lastScrollTop);
    const speed = deltaScroll / deltaTime;

    const pageYOffset = this.window.top.pageYOffset;
    var scrollY = this.window.scrollY;

    if(!div.style.top)
        {
            div.style.top = 0 + 'px';
        }
    let divTop = div.style.top;
    var currentTop = parseFloat(divTop);
    if(this.window.scrollY <= div.offsetHeight)
    {
        currentTop -= deltaScroll;
        if(currentTop > 0)
            currentTop = 0;
        if(currentScrollTop == 0)
        {
            div.style.top = '0px';  
            div.style.transitionDuration = "0.5s";
            return;
        }
      
        div.style.top = currentTop + "px";
    }
    else 
    {
    if(currentTop <= -div.offsetHeight)
    {
        if(speed < -6.0)
            {
                div.style.top = '0px';  
                div.style.transitionDuration = "0.5s";
            }
    }
    else
    if(currentTop > -div.offsetHeight && currentTop < 0)
    {
                currentTop -= deltaScroll;
                if(currentTop > 0)
                    currentTop = 0;
                div.style.top = currentTop + "px";
    }
    else if (currentTop == 0)
    if(speed > 0.0)
    {
        currentTop -= deltaScroll;
       
        div.style.top = currentTop + "px";
    }
    }
   

    lastScrollTop = currentScrollTop;
    lastTimestamp = currentTimestamp;


});

function updateOpacity()
{
    let divTop = div.style.top;
    var currentTop = parseFloat(divTop);
    var t = (Math.abs(div.offsetHeight) - Math.abs(currentTop)) / div.offsetHeight;
   
    div.style.opacity = t;
}
setInterval(updateOpacity,100);
