'use client';

import { useEffect, useState } from 'react';

interface TimerProps {
  endTime: Date;
}

export default function Timer({ endTime }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const end = endTime.getTime();
      const difference = end - now;
      return Math.max(0, difference);
    };

    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);

  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Timer Display */}
      <div className="gradient-text text-[72px] font-bold leading-none tracking-tight">
        {formattedTime}
      </div>

      {/* Time Remaining Label */}
      <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--text-secondary))]">
        TIME REMAINING
      </div>

      {/* Progress Ring */}
      <div className="mt-6 relative w-[280px] h-[280px]">
        {/* Outer cyan ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="hsl(var(--accent-cyan))"
            strokeWidth="0.5"
            opacity="0.3"
          />
        </svg>

        {/* Inner purple ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="hsl(var(--accent-purple))"
            strokeWidth="0.5"
            opacity="0.3"
          />
        </svg>

        {/* Canvas background circle */}
        <div className="absolute inset-[8px] rounded-full bg-[hsl(var(--canvas-bg))] flex items-center justify-center">
          {/* Rocket Icon */}
          <img
            src="/generated/rocket-icon.png"
            alt="Rocket"
            className="w-32 h-32 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
