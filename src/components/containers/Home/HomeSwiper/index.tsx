'use client'

import styles from './styles.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { register } from 'swiper/element/bundle'
import { useRef } from 'react'
import Swiper from 'swiper'
import NextImage from 'next/image'

type Props = {
  images: {
    src: string
    alt: string
  }[]
}

register()

type SwiperRef = HTMLElement & { swiper: Swiper; initialize: () => void }

export default function HomeSwiper({ images }: Props) {
  const swiperRef = useRef<SwiperRef>(null)
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)
  const scrollbarRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.swiperContainer}>
      <swiper-container
        ref={swiperRef}
        slides-per-view="3"
        slides-per-group="3"
        space-between="20"
        navigation={{
          nextEl: prevRef.current,
          prevEl: nextRef.current,
        }}
        // see https://swiperjs.com/swiper-api#scrollbar
        // いい感じに style
        scrollbar={{
          el: scrollbarRef.current,
          draggable: true,
        }}
      >
        {images.map((item) => (
          <swiper-slide key={item.src}>
            <NextImage src={item.src} alt={item.alt} width={450} height={236} />
          </swiper-slide>
        ))}
        <div ref={prevRef} />
        <div ref={nextRef} />
        <div ref={scrollbarRef} />
      </swiper-container>
    </div>
  )
}
