import React from 'react'
import * as styles from './ImgTitleDesc.css'
import ImgOpt from '@/components/utils/ImgOpt/ImgOpt'

const imgImage = 'http://localhost:3845/assets/c032e6248e86eb0e3ee59f6ae2bd6b49aaef9b8b.png'

interface ImgTitleDescProps {
  title?: string
  desc?: string
  iconIsArrow?: boolean
  iconIsExternal?: boolean
  pattern?: 'white_bg' | 'default'
  imageUrl?: string
}

const ImgTitleDesc: React.FC<ImgTitleDescProps> = ({
  title = 'タイトル',
  desc = '説明文',
  iconIsArrow = true,
  iconIsExternal = true,
  pattern = 'default',
  imageUrl = imgImage,
}) => {
  if (pattern === 'white_bg') {
    return (
      <article className={styles.containerWhiteBg} data-name='pattern=white_bg' data-node-id='608:6998'>
        <div className={styles.imageContainerWhiteBg} data-name='image' data-node-id='608:8033'>
          <ImgOpt alt={title} src={imageUrl} />
          <div aria-hidden='true' className={styles.imageBorderWhiteBg} />
        </div>
        <div className={styles.innerWhiteBg} data-name='inner' data-node-id='608:7001'>
          <div className={styles.contentWhiteBg} data-name='content' data-node-id='608:7002'>
            <p className={styles.titleText} data-node-id='608:8121'>
              {title}
            </p>
            {desc && (
              <p className={styles.descText} data-node-id='608:8129'>
                {desc}
              </p>
            )}
          </div>
          {(iconIsArrow || iconIsExternal) && (
            <div className={styles.iconContainer} data-node-id='608:7005'>
              <span></span>
            </div>
          )}
        </div>
      </article>
    )
  }

  return (
    <article className={styles.containerDefault} data-name='pattern=default' data-node-id='608:6996'>
      <div className={styles.imageContainerDefault} data-name='image' data-node-id='608:6964'>
        <ImgOpt alt={title} src={imageUrl} />
        <div aria-hidden='true' className={styles.imageBorderDefault} />
      </div>
      <div className={styles.innerDefault} data-name='inner' data-node-id='608:6965'>
        <div className={styles.innerWrapperDefault}>
          <div className={styles.contentDefault} data-name='content' data-node-id='608:6966'>
            <p className={styles.titleText} data-node-id='608:8121'>
              {title}
            </p>
            {desc && (
              <p className={styles.descText} data-node-id='608:8129'>
                {desc}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ImgTitleDesc
