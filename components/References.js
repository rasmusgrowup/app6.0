import Image from 'next/image'
import css from '../styles/references.module.scss'
import sections from '../styles/sections.module.scss'

export default function References() {
  return (
    <>
      <section className={css.referencesSection} id='referencer'>
        <div className={sections.sectionTitle} id='referencesTitle'>
          <span className={sections.titleNumber}>04.</span>
          <h2>Referencer</h2>
        </div>
      </section>
    </>
  )
}
