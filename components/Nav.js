import css from '../styles/header.module.scss'
import Link from 'next/link'

export default function Nav() {
  return (
    <>
      <nav className={css.navContainer}>
        <Link href='/'>
          <a className={css.navLink}>Om os</a>
        </Link>
        <Link href='/'>
          <a className={css.navLink}>Løsninger</a>
        </Link>
        <Link href='/'>
          <a className={css.navLink}>Cases</a>
        </Link>
        <Link href='/'>
          <a className={css.navLink}>Priser</a>
        </Link>
        <div className={css.menuActivator}>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  )
}
