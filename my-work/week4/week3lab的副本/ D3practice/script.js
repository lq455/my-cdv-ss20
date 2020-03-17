let viz= d3.select("#viz-container")
.append('svg') // selection changed//svg like a canvas
.attr('id','viz')//affect svg
.attr('width',800)
.attr('height',800)

 ;

 d3.json('data2.json').then(gotData)
 function getWindows(d,i){
   // console.log("data is ", d  );
   // console.log("d.arr is ", d.lights);
   return d.lights
 }

 function positionX(d,i){
   // console.log("data is ", d  );
   //console.log("d.arr is ", d.x);
   return d.x*0.77
 }
 function chooseColor(d,i){
    //console.log("data is ", d  );
   console.log(d);
   return d.color
 }

 function positionY(d,i){
   // console.log("data is ", d  );

   return d.y*0.77+10
 }
 function groupPosition(datapoint){

  a=Math.floor(datapoint.day/6)
  x= datapoint.day*160-170-800*a
  // x=(datapoint.day-1)*200;
  b=Math.floor(datapoint.day/6)
  y=10+b*250
  return 'translate('+x+','+y+')'
}

function addText(d,i){
  console.log(d.day)
  return 'day '+d.day
}

 function gotData(incomingData){

   let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
     .append("g")
       .attr("class", "datagroup");
       // datagroups.append('rect')
       // .attr('width', 130)
       // .attr('height', 148)
       // .attr("x", 7)
       // .attr("y", 15)
       // .attr('fill',chooseColor)
       // .attr("r", '20')
       // ;
       datagroups.append('text')
       .text(addText)
       .attr('x','70')
       .attr('y','190')
       .attr("font-size", "15px")
       .attr("font-family", "Helvetica Neue")
       .attr('fill','white');

       datagroups.append("g").selectAll("circle").data(getWindows).enter()
         // .append("circle")
         //     .attr("cx", positionX)
         //     .attr("cy", positionY)
         //     .attr("r", 3)
             .append('rect')
             .attr('width', 6)
             .attr('height', 7)
             .attr("x", positionX)
             .attr("y", positionY)
             .attr('fill',chooseColor);

     datagroups.attr("transform",groupPosition)
 }

                    // 0




// --------------------------------
