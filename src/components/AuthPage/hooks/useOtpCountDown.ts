import React from 'react';

interface OtpCountDownProps {
  count: number;
}

export const useOtpCountDown = ({ count }: OtpCountDownProps) => {
  const [remainingTime, setRemainingTime] = React.useState(count > 0 ? count : 0);
  const timerId = setTimeout(() => setRemainingTime(remainingTime - 1), 1000);
  remainingTime === 0 && clearTimeout(timerId);
  return [remainingTime, setRemainingTime] as const;
};
