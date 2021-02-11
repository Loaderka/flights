import { useState } from 'react';
import { CardBlock } from '../CardBlock/CardBlock';

export function CardList({ data }) {
  const [stop, setStop] = useState(5);

  return (
    <div className='cardList'>
      {data.slice(0, stop).map(card => 
        <CardBlock
          key={card.key} 
          data={card}
        />
      )}
      <div className='showMoreContainer'>
        <button 
        className='showMoreBtn'
        onClick={() => setStop(prev => prev + 5)}>
          Показать еще
        </button>
      </div>
    </div>
  )
}
