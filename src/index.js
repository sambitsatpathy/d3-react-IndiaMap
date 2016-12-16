import React from 'react';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function renderMap(){
  let randomPopData={};
  Object.keys(populationData.states).forEach((d)=>{
    if(Math.floor(Math.random() * 2) === 0){
      randomPopData[d]=populationData.states[d];
    }
  });
  ReactDOM.render(
    <App indiaData={indiaData} populationData={randomPopData}/>,
    document.getElementById('root')
  );
}

d3.json("data/india-states.json", (error, indiaData)=>{
  d3.json("data/populationData.json", (error, populationData)=>{
    renderMap();
    setInterval(()=>{
      renderMap()
    },2000);
  });
});
