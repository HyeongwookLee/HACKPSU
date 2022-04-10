import React from 'react';
import './CardView.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
          <ul className='cards__items'>
            <CardItem
              series = {[92, 8]}
              text='Music 008'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              series = {[92, 8]}
              text='Music 008'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
    </div>
  );
}

export default Cards;
