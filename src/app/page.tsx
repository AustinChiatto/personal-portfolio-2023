import Typography from '@/components/Typography/Typography';
import styles from './page.module.css';
import Link from 'next/link';
import InlineLink from '@/components/InlineLink/InlineLink';

export default function Home() {
  return (
    <>
      <header className={styles.contentGrid}>
        <div className={`${styles.contentLarge} ${styles.header}`}>
          <div className={styles.logo}>
            <Typography variant={'subheading'}>/-</Typography>
          </div>
          <div className={styles.projectIndex}>
            <Typography variant={'subheading'}>Project Index</Typography>
            <ul>
              <li>
                <InlineLink
                  path="#"
                  color={'secondary'}
                >
                  Interplanetary
                </InlineLink>
              </li>
              <li>
                <InlineLink
                  path="#"
                  color={'secondary'}
                >
                  Asteroid Run
                </InlineLink>
              </li>
              <li>
                <InlineLink
                  path="#"
                  color={'secondary'}
                >
                  Code2Image
                </InlineLink>
              </li>
              <li>
                <InlineLink
                  path="#"
                  color={'secondary'}
                >
                  Market Maestro
                </InlineLink>
              </li>
            </ul>
          </div>
          <div className={styles.contact}>
            <Typography variant={'subheading'}>hello@austinchiatto.com</Typography>
          </div>
        </div>
      </header>
      <main className={styles.contentGrid}></main>
    </>
  );
}
