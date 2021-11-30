import css from '../styles/hero.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Arrow from '../public/arrow_white.svg'
import Instagram from '../public/instagram.svg'
import Linkedin from '../public/linkedin.svg'
import Behance from '../public/behance.svg'

import ItemOne from '../public/item1.jpg'
import ItemTwo from '../public/item2.jpg'
import ItemThree from '../public/item3.jpg'
import ItemFour from '../public/item4.jpg'
import ItemFive from '../public/item5.jpg'
import ItemSix from '../public/item6.jpg'
import ItemSeven from '../public/item7.jpg'
import ItemEight from '../public/item8.jpg'
import ItemNine from '../public/item9.jpg'
import ItemTen from '../public/item10.jpg'
import ItemEleven from '../public/item11.jpg'

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

  return (
    <>
      <section className={css.heroSection} ref={heroSection}>
        <div className={css.heroTop}>
          <h1 className={css.heading} ref={titleRef}>
            Kreatører af <span className='ivyPrestoItalic'>vidunderlige</span> hjemmesider og webshops, mestre i SoMe og SEO, samt kæmpe fans af kløgtig branding.
          </h1>
          <div className={css.aside} ref={asideRef}>
            <div className={css.text}>
              <p>Store ord, indrømmet! Men vi mener det. Og vi blærer os kun, fordi vi af hele hjertet elsker det vi laver. Nemlig at hjælpe virksomheder og start-ups med at vokse sig større, ved at løse deres kreative udfordringer — digitale, såvel som analoge.</p>
            </div>
            <ul className={css.contact}>
              <li className={css.mail}>
                <Link href='/'><a>Arbejd med os</a></Link>
              </li>
              <li className={css.icon}>
                <Link href='https://www.behance.net/rieholst/projects'><a><Image src={Behance} layout='responsive'/></a></Link>
              </li>
              <li className={css.icon}>
                <Link href='https://instragram.com/growupstudio.dk'><a><Image src={Instagram} layout='responsive'/></a></Link>
              </li>
              <li className={css.icon}>
                <Link href='https://www.linkedin.com/company/growup-studio/'><a><Image src={Linkedin} layout='responsive'/></a></Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={css.heroBottom}>
          <div className={css.columnOne}>
            <div className={css.columnItem} data-number='1'>
              <Image src={ItemTwo} layout='fill' objectFit='cover' objectPosition='top' qulaity='100'/>
            </div>
            <div className={css.columnItem} data-number='2'>
              <Image src={ItemTen} layout='fill' objectFit='cover' objectPosition='center' qulaity='100'/>
            </div>
            <div className={css.columnItem} data-number='3'>
              <Image src={ItemEleven} layout='fill' objectFit='cover' objectPosition='center' qulaity='100'/>
            </div>
          </div>
          <div className={css.columnTwo}>
            <div className={css.columnItem} data-number='1'>
              <Image src={ItemThree} layout='fill' objectFit='cover' objectPosition='center' qulaity='100'/>
            </div>
            <div className={css.columnItem} data-number='2'>
              <Image src={ItemFour} layout='fill' objectFit='cover' objectPosition='top' qulaity='100'/>
            </div>
            <div className={css.columnItem} data-number='3'>
              <Image src={ItemFive} layout='fill' objectFit='cover' objectPosition='center' qulaity='100'/>
            </div>
            <div className={css.columnItem} data-number='4'>
              <Image src={ItemSix} layout='fill' objectFit='cover' objectPosition='center' qulaity='100'/>
            </div>
          </div>
          <div className={css.columnThree}>
            <div className={css.columnItem} data-number='1'>
              <Image src={ItemSeven} layout='fill' objectFit='cover' objectPosition='center' qulaity='100'/>
            </div>
            <div className={css.columnItem} data-number='2'>
              <Image src={ItemEleven} layout='fill' objectFit='cover' objectPosition='center' qulaity='100'/>
            </div>
            <div className={css.columnItem} data-number='3'>
              <Image src={ItemEight} layout='fill' objectFit='cover' objectPosition='center' qulaity='100'/>
            </div>
          </div>
          <div className={css.columnFour}>
            <div className={css.columnItem} data-number='1'>
              <Image src={ItemNine} layout='fill' objectFit='cover' objectPosition='center' qulaity='100'/>
            </div>
            <div className={css.columnItem} data-number='2'>
              <Image src={ItemOne} layout='fill' objectFit='cover' objectPosition='top' qulaity='100'/>
            </div>
            <div className={css.columnItem} data-number='3'>
              <Image src={ItemEleven} layout='fill' objectFit='cover' objectPosition='center' qulaity='100'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
