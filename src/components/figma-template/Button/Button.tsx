import React from 'react'
import * as styles from './Button.css'

interface ButtonProps {
  className?: string
  label?: string
}

export function Button({ className, label = 'ラベル' }: ButtonProps) {
  return (
    <div className={`${styles.container} ${className || ''}`} data-name='button' data-node-id='36:2124'>
      <div className={styles.content}>
        <p className={styles.label} data-node-id='29:1568'>
          {label}
        </p>
        <div className={styles.arrow} data-name='arrow' data-node-id='29:1573'>
          <div className={styles.arrowLineContainer1}>
            <div className={styles.arrowLineInner1}>
              <div className={styles.arrowLineBottom} data-name='arrow-line-botttom' data-node-id='29:1571' />
            </div>
          </div>
          <div className={styles.arrowLineContainer2}>
            <div className={styles.arrowLineInner2}>
              <div className={styles.arrowLineTop} data-name='arrow-line-top' data-node-id='29:1570' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
