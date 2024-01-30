import { useEffect, useState } from 'react';

export const useTimeAgo = (dateCreated: string) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const changeDate = () => {
      const currentDate = new Date();
      const prevDate = new Date(dateCreated);
      const differentDate = currentDate.getTime() - prevDate.getTime();

      const seconds = Math.floor(differentDate / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const month = Math.floor(days / 30);
      const year = Math.floor(month / 12);

      if (year > 0) {
        setTimeAgo(`${year}y ago`);
      } else if (month > 0) {
        setTimeAgo(`${month}m ago`);
      } else if (days > 0) {
        setTimeAgo(`${days}d ago`);
      } else if (hours > 0) {
        setTimeAgo(`${hours}h ago`);
      } else if (minutes > 0) {
        setTimeAgo(`${minutes}min ago`);
      } else {
        setTimeAgo(`${seconds}sec ago`);
      }
    };

    const timer = setInterval(changeDate, 600);

    return () => clearInterval(timer);
  }, [dateCreated]);

  return { timeAgo };
};
