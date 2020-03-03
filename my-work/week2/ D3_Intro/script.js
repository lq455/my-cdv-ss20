console.log('js')

// console.log(document.getElementById('viz-container'))

let viz= d3.select("#viz-container")
.append('svg') // selection changed//svg like a canvas
.attr('id','viz')//affect svg
.attr('width',800)
.attr('height',800)

 ;
//load date

d3.json('data2.json').then(gotData)
function xLocation(datapoint){
// if(datapoint.day==1){
//   return datapoint.x *8
// }
// if(datapoint.day==2){
//   return datapoint.x*8+200
// }
// if(datapoint.day==3){
//   return datapoint.x*8+400
// }
// if(datapoint.day==4){
//   return datapoint.x*8+600
// }
a=Math.floor(datapoint.day/6)
return datapoint.x *8+datapoint.day*160-170-800*a


}
function yLocation(datapoint){
  //console.log(datapoint.yaxis)//可以在这看到每次循环都拿到了data的一个值
  //return Math.random()*500//random number bewtween 0,500
b=Math.floor(datapoint.day/6)
console.log(b)
  return datapoint.y *10+10+b*250
}


function chooseColor(datapoint){
  // if(datapoint.day==1){
  //   return '#ffff80'
  // }
  // if(datapoint.day==2){
  //   return 'white'
  // }
  // if(datapoint.day==3){
  //   return '#ffff80'
  // }
  // if(datapoint.day==4){
  //   return 'white'
  // }
  if (datapoint.day%2==1){
    return '#ffff80'
  }
  else{
    return 'white'
  }
}

function gotData(incomingData){
  //console.log(incomingData)
  viz.selectAll('circle').data(incomingData).enter()
  .append('circle')
  .attr('cx',xLocation)//doen't necesarrily call,d3 calls it, we don't no()
  .attr('cy',yLocation)
  .attr('r',3)
  .attr('fill',chooseColor)
}
