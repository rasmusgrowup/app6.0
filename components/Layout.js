import css from '../styles/header.module.scss'
import main from '../styles/main.module.scss'
import Logo from './Logo';
import Nav from './Nav';
import Menu from './Menu';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <header className={css.mainHeader}>
        <Logo />
        <Nav />
      </header>
      <Menu />
      <main className={main.main}>
        {children}
      </main>
    </>
  )
}
