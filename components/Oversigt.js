import css from '../styles/oversigt.module.scss'
import Link from 'next/link'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Oversigt() {
  const section = useRef();
  const inner = useRef();

  useEffect(() => {
    gsap.set(inner.current, { y: -300, willChange: 'transform' })
    const animation = gsap.to(inner.current, {
      yPercent: 0,
      y: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: section.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
      }
    })

    return () => {
      animation.scrollTrigger.refresh();
      animation.scrollTrigger.kill();
    }
  }, [])

  return (
    <>
      <section className={css.oversigtSection} ref={section}>
        <div className={css.oversigtInner} ref={inner}>
          <h2 className={css.oversigtTitle}>Få et indblik i vores</h2>
          <ul className={css.list}>
            <li className={css.listItem}>
              <Link href='/'>
                <a className={css.firstLink}>
                  <div className={css.linkItem}>
                    <span className={css.linkNumber}>01.</span>
                    Ydelser
                  </div>
                </a>
              </Link>
            </li>
            <li className={css.listItem}>
              <Link href='/'>
                <a className={css.secondLink}>
                  <div className={css.linkItem}>
                    <span className={css.linkNumber}>02.</span>
                    Løsninger
                  </div>
                </a>
              </Link>
            </li>
            <li className={css.listItem}>
              <Link href='/'>
                <a className={css.thirdLink}>
                  <div className={css.linkItem}>
                    <span className={css.linkNumber}>03.</span>
                    Cases
                  </div>
                </a>
              </Link>
            </li>
            <li className={css.listItem}>
              <Link href='#referencer'>
                <a className={css.fourthLink}>
                  <div className={css.linkItem}>
                    <span className={css.linkNumber}>04.</span>
                    Referencer
                  </div>
                </a>
              </Link>
            </li>
            <li className={css.listItem} style={{ display: 'none' }}>
              <Link href='/'>
                <a className={css.fifthLink}>
                  <div className={css.linkItem}>
                    <span className={css.linkNumber}>05.</span>
                    Historie
                  </div>
                </a>
              </Link>
            </li>
            <li className={css.listItem}>
              <Link href='/'>
                <a className={css.sixthLink}>
                  <div className={css.linkItem}>
                    <span className={css.linkNumber}>eller</span>
                    Kontakt os
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
