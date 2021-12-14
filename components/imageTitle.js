import React from 'react'
import css from '../styles/references.module.scss'

export default ({ title, year, setActiveIndex, index }) => (
  <>
    <div className={css.imageTitle}
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(-1)}
    >
      <div className={css.imageTitleInner}>
        <h3>{title}</h3><span className={css.imageYear}>{year}</span>
      </div>
    </div>
  </>
)
