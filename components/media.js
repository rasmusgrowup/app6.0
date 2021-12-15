import React, { useState, useCallback, useRef, useEffect } from 'react'
import Image from 'next/image'
import css from '../styles/references.module.scss'

const ImageMedia = ({url, title, active, x, y}) => {
  return (
    <div
      className={css.imageWrapper}
      style={{
        left: `${x}px`,
        top: `${y}px`
      }}
    >
      <div className={css.imageInner}>
        <Image
          src={url}
          layout='fill'
          className={active ? `${css.image } ${css.isActive}` : `${css.image}`}
          alt={title}
          objectFit='cover'
          objectPosition='center'
          quality='75'
        />
      </div>
    </div>
  );
}
export default ImageMedia
