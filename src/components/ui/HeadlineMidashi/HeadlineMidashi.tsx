import React from 'react'
import { headlineStyles } from './HeadlineMidashi.css'

export interface HeadlineMidashiProps {
  children: React.ReactNode;
  className?: string;
}

export default function HeadlineMidashi({
  children,
  className = ''
}: HeadlineMidashiProps) {
  return (
    <p className={`${headlineStyles} ${className}`} data-name='Headline_midashi'>
      {children}
    </p>
  )
}
