const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December',
];

/**
 *
 * @description format JS date into `may 2020` format, returns `present` if no date provided
 */
const formatDate = (date?: Date | number):string => {
  if (!date) return 'present';
  const parsedDate = new Date(date);
  const month = monthNames[parsedDate.getMonth()];
  const year = parsedDate.getFullYear();
  return `${month} ${year}`;
};

export default formatDate;
