console.log('js')

// console.log(document.getElementById('viz-container'))

let viz= d3.select("#viz-container")
.append('svg') // selection changed//svg like a canvas
.attr('id','viz')//affect svg
.attr('width',800)
.attr('height',800)

 ;
//load date

d3.json('data.json').then(gotData)
function xLocation(datapoint){
  //console.log(datapoint.xaxis)//可以在这看到每次循环都拿到了data的一个值
  //return Math.random()*500//random number bewtween 0,500
  return datapoint.xaxis *40
}
function yLocation(datapoint){
  //console.log(datapoint.yaxis)//可以在这看到每次循环都拿到了data的一个值
  //return Math.random()*500//random number bewtween 0,500
  return datapoint.yaxis *40
}
function chooseColor(datapoint){
  console.log(datapoint.times)//可以在这看到每次循环都拿到了data的一个值

  if (datapoint.times==1){
  return '#ffffcc'
}
if (datapoint.times==2){
return '#ffff80'
}
if (datapoint.times==3){
return '#ffff66'
}
if (datapoint.times==4){
return '#ffff33'
}
if (datapoint.times==5){
return '#ffff33'
}
if (datapoint.times==6){
return '#ffff1a'
}
if (datapoint.times==7){
return '#ffff00'
}
}


function gotData(incomingData){
  console.log(incomingData)
  viz.selectAll('circle').data(incomingData).enter()
  .append('circle')
  .attr('cx',xLocation)//doen't necesarrily call,d3 calls it, we don't no()
  .attr('cy',yLocation)
  .attr('r',10)
  .attr('fill',chooseColor)
}
