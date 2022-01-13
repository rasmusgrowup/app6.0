import css from '../styles/ydelser.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import Organic from '../public/Udsnit_Organic_4.jpg'
import Art1 from '../public/Udsnit_Organic_bagom_3.jpg'
import Art2 from '../public/Udsnit_Organic_bagom_4.jpg'

import Branding1 from '../public/ChefJenUdsnit.jpg'
import Branding2 from '../public/ChefJenUdsnit2.jpg'

import PralDesktop from '../public/pral_screen_desktop.jpg'
import PralMobile from '../public/pral_screen_mobile.jpg'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Ydelser() {
  const caseRef = useRef();
  const brandingRef = useRef();
  const contentRef = useRef();
  const q = gsap.utils.selector(caseRef);
  gsap.registerPlugin(ScrollTrigger);
  const z = gsap.utils.selector(brandingRef);
  gsap.registerPlugin(ScrollTrigger);
  const x = gsap.utils.selector(contentRef);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.set(q('.caseImage'), { clipPath: 'inset(0 0 100% 0)'});
    gsap.set(z('.brandingImage'), { clipPath: 'inset(0 0 100% 0)'});
    gsap.set(x('.contentImage'), { clipPath: 'inset(0 0 100% 0)'});
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
    gsap.to(z('.brandingImage'), {
      clipPath: 'inset(0 0% 0% 0)',
      duration: 1.6,
      ease: 'Power4.easeInOut',
      stagger: 0.2,
      scrollTrigger: {
        trigger: brandingRef.current,
        start: 'top 90%',
      }
    });
    gsap.to(x('.contentImage'), {
      clipPath: 'inset(0 0% 0% 0)',
      duration: 1.6,
      ease: 'Power4.easeInOut',
      stagger: 0.2,
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top 90%',
      }
    });
  }, [])

  const section = useRef();
  const inner = useRef();

  return (
    <>
      <section className={css.ydelserSection} ref={section}>
        <div ref={inner} className={css.inner}>
          <div className={css.upper}>
            <div className={css.upperTeaser}><span>Vores<span className='ivyPrestoItalic'>ydelser</span></span></div>
            <h2 className={css.upperTitle}>Vi tager jeres visioner og idéer, og fører dem ud i livet. Vi løser jeres kreative udfordringer, og hjælper jer et skridt videre mod at blive et<span className='ivyPrestoItalic'>voksent brand</span></h2>
            <p className={css.upperText}>Vores ydelser er skræddersyet til start-ups og etablerede virksomheder, og er centreret omkring branding, visuel kommunikation og web-udvikling. Vi er specialister i at udtænke og levere skræddersyet indhold til hjemmesider, netbutikker og sociale medier, arbejde med visuelt design til branding af produkter og virksomheder, søgemaskine-optimering, og webudvikling i React og Shopify.</p>
            <p className={css.upperText}>Vi forsøger med andre ord at tilbyde en suite af ydelser, der kan løse jeres digitale og kreative udfordringer — hvilket til syvende og sidst, hjælper jer med at sælge flere varer.</p>
          </div>
          <div className={css.content}>
            <div className={css.contentImages} ref={contentRef}>
              <div className={`${css.columnOne} contentImage`}>
                <div className={css.image}>
                  <Image
                    src={Organic}
                    objectFit='cover'
                    objectPosition='bottom'
                    layout='fill'
                    quality='100'
                    />
                </div>
              </div>
              <div className={`${css.columnTwo} contentImage`}>
                <div className={css.image}>
                  <Image
                    src={Art2}
                    objectFit='cover'
                    objectPosition='top'
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
              <div className={css.contentTextWrapper}>
                <p className={css.contentP}>Skræddersyet indhold til jeres hjemmesider og sociale medier er med til at kommunikere jeres brandværdier videre til jeres kunder og følgere. Det er derfor vigtigt at have et skarpt visuelt univers, at arbejde ud fra. Som Art Directors skaber vi billeder, grafik og video, der netop skal kommunikere jeres budskaber ud, gennem jeres hjemmeside eller sociale medier.</p>
                <p className={css.contentEkspertiser}>Art Direction / Historiefortælling / Målgruppeanalyser</p>
              </div>
            </div>
          </div>
          <div className={css.branding}>
            <div className={css.brandingImages} ref={brandingRef}>
              <div className={css.columnOne}>
                <div className={`${css.image} brandingImage`}>
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
                <div className={`${css.image} brandingImage`}>
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
            <div className={css.brandingText}>
              <h3 className={css.brandingTeaser}>Visuel branding</h3>
              <div className={css.brandingTextWrapper}>
                <p className={css.brandingP}>Når vi arbejder med branding for jeres virksomhed, går det kort sagt ud på, at vi skal få jeres produkter til at skille sig ud fra mængden hos forbrugerne, så de køber jeres produkter, fremfor jeres konkurrenters. Det gør vi ved at fremhæve jeres særlige kvaliteter og værdier, gennem smuk og kløgtig kommunikation.</p>
                <p className={css.brandingEkspertiser}>Designforslag / Grafisk Design / Logo Design / Tryksager / Visuel Identitet</p>
              </div>
            </div>
          </div>
          <div className={css.web}>
            <div className={css.case} data='1' ref={caseRef}>
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
            <div className={css.caseText}>
              <h3 className={css.caseTeaser}>Webudvikling</h3>
              <div className={css.caseTextWrapper}>
                <p className={css.caseP}>Vi laver jeres hjemmeside efter en afprøvet opskrift, som vi selv har kreeret, og som er baseret på erfaringer fra tidligere projekter. Vi starter med et skelet, der passer til jeres virksomhed, og fylder herefter hjemmesiden op med en masse skønt indhold. Indholdet kan være billeder, videoer og tekster, og har til formål at skabe en spændende historiefortælling, søgemaskineoptimere hjemmesiden og sælge jeres varer og ydelser.</p>
                <p className={css.caseEkspertiser}>Ecommerce / Hjemmesider / React / Redesign / Shopify / Webudvikling</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
