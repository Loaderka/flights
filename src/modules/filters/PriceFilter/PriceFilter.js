import s from './PriceFilter.module.css';

export function PriceFilter({min, max, onChange, value}) {
  
  function handleChange(e) {
    const { value: inputValue, name } = e.target;
    onChange({...value, [name]: +inputValue });
  }

  return (
    <div className={s.block}>
      <span className={s.title}>Цена</span>
        <div className={s.item}>
          <label>От
            <input 
              className={s.input} 
              type='number'
              name={'min'}
              placeholder={min}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={s.item}>
          <label>До
            <input 
              className={s.input} 
              type='number'
              name={'max'}
              placeholder={max}
              onChange={handleChange}
            />
          </label>
        </div>
    </div>
  )
}