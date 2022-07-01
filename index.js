var switch_on_button=document.getElementById("switch-on");
var switch_off_button=document.getElementById("switch_off");
var image=document.getElementById("bulb");

function switchOn(){
  image.setAttribute("src","light-on.jpg");
}
function switchOff(){
  image.setAttribute("src","light-off.jpg");
}
