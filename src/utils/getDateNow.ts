export const getDateNow = (time: number): string => {
  const monthArray = [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May.',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.',
  ];
  const date = new Date(time * 1000);
  const day = date.getDate();
  const month = monthArray[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return [
    `${month} ${day}, ${year} ${hours < 10 ? '0' + hours.toString() : hours}:${
      minutes < 10 ? '0' + minutes.toString() : minutes
    }:${seconds < 10 ? '0' + seconds.toString() : seconds}`,
  ].join('');
};
