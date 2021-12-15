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
          <h2 className={css.upperTitle}>Vi tager vores kunders ønsker og idéer, og fører dem ud i livet. Vi løser deres kreative udfordringer, og hjælper dem et skridt videre mod at blive et<span className='ivyPrestoItalic'>voksent brand.</span></h2>
          <p className={css.upperText}>Vores produkter er designet til at vi kan hjælpe start-ups og etablerede brands med at løse deres kreative udfordringer. Vi er specialister i at udtænke og levere skræddersyet indhold til hjemmesider, netbutikker og sociale medier, arbejde med visuelt design til branding af produkter og virksomheder, søgemaskine-optimering og webudvikling i React og Shopify.</p>
          <p className={css.upperText}>Vi forsøger med andre ord at tilbyde en suite af produkter, der kan løse jeres digitale og kreative udfordringer. Læs mere herunder.</p>
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
