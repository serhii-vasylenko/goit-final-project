export const convertMinutesToHours = minutes => {
  if (minutes < 0) {
    return `0 min`;
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${remainingMinutes} min`;
  }

  if (remainingMinutes === 0) {
    return hours > 1 ? `${hours} hours` : `${hours} hour`;
  }

  return `${hours} h ${remainingMinutes} min`;
};
