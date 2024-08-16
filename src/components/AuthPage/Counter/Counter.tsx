import { Button } from '../../../shared/Button/Button';
import { Typhography } from '../../../shared/Typhography/Typhography';
import { useOtpCountDown } from '../hooks/useOtpCountDown';
import styles from './Counter.module.css';

interface CounterProps {
  time: number;
  onRetry: () => Promise<number>;
}

export const Counter = ({ time, onRetry }: CounterProps) => {
  const [seconds, setSeconds] = useOtpCountDown({ count: Math.floor((time - Date.now()) / 1000) });

  const retryPost = async () => {
    const onRetryResponse = await onRetry();
    setSeconds(Math.floor(onRetryResponse / 1000));
  };

  if (!seconds)
    return (
      <div className={styles.container}>
        <Button type="button" onClick={retryPost} variant="button-transparent" children="Запросить код" />
      </div>
    );

  return (
    <div className={styles.container}>
      <Typhography
        tag="h2"
        variant="paragraph14-regular"
        children={`Запросить код повторно можно через ${seconds} секунд`}
      />
    </div>
  );
};
