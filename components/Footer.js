import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Arrow from '../public/arrow_white.svg'
import css from '../styles/footer.module.scss'

import OsBig from '../public/os_2_bw.jpg'
import OsSmall from '../public/os.jpg'

export default function Footer() {
  const mailRef = useRef();
  const footer = useRef();

  return (
    <>
      <footer className={css.mainFooter} ref={footer}>
        <div className={css.footerLeft}>
          <div className={css.footerContact}>
            <Link href='mailto:hello@growupstudio.dk'><a className={css.footerMail} ref={mailRef}>Arbejd med os</a></Link>
          </div>
          <p className={css.footerSeller}>Kontakt os, hvis i  leder efter hjælp til art direction, branding, hjemmesider, netbutikker, SEO eller SoMe, og i samtidig har et ønske om at finde en seriøst og pro-aktiv samarbejdspartner, der har jeres bedste får øje.</p>
          <div className={css.footerPhone} id='rie'>
            <Link href='tel:+4530703048'><a className={css.phoneLink}>+45 30 70 30 48</a></Link>
            <span>Ring til Rie for at få hjælp til art direction, branding eller SoMe</span>
          </div>
          <div className={css.footerPhone} id='rie'>
            <Link href='tel:+4530703048'><a className={css.phoneLink}>+45 31 62 37 33</a></Link>
            <span>Ring til Rasmus for nye samarbejder, SEO og webudvikling.</span>
          </div>
          <div className={css.footerSocials}>
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
          <div className={css.footerBottom}>
            <p className={css.first}>© 2021 Growup Aps</p>
            <p className={css.second}>Cookie-frit website</p>
            <p className={css.third}>CVR 39852640</p>
          </div>
        </div>
        <div className={css.footerRight}>
        <div className={css.images}>
          <div className={css.smallImage}>
            <Image src={OsBig} layout='responsive' quality='100'/>
          </div>
          <div className={css.bigImage}>
            <Image src={OsSmall} layout='responsive' quality='100'/>
          </div>
        </div>
        </div>
      </footer>
    </>
  )
}
