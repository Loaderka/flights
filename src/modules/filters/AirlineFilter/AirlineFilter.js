import s from './AirlineFilter.module.css';

export function AirlineFilter({availableAirlines, filteredAirlines, onChange, value}) {

  function handleChange(e) {
    const { checked, name } = e.target;
    if (checked) {
      onChange([...value, name]);
    } else {
      onChange(value.filter((airline) => airline !== name));
    }
  }
  
  return (
    <div className={s.block}>
      <span className={s.title}>Авиакомпании</span>
        {availableAirlines.map(airline => 
          <div className={s.item} key={airline}>
            <label>
              <input 
                className={s.checkbox} 
                type='checkbox'
                name={airline}
                checked={value.includes(airline)}
                disabled={!filteredAirlines.includes(airline)}
                onChange={handleChange}
              />
              {airline}
            </label>
          </div>
        )}
    </div>
  )
}