import { useEffect, useState } from 'react';

export default function LocalTime() {
  const [time, setTime] = useState('--:--');

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
      });
      setTime(`${t} NPT`);
    };

    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return <span className="meta-v">{time}</span>;
}
