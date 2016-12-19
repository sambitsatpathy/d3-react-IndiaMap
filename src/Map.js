import React,{PropTypes} from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
const states={
          18:"JK",
          19:"JK",
          20:"JK",
          21:"JK",
          22:"AN",
          // 12:"AP", //Contested with China ?
          23:"AP",
          24:"AR",
          25:"AS",
          26:"BR",

          27:"HP",
          28:"JH",
          29:"MH",// Daman N Diu
          30:"GJ",

          31:"DL",
          32:"GA",
          33:"GJ",
          34:"HR",
          35:"HP",
          36:"JK",
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
          48:"TN", // Erstwhile French colonies
          49:"PB",
          50:"RJ",
          51:"SK",
          52:"TN",
          53:"TR",
          54:"UP",
          55:"UT",
          56:"WB",
        };
const Map = ({indiaTopoJSON,earthquakeZones,currentQuakes})=>{
    const projection = d3.geoMercator()
                      .scale(1000)
                      .translate([-1100, 700]),
          path = d3.geoPath(projection);
    return (
      <div className="App">
        <svg width={800} height={600} >
          <g>
            {
              topojson.feature(indiaTopoJSON, indiaTopoJSON.objects.india)
              .features
              .map((d,i)=> <path className={earthquakeZones[states[i]] ? "Z"+earthquakeZones[states[i]] : "hidden" } key={i} d={path(d)}></path>)
            }
          </g>
          <g>
          {
            currentQuakes.map((d,i)=><g key={i} transform={"translate("+projection([d.long,d.lat])+")"}><circle r="1" className={d.magnitude}/><text x="5" >{d.city}</text></g>)
          }
          </g>
        </svg>
        <fieldset className="legendContainer">
          <legend>Earthquake Zones in India</legend>
          <div className="legend"><div className="Z1"></div><div>Zone 1</div></div>
          <div className="legend"><div className="Z2"></div><div>Zone 2</div></div>
          <div className="legend"><div className="Z3"></div><div>Zone 3</div></div>
          <div className="legend"><div className="Z4"></div><div>Zone 4</div></div>
          <div className="legend"><div className="Z5"></div><div>Zone 5</div></div>
        </fieldset>
      </div>
    );
}
Map.propTypes={
  indiaTopoJSON:PropTypes.object,
  earthquakeZones:PropTypes.object,
}
export default Map;
