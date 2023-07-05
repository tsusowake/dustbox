"use client"

import Image from 'next/image'
import styles from './page.module.css'

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

export default function Home() {
  const slideItems = []
  for (let i = 1; i <= 10; i++) {
    slideItems.push({ src: `/img/buncho.${i}.jpg`, alt: `buncho.${i}.jpg`, })
  }

  const pagination = useRef<HTMLDivElement>(null)
  const prev = useRef<HTMLDivElement>(null)
  const next = useRef<HTMLDivElement>(null)

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.swiperJsDemo}>
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
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            effect='flip'
          >
            {slideItems.map((item) => (
              <SwiperSlide
                className={styles.slide}
                key={item.src}
              >
                <NextImage src={item.src} alt={item.alt} fill sizes={sizes} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.pagination} ref={pagination} />
          <div className="swiper-button-prev" ref={prev}></div>
          <div className="swiper-button-next" ref={next}></div>
        </div>
      </div>
    </main>
  )
}
