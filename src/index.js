import React from 'react';
import request from './request';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

(async function(){
  let indiaTopoJSON = await request('./data/india-states.json'),
      earthquakeZones = await request('./data/earthquakeZones.json');
  ReactDOM.render(
      <App indiaTopoJSON={indiaTopoJSON} earthquakeZones={earthquakeZones.states}/>,
        document.getElementById('root')
  );
})();
