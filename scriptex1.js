
var btn=document.getElementById("btn");


function boxprinting()
{
  var b=  document.getElementById("bxno").value;
  var b2=parseInt(b);
  var colo1= document.getElementById("color").value;
  var templete=` <div class="box" style="background-color: ${colo1};"></div>`;
var newg=document.getElementsByClassName("main");
var newdiv=document.createElement("div");
  for(let i=1;i<=b2;i++)

  {
      Main.innerHTML+=templete;
  }
}
btn.onclick=boxprinting;
