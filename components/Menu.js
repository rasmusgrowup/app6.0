import Link from 'next/link'
import css from '../styles/menu.module.scss'
import { gsap } from 'gsap'
import { MenuContext } from "../hooks/menuContext";
import React, { useContext, useEffect, useRef, useState } from 'react'

export default function Menu() {
  const container = useRef(null);
  const background = useRef(null);
  const closer = useRef(null);
  const menuItems = useRef(null);
  const q = gsap.utils.selector(menuItems);
  const { toggle, toggleFunction} = useContext(MenuContext);
  const tl = useRef();

  useEffect(() => {
    gsap.set(background.current, {xPercent: 100})
    gsap.set(container.current, {xPercent: 100})
    gsap.set(closer.current, {clipPath: 'inset(0 0 0 100%)'})
    gsap.set(q('h2, ul li a'), {clipPath: 'inset(0 0 0 100%)'})

    tl.current = gsap.timeline()
    .to(container.current, {
      xPercent: 0,
      duration: 1.8,
      ease: 'Power4.easeInOut'
    })
    .to(background.current, {
      xPercent: 0,
      duration: 1.8,
      ease: 'Power4.easeInOut'
    }, '<0.1')
    .to(q('h2, ul li a'), {
      duration: 2.4,
      clipPath: 'inset(0 0 0 0%)',
      ease: 'Power4.easeInOut',
      stagger: 0.05,
    }, container.current)
    .to(closer.current, {
      duration: 1.8,
      clipPath: 'inset(0 0 0 0%)',
      ease: 'Power4.easeInOut'
    }, '<0.6');
  }, [])

  useEffect(() => {
    if (toggle === true) {
      tl.current.play()
    } else {
      tl.current.reverse()
    }
  }, [toggle])

  return (
    <>
      <div className={css.menuContainer} id='menuContainer'  ref={container}>
        <div className={css.menuCloser} onClick={toggleFunction} ref={closer}>
          <span></span>
          <span></span>
        </div>
        <div className={css.menuBackground} id='menuBackground' ref={background}>
        <div className={css.menuContentWrapper}>
          <div className={css.menuContent} ref={menuItems}>
            <h2 className={css.menuTitle}>Få et indblik i vores</h2>
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
        </div>
        </div>
      </div>
    </>
  )
}
