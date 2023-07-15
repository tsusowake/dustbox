import React from 'react'
import type { SwiperSlideProps, SwiperProps } from 'swiper/react'

// see https://github.com/nolimits4web/swiper/issues/6466#issuecomment-1478486837
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & SwiperProps, HTMLElement>
      'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & SwiperSlideProps, HTMLElement>
    }
  }
}
