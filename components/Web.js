import css from '../styles/web.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import PralDesktop from '../public/pral_screen_desktop.jpg'
import PralMobile from '../public/pral_screen_mobile.jpg'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Web() {
  const caseRef = useRef();
  const q = gsap.utils.selector(caseRef);

  useEffect(() => {
    gsap.set(q('.caseImage'), { clipPath: 'inset(0 0 100% 0)'})
    gsap.to(q('.caseImage'), {
      clipPath: 'inset(0 0% 0% 0)',
      duration: 1.6,
      ease: 'Power4.easeInOut',
      stagger: 0.2,
      scrollTrigger: {
        trigger: caseRef.current,
        start: 'top 90%',
      }
    })
  }, [])

  return (
    <>
      <section className={css.webSection}>
        <div className={css.upper}>
          <div className={css.upperTeaser}>Hvad vi<span className='ivyPrestoItalic'>tilbyder</span></div>
          <h2 className={css.upperTitle}>Vi tager vores kunders ønsker og idéer, og fører dem ud i livet. Gå fra tom skal til <span className='ivyPrestoItalic'>færdigt produkt</span> med vores skræddersyede forløb.</h2>
          <p className={css.upperText}>Vi laver jeres hjemmeside efter en afprøvet opskrift, som vi selv har kreeret, og som er baseret på erfaringer fra tidligere projekter. Vi starter med et skelet, der passer til jeres virksomhed, og fylder herefter hjemmesiden op med en masse skønt indhold. Indholdet kan være billeder, videoer og tekster, og har til formål at skabe en spændende historiefortælling, søgemaskineoptimere hjemmesiden og sælge jeres varer og ydelser.</p>
          <p className={css.upperText}>
            Da vi kan starte med et skelet — som jo iøvrigt er afprøvet på andre virksomheder — kan vi spare en del omkostninger i opstartsfasen af projektet. Hvilket naturligvis betyder, at vi kan give jer mere værdi, for jeres penge. Selvom jeres hjemmeside bliver lavet efter en skabelon, betyder det ikke, at den kommer til at ligne alle andres — tværtimod. Vi skræddersyer jeres hjemmeside, ved at pynte den op med unikke billede, tekst- og videomaterialer.</p>
        </div>
        <div className={css.bottom}>
          <div className={css.case} data='1' ref={caseRef}>
            <ul className={css.caseNav}>
              <li>Forside</li>
              <li>Produktside</li>
            </ul>
            <div className={css.caseInner}>
              <div className={`${css.caseWide} caseImage`} data='left' >
                <Image src={PralDesktop} quality='100'/>
                <span className={css.explainor}>Desktop</span>
              </div>
              <div className={`${css.caseTall} caseImage`}>
                <Image src={PralMobile} quality='100'/>
                <span className={css.explainor}>Smartphone</span>
              </div>
            </div>
            <div className={css.caseTitle}>hallojstoj.dk</div>
          </div>
          <div className={css.reviewWrapper}>
            <div className={css.review}>
              “Super dygtige og kompetente folk, der ved hvad de laver! God sparring og top professionelt arbejde, der blev lavet til vores webshop, pral.dk”
            </div>
            <div className={css.reviewer}>Pernille Albers, PRAL</div>
          </div>
          <div className={css.caseInfo}>
            <span><Link href='https://pral.dk'><a target='_blank'>www.pral.dk</a></Link></span>
            <span>Shopify-webshop</span>
            <span>Lavet i 2021</span>
          </div>
        </div>
      </section>
    </>
  )
}
