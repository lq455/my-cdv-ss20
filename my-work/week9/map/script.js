let w = 1200;
let h = 800;
let padding = 90
var theDiv = document.getElementById("wa");

// SVG
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
    .style("background-color", "black")
;
d3.json("moon.geojson").then(function(geoData){
  d3.csv('moon.csv').then(function(incomingData){
//console.log(geoData)
//console.log(incomingData)

    let projection = d3.geoAzimuthalEqualArea()
      .translate([w/2,h/2])
      .fitExtent([[0,0],[w-padding,h-padding]],geoData)

    let pathMaker = d3.geoPath(projection);
    moonMap=viz.selectAll(".map").data(geoData.features).enter()

    .append("path")
      .attr("class", "map")
      .attr("d", pathMaker)
      .attr('stroke','white')
      .attr('fill','grey')
      ;
      function usaLine(d,i){
        moonMap.attr('fill',function(d,i){
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
      }
      theDiv.innerHTML='Front Page Loaded.'
      function coldWar(d,i){
        moonMap.attr('fill',function(d,i){
          if (d.properties.feature_type == 'Satellite Feature'){
            return '#4d88ff'
          }
          else if (d.properties.feature_type == 'Crater, craters'){
            return '#000000'
          }
          else if (d.properties.feature_type == 'Mons, montes'){
            return '#004d4d'
          }
          else if (d.properties.feature_type == 'Promontorium, promontoria'){
            return '#0099cc'
          }
          else if (d.properties.feature_type == 'Mare, maria'){
            return '#e0e0eb'
          }
          else if (d.properties.feature_type == 'Rima, rimae'){
            return '#ffc266'
          }
          else{
            return 'grey'
          }
        })


      }

      // function frontPage(){
      //   moonMap.attr('fill','grey')
      // }

      document.getElementById("all").addEventListener("click", usaLine);

      document.getElementById("coldwar").addEventListener("click", coldWar);
      // document.getElementById("all").addEventListener("click", frontPage);
})
  })
