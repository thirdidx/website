'use client';

import { useEffect, useState } from 'react';

export default function TimeDisplay() {
  const [time, setTime] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const estTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
      const hours = estTime.getHours().toString().padStart(2, '0');
      const minutes = estTime.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    // Update immediately
    updateTime();

    // Update every minute
    const interval = setInterval(updateTime, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="justify-end relative flex w-28 cursor-default items-center text-center text-xs leading-none lowercase md:text-right -translate-y-px"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`transition-all duration-300 ease-in-out ${isHovered ? 'translate-y-1 opacity-0' : 'translate-y-0 opacity-100'}`}
      >
        {time}
      </div>
      <div
        className={`absolute inset-0 transition-all duration-300 ease-in-out ${isHovered ? 'translate-y-px opacity-100' : '-translate-y-1 opacity-0'}`}
      >
        America/New_York
      </div>
    </div>
  );
}
