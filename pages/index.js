import Hero from '../components/Hero'
import Os from '../components/Os'
import Products from '../components/Products'
import References from '../components/References'
import Logo from '../components/Logo'
import css from '../styles/intro.module.scss'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';

export default function Home() {
  const [animateIntro, setAnimateIntro] = useState(false);
  const introWrapper = useRef(null);
  const heroRef = useRef(null);
  const tl = gsap.timeline({ defaults: { ease: 'Power4.easeInOut' }});

  useEffect (() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      setAnimateIntro(true);
      window.sessionStorage.setItem("firstLoadDone", 1)

      gsap.set(introWrapper.current, {
        clipPath: 'inset(0 0 0% 0)',
      })
      gsap.set(heroRef.current, { opacity: 0 })

      tl
        .to(introWrapper.current, {
        duration: 3,
        delay: 2,
        clipPath: 'inset(0 0 100% 0)',
        })
        .set(introWrapper.current, {
          display: 'none',
        });
    } else {
      setAnimateIntro(false);
    }
  }, [])

  return (
    <>
      <div className={`${css.introWrapper} ${animateIntro ? '' : css.introAnimationPlayed}`} ref={introWrapper}>
        <div className={css.introLogo}>
          <Logo />
        </div>
      </div>
      <Hero />
      <Products />
      <References />
    </>
  )
}
