'use client'

import styles from './styles.module.scss'

import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import NextImage from 'next/image'
import { useRef } from 'react'

const sizes = [
  '(max-width: 600px) 150px',
  '(max-width: 900px) 300px',
  '(max-width: 1200px) 450px',
  '(max-width: 1536px) 600px',
  '750px',
].join(',')

type Props = {
  images: {
    src: string
    alt: string
  }[]
}

export default function HomeSwiper({ images }: Props) {
  const pagination = useRef<HTMLDivElement>(null)
  const prev = useRef<HTMLDivElement>(null)
  const next = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: pagination.current,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        effect="flip"
      >
        {images.map((item) => (
          <SwiperSlide className={styles.swiperSlide} key={item.src}>
            <NextImage src={item.src} alt={item.alt} fill sizes={sizes} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.pagination} ref={pagination} />
      <div className="swiper-button-prev" ref={prev} />
      <div className="swiper-button-next" ref={next} />
    </div>
  )
}
