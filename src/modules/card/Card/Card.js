
import s from './Card.module.css'
import { getTimeFromMins } from '../../../utils';

export function Card({ data }) {
  return (
    <div className={s.card}>
      <div className={s.direction}>
        <div className={s.departure}>
          {data.departureCity !== undefined
          && data.departureCity.caption
          },&nbsp;
          {data.departureAirport !== undefined
          && data.departureAirport.caption
          }
          <span className={s.airportId}>({data.departureAirport.uid})</span>
        </div>
        <div className={s.arrival}>
          {/* {data.arrivalCity !== undefined
          && data.arrivalCity.caption
          },&nbsp; */}
          {data.arrivalAirport !== undefined
          && data.arrivalAirport.caption
          }
          <span className={s.airportId}>({data.arrivalAirport.uid})</span>
        </div>
      </div>
      <div className={s.timing}>
        <div className={s.time}> 
          <div>
            {data.departureDate.slice(-8,-3)}
            <span className={s.date}>{data.departureDate.slice(8,10)} августа</span>
          </div>
          <div className={s.duration}>{getTimeFromMins(data.travelDuration)}</div>
          <div>
            <span className={s.date}>{data.arrivalDate.slice(8,10)} августа</span>
            {data.arrivalDate.slice(-8,-3)}
          </div>
        </div>
        {data.stops === 1 
        ? <div className={s.transfers}>
            1 пересадка
          </div>
        : <div className={s.noTransfers}></div>
        }
      </div>
      <div className={s.airline}>
        <span>Рейс выполняет: {data.airline.caption}</span>
      </div>
    </div>
  )
}