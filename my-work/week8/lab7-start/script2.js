

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
add();
remove()

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

let allNames = data.map(function(d){return d.key});
// check it:
console.log(allNames);

// now we as d3 to give us our custom scale
// we say "hey d3, here is a list of names (keys (the domain)), I want a function that
// returns a number (pixel location on the x axis (the range)) for each of the names.
// oh, and could you make sure that this functions calculates in some
// distance (passingInner) between each of thos points (bands)?"
let xScale = d3.scaleBand()
    .domain(allNames)
    .range([padding, w-padding])
    .paddingInner(0.1)
;
// create a visual axis corresponding to the scale.
let xAxis = d3.axisBottom(xScale)
// this is a tricky one.... by default the axis would show the scales domain (the unique keys)
// ...in our case we want emojis to show. This situation hardly comes up,
// that's why I just wrote this one-liner for you:
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
// btw, this:
// .classed("graphGroup", true);
// is almost equivalent to
// .attr("class", "graphGroup");
// but slightly more advanced. you can find a description here:
// https://github.com/d3/d3-selection#selection_classed

// now comes the interesting part, WATCH OUT! i'll go slow
// we have the page (with nothing on it) and we have data
// we *toss* it both to D3 and let it do its evaluation about
// how many elements need to enter/update/exit.
let elementsForPage = graphGroup.selectAll(".datapoint").data(data);
// note, we do not use ".enter()" for now. let's have a close look
// at just this (the situation) for now
// as we have learned, D3 did some kind of calculation here, some weighing
// of what is on the page already and what needs to go there.
// have a close look at this console.log:
console.log("D3's assessment of whats needed on the page:", elementsForPage);
// note the reference to enter, exit and group in the object
// those three are all the possible selections.
// they comprises elements that are about to enter (in this case 10),
// elements that are on the page already and will be updated and elements
// that don't have any associated datapoint anymore and need to exit.
// out of this, we can pick those three subsections and decide
// precisely what to do with the, e.g. how should new elements enter?
// should they come from the bottom? slowly fade in? - ours to decide
// how should updating elements change their size, color, position etc.?
// and the exiting ones, rather than just disappearing, how about they
// fade out?
// out of this, we will now extract the sub selections,
// the entering elements and the exiting ones:
let enteringElements = elementsForPage.enter();
let exitingElements = elementsForPage.exit();
// and again, look closely:
console.log("enteringElements", enteringElements);
console.log("exitingElements", exitingElements);
// note how we now only deal with a "_groups" thing,
// in the enteringElements object, the "_groups" array holds the
// empty placeholder elements for the elements that are about to enter
// equally, in the exitingElements, the "_groups" array holds the elements
// that ARE on the page, but must leave because no datapoint is their to
// match them.
// here is how i see it, we start with the full situation - all the elements
// that we are dealing with. from that, we extract the entering ones (... and
// do something with them), we also extract the exiting one (...and treat those
// differently, too) and then? What are we left with? the UPDATING elements!
// they are in the "_groups" array we saw in the very beginning inside
// "elementsForPage". For now, hold the thought that we are dealing
// with three subsections of elements: entering ones, exiting ones, and updating ones.
// hopefully this will get clearer as we go on.
// as you can see, there is nothing on the page yet. And the previous console.logs
// confirm that there is no elements updating, none are leaving, we only have things enter.
// let's deal with them right now:
// make a group for each datapoint
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
