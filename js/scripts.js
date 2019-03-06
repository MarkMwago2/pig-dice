$(document).ready(function(){

function genNumber(){
return Math.floor(Math.random ()*6)+1;
}
  var initialScore=0;
$("button#roll1").click(function (){
  var anyNo=genNumber();
  document.getElementById("die").innerHTML=anyNo;
  var lastScore=initialScore+= anyNo;
  document.getElementById("score1").innerHTML=lastScore;
});
var initScore=0;
$("button#roll2").click(function (){
var anyNo=genNumber();
document.getElementById("die").innerHTML=anyNo;
var lastScore=initialScore+= anyNo;
document.getElementById("score2").innerHTML=lastScore;
});
});
