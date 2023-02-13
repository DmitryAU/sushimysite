import { useState } from 'react';
import { dataOne } from './data';

function Products() {

    const [gifts, setGifts] = useState(dataOne);

    const removeGift = (id) => {
        let newGifts = gifts.filter(gift => gift.id !== id);
        setGifts(newGifts);
    }

    return(

      <div>
<div className="containerIm">

        {gifts.map((element => {
            const {id, name, image, prise} = element;
            
            return(<div className='text' key={id}>
            <div>
                <h2>{name} - {prise} руб</h2>
            </div>
        
            <div className="containerIm">
                <img src={image} width="300px" alt="gift"/>
            </div>
        
            <div className='btn'>
                <button onClick={() => removeGift(id)}>Удалить</button>
            </div>
        
            </div>
            )
        }))}
</div>

          <div className='btn'>
                <button onClick={() => setGifts([])}>Удалить все</button>
          </div>

</div> 
    )

};

  export default Products;

