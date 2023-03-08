
var count = 1;
var countm = 1;
var counth = 1;
var newhour = 0;
setInterval(function(){

    const Secander = document.getElementsByClassName('second-hand')[0];
    const miniter = document.getElementsByClassName('minute-hand')[0];
    const houres = document.getElementsByClassName('hour-hand')[0];


    const now = new Date();
    const hour = now.getHours();
    const hour12 = hour % 12 || 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();


    miniter.style.transform = "rotate("+ countm +"deg)";
    houres.style.transform = "rotate("+ counth +"deg)";
    Secander.style.transform = "rotate("+ count +"deg)";

    count = 6 * second - 90;
    countm = 6 * minute -90;
   
     counth = 30 *hour12 - 90 ;


}, 1000);




