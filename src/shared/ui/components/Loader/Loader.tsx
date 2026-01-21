import styles from './Loader.module.css';
import clsx from 'clsx';

interface SpinnerProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
  speed?: number;
  label?: string;
  className?: string;
}

export const Loader = ({
    size = 32,
    strokeWidth = 4,
    color = '#003E33',
    speed = 1,
    label = 'Loading...',
    className,
}: SpinnerProps) => {
    return (
        <div
            role="status"
            aria-label={label}
            className={clsx(styles.wrapper, className)}

        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 50 50"
                className={styles.spinner}
                style={{
                    animationDuration: `${1 / speed}s`,
                }}
            >
            <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                className={styles.circle}
            />
            </svg>
        </div>
    );
}
