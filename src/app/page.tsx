'use client'

import styles from './page.module.scss'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import NextImage from 'next/image'
import { useRef } from 'react'
import useSWR, { Fetcher } from 'swr'
import { fetchImages } from '@/api/image'

const sizes = [
  '(max-width: 600px) 150px',
  '(max-width: 900px) 300px',
  '(max-width: 1200px) 450px',
  '(max-width: 1536px) 600px',
  '750px',
].join(',')

export default function Home() {
  const { data, error, isLoading } = useSWR('/images', fetchImages)

  const pagination = useRef<HTMLDivElement>(null)
  const prev = useRef<HTMLDivElement>(null)
  const next = useRef<HTMLDivElement>(null)

  if (isLoading) {
    return <>Loading...</>
  }
  if (error) {
    return <div>Error: {error}</div>
  }
  if (!data) {
    return <div>data is empty</div>
  }

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
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            effect="flip"
          >
            {data.images.map((item) => (
              <SwiperSlide className={styles.slide} key={item.src}>
                <NextImage src={item.src!} alt={item.alt!} fill sizes={sizes} />
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
