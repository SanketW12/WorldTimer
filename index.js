const dab1=document.querySelectorAll(".dab1");
const time=document.querySelectorAll(".date");
dab1.forEach((item, i) => {
item.addEventListener("transitionend",()=>{
time[i].style.display="block";
});
});

console.log(dab1);




function mumbai() {
  var m= new Date();

  var h=m.getHours().toString();
  var i=m.getMinutes();
  var ampm= h>=12 ? 'PM' : 'AM';
    var hr=h>12 ? h-12 : h;
  var mn= i>=10 ? i:'0'+i;
  document.getElementsByClassName("mumbai")[0].innerHTML = hr + ":" + mn + " " + ampm;
}

function newyork() {
  var m= new Date();
t= m.toLocaleString("en-US", {timeZone: "America/New_York"});  var h=m.getHours().toString();
  var i=m.getMinutes();
  var ampm= h>=12 ? 'PM' : 'AM';
    var hr=h>12 ? h-12 : h;
  var mn= i>=10 ? i:'0'+i;
  document.getElementsByClassName("newyork")[0].innerHTML =t;
}

function london() {
  var m= new Date();

  var h=m.getHours().toString();
  var i=m.getMinutes();
  var ampm= h>=12 ? 'PM' : 'AM';
    var hr=h>12 ? h-12 : h;
  var mn= i>=10 ? i:'0'+i;
  document.getElementsByClassName("london")[0].innerHTML = hr + ":" + mn + " " + ampm;
}

function moscow() {
  var m= new Date();

  var h=m.getHours().toString();
  var i=m.getMinutes();
  var ampm= h>=12 ? 'PM' : 'AM';
    var hr=h>12 ? h-12 : h;
  var mn= i>=10 ? i:'0'+i;
  document.getElementsByClassName("moscow")[0].innerHTML = hr + ":" + mn + " " + ampm;
}

function tokyo() {
  var m= new Date();

  var h=m.getHours().toString();
  var i=m.getMinutes();
  var ampm= h>=12 ? 'PM' : 'AM';
    var hr=h>12 ? h-12 : h;
  var mn= i>=10 ? i:'0'+i;
  document.getElementsByClassName("tokyo")[0].innerHTML = hr + ":" + mn + " " + ampm;
}

function beijing() {
  var m= new Date();

  var h=m.getHours().toString();
  var i=m.getMinutes();
var ampm= h>=12 ? 'PM' : 'AM';
  var hr=h>12 ? h-12 : h;
  var mn= i>= 10 ? i:'0'+i;
  document.getElementsByClassName("beijing")[0].innerHTML = hr + ":" + mn + " " + ampm;
}
