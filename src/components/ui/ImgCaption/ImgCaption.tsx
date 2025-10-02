import React from 'react'
import * as styles from './ImgCaption.css'
import ImgOpt from '@/components/utils/ImgOpt/ImgOpt'

interface ImgCaptionProps {
  src: string
  caption: string
  width?: string
  height?: string
  className?: string
}

function ImgCaption({ src, caption, width = '370px', height = '238px', className }: ImgCaptionProps) {
  return (
    <div className={`${styles.container} ${className || ''}`} style={{ width, height }} data-name='img_caption'>
      <div className={styles.imageContainer} data-name='image'>
        <ImgOpt alt='' className={styles.image} src={src} />
        <div aria-hidden='true' className={styles.imageBorder} />
      </div>
      <div className={styles.inner} data-name='inner'>
        <div className={styles.innerContent}>
          <div className={styles.content} data-name='content'>
            <div className={styles.captionText}>
              <p className={styles.captionP}>{caption}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImgCaption
