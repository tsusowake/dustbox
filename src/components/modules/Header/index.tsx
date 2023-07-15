import React from 'react'
import { Link } from '@/components/modules/Link'
import styles from './styles.module.scss'
import NextImage from 'next/image'

type Props = {}

export const Header: React.FC<Props> = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.mainHeader}>
          <div className={styles.headerLogo}>
            <Link href="/">
              <NextImage
                className={styles.headerLogo}
                src={'/icon/laws_line.svg'}
                alt="BUNCHO!!!"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
