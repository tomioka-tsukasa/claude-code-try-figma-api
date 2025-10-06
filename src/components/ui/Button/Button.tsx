import React from 'react'
import * as styles from './Button.css'

const iconBlank = '/assets/icons/blank.svg'
const iconArrow = '/assets/icons/arrow.svg'

function ButtonIconBlank() {
  return (
    <div className={styles.buttonIconBlank} data-name='button-icon/blank' data-node-id='627:8195'>
      <div className={styles.iconBlankContainer} data-name='icon/blank' data-node-id='627:8190'>
        <div className={styles.iconBlankContent} data-name='container' data-node-id='I627:8190;627:8174'>
          <img alt='' className={styles.iconBlankImage} src={iconBlank} />
        </div>
      </div>
    </div>
  )
}

function ButtonIconArrow() {
  return (
    <div className={styles.buttonIconArrow} data-name='button-icon/arrow' data-node-id='627:8179'>
      <div className={styles.iconArrowContainer} data-name='icon/button-arrow' data-node-id='627:8168'>
        <div className={styles.iconArrowContent} data-name='Vector' data-node-id='I627:8168;610:7714'>
          <img alt='' className={styles.iconArrowImage} src={iconArrow} />
        </div>
      </div>
    </div>
  )
}

interface ButtonProps {
  icon?: React.ReactNode | null
  label?: string
  size?: 'default' | 'large'
  className?: string
}

function Button({ icon = null, label = 'ラベル', size = 'default', className }: ButtonProps) {
  return (
    <div className={`${styles.buttonContainer} ${className || ''}`} data-name='size=default' data-node-id='608:6949'>
      <div className={styles.buttonLabel} data-name='label' data-node-id='627:8198'>
        <div className={styles.buttonText} data-node-id='608:6950'>
          <p className={styles.buttonTextP}>{label}</p>
        </div>
      </div>
      <div className={styles.buttonIconContainer} data-name='icon' data-node-id='610:7734'>
        {icon || <ButtonIconArrow />}
      </div>
    </div>
  )
}

export default Button
export { ButtonIconBlank, ButtonIconArrow }
