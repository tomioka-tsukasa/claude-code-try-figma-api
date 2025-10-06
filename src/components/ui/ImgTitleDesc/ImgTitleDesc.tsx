import React from 'react'
import ImgOpt from '../../utils/ImgOpt/ImgOpt'
import { imgTitleDescStyles, imageStyles, innerStyles, contentStyles, titleStyles, descStyles } from './ImgTitleDesc.css'

export interface ImgTitleDescProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  className?: string;
}

export default function ImgTitleDesc({
  src,
  alt,
  title,
  description,
  className = ''
}: ImgTitleDescProps) {
  return (
    <div className={`${imgTitleDescStyles} ${className}`} data-name='img_title_desc'>
      <div className={imageStyles} data-name='image'>
        <ImgOpt
          src={src}
          alt={alt}
        />
      </div>
      <div className={innerStyles} data-name='inner'>
        <div className={contentStyles} data-name='content'>
          <p className={titleStyles}>
            {title}
          </p>
          <p className={descStyles}>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
