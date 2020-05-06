let w = 2400;
let h = 1000;
let xpadding = 100;
let ypadding = 50;
let padding = 90
var theDiv = document.getElementById("wa");

// SVG
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
    .style("background-color", "black")

;
let count = 0
svgElement = document.getElementsByTagName("svg")[0];

svgElement.style.position = "relative";

svgElement.style.left = "50%";
svgElement.style.transform = "translate(-50%, 15%)";

d3.json("moon.geojson").then(function(geoData){
  d3.csv('moon.csv').then(function(incomingData){
    d3.json("budget.json").then(function(incomingDataII){
      incomingDataII = fixJSDateObjects(incomingDataII);
      let flatData = d3.merge(incomingDataII)

      let xDomain = d3.extent(flatData, function(d){ return d.year });
      let xScale = d3.scaleTime().domain(xDomain).range([800, 1800]);
      let xAxis = d3.axisBottom(xScale);
      let xAxisGroup = viz.append("g")
          .attr("class", "xaxisgroup")
          .attr("transform", "translate(-20,"+(850)+")")
      ;
      //xAxisGroup.call(xAxis);

      let yMax = d3.max(flatData, function(d){
        return d.spending;
      })
      let yDomain = [0, yMax];
      let yScale = d3.scaleLinear().domain(yDomain).range([800, 30]);
      let yAxis = d3.axisLeft(yScale);

      let yAxisGroup = viz.append("g")
          .attr("class", "yaxisgroup")
          .attr("transform", "translate("+(700)+",50)")

      ;
      //yAxisGroup.call(yAxis);



      let graphGroup = viz.append("g").attr("class", "graphGroup");
    let lineMake = d3.line()
          .x(function(d,i){
            return xScale(d.year)
          })
          .y(function(d,i){
            return yScale(d.spending)
          })
      // graphGroup.selectAll('.line').data(incomingDataII).enter()
      // .append('path')
      // .attr('d',lineMake)
      // .attr('fill','none')
      //
      // .attr('stroke','black')
      // .attr('stroke-width',5)
      // .attr('stroke',function(d,i){
      //   if (d[0].line == "NASA"){
      //     return '#80b3ff'
      //   }
      //   else{
      //     return '#ff8080'
      //   }
      // });

let dt1 = viz.append('text')
.text('')
.attr('x',w/2)
.attr('y',padding/2)
.attr('class','discription')
;
let dt2 = viz.append('text')
.text('')
.attr('x',w/2)
.attr('y',padding/2)
.attr('class','discription')
;
let dt3 = viz.append('text')
.text('')
.attr('x',w/2)
.attr('y',padding/2)
.attr('class','discription')
;
let dt4 = viz.append('text')
.text('')
.attr('x',w/2)
.attr('y',padding/2)
.attr('class','discription');
let dt5 = viz.append('text')
.text('')
.attr('x',200)
.attr('y',850)
.attr('fill','white')

;

    let projection = d3.geoAzimuthalEqualArea()
      .translate([w/2,h/2])
      .fitExtent([[0,0],[w-padding-90,h-200]],geoData)

    let pathMaker = d3.geoPath(projection);
    let
    moonMap=viz.selectAll(".map").data(geoData.features).enter()

    .append("path")

      .attr("class", "map")
      .attr("d", pathMaker)
      .attr('stroke','white')
      .attr('fill','none')

      ;

  function circleX(d,i){
    r=Math.floor(i/24)
    x=820+r*25
    return x

  }
  function circleY(d,i){
    //console.log(i)
    r=Math.floor(i/24)
    y=130+i*22-r*24*22

    return y



  }

  let alldata = viz.selectAll(".alldata").data(incomingData).enter()
    .append('circle')
    .attr('class','alldata')
      .attr('cx',circleX)
      .attr('cy',circleY)
      .attr('r',4)
      .attr('fill','none');

  function checkCount(d,i){
    if (count==0){
      textElement
          .text("<<<This project intends to illustrate the US's devotion to the Moon landing cause and the tension of the Moon Race by visualizing the The TR R 277 reports.>>>")
          .attr('x',w/5)
          .attr('y',h-100)
          .attr('class','t')
          .attr('fill','white')
      ;
     textElementII
          .text("[Click here to know more...]")
          .attr('x',w/2-60)
          .attr('y',h-60)
          .attr('class','t')
          .attr('fill','white')
          .on('mouseover',function(d,i){
            textElementII.
            attr('fill','#80b3ff')
          })
          .on('mouseout',function(d,i){
            textElementII.
            attr('fill','white')
          })
          .on('click',function(d,i){
            //console.log('pne')
            count+=1
          checkCount()
        })
      dt5.text('')
      moonMap.attr('fill','none')
    }
    if (count == 1){
      dt5
      .text('[Previous Page]')
      .attr('x',480)
      .attr('y',h-140)
      .attr('fill','white')
      .on('mouseover',function(d,i){
        dt5.
        attr('fill','#80b3ff')
      })
      .on('mouseout',function(d,i){
        dt5.
        attr('fill','white')
      })
      .on('click',function(d,i){
        try {
    t.remove()
    t1.remove()
    t2.remove()
    t3.remove()
} catch (error) {
    console.log('lol')
}
        //console.log('pne')
        count-=1
      checkCount()
    })

      ;



      textElement
       .transition()

        .attr('x',200)
        .text("<<<During the Cold War, there is a historic event called the \"Space Race\". It's the competition between the Soviet Union and the United States to achieve first in spaceflight capability as a means to show off military power.>>>");
        moonMap
        .attr('fill','grey')

    }
    else if (count == 2){
  textElement
    .transition()
    .attr('x',20)

    .text('<<<Both parties had invested a huge amount of resource in the Space Race. The TR R-277,  also known as the Chronological Catalog of Reported Lunar Events released in 1968, was one of the products of the “Space Race”. The map above indicates the coverage of the reports over 500 years.>>>')
    .duration(500)
    ;

    moonMap
    .attr('stroke',function(d,i){
      //console.log(d.properties)

      let correspondingDatapoint = incomingData.find(function(datapoint){
        if(d.properties.name.includes(datapoint.Location)){
        return true
      }
      })
      if (correspondingDatapoint != undefined){
        //console.g(correspondingDatapoint.population)
        return 'red'

      }
      else{
        return "white"
      }
    })

    .attr('fill',function(d,i){
      //console.log(d.properties)
      let correspondingDatapoint = incomingData.find(function(datapoint){
        if(d.properties.name.includes(datapoint.Location)||d.properties.name==datapoint.Location){
          // if (datapoint.Location=='Aristarchus'){
          //   console.log(d.properties.name)
          // }
        return true
      }
      })
      if (correspondingDatapoint != undefined){
        //console.log(correspondingDatapoint.population)
        return 'red'

      }
      else{
        return "grey"
      }
    })

    ;
}
else if (count == 3){
  alldata.attr('fill','none')
  .attr('stroke','none');
     textElement
       .transition()
       .attr('x',185)
       //.duration(500)
       .text('<<<The TR R-277 was at that time the single most complete report of all observed lunar anomalies, and lists of 536 pieces of records from 1500 till 1967. You may check how the coverage of the reports differs at different period of time here.>>>');
     t1=viz.append('text')
     .text('1920s')
     .attr('x',w/4+300)
     .attr('y',20)
     .attr('fill','white')
     .on('click',function(d,i){
       moonMap

       .attr('stroke','white')
       .attr('stroke',function(d,i){
             //console.log(d.properties)
             let correspondingDatapoint = incomingData.find(function(datapoint){
               if(datapoint.Year>1920&&datapoint.Year<1940&&d.properties.name.includes(datapoint.Location)){
               return true
             }
             })
             if (correspondingDatapoint != undefined){
               //console.log(correspondingDatapoint.population)
               return 'red'

             }
             else{
               return "white"
             }
           })
      .transition()
       .attr('fill',function(d,i){
         //console.log(d.properties)
         let correspondingDatapoint = incomingData.find(function(datapoint){
           if(datapoint.Year>1920&&datapoint.Year<1940&&d.properties.name.includes(datapoint.Location)){
           return true
         }
         })
         if (correspondingDatapoint != undefined){
           //console.log(correspondingDatapoint.population)
           return 'red'

         }
         else{
           return "grey"
         }
       })
   })
   .on('mouseover',function(d,i){
     t1.
     attr('fill',"red")
   })
   .on('mouseout',function(d,i){
     t1.
     attr('fill','white')
   })
     ;
     t2=viz.append('text')
     .text('1940s')
     .attr('x',w/4+630)
     .attr('y',20)
     .attr('fill','white')
     .on('click',function(d,i){
       moonMap
       .transition()
       .attr('stroke','white')

       .attr('stroke',function(d,i){
         //console.log(d.properties)
         let correspondingDatapoint = incomingData.find(function(datapoint){
           if(datapoint.Year>1940&&datapoint.Year<1960&&d.properties.name.includes(datapoint.Location)){
           return true
         }
         })
         if (correspondingDatapoint != undefined){
           //console.log(correspondingDatapoint.population)
           return 'red'

         }
         else{
           return "white"
         }
       })
       .transition()
       .attr('fill',function(d,i){
         //console.log(d.properties)
         let correspondingDatapoint = incomingData.find(function(datapoint){
           if(datapoint.Year>1940&&datapoint.Year<1960&&d.properties.name.includes(datapoint.Location)){
           return true
         }
         })
         if (correspondingDatapoint != undefined){
           //console.log(correspondingDatapoint.population)
           return 'red'

         }
         else{
           return "grey"
         }
       })
   })
   .on('mouseover',function(d,i){
     t2.
     attr('fill','red')
   })
   .on('mouseout',function(d,i){
     t2.
     attr('fill','white')
   })
     ;
     t=viz.append('text')
     .text('1900s')
     .attr('x',w/4)
     .attr('y',20)
     .attr('fill','white')
     .on('click',function(d,i){
       moonMap

       .attr('stroke','white')

       .attr('stroke',function(d,i){
             //console.log(d.properties)
             let correspondingDatapoint = incomingData.find(function(datapoint){
               if(datapoint.Year>1900&&datapoint.Year<1920&&d.properties.name.includes(datapoint.Location)){
               return true
             }
             })
             if (correspondingDatapoint != undefined){
               //console.log(correspondingDatapoint.population)
               return 'red'

             }
             else{
               return "white"
             }
           })
        .transition()
       .attr('fill',function(d,i){
         //console.log(d.properties)
         let correspondingDatapoint = incomingData.find(function(datapoint){
           if(datapoint.Year>1900&&datapoint.Year<1920&&d.properties.name.includes(datapoint.Location)){
           return true
         }
         })
         if (correspondingDatapoint != undefined){
           //console.log(correspondingDatapoint.population)
           return 'red'

         }
         else{
           return "grey"
         }
       })
   })
   .on('mouseover',function(d,i){
     t.
     attr('fill',"red")
   })
   .on('mouseout',function(d,i){
     t.
     attr('fill','white')
   })
     ;
     t3=viz.append('text')
     .text('1960s')
     .attr('x',w/4+930)
     .attr('y',20)
     .attr('fill','white')
     .on('click',function(d,i){
       moonMap
       .attr('stroke','white')

       .attr('stroke',function(d,i){
         //console.log(d.properties)
         let correspondingDatapoint = incomingData.find(function(datapoint){
           if((datapoint.Year>1960)&&d.properties.name.includes(datapoint.Location)){
           return true
         }
         })
         if (correspondingDatapoint != undefined){
           //console.log(correspondingDatapoint.population)
           return 'red'

         }
         else{
           return "white"
         }
       })
       .transition()
       .attr('fill',function(d,i){
         //console.log(d.properties)
         let correspondingDatapoint = incomingData.find(function(datapoint){
           if((datapoint.Year>1960)&&d.properties.name.includes(datapoint.Location)){
           return true
         }
         })
         if (correspondingDatapoint != undefined){
           //console.log(correspondingDatapoint.population)
           return 'red'

         }
         else{
           return "grey"
         }
       })
   })
   .on('mouseover',function(d,i){
     t3.
     attr('fill','red')
   })
   .on('mouseout',function(d,i){
     t3.
     attr('fill','white')
   })
     ;


   }
   else if (count == 4){
    moonMap
    .attr('fill','grey')
    .attr('stroke','white');
  textElement
    .transition()
    .attr('x',0)
    .duration(500)
    .text('<<On the map above, the red circles represent records that were made during the Cold War. You can see that among all 536 pieces of records that covered about 500 years reports, more than half of them were created during the Cold War. You may move your mouse on these circles to learn more details.>>');
 t1
 .remove();
 t2
 .remove();
 t3
 .remove();
 t.remove();
 try {
   graphGroup.attr('opacity',0)

   xAxisGroup.attr('opacity',0)
   yAxisGroup.attr('opacity',0)
} catch (error) {
console.log('lol')
}



    alldata

    .attr('fill','white')
    .attr('stroke',function(d,i){
      if (d.Year<1947){
        return 'blue'
      }
      else{
        return 'red'
      }
    })

    .attr('stroke-width',2)

    .on('mouseover',function(d,i){
      dt1
      .text(d.Year)
      .attr('x',w/4+1000)
      .attr('y',360)
      .attr('fill','white');
      let lo=d.Location;
      //console.log(lo);
      alldata.attr('opacity',0.4)
      d3.select(this)
      // .attr('r',6)
      .attr('opacity',1);


    moonMap
    .attr('stroke','white')
    .attr('stroke',function(d,i){
      //console.log(d.properties)
      let correspondingDatapoint = incomingData.find(function(datapoint){
        if(d.properties.name.includes(lo)){
        return true
      }
      })
      if (correspondingDatapoint != undefined){
        //console.log(correspondingDatapoint.population)
        return 'red'

      }
      else{
        return "white"
      }
    })
    .attr('fill',function(d,i){
      //console.log(d.properties)
      let correspondingDatapoint = incomingData.find(function(datapoint){
        if(d.properties.name.includes(lo)){
        return true
      }
      })
      if (correspondingDatapoint != undefined){
        //console.log(correspondingDatapoint.population)
        return 'red'

      }
      else{
        return "grey"
      }
    })
    .attr('fill',function(d,i){
      //console.log(d.properties)
      let correspondingDatapoint = incomingData.find(function(datapoint){
        if(d.properties.name.includes(lo)){
        return true
      }
      })
      if (correspondingDatapoint != undefined){
        //console.log(correspondingDatapoint.population)
        return 'red'

      }
      else{
        return "grey"
      }
    });


      dt2
      .text('Location: '+d.Location)
      .attr('x',w/4+1000)
      .attr('y',430)
      .attr('fill','white');

      dt3
      .text('Description: '+d.Description)
      .attr('x',w/4+1000)
      .attr('y',520)
      .attr('fill','white');

      dt4
      .text('Credit: '+d.Credit)
      .attr('x',w/4+1000)
      .attr('y',600)
      .attr('fill','white');
  let mouseInSVG = d3.mouse(viz.node())
  textElementIII
  .text(d.Year)
  .attr('x',mouseInSVG[0])
  .attr('y',mouseInSVG[1])
  .attr('fill','yellow')
  .attr('font-size','30px')
})
.on('mouseout',function(d,i){
  d3.select(this).select('circle')
  .attr('opacity',1)
  .transition()
  .attr('r',4);

})


    ;
    textElementII
        .text("[Click here to know more...]")
        .attr('x',w/2-60)
        .attr('y',h-60)
        .attr('class','t')
        .attr('fill','white')
        .on('mouseover',function(d,i){
          textElementII.
          attr('fill','#80b3ff')
        })
        .on('mouseout',function(d,i){
          textElementII.
          attr('fill','white')
        })
        .on('click',function(d,i){
          //console.log('pne')
          count+=1
        checkCount()
      });
}

else if (count == 5){


  dt1.text('');
  dt2.text('');
  dt3.text('');
  dt4.text('');
  textElementIII.text('');
  alldata.attr('fill','none')
  .attr('stroke','none');
  moonMap.attr('fill','none')
  .attr('stroke','none');
  textElement
    .transition()
    .attr('x',600)
    //.duration(500)
    .text('<<<From the chart above, we can also see that the rise in the number of TR R 277 records during the Cold War aligns with the rise of the NASA budget.>>>');

    xAxisGroup
    .transition()
    .call(xAxis);
    yAxisGroup
    .transition()
      .call(yAxis);
      graphGroup.selectAll('.line').data(incomingDataII).enter()
      .append('path')
      .attr('d',lineMake)
      .attr('fill','none')
      .transition()

      .attr('stroke','black')
      .attr('stroke-width',5)
      .attr('stroke',function(d,i){
        if (d[0].line == "NASA"){
          return '#80b3ff'
        }
        else{
          return '#ff8080'
        }
      });
      textElementII
          .text("[Click here to know more...]")
          .attr('x',w/2-60)
          .attr('y',h-60)
          .attr('class','t')
          .attr('fill','white')
          .on('mouseover',function(d,i){
            textElementII.
            attr('fill','#80b3ff')
          })
          .on('mouseout',function(d,i){
            textElementII.
            attr('fill','white')
          })
          .on('click',function(d,i){
            //console.log('pne')
            count+=1
          checkCount()
        });
        //dt5.text('');
        graphGroup.attr('opacity',1)

        xAxisGroup.attr('opacity',1)
        yAxisGroup.attr('opacity',1)

}
else if (count == 6){
  //dt5.text('');
  graphGroup.attr('opacity',0)

  xAxisGroup.attr('opacity',0)
  yAxisGroup.attr('opacity',0)
moonMap
.attr('stroke','white');
  textElement
    .transition()
    .attr('x',660)
    .duration(500)
    .text("Thank you for your time" );
    textElementII
    .text('');

}


    }


  let textElementIII = viz.append('text')
  .text('')
  .attr('x',w/2)
  .attr('y',padding/2)
  .attr('class','discription')
  ;


  let textElement = viz.append('text')
      .text("<<<This project intends to illustrate the US's devotion to the Moon landing cause and the tension of the Moon Race by visualizing the The TR R 277 reports.>>>")
      .attr('x',w/5)
      .attr('y',h-100)
      .attr('class','t')
      .attr('fill','white')
;
    let textElementII = viz.append('text')
        .text("[Click here to know more...]")
        .attr('x',w/2-60)
        .attr('y',h-60)
        .attr('class','t')
        .attr('fill','white')
        .on('mouseover',function(d,i){
          textElementII.
          attr('fill','#80b3ff')
        })
        .on('mouseout',function(d,i){
          textElementII.
          attr('fill','white')
        })
        .on('click',function(d,i){
          //console.log('pne')
          count+=1
        checkCount()
      });



      //theDiv.innerHTML='Front Page Loaded.'
})
  })
    })

  function fixJSDateObjects(dataToFix){
    // timeParser
    let timeParse = d3.timeParse("%Y");
    return dataToFix.map(function(data){
      return data.map(function(d){
        return {
          "line": d.line,
          "year": timeParse(d.year),
          "spending": d.spending
        }
      })
    });
  }
