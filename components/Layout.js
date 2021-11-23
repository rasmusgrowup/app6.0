import css from '../styles/header.module.scss'
import main from '../styles/main.module.scss'
import Logo from '../components/Logo';
import Nav from '../components/Nav';

import { useRef, useEffect } from "react";

export default function Layout({ children }) {

  return (
    <>
        <header className={css.mainHeader}>
          <Logo />
          <Nav />
        </header>
        <main className={main.main}>
          {children}
        </main>
    </>
  )
}
