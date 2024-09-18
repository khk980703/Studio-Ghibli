import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>These are our most popular movies!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/mov1.jpg'
              text='My Neighbor Totoro - 16 April, 1988'
              label='Top 1'
              path='/movies'
            />
            <CardItem
              src='images/mov2.jpg'
              text='Princess Mononoke - 12 July, 1997'
              label='Top 2'
              path='/movies'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mov3.jpg'
              text='Spirited Away - 20 July, 2001'
              label='Top 3'
              path='/movies'
            />
            <CardItem
              src='images/mov4.jpg'
              text="Howl's Moving Castle - 20 November, 2004"
              label='Top 4'
              path='/movies'
            />
            <CardItem
              src='images/mov5.jpg'
              text='Laputa: Castle in the Sky - 2 August, 1986'
              label='Top 5'
              path='/movies'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
