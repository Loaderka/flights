import s from './TransferFilter.module.css';

export function TransferFilter({onChange, value}) {

  function handleChange(e) {
    if (e.target.checked) {
      onChange(!value);
    }
  }

  return (
    <div className={s.block}>
      <span className={s.title}>Фильтровать</span>
        <label className={s.item}>
          <input 
            className={s.checkbox} 
            type='radio'
            name={'false'}
            checked={value === false}
            onChange={handleChange}
          />
          - без пересадок
        </label>
        <label className={s.item}>
          <input 
            className={s.checkbox} 
            type='radio'
            name={'true'}
            checked={value === true}
            onChange={handleChange}
          />
        - 1 пересадка
        </label>
    </div>
  )
}