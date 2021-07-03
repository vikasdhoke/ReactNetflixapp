import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';
import Sdata from './Sdata';

function ncard(val){  
  return(
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  )
}

ReactDOM.render(
  <>
    <h1 className="heading_style">List of Top5 Netflix Sereies  in 2020</h1>

    {Sdata.map(ncard)}
    
  </>

  , document.getElementById('root')
);
