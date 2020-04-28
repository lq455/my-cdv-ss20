let w = 2400;
let h = 1000;
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
//console.log(geoData)
//console.log(incomingData)
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
.attr('class','discription')
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
    if (count == 1){
      textElement
        .attr('x',0)
        .text("During the Cold War, there is a historic space event called the \"Space Race\". It's the competition between the two Cold War rivals, the Soviet Union and the United States, to achieve first in spaceflight capability.It was a competition that grew out of the Cold War as a means to show off military power.");
        moonMap
        .attr('fill','grey')

    }
    else if (count == 2){
  textElement
    .transition()
    .attr('x',40)

    .text('<<<Both parties had invested a huge amount of resource in the Space Race.The TR R-277,  also known as the Chronological Catalog of Reported Lunar Events released in 1968, was also the product of the “Space Race”.>>>')
    .duration(500)
    ;

    moonMap

    .attr('fill',function(d,i){
      //console.log(d.properties)
      let correspondingDatapoint = incomingData.find(function(datapoint){
        if(d.properties.name.includes(datapoint.Location)){
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
     textElement
       .transition()
       .attr('x',20)
       .duration(500)
       .text('It was at that time the single most complete report of all observed lunar anomalies, and lists of 536 pieces of records from 1500 till 1967.You may check how the coverage of the reports differs at different period of time here');
     t1=viz.append('text')
     .text('1920s')
     .attr('x',w/4)
     .attr('y',20)
     .attr('fill','white')
     .on('click',function(d,i){
       moonMap
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
     .attr('x',w/4+300)
     .attr('y',20)
     .attr('fill','white')
     .on('click',function(d,i){
       moonMap
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
     t3=viz.append('text')
     .text('1960s')
     .attr('x',w/4+900)
     .attr('y',10)
     .attr('fill','white')
     .on('click',function(d,i){
       moonMap
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
  textElement
    .transition()
    .attr('x',0)
    .duration(500)
    .text('The interesting part is that among all these 536 pieces of records that covered more than 500 years reports, more than half of them were created during the Cold War. All the red circles on the map above indicate records that were made during the Cold War. You may move your mouse on these circles to learn details about those reports.');
 t1
 .attr('fill','none');
 t2
 .attr('fill','none');
 t3
 .attr('fill','none');



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
    .on('mouseout',function(d,i){
      d3.select(this).select('circle')
      .attr('opacity',1)
      .attr('r',4)})
    .on('mouseover',function(d,i){
      dt1
      .text(d.Year)
      .attr('x',w/4+1000)
      .attr('y',360)
      .attr('fill','white');
      let lo=d.Location;
      console.log(lo);
      alldata.attr('opacity',0.6)
      d3.select(this)
      // .attr('r',6)
      .attr('opacity',1);

    moonMap
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
    .attr('x',20)
    .duration(500)
    .text('From the chart above, we can also see that the rise in the number of TR R 277 records during the Cold War aligns with the rise of the NASA budget.');

}
else if (count == 6){
moonMap
.attr('stroke','white');
  textElement
    .transition()
    .attr('x',60)
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
      .on('click',function(d,i){
        //console.log('pne')
        count+=1
      checkCount()
    });
    let textElementII = viz.append('text')
        .text("[Click here to know more...]")
        .attr('x',w/2-60)
        .attr('y',h-60)
        .attr('class','t')
        .attr('fill','white')
        .on('mouseover',function(d,i){
          textElementII.
          attr('fill','blue')
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
