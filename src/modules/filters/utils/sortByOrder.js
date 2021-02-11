export const SortOrder = {
  LOW_TO_HIGH: 'LOW_TO_HIGH',
  HIGH_TO_LOW: 'HIGH_TO_LOW',
  TRAVEL_TIME: 'TRAVEL_TIME',
};

export const sortByOrder = (s = SortOrder.LOW_TO_HIGH) => {
  switch (s) {
    case SortOrder.LOW_TO_HIGH:
      return (a, b) => a.amount - b.amount;
    case SortOrder.HIGH_TO_LOW:
      return (a, b) => b.amount - a.amount;
    case SortOrder.TRAVEL_TIME:
      return (a, b) => (b.info[0].travelDuration + b.info[1].travelDuration) - (a.info[0].travelDuration + a.info[1].travelDuration);
  }
}