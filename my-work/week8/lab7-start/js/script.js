

// global variables that we need at various spots:
let w = 800;
let h = 500;
let padding = 50;

// put the svg onto the page:
let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
;
// binding functions to the buttons on the page
// the functions we use to do the actual work are defined in dataManager.js


function assignKey(d,i){
  return d.key;
}
function add(){
  addDatapoints(1);
elementsForPage = graphGroup.selectAll(".datapoint").data(data,assignKey);
updateData()




console.log("new data", data)



console.log('elementsForPage',elementsForPage);



elementsForPage.transition().duration(450).attr("transform", function(d, i){
  return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
});

elementsForPage.select("rect")
.attr('fill','black')
 .transition()
 .delay(400)
 .duration(450)
 .attr("width", function(){
    return xScale.bandwidth();
 })
 .attr("y", function(d,i){
   return -yScale(d.value);
 })
 .attr("height", function(d, i){
   return yScale(d.value);
 })
;

let incomingDataGroups = enteringElements
  .append("g")
    .classed("datapoint", true)
;
// position the groups:
incomingDataGroups.attr("transform", function(d, i){
  return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
});
// and append rectangles
incomingDataGroups
  .append("rect")
    .attr("y", function(d,i){
      return 0;
    })
    .attr("height", function(d, i){
      return 0;
    })
    .attr("width", function(){
      return xScale.bandwidth();
    })
    .attr("fill", "#F27294")
    .transition()
    .delay(400)
    .duration(450)
    .attr("y", function(d,i){
      return -yScale(d.value);
    })
    .attr("height", function(d, i){
      return yScale(d.value);
    })
    .transition()
    .delay(400)
    .duration(450)


 ;

}
document.getElementById("buttonA").addEventListener("click", add,assignKey);

function remove(){
  removeDatapoints(1);

  elementsForPage = graphGroup.selectAll(".datapoint").data(data,function(d){return d.key});


  console.log('ex',exitingElements)
     updateData()


  elementsForPage.transition().delay(400).duration(450).attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });
  elementsForPage.select("rect")
   .transition()
   .delay(400)
   .duration(450)
   .attr("width", function(){
      return xScale.bandwidth();
   })
   .attr("y", function(d,i){
     return -yScale(d.value);
   })
   .attr("height", function(d, i){
     return yScale(d.value);
   })
  ;



  let exitingDataGroups = exitingElements.select('rect')
    .attr('fill','#00cccc')
    .transition()
    .delay(400)
    .duration(450)
    .attr('height',0)
    .attr('y',0)
   ;
   exitingElements.transition().delay(400).duration(450).remove()

}

function updateData(){
  allNames = data.map(function(d){return d.key});
  // and adjust the domain of xScale:
  xScale.domain(allNames);
  xAxis = d3.axisBottom(xScale);
  xAxis.tickFormat(d=>{return data.filter(dd=>dd.key==d)[0].name;});
  yMax = d3.max(data, function(d){return d.value});
  yDomain = [0, yMax+yMax*0.1];
  yScale.domain(yDomain);
  xAxisGroup.transition().delay(400).call(xAxis).selectAll("text").attr("font-size", 18)
  xAxisGroup.selectAll("line").remove();
  exitingElements = elementsForPage.exit();
  enteringElements = elementsForPage.enter();
  console.log(exitingElements,'haha')
}

document.getElementById("buttonB").addEventListener("click", remove);

function removeAndAdd(){

 removeDatapoints(3);

 elementsForPage = graphGroup.selectAll(".datapoint").data(data,function(d){return d.key});


 console.log('ex',exitingElements)
    updateData()


 elementsForPage.transition().delay(400).duration(450).attr("transform", function(d, i){
   return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
 });
 elementsForPage.select("rect")
  .transition()
  .delay(400)
  .duration(450)
  .attr("width", function(){
     return xScale.bandwidth();
  })
  .attr("y", function(d,i){
    return -yScale(d.value);
  })
  .attr("height", function(d, i){
    return yScale(d.value);
  })
 ;



 let exitingDataGroups = exitingElements.select('rect')
   .attr('fill','#00cccc')
   .transition()
   .delay(400)
   .duration(450)
   .attr('height',0)
   .attr('y',0)
  ;
  exitingElements.transition().delay(400).duration(450).remove()


  addDatapoints(3);
elementsForPage = graphGroup.selectAll(".datapoint").data(data,function(d){return d.key});
updateData()




console.log("new data", data)



console.log('elementsForPage',elementsForPage);



elementsForPage.transition().duration(450).attr("transform", function(d, i){
  return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
});

elementsForPage.select("rect")
.attr('fill','black')
 .transition()
 .delay(400)
 .duration(450)
 .attr("width", function(){
    return xScale.bandwidth();
 })
 .attr("y", function(d,i){
   return -yScale(d.value);
 })
 .attr("height", function(d, i){
   return yScale(d.value);
 })
;

let incomingDataGroups = enteringElements
  .append("g")
    .classed("datapoint", true)
;
// position the groups:
incomingDataGroups.attr("transform", function(d, i){
  return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
});
// and append rectangles
incomingDataGroups
  .append("rect")
    .attr("y", function(d,i){
      return 0;
    })
    .attr("height", function(d, i){
      return 0;
    })
    .attr("width", function(){
      return xScale.bandwidth();
    })
    .attr("fill", "#F27294")
    .transition()
    .delay(400)
    .duration(450)
    .attr("y", function(d,i){
      return -yScale(d.value);
    })
    .attr("height", function(d, i){
      return yScale(d.value);
    })
    .transition()
    .delay(400)
    .duration(450)


 ;
}

function updateData(){
 allNames = data.map(function(d){return d.key});
 // and adjust the domain of xScale:
 xScale.domain(allNames);
 xAxis = d3.axisBottom(xScale);
 xAxis.tickFormat(d=>{return data.filter(dd=>dd.key==d)[0].name;});
 yMax = d3.max(data, function(d){return d.value});
 yDomain = [0, yMax+yMax*0.1];
 yScale.domain(yDomain);
 xAxisGroup.transition().delay(400).call(xAxis).selectAll("text").attr("font-size", 18)
 xAxisGroup.selectAll("line").remove();
 exitingElements = elementsForPage.exit();
 enteringElements = elementsForPage.enter();
 console.log(exitingElements,'haha')

}
document.getElementById("buttonC").addEventListener("click", removeAndAdd);

function sortData(){
  sortDatapoints();
  elementsForPage = graphGroup.selectAll(".datapoint").data(data,function(d){return d.key});
  updateData();
  elementsForPage.transition().delay(400).duration(450).attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });
  elementsForPage.select("rect")
   .transition()
   .delay(400)
   .duration(450)
   .attr("width", function(){
      return xScale.bandwidth();
   })
   .attr("y", function(d,i){
     return -yScale(d.value);
   })
   .attr("height", function(d, i){
     return yScale(d.value);
   })
  ;

}
document.getElementById("buttonD").addEventListener("click", sortData);

function shuffleData(){
  shuffleDatapoints();

  elementsForPage = graphGroup.selectAll(".datapoint").data(data,function(d){return d.key});
  updateData();
  elementsForPage.transition().delay(400).duration(450).attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });
  elementsForPage.select("rect")
   .transition()
   .delay(400)
   .duration(450)
   .attr("width", function(){
      return xScale.bandwidth();
   })
   .attr("y", function(d,i){
     return -yScale(d.value);
   })
   .attr("height", function(d, i){
     return yScale(d.value);
   })
  ;
}
document.getElementById("buttonE").addEventListener("click", shuffleData);

function weirdData(){

remove();
add();
remove();
add();
remove();
add();
remove();
add();

}
document.getElementById("buttonF").addEventListener("click", weirdData);

let allNames = data.map(function(d){return d.key});
// check it:
console.log(allNames);

let xScale = d3.scaleBand()
    .domain(allNames)
    .range([padding, w-padding])
    .paddingInner(0.1)
;
// create a visual axis corresponding to the scale.
let xAxis = d3.axisBottom(xScale)

xAxis.tickFormat(d=>{return data.filter(dd=>dd.key==d)[0].name;});
// create a group to hold all the axis elements
let xAxisGroup = viz.append("g").classed("xAxis", true);
// tell d3 to put the axis into place
xAxisGroup.call(xAxis);
// modfy the axis label (the emoojis) size
xAxisGroup.selectAll("text").attr("font-size", 24).attr("y", 9);
// get rid of the little tick lines
xAxisGroup.selectAll("line").remove();
// bring axis to the correct y position
xAxisGroup.attr("transform", "translate(0,"+ (h-padding) +")")

// Y SCALE
// we will not show a y axis in this graph, but still need a scale
// to make sure our bars have heights that fit the window. It's
// familiar linear scale.
let yMax = d3.max(data, function(d){return d.value});
// I decided not to use the minimum value of the dataset,
// because otherwise the smallest value's bar would always be 0 pixels
// high and therefore invisible.
yDomain = [0, yMax];
// "hey d3 i need a linear scale please. yeah! I want to supply a value
// to it that is between 0 and yMax and want one back that fits between
// my graph's paddings. Cheers!"
let yScale = d3.scaleLinear().domain(yDomain).range([0, h-padding*2]);

// the ACTUAL GRAPH
// before we get to the actual graph, we make a group element into which to
// put all visual graph things:
let graphGroup = viz.append("g").classed("graphGroup", true);

let elementsForPage = graphGroup.selectAll(".datapoint").data(data);

console.log("D3's assessment of whats needed on the page:", elementsForPage);

let enteringElements = elementsForPage.enter();
let exitingElements = elementsForPage.exit();
// and again, look closely:
console.log("enteringElements", enteringElements);
console.log("exitingElements", exitingElements);

let enteringDataGroups = enteringElements.append("g").classed("datapoint", true);
// position the group along the x axis (check the inspector tool to see
// what we are doing):
enteringDataGroups.attr("transform", function(d, i){
  return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
});
// then append rectangles to them and position/size them:
enteringDataGroups
  .append("rect")
    .attr("width", function(){
      // the scaleBand we are using
      // allows us to as how thick each band is:
      return xScale.bandwidth();
    })
    .attr("height", function(d, i){
      // the idea is that we make the bar
      // as high as dictated by the value...
      return yScale(d.value);
    })
    .attr("y", function(d,i){
      // ...and then push the bar up since it
      // is drawn from top to bottom
      return -yScale(d.value);
    })
    .attr("fill", "black")
;
