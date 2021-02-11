import { Card } from '../Card/Card';

import s from './CardBlock.module.css';

export function CardBlock({data}) {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.logo}>
          {data.caption}
        </div>
        <div className={s.priceBlock}>
          <span className={s.price}>{data.amount} ₽</span>
          <span className={s.text}>Стоимость для одного взрослого пассажира</span>
        </div>
      </header>
      {data.info.map(card => 
        <Card data={card}/>
        )}
      <footer>
        <button className={s.btnChoose}>Выбрать</button>
      </footer>
    </div>
  )
}