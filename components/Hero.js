import css from '../styles/hero.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Arrow from '../public/arrow_white.svg'
import Instagram from '../public/instagram.svg'
import Linkedin from '../public/linkedin.svg'
import Behance from '../public/behance.svg'

import ByMickleit from '../public/Udsnit_ByMickleit.jpg'
import ItemFive from '../public/item5.jpg'
import TwelveInchOne from '../public/Udsnit_Twelveinch_1.jpg'
import TwelveInchTwo from '../public/Udsnit_Twelveinch_2.jpg'
import TwelveInchThree from '../public/Udsnit_Twelveinch_3.jpg'
import TwelveInchFour from '../public/Udsnit_Twelveinch_4.jpg'
import TwelveInchFive from '../public/Udsnit_Twelveinch_5.jpg'
import TwelveInchSix from '../public/Udsnit_Twelveinch_2.jpg'
import TwelveInchSeven from '../public/twelve-inch-wall.jpg'
import OrganicBagomOne from '../public/Udsnit_Organic_bagom_1.jpg'
import OrganicBagomTwo from '../public/Udsnit_Organic_bagom_2.jpg'
import OrganicBagomThree from '../public/Udsnit_Organic_bagom_3.jpg'
import Organic from '../public/Udsnit_Organic.jpg'
import OrganicTwo from '../public/Udsnit_Organic_2.jpg'
import Os from '../public/os_2_bw.jpg'
import OsBw from '../public/os.jpg'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero(props) {
  const titleRef = useRef(null);
  const asideRef = useRef(null);

  return (
    <>
      <section className={css.heroSection}>
        <div className={css.heroTop}>
          <h1 className={css.heading} ref={titleRef}>
            Kreatører af <span className='ivyPrestoItalic'>vidunderlige</span> hjemmesider og webshops, mestre af Shopify, SoMe og SEO, samt kæmpe fans af <span className='ivyPrestoItalic'>kløgtig</span> branding
          </h1>
          <div className={css.aside} ref={asideRef}>
            <div className={css.text}>
              <p>Foruden at levere responsive og søgemaskineoptimerede hjemmesider og netbutikker, udvikler vi unikke visuelle identiteter, skaber spændende billede- og videoindhold, og kløgtig kommunikation. Vi er desuden meget mere end et traditionelt design bureau — vi er også jeres Ecommerce Manager eller SoMe-ansvarlig.</p>
            </div>
            <ul className={css.contact}>
              <li className={css.icon} style={{ display: 'none' }}>
                <Link href='https://www.behance.net/rieholst/projects'><a><Image src={Behance} layout='responsive'/></a></Link>
              </li>
              <li className={css.icon} style={{ display: 'none' }}>
                <Link href='https://instragram.com/growupstudio.dk'><a><Image src={Instagram} layout='responsive'/></a></Link>
              </li>
              <li className={css.icon} style={{ display: 'none' }}>
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
            <div className={css.columnItem} data-number='4' data-sort='04.'>
              <video
                autoPlay
                muted
                loop
                playsInline
                width='100%'
                height='100%'
                style={{ objectFit: 'cover' }}
                >
                <source src={'/OrganicInstaPost_3.mp4'} type='video/mp4' />
              </video>
            </div>
          </div>
          <div className={css.columnTwo}>
            <div className={css.columnItem} data-number='1' data-sort='05.'>
              <Image
                src={OrganicBagomThree}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                quality='100'
                priority='true'
              />
            </div>
            <div className={css.columnItem} data-number='2' data-sort='06.'>
              <Image
                src={OrganicTwo}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                quality='100'
              />
            </div>
            <div className={css.columnItem} data-number='3' data-sort='07.'>
              <Image
                src={TwelveInchSeven}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                quality='100'
              />
            </div>
            <div className={css.columnItem} data-number='4' data-sort='08.'>
              <Image
                src={TwelveInchOne}
                layout='fill'
                objectFit='cover'
                objectPosition='left'
                quality='100'
              />
            </div>
            <div className={css.columnItem} data-number='5' data-sort='09.'>
              <Image
                src={TwelveInchFive}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                quality='100'
              />
            </div>
          </div>
          <div className={css.columnThree}>
            <div className={css.columnItem} data-number='1' data-sort='10.'>
              <Image
                src={Organic}
                layout='fill'
                objectFit='cover'
                objectPosition='top'
                quality='100'
                priority='true'
              />
            </div>
            <div className={css.columnItem} data-number='3' data-sort='11.'>
              <video
                autoPlay
                muted
                loop
                playsInline
                width='100%'
                height='100%'
                style={{ objectFit: 'cover' }}
                >
                <source src={'/OrganicInstaPost_2.mp4'} type='video/mp4' />
              </video>
            </div>
            <div className={css.columnItem} data-number='2' data-sort='12.'>
              <Image
                src={OrganicBagomTwo}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                quality='100'
              />
            </div>
            <div className={css.columnItem} data-number='3' data-sort='13.'>
              <Image
                src={TwelveInchThree}
                layout='fill'
                objectFit='cover'
                objectPosition='top'
                quality='100'
              />
            </div>
          </div>
          <div className={css.columnFour}>
            <div className={css.columnItem} data-number='1' data-sort='14.'>
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
            <div className={css.columnItem} data-number='2' data-sort='15.'>
              <Image
                src={ByMickleit}
                layout='fill'
                objectFit='cover'
                objectPosition='top'
                quality='100'
              />
            </div>
            <div className={css.columnItem} data-number='2' data-sort='16.'>
              <Image
                src={TwelveInchSix}
                layout='fill'
                objectFit='cover'
                objectPosition='bottom'
                quality='100'
              />
            </div>
            <div className={css.columnItem} data-number='3' data-sort='17.'>
              <Image
                src={TwelveInchFour}
                layout='fill'
                objectFit='cover'
                objectPosition='top'
                quality='100'
              />
            </div>
          </div>
        </div>

        <div className={css.heroCaptions}>
          <ul className={css.heroList}>
            <li>Tinekhome</li>
            <li>The Organic Crave Company</li>
            <li>The Organic Crave Company</li>
            <li>The Organic Crave Company</li>
            <li>The Organic Crave Company</li>
            <li>The Organic Crave Company</li>
            <li>Twelve Inch</li>
            <li>Twelve Inch</li>
            <li>Twelve Inch</li>
            <li>The Organic Crave Company</li>
            <li>The Organic Crave Company</li>
            <li>The Organic Crave Company</li>
            <li>Twelve Inch</li>
            <li>ByMickleit</li>
            <li>ByMickleit</li>
            <li>Twelve Inch</li>
            <li>Twelve Inch</li>
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
              <Image src={Os} layout='responsive' quality='100'/>
            </div>
            <div className={css.bigImage}>
              <Image src={OsBw} layout='responsive' quality='100'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
