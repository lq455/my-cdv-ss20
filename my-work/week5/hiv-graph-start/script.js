let w = 1200;
let h = 800;

let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lavender")
;
///////////////filter datapoint
function filterFunction(datapoint){
  if (datapoint.Code=='USA' || datapoint.Code=='CHN'){
    return true
  }
  else{
    return false
  }

}




function gotData(incomingData){
  // all the data:
  //console.log(incomingData);
  let filteredData=incomingData.filter(filterFunction);
  console.log(filteredData)

/////////make conputer understand data X scale
let yearToDateObjectConverter = d3.timeParse("%Y");
let test = yearToDateObjectConverter('2019');
console.log(test)
function mapFunction(datapoint){
datapoint.Year = yearToDateObjectConverter(datapoint.Year)
return datapoint
}
let filteredAndTimeAdjustedData = filteredData.map(mapFunction)
//what is map doing here??
console.log(filteredAndTimeAdjustedData)


//get max and min
function findTime(datapoint){
  //console.log(datapoint)
  return datapoint.Year
}
let minTime = d3.min(filteredAndTimeAdjustedData,findTime)
console.log(minTime);
let maxTime = d3.max(filteredAndTimeAdjustedData,findTime)
console.log(maxTime);

//x scale
let xPadding = 50
let xScale = d3.scaleTime().domain([minTime,maxTime]).range([xPadding,w-xPadding])

let alternativeXDomain = d3.extent(filteredAndTimeAdjustedData,findTime)//(data,function)
console.log(alternativeXDomain)////////d3.extent return max (x) min(y)

/////////////////////////y scale
let valueKey = 'Incidence - HIV/AIDS - Sex: Both - Age: All Ages (Number) (new cases of HIV)'
//console.log(filteredAndTimeAdjustedData[0][valueKey])
let hivCaseCountEvent = d3.extent(filteredAndTimeAdjustedData,getCaseCount)
let yPadding=50
let yScale = d3.scaleLinear().domain(hivCaseCountEvent).range([h-yPadding,yPadding])
function getCaseCount(datapoint){
  return datapoint[valueKey]
}


console.log(hivCaseCountEvent)

//////////////x Axis
let xAxisGroup = viz.append('g').attr('class','xaxis');
let xAxis = d3.axisBottom(xScale)
xAxisGroup.call(xAxis)

let xAxisPos = h-30;
xAxisGroup.attr('transform',"translate(0,"+xAxisPos+")")

////////////y Axis
let yAxisGroup = viz.append('g').attr('class','yaxis');
let yAxis = d3.axisLeft(yScale)
yAxisGroup.call(yAxis)
yAxisGroup.attr('transform',"translate("+xPadding+",0)")
////////visualize

  let dataGroups = viz.selectAll('.datagroup').data(filteredData).enter()
  .append('g')
  .attr('class','datagroup');

  function getColor(d,i){
    if (d.Code == 'CHN'){
      return 'red'
    }
    else{
      return 'blue'
    }
  }
  // let circles=dataGroups.append('circle')
  // .attr('cx',0)
  // .attr('cy',0)
  // .attr('r',5)
  // .attr('fill',getColor)
  //
  //
  // ;



  let shape =`    <polygon points="61.93 108.58 54.08 196.51 165.57 218.49 297.64 253.04 200.11 168.25 335.16 180.81 335.16 135.27 272.35 108.58 229.95 33.2 176.56 97.58 61.93 108.58" style="fill: #231f20"/>
    <polygon points="205.63 33.2 167.45 80.25 71.6 88.82 48.22 88.82 41.2 160.52 9.25 43.62 127.7 16.35 205.63 33.2" style="fill: #231f20"/>
    <polygon points="259.4 59.21 282 94.28 323.3 111.42 329.54 24.14 238.36 33.2 259.4 59.21" style="fill: #231f20"/>
    <path d="M62.24,244.68s330.15,49.94,205-56.11S36.78,14.1,178.89,71.68,360.71,38.17,360.71,38.17" style="fill: none;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 13px"/>`

    let customShapes=dataGroups.append('g').attr('class','customShapes').html(shape);

  customShapes.attr('transform','scale(0.15)');
  customShapes.select('path').attr('stroke',getColor);
function getCountryCode(d,i){
  return d.Code
}



// function getYearCode(d,i){
//   return d.Year.getFullYear()//.getFullYear是自带的
// }

  // let countryLabel=dataGroups.append('text')
  // .attr('x',7)
  // .attr('y',9)
  // .text(getCountryCode)
  // ;
  // let yearLabel=dataGroups.append('text')
  // .attr('x',7)
  // .attr('y',30)
  // .text(getYearCode)
  // ;


  function getTranslate(d,i){
    let x = xScale(d.Year);
    let y = yScale(d[valueKey]);
    return "translate("+x+","+y+")"
  }
  dataGroups.attr('transform',getTranslate)



}

d3.csv("new-cases-of-hiv-infection.csv").then(gotData);
