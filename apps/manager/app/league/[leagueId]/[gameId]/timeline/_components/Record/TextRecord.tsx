import { clsx } from 'clsx';
import { ComponentProps, ReactNode } from 'react';

import * as styles from './styles.css';

type TextRecordProps = ComponentProps<'li'> & {
  showDividerLine?: boolean;
  className?: string;
  children: ReactNode;
};

const TextRecord = ({
  showDividerLine = false,
  className,
  children,
  ...props
}: TextRecordProps) => {
  return (
    <li
      className={clsx(styles.textRecordContainer, className, {
        [styles.textRecordCenter]: !showDividerLine,
      })}
      {...props}
    >
      {showDividerLine && <div className={styles.textRecordDivider} />}
      <p className={styles.textRecordText}>{children}</p>
      {showDividerLine && <div className={styles.textRecordDivider} />}
    </li>
  );
};

export default TextRecord;
