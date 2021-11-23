export default function gScroll () {
  const outerRef = useRef();
  const innerRef = useRef();

  useEffect(() => {
    const a = 5;
    const h = innerRef.current.getBoundingClientRect().height;
    const t = h * a;
    const l = t - h;
    console.log(t)

    outerRef.current.style.height = `${t}px`

    gsap.to(innerRef.current, {
      y: `${l}`,
      ease: 'none',
      scrollTrigger: {
        start: 'top top',
        bottom: 'bottom bottom',
        scrub: true,
      }
    })
  }, [])
}
