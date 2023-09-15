import React from 'react'
import { Link } from '@/components/modules/Link'
import styles from './styles.module.scss'
import LawsIcon from '../../../../public/icon/laws_fill.svg'

type Props = {}

export const Header: React.FC<Props> = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.mainHeader}>
          <div className={styles.headerLogo}>
            <Link href="/">
              <LawsIcon alt="BUNCHO!!!" width={35} height={35} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
