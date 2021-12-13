import Link from 'next/link'
import Image from 'next/image'
import Arrow from '../public/arrow_dark.svg'
import css from '../styles/footer.module.scss'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const mailRef = useRef();
  const footer = useRef();
  const inner = useRef();

  useEffect(() => {
    gsap.set(inner.current, { y: -300, willChange: 'transform' })
    const animation = gsap.to(inner.current, {
      yPercent: 0,
      y: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: footer.current,
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

  useEffect(() => {
    gsap.set(mailRef.current, {
      yPercent: 110
    })

    const mailFadeIn = gsap.to(mailRef.current, {
      yPercent: 0,
      duration: 2,
      delay: 0.3,
      ease: 'Power4.easeOut',
      scrollTrigger: {
        trigger: footer.current,
        start: 'top center',
      }
    })

    return () => {
      mailFadeIn.scrollTrigger.kill();
    }
  }, [])

  return (
    <>
      <footer className={css.mainFooter} ref={footer}>
        <div className={css.footerInner} ref={inner}>
          <div className={css.footerSocials} style={{ display: 'none' }}>
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
          <div className={css.footerTop}>
            <div className={css.footerContact}>
              <Link href='mailto:hello@growupstudio.dk'><a className={css.footerMail} ref={mailRef}>Arbejd med os</a></Link>
            </div>
            <div className={css.address}>
              eller besøg os på Havnegade 100L, Odense C 5000
            </div>
          </div>
          <div className={css.footerBottom}>
            <p className={css.first}>Cookie-frit website</p>
            <p className={css.second}>CVR 39852640</p>
            <p className={css.third}>© 2021 Growup Aps</p>
          </div>
        </div>
      </footer>
    </>
  )
}
