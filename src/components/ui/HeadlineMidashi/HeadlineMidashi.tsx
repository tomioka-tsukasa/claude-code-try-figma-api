import React from 'react'
import * as styles from './HeadlineMidashi.css'

interface HeadlineMidashiProps {
  children: React.ReactNode
  color?: 'black' | 'gray'
  className?: string
}

function HeadlineMidashi({ children, color = 'black', className }: HeadlineMidashiProps) {
  const colorClass = color === 'black' ? styles.textBlack : styles.textGray

  return (
    <div className={`${styles.container} ${className || ''}`} data-name='Headline_midashi'>
      <div className={`${styles.text} ${colorClass}`}>
        <p className={styles.textP}>{children}</p>
      </div>
    </div>
  )
}

export default HeadlineMidashi
