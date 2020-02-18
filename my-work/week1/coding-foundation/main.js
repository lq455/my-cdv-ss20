var input = document.getElementById('input');

var theDiv = document.getElementById("ip");


function getNumber(){

  num=input.value
  theDiv.innerHTML=''

  for(i=0;i<num;i++){

  var btn = document.createElement("BUTTON");


  theDiv.appendChild(btn);
  btn.setAttribute('id','box')


}
}
