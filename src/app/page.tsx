'use client';

import React, { useEffect, useRef } from 'react';
import styles from './page.module.css';
import Header from '@/components/Header/Header';

export default function Home() {
  const scaleUpIds = [11, 12, 13];
  const scaleUpRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  scaleUpRefs.current = Array.from(
    { length: 15 },
    (_, i) => scaleUpRefs.current[i] ?? React.createRef()
  );

  useEffect(() => {
    const container = containerRef.current;
    const firstElement = scaleUpRefs.current[scaleUpIds[0]].current;
    const lastElement = scaleUpRefs.current[scaleUpIds[scaleUpIds.length - 1]].current;

    if (firstElement && lastElement && container) {
      const containerRect = container.getBoundingClientRect();
      const firstElementRect = firstElement.getBoundingClientRect();
      const lastElementRect = lastElement.getBoundingClientRect();

      // Check if the elements are in viewport
      const notInViewPortLeft = firstElementRect.left < containerRect.left;
      const notInViewPortRight = lastElementRect.right > containerRect.right;

      if (notInViewPortRight || notInViewPortLeft) {
        const scrollPosition = notInViewPortLeft
          ? firstElementRect.left - containerRect.left
          : lastElementRect.right + 16 - containerRect.right;

        container.scrollLeft += scrollPosition;
      }
    }
  }, [scaleUpRefs, scaleUpIds]);

  return (
    <>
      <Header />
      <main className={'contentGrid'}>
        <div
          className={`contentLarge ${styles.grid}`}
          ref={containerRef}
        >
          {scaleUpRefs.current.map((ref, i) => (
            <div
              ref={ref}
              className={`${styles.box} ${scaleUpIds.includes(i) ? styles.scaleUp : ''}`}
              key={i}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
