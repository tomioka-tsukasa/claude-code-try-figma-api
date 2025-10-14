import React from 'react'
import { ImgOpt } from '@/components/utils/ImgOpt/ImgOpt'
import { Button } from '../Button/Button'
import * as styles from './ProductCard.css'

const imgImage = '/assets/images/a249f8cacf66d929a65da0b46a79c2e0111f54d3.png'

interface ProductCardProps {
  className?: string
  number?: string
  titleEn?: string
  title?: string
  price?: string
  direction?: 'default' | 'reverse'
}

export function ProductCard({
  className,
  number = '000',
  titleEn = 'TITLE',
  title = 'タイトル',
  price = '金額',
  direction = 'default'
}: ProductCardProps) {
  if (direction === 'reverse') {
    return (
      <div className={`${styles.containerReverse} ${className || ''}`} data-name='direction=reverse' data-node-id='41:1619'>
        <div className={styles.contentReverse} data-name='content' data-node-id='41:1622'>
          <div className={styles.headReverse} data-name='head' data-node-id='41:1623'>
            <p className={styles.numberReverse} data-node-id='41:1624'>
              {number}
            </p>
            <div className={styles.titleContainerReverse} data-name='title' data-node-id='41:1625'>
              <p className={styles.titleEnReverse} data-node-id='41:1626'>
                {titleEn}
              </p>
              <p className={styles.titleReverse} data-node-id='41:1627'>
                {title}
              </p>
            </div>
            <p className={styles.priceReverse} data-node-id='41:1628'>
              {price}
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <Button className={styles.button} />
          </div>
        </div>
        <div className={styles.imageContainerReverse} data-name='image_container' data-node-id='41:1620'>
          <div className={styles.imageWrapperReverse} data-name='image' data-node-id='41:1621'>
            <ImgOpt
              src={imgImage}
              alt=''
              className={styles.image}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.container} ${className || ''}`} data-name='direction=default' data-node-id='29:1566'>
      <div className={styles.imageContainer} data-name='image_container' data-node-id='29:1564'>
        <div className={styles.imageWrapper} data-name='image' data-node-id='36:2139'>
          <ImgOpt
            src={imgImage}
            alt=''
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content} data-name='content' data-node-id='29:1558'>
        <div className={styles.head} data-name='head' data-node-id='36:2137'>
          <p className={styles.number} data-node-id='29:1559'>
            {number}
          </p>
          <div className={styles.titleContainer} data-name='title' data-node-id='29:1560'>
            <p className={styles.titleEn} data-node-id='29:1561'>
              {titleEn}
            </p>
            <p className={styles.title} data-node-id='29:1562'>
              {title}
            </p>
          </div>
          <p className={styles.price} data-node-id='29:1563'>
            {price}
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <Button className={styles.button} />
        </div>
      </div>
    </div>
  )
}
