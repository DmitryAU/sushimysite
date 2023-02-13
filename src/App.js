import { useState } from 'react';
import { data } from './data';
import './App.css';
import Products from './Products';

function App() {

  const [gift, setGift] = useState(0);
  const [giftPrev, setGiftPrev] = useState(data.length-1);
  const [giftNext, setGiftNext] = useState(1);

  const {id, name, about, prise, image} = data[gift];
  const {imageOne} = data[giftPrev];
  const {imageTwo} = data[giftNext];

  const [visible, setVisible] = useState();
  let elem;
	if (visible) {
		elem = <Products/>;
	}
  
  const previosGift = () => {
    setGift((gift =>{
      gift --;
      if (gift < 0) {
        return data.length-1;
      }
      return gift;
    }))
    setGiftPrev((giftPrev =>{
      giftPrev --;
      if (giftPrev < 0) {
        return data.length-1;
      }
      return giftPrev;
    }))
    setGiftNext((giftNext =>{
      giftNext --;
      if (giftNext < 0) {
        return data.length-1;
      }
      return giftNext;
    }))
  }

  const nextGift = () => {
    setGift((gift =>{
    gift ++;
      if (gift > data.length - 1) {
        gift = 0;
      }
      return gift;
    }))
    setGiftPrev((giftPrev =>{
    giftPrev ++;
      if (giftPrev > data.length - 1) {
        giftPrev = 0;
      }
      return giftPrev;
      }))
    setGiftNext((giftNext =>{
    giftNext ++;
      if (giftNext > data.length - 1) {
        giftNext = 0;
      }
      return giftNext;
      }))
  }

    return (<div>

  <div className="container main">
    <h1>ГАЛЕРЕЯ СУШИ</h1>
  </div>

      <div className="containerImage">
    
        <div className="near">
          <img className="imageNear" src={imageOne} width="400px" alt="gift"/>
          <div className='btn'>
            <button onClick={previosGift}>Назад</button>
          </div>
        </div>
      
        <div>
          <div className="container main">
            <img src={image} width="500px" alt="gift"/>
            <h1>{id}.   {name}</h1>
            <h2>{about}</h2>
            <h2>Цена {prise} руб</h2>
          </div>
        </div>
  
      <div className="near">
      <img className="imageNear" src={imageTwo} width="400px" alt="gift"/>
      <div className='btn'>
          <button onClick={nextGift}>Вперед</button>
      </div>
      </div>
      </div>

      <div className="bascetText">
      <button onClick={() => setVisible(!visible)}>Дополнения к сетам</button>
      </div>

      <div className="bascet">
        {elem}
      </div>
      </div>
    );
  }
  
  export default App;
  
