import css from '../styles/header.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav() {
  const router = useRouter();

  return (
    <>
      <nav className={css.navContainer}>
        <Link href='/'>
          <a className={router.pathname == '/' ? `${css.navLink} ${css.activeNavLink}` : `${css.navLink}`}>Intro</a>
        </Link>
        <Link href='/'>
          <a className={css.navLink}>Løsninger</a>
        </Link>
        <Link href='/'>
          <a className={css.navLink}>Cases</a>
        </Link>
        <div className={css.menuActivator} style={{ display: 'none' }}>
          <span></span>
          <span></span>
        </div>
        <div className={css.menuButton}>Menu</div>
      </nav>
    </>
  )
}
