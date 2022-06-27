import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bestcafein from './Bestcafein';

const Bestcafe = ({data}) => {
  // console.log("Bestcafe", data);
  return (
    <div className="mycafe">
      <div className="container">
        <div className="row" id="bestCafe">
          {
            data.length !== 0 ? data.map((dt) => (<Bestcafein key={"cafe_" + dt.id}data={dt} />)) : ""
          }
        </div>
      </div>
    </div>
  )
}

export default Bestcafe