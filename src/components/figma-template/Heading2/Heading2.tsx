import React from 'react'
import * as styles from './Heading2.css'

interface Heading2Props {
  className?: string
  titleEn?: string
  title?: string
}

export function Heading2({ className, titleEn = 'TITLE', title = 'タイトル' }: Heading2Props) {
  return (
    <div className={`${styles.container} ${className || ''}`} data-name='heading2' data-node-id='37:1545'>
      <p className={styles.titleEn} data-node-id='37:1540'>
        {titleEn}
      </p>
      <p className={styles.title} data-node-id='37:1541'>
        {title}
      </p>
    </div>
  )
}
