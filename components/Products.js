import css from '../styles/products.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import TwelveInch from '../public/Udsnit_Twelveinch_5.jpg'
import Art1 from '../public/ArtDirection1.jpg'
import Art2 from '../public/ArtDirection2.jpg'

import Branding1 from '../public/ChefJenUdsnit.jpg'
import Branding2 from '../public/ChefJenUdsnit2.jpg'

import PralDesktop from '../public/pral_screen_desktop.jpg'
import PralMobile from '../public/pral_screen_mobile.jpg'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Products() {
  const caseRef = useRef();
  const q = gsap.utils.selector(caseRef);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.set(q('.caseImage'), { clipPath: 'inset(0 0 100% 0)'});
    gsap.to(q('.caseImage'), {
      clipPath: 'inset(0 0% 0% 0)',
      duration: 1.6,
      ease: 'Power4.easeInOut',
      stagger: 0.2,
      scrollTrigger: {
        trigger: caseRef.current,
        start: 'top 90%',
      }
    });
  }, [])

  return (
    <>
      <section className={css.webSection}>
        <div className={css.upper}>
          <div className={css.upperTeaser}>Hvad vi<span className='ivyPrestoItalic'>tilbyder</span></div>
          <h2 className={css.upperTitle}>Vi tager vores kunders ønsker og idéer, og fører dem ud i livet. Vi løser deres kreative udfordringer, og hjælper dem et skridt videre mod at blive et<span className='ivyPrestoItalic'>voksent brand</span></h2>
          <p className={css.upperText}>Vores produkter er designet til at vi kan hjælpe start-ups og etablerede brands med at løse deres kreative udfordringer. Vi er specialister i at udtænke og levere skræddersyet indhold til hjemmesider, netbutikker og sociale medier, arbejde med visuelt design til branding af produkter og virksomheder, søgemaskine-optimering og webudvikling i React og Shopify.</p>
          <p className={css.upperText}>Vi forsøger med andre ord at tilbyde en suite af produkter, der kan løse jeres digitale og kreative udfordringer. Læs mere herunder.</p>
        </div>
        <div className={css.content}>
          <div className={css.contentImages}>
            <div className={css.columnOne}>
              <div className={css.image}>
                <Image
                  src={TwelveInch}
                  objectFit='cover'
                  objectPosition='bottom'
                  layout='fill'
                  quality='100'
                  />
              </div>
            </div>
            <div className={css.columnTwo}>
              <div className={css.image}>
                <Image
                  src={Art2}
                  objectFit='cover'
                  objectPosition='center'
                  layout='fill'
                  quality='100'
                />
              </div>
              <div className={css.image}>
                <Image
                  src={Art1}
                  objectFit='cover'
                  objectPosition='top'
                  layout='fill'
                  quality='100'
                />
              </div>
            </div>
          </div>
          <div className={css.contentText}>
            <h3 className={css.contentTeaser}>Skræddersyet indhold</h3>
            <p className={css.contentP}>Skræddersyet indhold til jeres hjemmesider og sociale medier er med til at kommunikere jeres brandværdier videre til jeres kunder og følgere. Det er derfor vigtigt at have et skarpt visuelt univers, at arbejde ud fra. Som Art Directors skaber vi billeder, grafik og video, der netop skal kommunikere jeres budskaber ud, gennem jeres hjemmeside eller sociale medier.</p>
          </div>
        </div>
        <div className={css.branding}>
        <div className={css.brandingText}>
          <h3 className={css.brandingTeaser}>Branding</h3>
          <p className={css.brandingP}>Når vi arbejder med branding for jeres virksomhed, går det kort sagt ud på, at vi skal få jeres produkter til at skille sig ud fra mængden hos forbrugerne, så de køber jeres produkter, fremfor jeres konkurrenters. Det gør vi ved at fremhæve jeres særlige kvaliteter og værdier, gennem smuk og kløgtig kommunikation.</p>
        </div>
          <div className={css.brandingImages}>
            <div className={css.columnOne}>
              <div className={css.image}>
                <Image
                  src={Branding2}
                  objectFit='cover'
                  objectPosition='bottom'
                  layout='fill'
                  quality='100'
                  />
              </div>
            </div>
            <div className={css.columnTwo}>
              <div className={css.image}>
                <Image
                  src={Branding1}
                  objectFit='cover'
                  objectPosition='center'
                  layout='fill'
                  quality='100'
                />
              </div>
            </div>
          </div>
        </div>
        <div className={css.web}>
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
