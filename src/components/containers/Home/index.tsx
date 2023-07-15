'use client'

import styles from './styles.module.scss'
import HomeSwiper from './HomeSwiper'
import { useHomeData } from './hooks/useHomeData'
import { useHomeService } from './hooks/useHomeService'

export default function Home() {
  const { data, errors, isLoading } = useHomeService()
  const { images } = useHomeData({ data: data?.images ?? [] })

  if (isLoading) {
    return <>Loading...</>
  }
  if (errors) {
    return <div>Errors...</div>
  }
  if (!data) {
    return <div>data is empty</div>
  }

  return (
    <div className={styles.homeContainer}>
      <HomeSwiper images={images} />
    </div>
  )
}
