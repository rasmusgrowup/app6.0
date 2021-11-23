import css from '../styles/oversigt.module.scss'
import Link from 'next/link'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Oversigt() {
  const oversigtSection = useRef();
  const oversigtInner = useRef();

  useEffect(() => {
    gsap.set(oversigtSection.current, {
      yPercent: -100,
    })

    gsap.to(oversigtSection.current, {
      ease: 'none',
      scrollTrigger: {
        trigger: oversigtSection.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        pinSpacing: false,
      }
    })
  }, [])

  return (
    <>
      <section className={css.oversigtSection} ref={oversigtSection}>
        <div className={css.oversigtInner} ref={oversigtInner}>
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
              <Link href='/'>
                <a className={css.fourthLink}>
                  <div className={css.linkItem}>
                    <span className={css.linkNumber}>04.</span>
                    Referencer
                  </div>
                </a>
              </Link>
            </li>
            <li className={css.listItem}>
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
                    <span className={css.linkNumber}>06.</span>
                    Kontakt
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