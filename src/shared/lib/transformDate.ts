export const transformDate = (date: string, days: string): string => {
  const dateOfDeparture = new Date(date);
  dateOfDeparture.setDate(dateOfDeparture.getDate() + Number(days));
  const newDate = dateOfDeparture.toISOString().slice(0, 10);
  return newDate;
};
