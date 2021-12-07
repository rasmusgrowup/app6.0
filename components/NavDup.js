import css from '../styles/header.module.scss'
import Link from 'next/link'
import { MenuContext } from "../hooks/menuContext";
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

export default function Nav() {
  const router = useRouter();
  const { toggle, toggleFunction} = useContext(MenuContext);

  return (
    <>
      <nav className={css.navContainer}>
        <Link href='/'>
          <a className={router.pathname == '/' ? `${css.navLink} ${css.activeNavLink}` : `${css.navLink}`}>Om os</a>
        </Link>
        <div className={css.menuActivator} onClick={toggleFunction}>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  )
}
