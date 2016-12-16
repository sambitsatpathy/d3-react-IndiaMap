import React,{PropTypes} from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import './App.css';
const states={
          18:"JK",
          19:"JK",
          20:"JK",
          21:"JK",
          22:"AN",
          23:"AP",
          24:"AR",
          25:"AS",
          26:"BR",
          31:"DL",
          32:"GA",
          33:"GJ",
          34:"HR",
          35:"HP",
          36:"JK",
          28:"JH",
          37:"CT",
          38:"KA",
          39:"KL",
          41:"MP",
          42:"MH",
          43:"MN",
          44:"ML",
          45:"MZ",
          46:"NL",
          47:"OR",
          49:"PB",
          50:"RJ",
          51:"SK",
          52:"TN",
          53:"TR",
          54:"UP",
          55:"UT",
          56:"WB",
        };
const App = ({indiaData,populationData})=>{
    const projection = d3.geoMercator()
                      .scale(1000)
                      .translate([-1100, 700]),
          path = d3.geoPath(projection),
          popData=Object.keys(populationData).map((d)=>populationData[d]),
          colours = d3.scaleLinear()
                    .domain([Math.min(...popData),Math.max(...popData)])
                    .range(["#BBFF63","#FFB363"]);
    return (
      <div className="App">
        <svg width={600} height={600} >
          <g>
            {
              topojson.feature(indiaData, indiaData.objects.india)
              .features
              .map((d,i)=> <path fill={populationData[states[i]] ? colours(populationData[states[i]]) : "silver" } className={states[i]} key={i} d={path(d)}></path>)
            }
          </g>
        </svg>
      </div>
    );
}
App.propTypes={
  indiaData:PropTypes.object,
  populationData:PropTypes.object,
}
export default App;
