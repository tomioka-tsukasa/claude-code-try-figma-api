import React from 'react'
import ImgOpt from '../../utils/ImgOpt/ImgOpt'
import { imgCaptionStyles, imageStyles, innerStyles, contentStyles, captionStyles } from './ImgCaption.css'

export interface ImgCaptionProps {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}

export default function ImgCaption({
  src,
  alt,
  caption,
  className = ''
}: ImgCaptionProps) {
  return (
    <div className={`${imgCaptionStyles} ${className}`} data-name='img_caption'>
      <div className={imageStyles} data-name='image'>
        <ImgOpt
          src={src}
          alt={alt}
        />
      </div>
      <div className={innerStyles} data-name='inner'>
        <div className={contentStyles} data-name='content'>
          <p className={captionStyles}>
            {caption}
          </p>
        </div>
      </div>
    </div>
  )
}
