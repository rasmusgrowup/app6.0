import React, { useState, useCallback, useRef, useEffect } from 'react'
import Image from 'next/image'
import css from '../styles/references.module.scss'

const getDimensionObject = (node) => {
  const rect = node.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height
  }
}

const useSize = () => {
  const [dimensions, setDimensions] = useState({})
  const [node, setNode] = useState(null);
  const ref = useCallback(node=>{
    setNode(node)
  }, [])

  useEffect(() => {
    if(node) {
      const measure = () => setDimensions(getDimensionObject(node));
      measure();
    }
  }, [node])

  return [ref, dimensions];
}

export default ({url, title, active, x, y}) => {
  const [ref, {width, height}] = useSize();

  return (
    <div
      className={css.imageInner}
      ref={ref}
      style={{
        transform: `translate(${x - width/2}px, ${y - height/2}px)`
      }}
    >
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
  );
}
