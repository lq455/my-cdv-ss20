var input = document.getElementById('input');
var n=0 

function getNumber(){
while (n>0){
  document.getElementById("box").remove();
  n = n-1
}
  num=input.value

  n = 0
  for(i=0;i<num;i++){
  n = i+1
  var btn = document.createElement("BUTTON");
  document.body.appendChild(btn);
  btn.setAttribute('id','box')


}
}
