import React from 'react';
import '../../App.css';
import './styles.css'
import Donuts from '../DonutChart';


function SuperCard({title, series, body1, body2, body3}){
  
  return(
    <div className='card-container'>

      <div className='card-title'>
        <h3>{title}</h3>
      </div>

      <div className='content-container'>
        <div className='graph-container'>
          <Donuts series = {series}/>
        </div>
        <div className='even-container'>
          <div className='card-body'>
            <p>{body1}</p>
          </div>

          <div className='card-body'>
            <p>{body2}</p>
          </div>

          <div className='card-body'>
            <p>{body3}</p>
          </div>
        </div>
        
      </div>

      
    </div>
    
  ) 
}

export default SuperCard
