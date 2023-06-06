import React from 'react';
import './Objetives.css'

export default function Objetives() {
  return (
    <div className='macrosCircles'>
        <div className='kcalCircle'> 
        <h3 className='subtitle'>2000</h3>
        <h6 className='subtitle'>kilo calorias</h6>
        </div>
        <div className='protCircle'> 
        <h3 className='subtitle'>20%</h3>
        <h6 className='subtitle'>kilo calorias</h6>
        </div>
        <div className='carbCircle'> 
        <h3 className='subtitle'>50%</h3>
        <h6 className='subtitle'>kilo calorias</h6>
        </div>
        <div className='fatCircle'> 
        <h3 className='subtitle'>%30</h3>
        <h6 className='subtitle'>kilo calorias</h6>
        </div>
    </div>

  );
}