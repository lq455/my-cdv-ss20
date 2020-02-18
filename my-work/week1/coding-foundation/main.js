var input = document.getElementById('input');
var n=0
var theDiv = document.getElementById("ip");


function getNumber(){

  num=input.value
  theDiv.innerHTML=''
  n = 0
  for(i=0;i<num;i++){
  n = i+1
  var btn = document.createElement("BUTTON");


  theDiv.appendChild(btn);
  btn.setAttribute('id','box')


}
}
