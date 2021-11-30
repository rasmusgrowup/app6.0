import css from '../styles/reviews.module.scss'

import Image from 'next/image';
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import ByMickleit from '../public/bymickleit.jpg'
import Corpus from '../public/corpus.jpg'
import Cozy from '../public/cozy.jpg'
import Dabea from '../public/dabea.jpg'
import Daniel from '../public/daniel.jpg'
import Desmi from '../public/desmi.jpg'
import Karens from '../public/karensbord.jpg'
import Kirstine from '../public/kirstine.jpg'
import Lustrup from '../public/lustrup.jpg'
import Pral from '../public/pral.jpg'
import Stoj from '../public/stöj.jpg'
import Organic from '../public/organic_hand.jpg'
import Tinekhome from '../public/tinekhome.jpg'
import Twelveinch from '../public/twelve-inch-wall.jpg'

gsap.registerPlugin(ScrollTrigger);

export default function Reviews() {
  const ref = useRef();
  const line = useRef();
  const q = gsap.utils.selector(ref);
  const tl = gsap.timeline();

  useEffect(() => {

    gsap.to(line.current, {
      scrollTrigger: {
        trigger: line.current,
        endTrigger: '#lastReference',
        end: 'center center',
        start: 'center center',
        pin: true,
        pinSpacing: false,
      }
    })

    ScrollTrigger.batch(q('.animTrigger'), {
      start: 'top center',
      end: 'bottom center',
      toggleClass: `${css.insetAnimation}`,
    });
  }, [])

  return (
    <>
      <section className={css.reviewsSection} ref={ref}>

      <span className={`${css.line} lineAnim`} ref={line}></span>

        <div className={`${css.reviewWrapper} animTrigger`} id='firstReference'>
          <div className={css.reviewReference} data-text='ByMickleit'>
            <span className={css.referenceName}>ByMickleit</span>
            <span className={css.referenceYear}>( 2018 )</span>
            </div>
          <div className={`${css.reviewImage} imageAnim`}>
            <Image src={ByMickleit} width='340' height='480' objectFit='cover' quality='100'/>
          </div>
        </div>

        <div className={`${css.reviewWrapper} animTrigger`}>
          <div className={css.reviewReference} data-text='Corpus Care Clinic'>
            <span className={`${css.referenceName} textAnim`}>Corpus Care Clinic</span>
            <span className={css.referenceYear}>( 2020 )</span>
            </div>
          <div className={`${css.reviewImage} imageAnim`}>
            <Image src={Corpus} width='340' height='480' objectFit='cover' quality='100'/>
          </div>
        </div>

        <div className={`${css.reviewWrapper} animTrigger`}>
          <div className={css.reviewReference} data-text='Cozy Living'>
            <span className={`${css.referenceName} textAnim`}>Cozy Living</span>
            <span className={css.referenceYear}>( 2018 )</span>
            </div>
          <div className={`${css.reviewImage} imageAnim`}>
            <Image src={Cozy} width='340' height='480' objectFit='cover' quality='100'/>
          </div>
        </div>

        <div className={`${css.reviewWrapper} animTrigger`}>
          <div className={css.reviewReference} data-text='DABEA'>
            <span className={`${css.referenceName} textAnim`}>DABEA</span>
            <span className={css.referenceYear}>( 2021 )</span>
            </div>
          <div className={`${css.reviewImage} imageAnim`}>
            <Image src={Dabea} width='340' height='480' objectFit='cover' quality='100'/>
          </div>
        </div>

        <div className={`${css.reviewWrapper} animTrigger`}>
          <div className={css.reviewReference} data-text='Daniel Wagner'>
            <span className={`${css.referenceName} textAnim`}>Daniel Wagner</span>
            <span className={css.referenceYear}>( 2021 )</span>
            </div>
          <div className={`${css.reviewImage} imageAnim`}>
            <Image src={Daniel} width='480' height='340' objectFit='cover' quality='100'/>
          </div>
        </div>

        <div className={`${css.reviewWrapper} animTrigger`}>
          <div className={css.reviewReference} data-text='Desmi'>
            <span className={`${css.referenceName} textAnim`}>Desmi</span>
            <span className={css.referenceYear}>( 2018 )</span>
            </div>
          <div className={`${css.reviewImage} imageAnim`}>
            <Image src={Desmi} width='500' height='340' objectFit='cover' quality='100'/>
          </div>
        </div>

        <div className={`${css.reviewWrapper} animTrigger`}>
          <div className={css.reviewReference} data-text='Karens Bord'>
            <span className={`${css.referenceName} textAnim`}>Karens Bord</span>
            <span className={css.referenceYear}>( 2021 )</span>
            </div>
          <div className={`${css.reviewImage} imageAnim`}>
            <Image src={Karens} width='340' height='480' objectFit='cover' quality='100'/>
          </div>
        </div>

        <div className={`${css.reviewWrapper} animTrigger`}>
          <div className={css.reviewReference} data-text='Kirstine Mengel'>
            <span className={`${css.referenceName} textAnim`}>Kirstine Mengel</span>
            <span className={css.referenceYear}>( 2021 )</span>
            </div>
          <div className={`${css.reviewImage} imageAnim`}>
            <Image src={Kirstine} width='340' height='480' objectFit='cover' quality='100'/>
          </div>
        </div>

        <div className={`${css.reviewWrapper} animTrigger`}>
          <div className={css.reviewReference} data-text='Lustrup Farmhouse'>
            <span className={`${css.referenceName} textAnim`}>Lustrup Farmhouse</span>
            <span className={css.referenceYear}>( 2021 )</span>
            </div>
          <div className={`${css.reviewImage} imageAnim`}>
            <Image src={Lustrup} width='500' height='340' objectFit='cover' quality='100'/>
          </div>
        </div>

        <div className={`${css.reviewWrapper} animTrigger`}>
          <div className={css.reviewReference} data-text='Pral'>
            <span className={`${css.referenceName} textAnim`}>Pral</span>
            <span className={css.referenceYear}>( 2021 )</span>
            </div>
          <div className={`${css.reviewImage} imageAnim`}>
            <Image src={Pral} width='500' height='340' objectFit='cover' quality='100'/>
          </div>
        </div>

        <div className={`${css.reviewWrapper} animTrigger`}>
          <div className={css.reviewReference} data-text='Stöj'>
            <span className={`${css.referenceName} textAnim`}>Stöj</span>
            <span className={css.referenceYear}>( 2021 )</span>
            </div>
          <div className={`${css.reviewImage} imageAnim`}>
            <Image src={Stoj} width='340' height='480' objectFit='cover' quality='100'/>
          </div>
        </div>

        <div className={`${css.reviewWrapper} animTrigger`}>
          <div className={css.reviewReference} data-text='The Organic Crave'>
            <span className={`${css.referenceName} textAnim`}>The Organic Crave</span>
            <span className={css.referenceYear}>( 2021 )</span>
            </div>
          <div className={`${css.reviewImage} imageAnim`}>
            <Image src={Organic} width='440' height='340' objectFit='cover' quality='100'/>
          </div>
        </div>

        <div className={`${css.reviewWrapper} animTrigger`}>
          <div className={css.reviewReference} data-text='Tinekhome'>
            <span className={`${css.referenceName} textAnim`}>Tinekhome</span>
            <span className={css.referenceYear}>( 2021 )</span>
            </div>
          <div className={`${css.reviewImage} imageAnim`}>
            <Image src={Tinekhome} width='340' height='480' objectFit='cover' quality='100'/>
          </div>
        </div>


        <div className={`${css.reviewWrapper} animTrigger`} id='lastReference'>
          <div className={css.reviewReference} data-text='Twelve Inch'>
            <span className={`${css.referenceName} textAnim`}>Twelve Inch</span>
            <span className={css.referenceYear}>( 2021 )</span>
            </div>
          <div className={`${css.reviewImage} imageAnim`}>
            <Image src={Twelveinch} width='500' height='340' objectFit='cover' quality='100'/>
          </div>
        </div>

      </section>
    </>
  )
}
