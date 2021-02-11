import data from '../mock/flights.json';

export function fetchFlights(){

  const flights = data.result.flights.map(flight => ({
    key: flight.flightToken.slice(-10),
    caption: flight.flight.carrier.caption,
    amount: flight.flight.price.total.amount,
    info: flight.flight.legs.map(leg => {
      const segment = leg.segments[0].starting
        ? leg.segments[0]
        : leg.segments[1];
        return {
          airline: segment.airline,
          arrivalAirport: segment.arrivalAirport,
          arrivalCity: segment.arrivalCity,
          arrivalDate: segment.arrivalDate,
          departureAirport: segment.departureAirport,
          departureCity: segment.departureCity,
          departureDate: segment.departureDate,
          stops: segment.stops,
          travelDuration: segment.travelDuration
        }
    })
  }))
  return Promise.resolve(flights);
};