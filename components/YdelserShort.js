import Image from 'next/image'
import Link from 'next/link'
import css from '../styles/ydelser.module.scss'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import OrganicBagomThree from '../public/Udsnit_Organic_bagom_3.jpg'

export default function YdelserShort() {
  const section = useRef();
  const inner = useRef();
  const upper = useRef();
  const bottom = useRef();
  const q = gsap.utils.selector(bottom);

  useEffect(() => {
    const tl = gsap.timeline({repeat: -1, paused: true});
    const delay = 8
    gsap.set(q('.item1'), {opacity: 1})
    tl
      .to(q('.item1 .line'), { width: '100%', duration: delay, ease: 'none' }, '<')
      .set(q('.item1 .line'), {width: '0%'})
      .to(q('.item1'), {opacity: 0.2, duration: 0.6})

      .to(q('.item2'), {opacity: 1, duration: 1})
      .to(q('.item2 .line'), { width: '100%', duration: delay, ease: 'none' }, '<')
      .set(q('.item2 .line'), {width: '0%'})
      .to(q('.item2'), {opacity: 0.2, duration: 0.6})

      .to(q('.item3'), {opacity: 1, duration: 1})
      .to(q('.item3 .line'), { width: '100%', duration: delay, ease: 'none' }, '<')
      .set(q('.item3 .line'), {width: '0%'})
      .to(q('.item3'), {opacity: 0.2, duration: 0.6})

      .to(q('.item4'), {opacity: 1, duration: 1})
      .to(q('.item4 .line'), { width: '100%', duration: delay, ease: 'none' }, '<')
      .set(q('.item4 .line'), {width: '0%'})
      .to(q('.item4'), {opacity: 0.2, duration: 0.6})

      .to(q('.item5'), {opacity: 1, duration: 1})
      .to(q('.item5 .line'), { width: '100%', duration: delay, ease: 'none' }, '<')
      .set(q('.item5 .line'), {width: '0%'})
      .to(q('.item5'), {opacity: 0.2, duration: 0.6})

      .to(q('.item6'), {opacity: 1, duration: 1})
      .to(q('.item6 .line'), { width: '100%', duration: delay, ease: 'none' }, '<')
      .set(q('.item6 .line'), {width: '0%'})
      .to(q('.item6'), {opacity: 0.2, duration: 0.6})

      .to(q('.item7'), {opacity: 1, duration: 1})
      .to(q('.item7 .line'), { width: '100%', duration: delay, ease: 'none' }, '<')
      .set(q('.item7 .line'), {width: '0%'})
      .to(q('.item7'), {opacity: 0.2, duration: 0.6})

      .to(q('.item1'), {opacity: 1, duration: 1})

    ScrollTrigger.matchMedia({
      '(min-width: 768px)': function() {
        ScrollTrigger.create({
          trigger: bottom.current,
          start: '300 center',
          end: '300 top',
          onEnter: () => tl.play(),
          onEnterBack: () => tl.resume(),
          onLeave: () => tl.pause(),
          onLeaveBack: () => tl.play(),
        })
      },
      '(max-width: 768px)': function() {
        var fadeIn =gsap.utils.toArray('.item');
        fadeIn.forEach((fadeIn) => {
          gsap.to(fadeIn, {
            opacity: 1,
            scrollTrigger: {
              trigger: fadeIn,
              start: '300 80%',
              duration: 1,
              delay: 0.6
            }
          })
        })
      }
    });
  }, [])

  return (
    <>
      <section className={css.ydelserShortSection} ref={section} id='ydelser'>
        <div ref={inner}>
          <div className={css.ydelserUpper} ref={upper}>
            <div className={css.upperTeaser}>Vores<span className='ivyPrestoItalic'>ydelser</span></div>
            <div className={css.textWrapper}>
              <h2 className={css.upperTitle}>Vores ydelser har ??t f??lles form??l. At hj??lpe jeres virksomhed med at <span className='ivyPrestoItalic'>gro</span></h2>
              <div className={css.text}>
                <p>
                Vi tager den tekniske ops??tning og kodning af hjemmesiderne meget seri??st, og (synes vi selv) leverer fremragende produkter i den henseende??? men det er god historiefort??lling, der s??lger jeres varer.<br /><br />Lad os hj??lpe jer med at finde de fede budskaber, der skaber relevans og tryghed hos jeres potentielle kunder ??? og lad os oms??tte disse til smukke billeder og videoer, der kan bruges p?? jeres hjemmeside eller SoMe kanaler.
                </p>
                <div className={css.contact} style={{ display: 'none' }}>
                    <Link href='mailto:hello@growupstudio.dk'><a>Arbejd med os</a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className={css.ydelserBottom} ref={bottom}>
            <div className={`${css.bottomItem} item1 item`}>
              <span className={css.number}>I.</span>
              <h3>Art Direction</h3>
              <p>Mediekommunikation gennem sp??ndende historiefort??lling og fantastiske billeder og videoer, med udgangspunkt i jeres kunders ??nsker og behov.</p>
              <span className={`${css.line} line`}></span>
            </div>
            <div className={`${css.bottomItem} item2 item`}>
              <span className={css.number}>II.</span>
              <h3>Branding</h3>
              <p>Visuel- og kommunikativ branding, der forbedrer jeres varem??rkeidentitet. Emballage design, historiefort??lling og ???alt-det-derudover???, der g??r, at i bliver husket.</p>
              <span className={`${css.line} line`}></span>
            </div>
            <div className={`${css.bottomItem} item3 item`}>
              <span className={css.number}>III.</span>
              <h3>Ecommerce Strategi</h3>
              <p>Optimering af jeres netbutiks layout, daglig drift af webshoppen, herunder h??ndtering af udsalg, oprettelse af nye varer eller forfatning af nye artikler og blogopslag.</p>
              <span className={`${css.line} line`}></span>
            </div>
            <div className={`${css.bottomItem} item4 item`}>
              <span className={css.number}>IV.</span>
              <h3>Hjemmesider</h3>
              <p>Smukke og funktionelle hjemmesider, der pr??cist og professionelt formidler jeres budskaber, og s??lger jeres ydelser.</p>
              <span className={`${css.line} line`}></span>
            </div>
            <div className={`${css.bottomItem} item5 item`}>
              <span className={css.number}>V.</span>
              <h3>Netbutikker</h3>
              <p>Udvikling af Shopify-netbutikker, der passer til nystartede eller etablerede virksomheder. Udvikles ud fra en afpr??vet opskrift, der har brugerens rejse i centrum.</p>
              <span className={`${css.line} line`}></span>
            </div>
            <div className={`${css.bottomItem} item6 item`}>
              <span className={css.number}>VI.</span>
              <h3>SEO</h3>
              <p>S??gemaskineoptimering af jeres hjemmeside. Forbedr jeres bes??gstal, og ??g chancen for at s??lge flere varer eller ydelser ??? g??res gennem organisk v??kst og annonce-forl??b.</p>
              <span className={`${css.line} line`}></span>
            </div>
            <div className={`${css.bottomItem} item7 item`}>
              <span className={css.number}>VII.</span>
              <h3 style={{ textTransform: 'none' }}>SoMe</h3>
              <p>Publicering af nye opslag, reels, stories, m.m., med henblik p?? at forbedre jeres brandgenkendelse, f?? flere f??lgere og ??ge jeres salg.</p>
              <span className={`${css.line} line`}></span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
