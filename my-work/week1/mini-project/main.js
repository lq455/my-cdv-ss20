window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
let data=[
    {
        "timestamp": "2020-02-19T12:42:30.720Z",
        "Let It Go (Frozen I)": 10,
        "How Far I Will Go (Moana)": 10,
        "Remember Me (Coco)": 10,
        "Reflection (Mulan 1988)": 10,
        "Try Everything (Zootopia)": 10,
        "Into The Unknown (FrozenII)": 10,
        "Hakuna Matata (Lion King)": 8,
        "Part Of Your World (Little Mermaid)": 9
    },
    {
        "timestamp": "2020-02-19T12:45:25.428Z",
        "Let It Go (Frozen I)": 10,
        "How Far I Will Go (Moana)": 10,
        "Remember Me (Coco)": 8,
        "Reflection (Mulan 1988)": 8,
        "Try Everything (Zootopia)": 8,
        "Into The Unknown (FrozenII)": 6,
        "Hakuna Matata (Lion King)": 6
    },
    {
        "timestamp": "2020-02-19T12:52:36.491Z",
        "Let It Go (Frozen I)": 6,
        "How Far I Will Go (Moana)": 1,
        "Remember Me (Coco)": 7,
        "Reflection (Mulan 1988)": 8,
        "Try Everything (Zootopia)": 7,
        "Into The Unknown (FrozenII)": 4,
        "Hakuna Matata (Lion King)": 5,
        "Part Of Your World (Little Mermaid)": 5
    },
    {
        "timestamp": "2020-02-19T12:56:43.073Z",
        "Let It Go (Frozen I)": 10,
        "How Far I Will Go (Moana)": 5,
        "Remember Me (Coco)": 10,
        "Reflection (Mulan 1988)": 5,
        "Try Everything (Zootopia)": 10,
        "Into The Unknown (FrozenII)": 10,
        "Hakuna Matata (Lion King)": 10,
        "Part Of Your World (Little Mermaid)": 5
    },
    {
        "timestamp": "2020-02-19T12:56:55.611Z",
        "Let It Go (Frozen I)": 10,
        "How Far I Will Go (Moana)": 9,
        "Remember Me (Coco)": 9,
        "Reflection (Mulan 1988)": 10,
        "Try Everything (Zootopia)": 10,
        "Into The Unknown (FrozenII)": 10,
        "Hakuna Matata (Lion King)": 9,
        "Part Of Your World (Little Mermaid)": 9
    },
    {
        "timestamp": "2020-02-20T06:53:44.170Z",
        "Let It Go (Frozen I)": 8,
        "Remember Me (Coco)": 9,
        "Reflection (Mulan 1988)": 8,
        "Try Everything (Zootopia)": 9,
        "Into The Unknown (FrozenII)": 7,
        "Part Of Your World (Little Mermaid)": 8
    },
    {
        "timestamp": "2020-02-20T06:58:23.302Z",
        "Let It Go (Frozen I)": 9,
        "How Far I Will Go (Moana)": 8,
        "Remember Me (Coco)": 6,
        "Reflection (Mulan 1988)": 5,
        "Try Everything (Zootopia)": 5,
        "Into The Unknown (FrozenII)": 6,
        "Hakuna Matata (Lion King)": 7,
        "Part Of Your World (Little Mermaid)": 6
    },
    {
        "timestamp": "2020-02-23T03:16:45.311Z",
        "Let It Go (Frozen I)": 9,
        "How Far I Will Go (Moana)": 7,
        "Remember Me (Coco)": 8,
        "Reflection (Mulan 1988)": 8,
        "Try Everything (Zootopia)": 9,
        "Into The Unknown (FrozenII)": 9,
        "Hakuna Matata (Lion King)": 7,
        "Part Of Your World (Little Mermaid)": 8
    },
    {
        "timestamp": "2020-02-23T04:36:52.694Z",
        "Let It Go (Frozen I)": 9,
        "How Far I Will Go (Moana)": 7,
        "Remember Me (Coco)": 9,
        "Reflection (Mulan 1988)": 8,
        "Try Everything (Zootopia)": 9,
        "Into The Unknown (FrozenII)": 9,
        "Hakuna Matata (Lion King)": 7,
        "Part Of Your World (Little Mermaid)": 8
    },
    {
        "timestamp": "2020-02-23T04:37:50.279Z",
        "Let It Go (Frozen I)": 9,
        "How Far I Will Go (Moana)": 8,
        "Remember Me (Coco)": 9,
        "Reflection (Mulan 1988)": 8,
        "Try Everything (Zootopia)": 8,
        "Into The Unknown (FrozenII)": 9,
        "Hakuna Matata (Lion King)": 7,
        "Part Of Your World (Little Mermaid)": 9
    }
]
function averageData(data){
  let newData = [];

  let keys = Object.keys(data[0]);

  for(let i = 0; i < keys.length; i++){

    let key = keys[i];

    let sum = 0;
    let num = 0;
    for(let j = 0; j < data.length; j++){
      let datum = data[j];
      if(key in datum){
        sum += datum[key];
        num++;
      }
    }
    let avg = sum/num;

    if(!isNaN(avg)){

      let newDataPoint = {"name": key, "average": avg, 'numMeasurements': num};
      newData.push(newDataPoint);
    }
  }

  return newData;
}

let transformedData = averageData(data)


for(let i = 0; i<transformedData.length;i++){
  let datapoint = transformedData[i]
  //console.log(datapoint.name)
  let bar = document.createElement('div');
  bar.className='bar'
  bar.style.width = datapoint.average*50+'px'
  bar.innerHTML = datapoint.name+':  '+datapoint.average.toFixed(1)

  document.getElementById('char').appendChild(bar);
}
