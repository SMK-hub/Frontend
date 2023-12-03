function rateChange()
{
    var x1=document.getElementById("rate1");
    var x2=document.getElementById("rate2");
    var x3=document.getElementById("rate3");
    if(x1.innerHTML=="$ 10")
    {
        x1.innerHTML="$ 95";
    }
    else
    {
        x1.innerHTML="$ 10";
    }

    if(x2.innerHTML=="$ 24")
    {
        x2.innerHTML="$ 220";
    }
    else
    {
        x2.innerHTML="$ 24";
    }

    if(x3.innerHTML=="$ 42")
    {
        x3.innerHTML="$ 400";
    }
    else
    {
        x3.innerHTML="$ 42";
    }
}

var count=1;
setInterval(function()
{
    document.getElementById("radio"+count).checked=true;
    count++;
    if(count>5)
    {
        count=1;
    }
},6000);

let indicator= document.querySelector(".indicator");

let documentHeight=document.documentElement.scrollHeight;
let viewportHeight=document.documentElement.clientHeight;
window.onscroll=function()
{
    let percentscroll=(scrollY/(documentHeight-viewportHeight))*100;
    indicator.style.width=percentscroll+'%';
    console.log(percentscroll);
}