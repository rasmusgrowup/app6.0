import css from '../styles/hero.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Arrow from '../public/arrow_white.svg'
import Instagram from '../public/instagram.svg'
import Linkedin from '../public/linkedin.svg'
import Behance from '../public/behance.svg'

import ByMickleit from '../public/Udsnit_ByMickleit.jpg'
import ChefJenSkilt from '../public/ChefJenUdsnit.jpg'
import TwelveInchOne from '../public/Udsnit_Twelveinch_1.jpg'
import TwelveInchTwo from '../public/Udsnit_Twelveinch_2.jpg'
import TwelveInchThree from '../public/Udsnit_Twelveinch_3.jpg'
import TwelveInchFour from '../public/Udsnit_Twelveinch_4.jpg'
import TwelveInchFive from '../public/Udsnit_Twelveinch_5.jpg'
import TwelveInchSix from '../public/Udsnit_Twelveinch_2.jpg'
import TwelveInchSeven from '../public/twelve-inch-wall.jpg'
import TwelveInchEight from '../public/Udsnit_Twelveinch_7.jpg'
import OrganicBagomOne from '../public/Udsnit_Organic_bagom_1.jpg'
import OrganicBagomTwo from '../public/Udsnit_Organic_bagom_2.jpg'
import OrganicBagomThree from '../public/Udsnit_Organic_bagom_3.jpg'
import Organic from '../public/Udsnit_Organic.jpg'
import OrganicTwo from '../public/Udsnit_Organic_2.jpg'

export default function Hero(props) {

  return (
    <>
      <section className={css.heroSection}>
        <div className={css.heroTop}>
          <h1 className={css.heading}>
            Kreatører af <span className='ivyPrestoItalic'>fantastiske</span> hjemmesider og webshops, mestre af Shopify, SoMe og SEO, samt kæmpe fans af <span className='ivyPrestoItalic'>opfindsom</span> branding
          </h1>
          <div className={css.aside}>
            <div className={css.text}>
              <p>Foruden at levere responsive og søgemaskineoptimerede hjemmesider og netbutikker, udvikler vi unikke visuelle identiteter, skaber spændende billede- og videoindhold, og opfindsom kommunikation. Vi er desuden meget mere end et traditionelt designbureau — vi er også jeres Ecommerce Manager eller SoMe-ansvarlig.</p>
            </div>
            <ul className={css.contact}>
              <li className={css.mail}>
                <Link href='mailto:hello@growupstudio.dk'><a>Kontakt os</a></Link>
              </li>
              <li className={css.icon} style={{ display: 'none' }}>
                <Link href='https://www.behance.net/rieholst/projects'><a><Image src={Behance} layout='responsive'/></a></Link>
              </li>
              <li className={css.icon} style={{ display: 'none' }}>
                <Link href='https://instragram.com/growupstudio.dk'><a><Image src={Instagram} layout='responsive'/></a></Link>
              </li>
              <li className={css.icon} style={{ display: 'none' }}>
                <Link href='https://www.linkedin.com/company/growup-studio/'><a><Image src={Linkedin} layout='responsive'/></a></Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={css.heroMiddle}>
          <div className={css.middleTitle}><span>Udvalgte<span className='ivyPrestoItalic'>opgaver</span></span></div>
          <div className={css.middleInner}>
            <div className={css.columnOne}>
              <div className={css.columnItem} data-number='1' data-sort='01.' data-content='Art Direction for Tinekhome'>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  width='100%'
                  height='100%'
                  style={{ objectFit: 'cover' }}
                  >
                  <source src={'/Tinekhome_plaid_optimized.mp4'} type='video/mp4' />
                </video>
              </div>
              <div className={css.columnItem} data-number='2' data-sort='02.' data-content='Art Direction for The Organic Crave Company'>
                <Image
                  src={OrganicBagomOne}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='bottom'
                  quality='100'
                />
              </div>
              <div className={css.columnItem} data-number='3' data-sort='03.' data-content='SoMe content til The Organic Crave Company ... @theorganiccrave'>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  width='100%'
                  height='100%'
                  style={{ objectFit: 'cover' }}
                  >
                  <source src={'/OrganicBag_optimized.mp4'} type='video/mp4' />
                </video>
              </div>
              <div className={css.columnItem} data-number='4' data-sort='04.' data-content='Art Direction for Twelve inch'>
                <Image
                  src={TwelveInchSix}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='top'
                  quality='100'
                />
              </div>
            </div>
            <div className={css.columnTwo}>
              <div className={css.columnItem} data-number='1' data-sort='05.' data-content='Art Direction for Twelve inch'>
                <Image
                  src={TwelveInchThree}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  quality='100'
                  priority='true'
                />
              </div>
              <div className={css.columnItem} data-number='2' data-sort='06.' data-content='Art Direction for The Organic Crave Company'>
                <Image
                  src={OrganicBagomThree}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  quality='100'
                />
              </div>
              <div className={css.columnItem} data-number='3' data-sort='07.' data-content='Art Direction til billedserie for Twelve inch'>
                <Image
                  src={TwelveInchEight}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  quality='100'
                />
              </div>
              <div className={css.columnItem} data-number='4' data-sort='08.' data-content='Art Direction til billedserie for Twelve inch'>
                <Image
                  src={TwelveInchOne}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='left'
                  quality='100'
                />
              </div>
              <div className={css.columnItem} data-number='5' data-sort='09.' data-content='Logodesign for Chef Jen'>
                <Image
                  src={ChefJenSkilt}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  quality='100'
                />
              </div>
            </div>
            <div className={css.columnThree}>
              <div className={css.columnItem} data-number='1' data-sort='10.' data-content='Billedserie til www.theorganiccrave.com'>
                <Image
                  src={Organic}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='top'
                  quality='100'
                  priority='true'
                />
              </div>
              <div className={css.columnItem} data-number='3' data-sort='11.' data-content='Videoinstruering for The Organic Crave Company'>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  width='100%'
                  height='100%'
                  style={{ objectFit: 'cover' }}
                  >
                  <source src={'/OrganicModel_optimized.mp4'} type='video/mp4' />
                </video>
              </div>
              <div className={css.columnItem} data-number='2' data-sort='12.' data-content='Videoinstruering for The Organic Crave Company'>
                <Image
                  src={OrganicBagomTwo}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  quality='100'
                />
              </div>
              <div className={css.columnItem} data-number='3' data-sort='13.' data-content='SoMe content til The Organic Crave Company ... @theorganiccrave'>
                <Image
                  src={OrganicTwo}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='top'
                  quality='100'
                />
              </div>
            </div>
            <div className={css.columnFour}>
              <div className={css.columnItem} data-number='1' data-sort='14.' data-content='Videoinstruering for ByMickleit'>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  width='100%'
                  height='100%'
                  style={{ objectFit: 'cover' }}
                  >
                  <source src={'/ByMickleit_optimized.mp4'} type='video/mp4' />
                </video>
              </div>
              <div className={css.columnItem} data-number='2' data-sort='15.' data-content='Art Direction for ByMickleit'>
                <Image
                  src={ByMickleit}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  quality='100'
                />
              </div>
              <div className={css.columnItem} data-number='2' data-sort='16.' data-content='SoMe content til The Organic Crave Company ... @theorganiccrave'>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  width='100%'
                  height='100%'
                  style={{ objectFit: 'cover' }}
                  >
                  <source src={'/OrganicBar_optimized.mp4'} type='video/mp4' />
                </video>
              </div>
              <div className={css.columnItem} data-number='3' data-sort='17.' data-content='Art Direction til billedserie for Twelve inch'>
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
        </div>

        <div className={css.heroCaptions}>
          <ul className={css.heroList}>
            <li>Videoinstruering for Tinekhome</li>
            <li>Art Direction for The Organic Crave Company</li>
            <li>Online markedsføring for The Organic Crave Company</li>
            <li>Online markedsføring for The Organic Crave Company</li>
            <li>Instruering af model for The Organic Crave Company</li>
            <li>Online markedsføring for The Organic Crave Company</li>
            <li>Billedinstruering for Twelve Inch</li>
            <li>Billedinstruering for Twelve Inch</li>
            <li>Logodesign for Chef Jen</li>
            <li>Art Direction for The Organic Crave Company</li>
            <li>Online markedsføring for The Organic Crave Company</li>
            <li>Instruering af model for The Organic Crave Company</li>
            <li>Billedinstruering for Twelve Inch</li>
            <li>Videoinstruering for ByMickleit</li>
            <li>Billedinstruering for ByMickleit</li>
            <li>Billedinstruering for Twelve Inch</li>
            <li>Billedinstruering for Twelve Inch</li>
          </ul>
        </div>
      </section>
    </>
  )
}
