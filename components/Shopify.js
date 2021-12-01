import Image from 'next/image'
import css from '../styles/screen.module.scss'

import OrganicGif from '../public/OrganicScreenPlay.gif'
import OrganicScreen from '../public/OrganicScreenShot.jpg'

export default function Shopify() {
  return(
    <>
      <section className={css.shopifySection}>
        <div className={css.screenShotWrapper}>
          <div className={css.screenShot}>
            <Image
              src={OrganicScreen}
              layout='fill'
              objectFit='cover'
              objectPosition='top'
              quality='100'
            />
          </div>
          <div className={css.screenPlay}>
            <Image
              src={OrganicGif}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              quality='100'
            />
          </div>
        </div>
      </section>
    </>
  )
}
