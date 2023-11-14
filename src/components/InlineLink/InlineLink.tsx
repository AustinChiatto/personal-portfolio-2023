import Link from 'next/link';
import React from 'react';
import styles from './inlineLink.module.css';

type LinkInfo = {
  href: string;
  label: string;
  stack?: string;
};

type InlineLinkProps = {
  link: LinkInfo;
  isProjectLink?: boolean;
  children: (isHovered: boolean) => JSX.Element;
};

const InlineLink: React.FC<InlineLinkProps> = ({ link, isProjectLink, children }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={link.href}
        style={{ textDecoration: 'none' }}
        className={isProjectLink ? styles.projectLink : undefined}
      >
        {children(isHovered)}
      </Link>
    </li>
  );
};

export default InlineLink;
