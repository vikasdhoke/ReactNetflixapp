import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';
import Sdata from './Sdata';


ReactDOM.render(
  <>
    <h1 className="heading_style">List of Top5 Netflix Sereies  in 2020</h1>
    
    <Card
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].link}
    />

    <Card
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}
    />

    <Card
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      link={Sdata[2].link}
    />

    <Card
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].link}
    />

    <Card
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}
    />


    {/* <Card
      imgsrc="https://www.hellokpop.com/wp-content/uploads/2020/03/Extracurricular_Pre_Jisoo_Ver_RGB_US-e1584628347973.jpg"
      title="Netflix Original Sereis 2"
      sname="Extra curricular"
      link="https://www.whats-on-netflix.com/news/extracurricular-season-2-netflix-renewal-status-release-date/"
    />

    <Card
      imgsrc="https://upload.wikimedia.org/wikipedia/en/7/7a/ST3LambertPoster.png"
      title="Netflix Original Sereis 3"
      sname="netflix stranger things"
      link="https://www.netflix.com/in/title/80057281"
    /> */}

  </>

  , document.getElementById('root')
);
