import css from '../styles/os.module.scss'
import Image from 'next/image'

import OsBig from '../public/os_2.jpg'
import OsSmall from '../public/os.jpg'

export default function Os() {
  return (
    <>
      <section className={css.osSection}>
        <div className={css.osWrapper}>
          <div className={css.column}>
          <h2 className={css.title}>Lad os føre jer fra idé til færdigt produkt — og <span className='ivyPrestoItalic'>videre</span> endnu.
            <small>Slip for at ansætte dyre medarbejdere — brug i stedet os, som jeres Ecommerce Manager eller SoMe-ansvarlig.</small>
          </h2>
          <p>
            Klarer i det hele selv for jeres virksomhed? Det kan vi godt relatere til. Growup eksisterer netop for at aflaste start-ups og virksomheder, og føre dem et skridt tættere på, at blive et voksent brand. Lad os stå for jeres webshop og visuelle kommunikation — så bliver der mere tid til at pleje forretningen, og tage jer af jeres egne kunder.
          </p>
          </div>
          <div className={css.images}>
            <div className={css.smallImage}>
              <Image src={OsBig} layout='responsive' quality='100'/>
            </div>
            <div className={css.bigImage}>
              <Image src={OsSmall} layout='responsive' quality='100'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
