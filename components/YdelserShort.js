import Image from 'next/image'
import css from '../styles/short.module.scss'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import OrganicBagomThree from '../public/Udsnit_Organic_bagom_3.jpg'

export default function YdelserShort() {
  const section = useRef();
  const inner = useRef();
  const upper = useRef();
  const carouselWrapper = useRef();
  const carouselInner = useRef();

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

  return (
    <>
      <section className={css.ydelserShortSection} ref={section}>
        <div ref={inner}>
          <div className={css.ydelserUpper} ref={upper}>
            <span className={css.shortNumber}>01.</span>
            <h2>Vores ydelser har ét fælles formål. At hjælpe jeres virksomhed med at <span className='ivyPrestoItalic'>gro</span></h2>
            <p>
            Vores ydelser er centreret omkring én vigtig betragtning — uden klare budskaber og relevant indhold, er jeres hjemmeside blot en tom skal. Bevares, vi tager den tekniske opsætning og kodning af hjemmesiden meget seriøst — men det er god historiefortælling, der sælger jeres varer. <br /><br />Lad os hjælpe jer med at finde de fede budskaber, der skaber relevans og tryghed hos jeres potentielle kunder — og lad os omsætte disse til smukke billeder og videoer, der kan bruges på jeres hjemmeside eller SoMe kanaler.
            </p>
          </div>
          <div className={css.ydelserCarouselWrapper} ref={carouselWrapper}>
            <div className={css.ydelserCarouselInner} ref={carouselInner}>
              <div className={css.item} item-fit='start'>
                <Image src={OrganicBagomThree} width='370' height='440' objectFit='cover' quality='100'/>
                <span className={css.ydelse}>Art Direction</span>
              </div>
              <div className={css.item} item-fit='end'>
                <Image src={OrganicBagomThree} width='370' height='440' objectFit='cover' quality='100'/>
                <span className={css.ydelse}>Art Direction</span>
              </div>
              <div className={css.item} item-fit='start'>
                <Image src={OrganicBagomThree} width='370' height='440' objectFit='cover' quality='100'/>
                <span className={css.ydelse}>Art Direction</span>
              </div>
              <div className={css.item} item-fit='end'>
                <Image src={OrganicBagomThree} width='370' height='440' objectFit='cover' quality='100'/>
                <span className={css.ydelse}>Art Direction</span>
              </div>
              <div className={css.item} item-fit='start'>
                <Image src={OrganicBagomThree} width='370' height='440' objectFit='cover' quality='100'/>
                <span className={css.ydelse}>Art Direction</span>
              </div>
              <div className={css.item} item-fit='end'>
                <Image src={OrganicBagomThree} width='370' height='440' objectFit='cover' quality='100'/>
                <span className={css.ydelse}>Art Direction</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
