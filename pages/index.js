import Hero from '../components/Hero'
import Oversigt from '../components/Oversigt'
import Logo from '../components/Logo'
import css from '../styles/intro.module.scss'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';

export default function Home() {
  const [animateIntro, setAnimateIntro] = useState(true);
  const introWrapper = useRef(null);
  const tl = gsap.timeline({ defaults: { ease: 'Power3.easeInOut' }});

  useEffect (() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      setAnimateIntro(true);
      window.sessionStorage.setItem("firstLoadDone", 1)

      gsap.set(introWrapper.current, {
        clipPath: 'inset(0 0 0% 0)',
      })

      tl
        .to(introWrapper.current, {
        duration: 2,
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
          Please, never grow up
        </div>
      </div>
      <Hero />
      <Oversigt />
    </>
  )
}
