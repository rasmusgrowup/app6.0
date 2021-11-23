import css from '../styles/header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Arrow from '../public/arrow_white.svg'

export default function Logo() {
  return (
    <>
      <Link href='/'>
        <a className={css.logo}><span className={css.logoType}>Growup Studio</span><Image src={Arrow} className={css.logoArrow}/></a>
      </Link>
    </>
  )
}
