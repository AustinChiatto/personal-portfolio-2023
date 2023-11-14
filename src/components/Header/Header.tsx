'use client';

import Typography from '@/components/Typography/Typography';
import styles from './header.module.css';
import Link from 'next/link';
import React from 'react';
import InlineLink from '../InlineLink/InlineLink';

const projectIndex = [
  { label: 'Interplanetary', stack: 'Full Stack', href: '#' },
  { label: 'Asteroid Run', stack: 'Frontend', href: '#' },
  { label: 'code2Image', stack: 'Frontend', href: '#' },
  { label: 'Market Maestro', stack: 'Frontend', href: '#' }
];

const contactLinks = [
  { label: 'About Me', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'CodePen', href: '#' }
];

const Header = () => {
  return (
    <header className={'contentGrid'}>
      <div className={`contentLarge ${styles.header}`}>
        <div className={styles.logo}>
          <Link href="#">
            <Typography variant={'subheading'}>/-</Typography>
          </Link>
        </div>
        <div className={styles.projectIndex}>
          <Typography variant={'subheading'}>Project Index</Typography>
          <ul className={styles.navList}>
            {projectIndex.map((link, index) => (
              <InlineLink
                key={index}
                link={link}
                isProjectLink
              >
                {(isHovered) => (
                  <>
                    <Typography color={isHovered ? 'primary' : 'secondary'}>
                      {link.label}
                    </Typography>
                    {link.stack && (
                      <Typography color={isHovered ? 'primary' : 'secondary'}>
                        {link.stack}
                      </Typography>
                    )}
                  </>
                )}
              </InlineLink>
            ))}
          </ul>
        </div>
        <div className={styles.contact}>
          <Link href="#">
            <Typography variant={'subheading'}>hello@austinchiatto.com</Typography>
          </Link>
          <ul className={styles.navList}>
            {contactLinks.map((link, index) => (
              <InlineLink
                key={index}
                link={link}
              >
                {(isHovered) => (
                  <Typography color={isHovered ? 'primary' : 'secondary'}>{link.label}</Typography>
                )}
              </InlineLink>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
