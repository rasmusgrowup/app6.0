import React from 'react'
import css from '../styles/references.module.scss'

const ImageTitle = ({ title, year, setActiveIndex, index }) => {
  return (
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
}
export default ImageTitle
