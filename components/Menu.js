import Link from 'next/link'
import Image from 'next/image'
import Arrow from '../public/arrow_white.svg'
import { useRouter } from 'next/router'
import css from '../styles/menu.module.scss'
import { gsap } from 'gsap'
import { MenuContext } from "../hooks/menuContext";
import React, { useContext, useEffect, useRef, useState } from 'react'

export default function Menu() {
  const router = useRouter();
  const container = useRef(null);
  const background = useRef(null);
  const closer = useRef(null);
  const menuItems = useRef(null);
  const socials = useRef(null);
  const q = gsap.utils.selector(menuItems);
  const { toggle, toggleFunction } = useContext(MenuContext);
  const tl = useRef();

  useEffect(() => {
    gsap.set(background.current, {xPercent: 100})
    gsap.set(container.current, {xPercent: 100})
    gsap.set(closer.current, {clipPath: 'inset(0 0 0 100%)'})
    gsap.set(socials.current, {clipPath: 'inset(0 0 0 100%)'})
    gsap.set(q('h2, ul li a'), {clipPath: 'inset(0 0 0 100%)'})

    tl.current = gsap.timeline()
    .to(container.current, {
      xPercent: 0,
      duration: 1.5,
      ease: 'Power4.easeInOut'
    })
    .to(background.current, {
      xPercent: 0,
      duration: 1.5,
      ease: 'Power4.easeInOut'
    }, '<0.1')
    .to(q('h2, ul li a'), {
      duration: 2.2,
      clipPath: 'inset(0 0 0 0%)',
      ease: 'Power4.easeInOut',
      stagger: 0.05,
    }, container.current)
    .to(socials.current, {
      duration: 1.5,
      clipPath: 'inset(0 0 0 0%)',
      ease: 'Power4.easeInOut'
    }, '<0.6')
    .to(closer.current, {
      duration: 1.5,
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
        <div className={css.menuSection} id='menuBackground' ref={background}>
        <div className={css.menuContentWrapper}>
          <div className={css.menuContent} ref={menuItems}>
            <h2 className={css.menuTitle}>Gå på opdagelse i vores</h2>
            <ul className={css.list}>
              <li className={css.listItem} id={css.firstLink}>
                <Link href='/'>
                  <a onClick={toggleFunction}>
                    <div className={router.pathname == '/' ? `${css.linkItem} ${css.activeLinkItem}` : `${css.linkItem}`}>
                      <span className={css.linkNumber}>01.</span>
                      Opgaver
                    </div>
                  </a>
                </Link>
              </li>
              <li className={css.listItem} id={css.secondLink}>
                <Link href='#ydelser'>
                  <a onClick={toggleFunction}>
                    <div className={router.pathname == '/loesninger' ? `${css.linkItem} ${css.activeLinkItem}` : `${css.linkItem}`}>
                      <span className={css.linkNumber}>02.</span>
                      Ydelser
                    </div>
                  </a>
                </Link>
              </li>
              <li className={css.listItem} id={css.thirdLink}>
                <Link href='/'>
                  <a onClick={toggleFunction}>
                    <div className={router.pathname == '/loesninger' ? `${css.linkItem} ${css.activeLinkItem}` : `${css.linkItem}`}>
                      <span className={css.linkNumber}>03.</span>
                      Produkter
                    </div>
                  </a>
                </Link>
              </li>
              <li className={css.listItem} id={css.fourthLink}>
                <Link href='/'>
                  <a onClick={toggleFunction}>
                    <div className={router.pathname == '/cases' ? `${css.linkItem} ${css.activeLinkItem}` : `${css.linkItem}`}>
                      <span className={css.linkNumber}>04.</span>
                      Referencer
                    </div>
                  </a>
                </Link>
              </li>
              <li className={css.listItem} id={css.fifthLink}>
                <Link href='/'>
                  <a onClick={toggleFunction}>
                    <div className={router.pathname == '/kontakt' ? `${css.linkItem} ${css.activeLinkItem}` : `${css.linkItem}`}>
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
        <div className={css.menuSocials} ref={socials}>
          <Link href='https://instagram.com/growupstudio.dk'>
            <a className={css.socialItem} target='_blank'>
              <span className={css.socialItemLink}>Instagram</span>
              <Image src={Arrow} />
            </a>
          </Link>
          <Link href='https://instagram.com/growupstudio.dk'>
            <a className={css.socialItem} target='_blank'>
              <span className={css.socialItemLink}>Linkedin</span>
              <Image src={Arrow} />
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
