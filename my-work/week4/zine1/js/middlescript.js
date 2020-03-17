let w = 2400;
let h = 800;

let viz = d3.select("#container")
  .append("svg")
    .attr("class", "viz")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "#00001a")
;
d3.json("windows.json").then(gotData)

function getWindows(d,i){
  return d.lights
}
function positionX(d,i){

  return d.x*1.1
}

function getColor(d,i){
  return d.maincolor
}

function chooseColor(d,i){
  console.log(d);
  return d.color
}
function positionY(d,i){
  return d.y*1.5
}

function getY(d,i){
  return yScale(d.number)
}

function groupPosition(datapoint){

a=Math.floor(datapoint.day/11)
 // x= datapoint.day*280
  x=(datapoint.day-1)*243-a*(w+30);

 y=40+a*h/2
 return 'translate('+x+','+y+')'
}
function addText(d,i){
  console.log(d.day)
  return d.date
}
let yScale=d3.scaleLinear().domain([0,40,60]).range([20,180,200])
let opacityScale=d3.scaleLinear().domain([10,60]).range([0,2,0.5])
function getOpacity(d,i){
  return opacityScale(d.number)
}

function getLightY(d,i){
  return d.number-10
}

function getLightX(d,i){
  return d.number*5
}

function gotData(incomingData){

  let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
      .attr("class", "datagroup");

      date=datagroups.append('text')
      .text(addText)
      .attr('x','70')
      .attr('y','340')
      .attr("font-size", "20px")
      .attr("font-family", "Helvetica Neue")
      .attr('fill','white');

      roof=datagroups.append('rect')
      .attr('x','20')
      .attr('y','-20')
      .attr('width',200)
      .attr('height',3)
      // .style("stroke", 'grey')
      // .style("stroke-width", '5')
      // .attr('fill','#9494b8')
      .attr('fill','#e6eeff')
      .attr('opacity', getOpacity)

      ;
      // building=datagroups.append('rect')
      // .attr('x','10')
      // .attr('y','10')
      // .attr('width',300)
      // .attr('height',360)
      // .style("stroke", 'grey')
      // .style("stroke-width", '5')
      // // .attr('fill','#9494b8')
      // .attr('fill','none')
      // // .attr('opacity', getOpacity)
      //
      // ;
      // building2=datagroups.append('rect')
      // .attr('x','205')
      // .attr('y','295')
      // .attr('width',85)
      // .attr('height',2)
      // // .style("stroke", 'grey')
      // // .style("stroke-width", '5')
      // // .attr('fill','#9494b8')
      // .attr('fill','#e6eeff')
      // .attr('opacity', getOpacity)
      //
      // ;
      // building3=datagroups.append('rect')
      // .attr('x','25')
      // .attr('y','-15')
      // .attr('width',5)
      // .attr('height',100)
      // // .style("stroke", 'grey')
      // // .style("stroke-width", '5')
      // // .attr('fill','#9494b8')
      // .attr('fill','#e6eeff')
      // .attr('opacity', getOpacity)
      //
      // ;
      building=datagroups.append('circle')
      .attr('cx',getY)
      .attr('cy','-20')

      .attr('r',10)

      // .attr('fill','#9494b8')
      .attr('fill',getColor)
      // .attr('opacity', getOpacity)

      ;
      //







     everydayWindow=datagroups.append("g").selectAll(".windows").data(getWindows).enter()

     .append('rect')
     .attr('width', 6.5)
     .attr('height', 7.5)
     .attr("x", positionX)
     .attr("y", positionY)
     .attr('fill',chooseColor);

datagroups.attr("transform",groupPosition)
}
