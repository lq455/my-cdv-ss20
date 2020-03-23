

let viz = d3.select("#container")
  .append("svg")
    .attr("class", "viz")
    .attr("width", 1200)
    .attr("height", 800)
    .style("background-color", "#00001a")
;
d3.json("exampleForBack.json").then(gotData)

function positionX(d,i){
  return d.x*1.9
}

function positionY(d,i){
  return d.y*1.8
}

function getColor(d,i){
  return d.maincolor
}
function chooseColor(d,i){
  console.log(d);
  return d.color
}
function getWindows(d,i){
  return d.lights
}

function gotData(incomingData){

  let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
      .attr("class", "datagroup");

      everydayWindow=datagroups.append("g").selectAll(".windows").data(getWindows).enter()
      .append('rect')
      .attr('width', 9.5)
      .attr('height', 10.5)
      .attr("x", positionX)
      .attr("y", positionY)
      .attr('fill',chooseColor);

 datagroups.attr("transform",'translate(120,260)')
 }


viz.append("text")
    .text("How To Read")
    .attr("fill", "white")
    .attr("x", 30)
    .attr("y", 100)
    .attr("font-family", "URW Chancery L, cursive")
    .attr("font-size", 40)
    .attr("font-weight", 400)
;
viz.append('rect')
.attr('x','160')
.attr('y','230')
.attr('width',300)
.attr('height',4)
.attr('fill','#e6eeff')
.attr('opacity', 0.2);

viz.append('circle')
.attr('cx',270)
.attr('cy','230')
.attr('r',11)
.attr('fill','#ffe6b3')
;

viz.append('circle')
.attr('cx','650')
.attr('cy','230')
.attr('r',11)
.attr('fill','#ffe6b3')
;

viz.append('circle')
.attr('cx','690')
.attr('cy','230')
.attr('r',11)
.attr('fill',"#fff2e6")
;
viz.append('circle')
.attr('cx','730')
.attr('cy','230')
.attr('r',11)
.attr('fill',"#ccccff")
;
viz.append('circle')
.attr('cx','770')
.attr('cy','230')
.attr('r',11)
.attr('fill',"#e6e6ff")
;
viz.append('circle')
.attr('cx','810')
.attr('cy','230')
.attr('r',11)
.attr('fill',"white")
;
viz.append("text")
    .text("The corlor of the circle represents the main color of the lights that day")
    .attr("fill", "#e6e6ff")
    .attr("x", 660)
    .attr("y", 275)
    .attr("font-family", "URW Chancery L, cursive")
    .attr("font-size", 17)

;
viz.append('rect')
.attr('x','639')
.attr('y','310')
.attr('width',300)
.attr('height',4)
.attr('fill','#e6eeff')
.attr('opacity', 0.2);

viz.append('circle')
.attr('cx',680)
.attr('cy','310')
.attr('r',12)
.attr('fill','#ffe6b3')
;
viz.append('rect')
.attr('x','639')
.attr('y','360')
.attr('width',300)
.attr('height',4)
.attr('fill','#e6eeff')
.attr('opacity', 0.2);

viz.append('circle')
.attr('cx',860)
.attr('cy','360')
.attr('r',12)
.attr('fill','#ffe6b3')
;
viz.append('rect')
.attr('x','639')
.attr('y','410')
.attr('width',300)
.attr('height',4)
.attr('fill','#e6eeff')
.attr('opacity', 0.2);

viz.append('circle')
.attr('cx',790)
.attr('cy','410')
.attr('r',12)
.attr('fill','#ffe6b3')
;


viz.append("text")
    .text("The position of the circle represents the number of lights that day")
    .attr("fill", "#e6e6ff")
    .attr("x", 660)
    .attr("y", 460)
    .attr("font-family", "URW Chancery L, cursive")
    .attr("font-size", 17)

;
viz.append('rect')
.attr('x','640')
.attr('y','510')
.attr('width',13)
.attr('height',14.5)
.attr('fill','#ffd9b3')
;
viz.append('rect')
.attr('x','670')
.attr('y','510')
.attr('width',13)
.attr('height',14.5)
.attr('fill','#ffe6cc')
;
viz.append('rect')
.attr('x','700')
.attr('y','510')
.attr('width',13)
.attr('height',14.5)
.attr('fill','#fff2e6')
;
viz.append('rect')
.attr('x','730')
.attr('y','510')
.attr('width',13)
.attr('height',14.5)
.attr('fill','#ffffcc')
;
viz.append('rect')
.attr('x','760')
.attr('y','510')
.attr('width',13)
.attr('height',14.5)
.attr('fill','#e6f2ff')
;
viz.append('rect')
.attr('x','790')
.attr('y','510')
.attr('width',13)
.attr('height',14.5)
.attr('fill','white')
;
viz.append("text")
    .text("Each rect represents that the light at this position is on that day")
    .attr("fill", "#e6e6ff")
    .attr("x", 660)
    .attr("y", 570)
    .attr("font-family", "URW Chancery L, cursive")
    .attr("font-size", 17)

;
viz.append("text")
    .text("The color of the rect represents the color of the light")
    .attr("fill", "#e6e6ff")
    .attr("x", 660)
    .attr("y", 595)
    .attr("font-family", "URW Chancery L, cursive")
    .attr("font-size", 17)

;

viz.append("text")
    .text("(Visualization of One Day's Data)")
    .attr("fill", "#e6e6ff")
    .attr("x", 190)
    .attr("y", 670)
    .attr("font-family", "URW Chancery L, cursive")
    .attr("font-size", 15)

;

viz.append("text")
    .text("I recorded how many & which windows are lit up by lights everyday at 12AM in the building in front of my room for two weeks.")
    .attr("fill", "#e6e6ff")
    .attr("x", 130)
    .attr("y", 170)
    .attr("font-family", "URW Chancery L, cursive")
    .attr("font-size", 17)

;
