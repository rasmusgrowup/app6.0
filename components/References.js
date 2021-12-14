import { useState, useEffect } from 'react'
import Image from 'next/image'
import images from '../utils/images'
import Title from '../components/imageTitle'
import Media from '../components/media'
import css from '../styles/references.module.scss'
import sections from '../styles/sections.module.scss'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({x:0,y:0})

  useEffect(() => {
    const updateMousePosition = () => {
      setMousePosition({x: event.clientX, y: event.clientY})
    }
    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemouve', updateMousePosition);
  }, [])

  return mousePosition
}

export default function References() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const {x, y} = useMousePosition();

  return (
    <>
      <section className={css.referencesSection} id='referencer'>
        <div className={css.inner}>
          <div className={css.upperTeaser}>Vores<span className='ivyPrestoItalic'>referencer</span></div>
          <div className={css.titleList}>
            {images.map(({title, year}, index) => (
              <Title
                key={title}
                title={title}
                year={year}
                setActiveIndex={setActiveIndex}
                index={index}
              />
            ))}
          </div>
          <div className={css.imageList}>
            {images.map(({mediaUrl, title}, index) => {
              const isActive = index === activeIndex
              const xPos = isActive ? x: 0;
              const yPos = isActive ? y: 0;
              return <Media key={title} url={mediaUrl} active={isActive} x={xPos} y={yPos}/>
            })}
          </div>
        </div>
      </section>
    </>
  )
}
