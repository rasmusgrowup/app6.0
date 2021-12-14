import css from '../styles/header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Arrow from '../public/arrow_white.svg'
import Hand from '../public/CartoonHand.svg'

export default function Logo() {
  return (
    <>
      <Link href='/'>
        <a className={css.logo}>
          <span className={css.logoType}>Growup</span>
          <span className={css.logoArrowWrapper}><Image src={Arrow} className={css.logoArrow} layout='responsive'/></span>
        </a>
      </Link>
    </>
  )
}
