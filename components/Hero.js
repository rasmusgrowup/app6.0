import css from '../styles/hero.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Arrow from '../public/arrow_white.svg'
import twelveinch from '../public/twelve-inch.jpg'
import stoj from '../public/stoj.jpg'
import organic from '../public/organic.jpg'
import growup from '../public/growup.jpg'
import longArrow from '../public/long_arrow.svg'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero(props) {
  const heroSection = useRef();
  const scrollSection = useRef();
  const scrollInner = useRef();
  const titleRef = useRef();
  const asideRef = useRef();
  const tAnim = gsap.utils.selector(titleRef);
  const iAnim = gsap.utils.selector(scrollInner);

  useEffect(() => {
    gsap.set(tAnim('.titleAnim'), {clipPath: 'inset(0% 0% 100% 0%)', opacity: 0})
    gsap.set(iAnim('.scroll-item'), {clipPath: 'inset(0% 0% 100% 0%)', opacity: 0})
    gsap.set(asideRef.current, {clipPath: 'inset(0% 0% 100% 0%)', opacity: 0})
    gsap.set(scrollSection.current, {yPercent: 0})

    gsap.to(tAnim('.titleAnim'), {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      delay: .6,
      duration: 2,
      stagger: 0.2,
      ease: 'Power4.easeOut',
    })

    gsap.to(asideRef.current, {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      delay: .9,
      duration: 3,
      ease: 'Power4.easeOut',
    })

    gsap.to(iAnim('.scroll-item'), {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      delay: 1.2,
      duration: 3,
      stagger: 0.2,
      ease: 'Power4.easeOut',
    })

    gsap.to(scrollInner.current, {
      xPercent: -60,
      ease: 'none',
      scrollTrigger: {
        trigger: heroSection.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.2,
      }
    })

    let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(scrollInner.current, "skewX", "deg"), // fast
    clamp = gsap.utils.clamp(-9, 9); // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -400);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power4", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
        }
      }
    });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set(scrollInner.current, {transformOrigin: "center", force3D: true});
  }, [])

  return (
    <>
      <section className={css.heroSection} ref={heroSection}>
        <h1 className={css.heading} ref={titleRef}>
          <span className='titleAnim'><div className='freight-italic'>Odenseansk</div> design</span>
          <span className='titleAnim'>bureau <div className={css.arrow}><Image src={longArrow} /></div>branding,</span>
          <span className='titleAnim'>hjemmesider &</span>
          <span className='titleAnim'>netbutikker <div className={css.since}>( siden 2018 )</div></span>
        </h1>
        <div className={css.aside} ref={asideRef}>
          <div className={css.text}>
            Skabelonerne gør, at vi kan levere billige(re) hjemmesider, levere dem hurtigt, og hjælpe kunden med deres forretningskoncept. I og med at vi har leveret mange webshops, har vi en masse tips og tricks og erfaringer, vi kan give med til kunden.
          </div>
          <ul className={css.contact}>
            <li>
              <Link href='/'><a className={css.mail}>hello@growupstudio.dk</a></Link>
            </li>
            <li>
              <Link href='/'><a>Instagram</a></Link>
              <Image src={Arrow} />
            </li>
            <li>
              <Link href='/'><a>LinkedIn</a></Link>
              <Image src={Arrow} />
            </li>
          </ul>
        </div>
        <div className={css.scrollSection} ref={scrollSection}>
          <div className={css.scrollInner} ref={scrollInner}>
            <div className={`${css.scrollItem} scroll-item`}>
              <Image src={organic} layout='responsive'/>
            </div>
            <div className={`${css.scrollItem} scroll-item`}>
              <Image src={growup} layout='responsive'/>
            </div>
            <div className={`${css.scrollItem} scroll-item`}>
              <Image src={twelveinch} layout='responsive'/>
            </div>
            <div className={`${css.scrollItem} scroll-item`}>
              <Image src={stoj} layout='responsive'/>
            </div>
            <div className={`${css.scrollItem} scroll-item`}>
              <Image src={twelveinch} layout='responsive'/>
            </div>
            <div className={`${css.scrollItem} scroll-item`}>
              <Image src={stoj} layout='responsive'/>
            </div>
            <div className={`${css.scrollItem} scroll-item`}>
              <Image src={organic} layout='responsive'/>
            </div>
            <div className={`${css.scrollItem} scroll-item`}>
              <Image src={growup} layout='responsive'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
