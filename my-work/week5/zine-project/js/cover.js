let viz = d3.select("#container")
  .append("svg")
    .attr("class", "viz")
    .attr("width", 1200)
    .attr("height", 800)
    .style("background-color", "#00001a")
;

viz.append('rect')
.attr('x','0')
.attr('y','0')
.attr('width',3)
.attr('height',800)
.attr('fill','white');
// .attr('opacity', 0.2);
viz.append('rect')
.attr('x','295')
.attr('y','0')
.attr('width',3)
.attr('height',800)
.attr('fill','white');
viz.append('rect')
.attr('x','650')
.attr('y','0')
.attr('width',3)
.attr('height',800)
.attr('fill','white');
viz.append('rect')
.attr('x','970')
.attr('y','0')
.attr('width',3)
.attr('height',800)
.attr('fill','white');

viz.append('rect')
.attr('x','2')
.attr('y','100')
.attr('width',294)
.attr('height',280)
.attr('fill','none')
.attr('opacity', 0.7)
.style("stroke",'white')
.style('stroke-width','3')
;

viz.append('rect')
.attr('x','2')
.attr('y','670')
.attr('width',294)
.attr('height',3)
.attr('fill','white')

;

viz.append('rect')
.attr('x','298')
.attr('y','230')
.attr('width',353)
.attr('height',330)
.attr('fill','none')
.attr('opacity', 0.7)
.style("stroke",'white')
.style('stroke-width','4')
;

viz.append('rect')
.attr('x','655')
.attr('y','100')
.attr('width',315)
.attr('height',330)
.attr('fill','none')
.style("stroke",'white')
.style('stroke-width','4')
.attr('opacity', 0.7)
;
viz.append('rect')
.attr('x','970')
.attr('y','260')
.attr('width',230)
.attr('height',3)
.attr('fill','white')
.attr('opacity', 0.7)

;

viz.append('rect')
.attr('x','970')
.attr('y','660')
.attr('width',230)
.attr('opacity', 0.7)
.attr('height',3)
.attr('fill','white')

;
viz.append("text")
    .text("O")
    // .attr("fill", "#e6eeff")
    .attr("fill", "#ffffb3")
    .attr("x", 70)
    .attr("y", 300)
    .attr("font-family", "URW Chancery L, cursive")
    .attr("font-size", 200)

;

viz.append("text")
    .text("N")
    // .attr("fill", "#e6eeff")
    .attr("fill", "#ffffb3")
    .attr("x", 380)
    .attr("y", 480)
    .attr("font-family", "URW Chancery L, cursive")
    .attr("font-size", 200)

;
viz.append("text")
    .text("O")
    .attr("fill", "#e6eeff")
    //.attr('opacity', 0.7)
    .attr("x", 740)
    .attr("y", 370)
    .attr("font-family", "URW Chancery L, cursive")
    .attr("font-size", 230)

;
viz.append("text")
    .text("F")
    .attr("fill", "#e6eeff")
    // .attr('opacity', 0.7)
    .attr("x", 1030)
    .attr("y", 190)
    .attr("font-family", "URW Chancery L, cursive")
    .attr("font-size", 230)

;
viz.append("text")
    .text("F")
    .attr("fill", "#e6eeff")
    // .attr('opacity', 0.7)
    .attr("x", 1000)
    .attr("y", 560)
    .attr("font-family", "URW Chancery L, cursive")
    .attr("font-size", 290)

;
viz.append('rect')
.attr('x','652')
.attr('y','720')
.attr('width',320)
.attr('height',280)
.attr('fill','none')
.attr('opacity', 0.7)
.style("stroke",'white')
.style('stroke-width','3')
.attr('opacity', 0.7)
;

viz.append("text")
    .text("Lishan Qin")
    .attr("fill", "white")
    .attr("x", 705)
    .attr("y", 780)
    .attr("font-family", "URW Chancery L, cursive")
    .attr("font-size", 40)

;
