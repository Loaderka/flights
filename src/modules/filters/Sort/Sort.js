import s from './Sort.module.css';

const availableSortOrders = [
  {
    type: 'LOW_TO_HIGH',
    text: '- по возрастанию цены'
  },
  {
    type: 'HIGH_TO_LOW',
    text: '- по убыванию цены'
  },
  {
    type: 'TRAVEL_TIME',
    text: '- по времени в пути'
  }
];

export function Sort({value, onChange}) {

  function handleChange(e) {
    const { checked, name } = e.target;
    if (checked) {
      onChange(name);
    }
  }

  return (
    <div className={s.block}>
      <span className={s.title}>Cортировать</span>
      {availableSortOrders.map(order => (
        <label className={s.item} key={order.type}>
          <input 
            className={s.radiobutton} 
            type='radio'
            name={order.type}
            checked={order.type === value}
            onChange={handleChange}
          />
          {order.text}
        </label>
      ))}
    </div>
  )
}