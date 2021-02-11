import { useEffect, useState } from 'react';
import { fetchFlights } from './api/fetchFlights';
import { Sort } from './modules/filters/Sort/Sort';
import { Filters } from './modules/filters/Filters/Filters';
import { CardList } from './modules/card/CardList/CardList';
import { sortByOrder } from './modules/filters/utils/sortByOrder';

const defaultFilters = {
  transfer: false,
  price: {min: 0, max: 150000},
  airlines: [
    "Air France", 
    "KLM", 
    "Аэрофлот - российские авиалинии", 
    "TURK HAVA YOLLARI A.O.", "Finnair Oyj", 
    "Air Baltic Corporation A/S", 
    "Alitalia Societa Aerea Italiana", 
    "Pegasus Hava Tasimaciligi A.S.", 
    "Brussels Airlines", 
    "LOT Polish Airlines"
  ]
}

const compareFns = {
  price: value => x => x.amount >= value.min && x.amount <= value.max,
  airlines: value => x => value.includes(x.caption),
  transfer: value => x => value ? x.info[0].stops + x.info[1].stops === 1 : x.info[0].stops + x.info[1].stops === 0,
}

function App() {
  const [data, setData] = useState(null);
  const [filters, setFilters] = useState(defaultFilters);
  const [sort, setSort] = useState('LOW_TO_HIGH');

  useEffect(() => {
    fetchFlights().then(setData);
  }, [])

  if (data === null) {
    return (
      <div className='loading'>
        <div className="lds-dual-ring"></div>
      </div>
    )
  }

  const filtered = Object.entries(compareFns)
    .reduce(
      (acc, [key, fn]) => acc.filter(fn(filters[key])),
      data,
    )
    .sort(sortByOrder(sort))

  return (
    <div className='container'>
      <div className='filters'>
        <Sort 
          value={sort}
          onChange={setSort}
        />
        <Filters 
          data={data}
          filtered={filtered}
          filters={filters}
          onChange={setFilters}
        />
      </div>
      <CardList 
        key={data.key}
        data={filtered}
      />
    </div>
  );
}

export default App;
