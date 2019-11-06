import { format } from 'date-fns';
/* import ptLocale from 'date-fns/locale/pt'; */

const formatDate = ({ date, formato }) => {
  const utcDate = new Date(date).toUTCString();
  let formattedDate = null;
  if (date !== null && utcDate !== 'Invalid Date') {
    formattedDate = format(utcDate, formato);
  } else if (format === 'HH:mm') {
    formattedDate = '--:--';
  }
  return formattedDate;
};

export default formatDate;
