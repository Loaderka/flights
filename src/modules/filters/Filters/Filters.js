import React from 'react';
import { TransferFilter } from '../TransferFilter/TransferFilter';
import { PriceFilter } from '../PriceFilter/PriceFilter';
import { AirlineFilter } from '../AirlineFilter/AirlineFilter';

export function Filters({data, filtered, filters, onChange}) {

  const availableAirlines = Array.from(new Set(data.map(t => t.caption)));
  const filteredAirlines = Array.from(new Set(filtered.map(t => t.caption)));

  const { transfer, price, airlines } = filters;

  function setTransfer(value) {
    onChange({
      ...filters,
      transfer: value,
    })
  }

  function setPrice(value) {
    onChange({
      ...filters,
      price: value,
    })
  }

  function setAirlines(value) {
    onChange({
      ...filters,
      airlines: value,
    })
  }

  return (
    <React.Fragment>
      <TransferFilter 
        onChange={setTransfer}
        value={transfer}
      />
      <PriceFilter
        min={0}
        max={150000}
        onChange={setPrice}
        value={price}
      />
      <AirlineFilter 
        availableAirlines={availableAirlines}
        filteredAirlines={filteredAirlines}
        onChange={setAirlines}
        value={airlines}
      />
    </React.Fragment>
  )
}