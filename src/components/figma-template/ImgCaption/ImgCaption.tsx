import React from 'react'
import { ImgOpt } from '@/components/utils/ImgOpt/ImgOpt'
import * as styles from './ImgCaption.css'

const img = '/src/assets/986cc6493ff9f09f5f9473641daea2a26284dcdc.png'

interface ImgCaptionProps {
  className?: string
  title?: string
  caption?: string
  preset?: 'default' | 'caption' | 'image'
}

export function ImgCaption({
  className,
  title = 'タイトル',
  caption = 'キャプション',
  preset = 'default'
}: ImgCaptionProps) {
  const imageContainer = (
    <div className={styles.imageContainer} data-name='image-container'>
      <div className={styles.imageWrapper} data-name='image'>
        <ImgOpt
          src={img}
          alt=''
          className={styles.image}
        />
      </div>
    </div>
  )

  if (preset === 'caption') {
    return (
      <div className={`${styles.container} ${className || ''}`} data-name='preset=caption' data-node-id='41:1659'>
        {imageContainer}
        <div className={styles.content} data-name='content' data-node-id='41:1662'>
          <p className={styles.caption} data-node-id='41:1664'>
            {caption}
          </p>
        </div>
      </div>
    )
  }

  if (preset === 'image') {
    return (
      <div className={`${styles.container} ${className || ''}`} data-name='preset=image' data-node-id='41:1742'>
        {imageContainer}
      </div>
    )
  }

  return (
    <div className={`${styles.container} ${className || ''}`} data-name='preset=default' data-node-id='21:1624'>
      {imageContainer}
      <div className={styles.content} data-name='content' data-node-id='21:1622'>
        <p className={styles.title} data-node-id='21:1623'>
          {title}
        </p>
        <p className={styles.caption} data-node-id='41:1656'>
          {caption}
        </p>
      </div>
    </div>
  )
}
