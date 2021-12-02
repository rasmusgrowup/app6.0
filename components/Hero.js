import css from '../styles/hero.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Arrow from '../public/arrow_white.svg'
import Instagram from '../public/instagram.svg'
import Linkedin from '../public/linkedin.svg'
import Behance from '../public/behance.svg'

import ByMickleit from '../public/Udsnit_ByMickleit.jpg'
import ItemFive from '../public/item5.jpg'
import TinekhomeGif from '../public/Tinekhome-plaid_2.gif'
import ByMickleitGif from '../public/ByMickleit.gif'
import OrganicGif from '../public/OrganicGif.gif'
import TwelveInchOne from '../public/Udsnit_Twelveinch_1.jpg'
import TwelveInchTwo from '../public/Udsnit_Twelveinch_2.jpg'
import TwelveInchThree from '../public/Udsnit_Twelveinch_3.jpg'
import TwelveInchFour from '../public/Udsnit_Twelveinch_4.jpg'
import TwelveInchFive from '../public/Udsnit_Twelveinch_5.jpg'
import OrganicBagomOne from '../public/Udsnit_Organic_bagom_1.jpg'
import OrganicBagomTwo from '../public/Udsnit_Organic_bagom_2.jpg'
import OrganicBagomThree from '../public/Udsnit_Organic_bagom_3.jpg'
import Organic from '../public/Udsnit_Organic.jpg'
import OrganicTwo from '../public/Udsnit_Organic_2.jpg'
import Os from '../public/os_bw.jpg'
import OsBw from '../public/os_2.jpg'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

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
            Kreatører af <span className='ivyPrestoItalic'>vidunderlige</span> hjemmesider og webshops, mestre i SoMe og SEO, samt kæmpe fans af <span className='ivyPrestoItalic'>kløgtig</span> branding
          </h1>
          <div className={css.aside} ref={asideRef}>
            <div className={css.text}>
              <p>Foruden at levere responsive og søgemaskineoptimerede hjemmesider og netbutikker, udvikler vi unikke visuelle identiteter, skaber spændende billede- og videoindhold, og kløgtig kommunikation. Vi er desuden meget mere end et traditionelt design bureau — vi er også jeres Ecommerce Manager eller SoMe-ansvarlig.</p>
            </div>
            <ul className={css.contact}>
              <li className={css.icon}>
                <Link href='https://www.behance.net/rieholst/projects'><a><Image src={Behance} layout='responsive'/></a></Link>
              </li>
              <li className={css.icon}>
                <Link href='https://instragram.com/growupstudio.dk'><a><Image src={Instagram} layout='responsive'/></a></Link>
              </li>
              <li className={css.icon}>
                <Link href='https://www.linkedin.com/company/growup-studio/'><a><Image src={Linkedin} layout='responsive'/></a></Link>
              </li>
              <li className={css.mail}>
                <Link href='/'><a>Arbejd med os</a></Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={css.heroMiddle}>
          <div className={css.columnOne}>
            <div className={css.columnItem} data-number='1' data-sort='01.'>
              <video
                autoPlay
                muted
                loop
                playsInline
                width='100%'
                height='100%'
                style={{ objectFit: 'cover' }}
                >
                <source src={'/TinekhomeVideoPlaid.mp4'} type='video/mp4' />
              </video>
            </div>
            <div className={css.columnItem} data-number='2' data-sort='02.'>
              <Image
                src={OrganicBagomOne}
                layout='fill'
                objectFit='cover'
                objectPosition='bottom'
                quality='100'
                placeholder='blur'
              />
            </div>
            <div className={css.columnItem} data-number='3' data-sort='03.'>
              <video
                autoPlay
                muted
                loop
                playsInline
                width='100%'
                height='100%'
                style={{ objectFit: 'cover' }}
                >
                <source src={'/OrganicInstaPost.mp4'} type='video/mp4' />
              </video>
            </div>
          </div>
          <div className={css.columnTwo}>
            <div className={css.columnItem} data-number='1' data-sort='04.'>
              <Image
                src={OrganicBagomThree}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                quality='100'
                placeholder='blur'
                priority='true'
              />
            </div>
            <div className={css.columnItem} data-number='2' data-sort='05.'>
              <Image
                src={OrganicTwo}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                quality='100'
                placeholder='blur'
              />
            </div>
            <div className={css.columnItem} data-number='3' data-sort='06.'>
              <Image
                src={TwelveInchOne}
                layout='fill'
                objectFit='cover'
                objectPosition='left'
                quality='100'
                placeholder='blur'
              />
            </div>
            <div className={css.columnItem} data-number='4' data-sort='07.'>
              <Image
                src={TwelveInchFive}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                quality='100'
                placeholder='blur'
              />
            </div>
          </div>
          <div className={css.columnThree}>
            <div className={css.columnItem} data-number='1' data-sort='08.'>
              <Image
                src={Organic}
                layout='fill'
                objectFit='cover'
                objectPosition='top'
                quality='100'
                placeholder='blur'
                priority='true'
              />
            </div>
            <div className={css.columnItem} data-number='2' data-sort='09.'>
              <Image
                src={OrganicBagomTwo}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                quality='100'
                placeholder='blur'
              />
            </div>
            <div className={css.columnItem} data-number='3' data-sort='10.'>
              <Image
                src={TwelveInchThree}
                layout='fill'
                objectFit='cover'
                objectPosition='top'
                quality='100'
                placeholder='blur'
              />
            </div>
          </div>
          <div className={css.columnFour}>
            <div className={css.columnItem} data-number='1' data-sort='11.'>
              <video
                autoPlay
                muted
                loop
                playsInline
                width='100%'
                height='100%'
                style={{ objectFit: 'cover' }}
                >
                <source src={'/ByMickleitVideo.mp4'} type='video/mp4' />
              </video>
            </div>
            <div className={css.columnItem} data-number='2' data-sort='12.'>
              <Image
                src={ByMickleit}
                layout='fill'
                objectFit='cover'
                objectPosition='top'
                quality='100'
                placeholder='blur'
              />
            </div>
            <div className={css.columnItem} data-number='3' data-sort='13.'>
              <Image
                src={TwelveInchFour}
                layout='fill'
                objectFit='cover'
                objectPosition='top'
                quality='100'
                placeholder='blur'
              />
            </div>
          </div>
        </div>

        <div className={css.heroCaptions}>
          <ul className={css.heroList}>
            <li>Tinekhome — Art Direction</li>
            <li>The Organic Crave Company — Art Direction</li>
            <li>The Organic Crave Company — SoMe post</li>
            <li>The Organic Crave Company — Instruering af model</li>
            <li>The Organic Crave Company — SoMe post</li>
            <li>Twelve Inch — Art Direction</li>
            <li>Twelve Inch — Art Direction</li>
            <li>The Organic Crave Company — Art Direction</li>
            <li>The Organic Crave Company — Instruering af model</li>
            <li>Twelve Inch — Art Direction</li>
            <li>ByMickleit — Filminstruering</li>
            <li>ByMickleit — Art Direction</li>
            <li>Twelve Inch — Art Direction</li>
          </ul>
        </div>

        <div className={css.heroBottom}>
          <div className={css.bottomColumn}>
          <h2 className={css.bottomTitle}>Lad os føre jer fra idé til færdigt produkt — og <span className='ivyPrestoItalic'>videre</span> endnu.
            <small>Slip for at ansætte dyre medarbejdere — brug i stedet os, som jeres Ecommerce Manager eller SoMe-ansvarlig.</small>
          </h2>
          <p>
            Klarer i det hele selv for jeres virksomhed? Det kan vi godt relatere til. Growup eksisterer netop for at aflaste start-ups og virksomheder, og føre dem et skridt tættere på, at blive et voksent brand. Lad os stå for jeres webshop og visuelle kommunikation — så bliver der mere tid til at pleje forretningen, og tage jer af jeres egne kunder.
          </p>
          </div>
          <div className={css.bottomImage}>
            <div className={css.smallImage}>
              <Image src={Os} layout='responsive' quality='100' placeholder='blur'/>
            </div>
            <div className={css.bigImage}>
              <Image src={OsBw} layout='responsive' quality='100' placeholder='blur'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
