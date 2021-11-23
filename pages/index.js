import Hero from '../components/Hero'
import Oversigt from '../components/Oversigt'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import css from '../styles/hero.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Arrow from '../public/link.svg'

export default function Home() {

  return (
    <>
      <Hero />
      <Oversigt />
    </>
  )
}
