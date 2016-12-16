import React, { Component } from 'react';
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
          54:"UT",
          55:"UP",
          56:"WB",
        };
class App extends Component {
  render() {
    const projection = d3.geoMercator()
                      .scale(1000)
                      .translate([-1100, 700]),
          path = d3.geoPath(projection),
          {india}= this.props,
          colours = ["#63FF9B", "#63FF6B", "#7BFF63", "#BBFF63", "#DBFF63", "#FBFF63","#FFD363", "#FFB363", "#FF8363", "#FF7363", "#FF6364"],
          heatmapColour = d3.scaleLinear()
                        .domain(d3.range(0, 10, 1.0 / (colours.length - 1)))
                        .range(colours),
          c = d3.scaleLinear().domain([0,45]).range([0,1]);
    return (
      <div className="App">
        <svg width={600} height={600} >
          <g>
            {topojson.feature(india, india.objects.india).features.map((d,i)=> <path fill={heatmapColour(c(i))} className={states[i]} key={i} d={path(d)}></path>)}
          </g>
        </svg>
      </div>
    );
  }
}

export default App;
