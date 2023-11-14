import Link from 'next/link';
import Typography from '../Typography/Typography';
import { ReactNode } from 'react';
import styles from './inlineLink.module.css';

type InlineLinkProps = {
  path: string;
  color: string;
  children: ReactNode;
};

const InlineLink = ({ path, children, color }: InlineLinkProps) => {
  return (
    <Link
      href={path}
      className={styles.inlineLink}
    >
      <Typography color={color}>{children}</Typography>
    </Link>
  );
};

export default InlineLink;
