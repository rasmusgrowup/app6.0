import Link from 'next/link'
import Image from 'next/image'
import css from '../styles/cases.module.scss'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Mockup from '../public/stoj_web_mockup.png'
import StojMobile from '../public/stoj_screen_mobile.jpg'
import StojDesktop from '../public/stoj_screen_desktop.jpg'
import OrganicMobile from '../public/organic_screen_mobile.jpg'
import OrganicDesktop from '../public/organic_screen_desktop.jpg'
import TwelveinchMobile from '../public/twelveinch_screen_mobile.jpg'
import TwelveinchDesktop from '../public/twelveinch_screen_desktop.jpg'

export default function CasesShort() {
  const section = useRef();
  const inner = useRef();
  const upper = useRef();
  const cases = useRef();

  useEffect(() => {
  gsap.set(inner.current, { y: -300, willChange: 'transform' })
  const animation = gsap.to(inner.current, {
      yPercent: 0,
      y: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: section.current,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      }
    })

    return () => {
      animation.scrollTrigger.refresh();
      animation.scrollTrigger.kill();
    }
  }, [])


  return(
    <>
    <section className={css.casesShortSection} ref={section} id='ydelser'>
      <div ref={inner}>
        <div className={css.casesUpper} ref={upper}>
          <span className={css.shortNumber}>03.</span>
          <h2>Vi tager vores kunders ønsker og idéer, og fører dem ud i livet. Gå fra tom skal til <span className='ivyPrestoItalic'>færdigt</span> produkt, med vores løsninger.</h2>
        </div>
        <div className={css.textImage}>
          <div className={css.imageContainer}>
            <Image src={Mockup} layout='responsive' />
          </div>
          <p className={css.text}>
          <strong>Vi tager den tekniske opsætning og kodning af hjemmesiderne meget seriøst</strong>
          Vi tager den tekniske opsætning og kodning af hjemmesiderne meget seriøst, og (synes vi selv) leverer fremragende produkter i den henseende— men det er god historiefortælling, der sælger jeres varer.<br /><br />Lad os hjælpe jer med at finde de fede budskaber, der skaber relevans og tryghed hos jeres potentielle kunder — og lad os omsætte disse til smukke billeder og videoer, der kan bruges på jeres hjemmeside eller SoMe kanaler.
          </p>
        </div>
      </div>

      <div className={css.cases} ref={cases}>

        <div className={css.case} data='1'>
          <div className={css.caseInner}>
            <div className={css.caseWide} data='left' >
              <Image src={StojDesktop} quality='100'/>
            </div>
            <div className={css.caseTall}>
              <Image src={StojMobile} quality='100'/>
            </div>
          </div>
          <div className={css.caseTitle}>hallojstoj.dk</div>
        </div>

        <div className={css.case} data='2'>
          <div className={css.caseInner}>
            <div className={css.caseTall} data='left' >
              <Image src={OrganicMobile} quality='100'/>
            </div>
            <div className={css.caseWide}>
              <Image src={OrganicDesktop} quality='100'/>
            </div>
          </div>
          <div className={css.caseTitle}>theorganiccrave.com</div>
        </div>

        <div className={css.case} data='3'>
          <div className={css.caseInner}>
            <div className={css.caseWide} data='left' >
              <Image src={TwelveinchDesktop} quality='100'/>
            </div>
            <div className={css.caseTall}>
              <Image src={TwelveinchMobile} quality='100'/>
            </div>
          </div>
          <div className={css.caseTitle}>twelveinch.com</div>
        </div>

      </div>
    </section>
    </>
  )
}
