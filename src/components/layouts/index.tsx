import React, { ComponentProps } from 'react'

import styles from './styles.module.scss'
import { Header } from '@/components/modules/Header'

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <main className={styles.layoutMain}>{children}</main>
  </div>
)
