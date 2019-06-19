const formatters = {};

formatters.boolToYesNo = boolVal => ((!!boolVal === true) ? 'Yes' : 'No');
formatters.boolToYes = boolVal => ((!!boolVal === true) ? 'Yes' : '');

formatters.number = (num, decimals) => {
  if (typeof decimals !== 'number') {
    decimals = 2;
  }

  return (num || 0).toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

formatters.currency = (amount) => {
  const sign = amount < 0 ? '-' : '';
  const abs = Math.abs(amount);

  return `${sign}$${formatters.number(abs)}`;
};

formatters.datetime = (isoString) => {
  const datetime = new Date(isoString);
  const hours = datetime.getHours();
  let minutes = datetime.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${hours}:${minutes}`;
  return `${datetime.getMonth() + 1}/${datetime.getDate()}/${datetime.getFullYear()} ${strTime}`;
};

export default formatters;
