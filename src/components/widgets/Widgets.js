import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) => {
    return (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
    )
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("The Four Pillars Of A Fulfilling Career", "by Darius Foroux")}
      {newsArticle("Instead Of Trying To Find Your Passion, Let Your Passion Find You", "by Darius Foroux")}
      {newsArticle("How to stop being so busy and get more done", "by Julie Compton")}
    </div>
  )
}

export default Widgets
