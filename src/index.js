import React from 'react';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
d3.json("data/india-states.json", (error, indiaData)=>{
  d3.json("data/populationData.json", (error, populationData)=>{
    ReactDOM.render(
      <App indiaData={indiaData} populationData={populationData.states}/>,
      document.getElementById('root')
    );
  });
});
