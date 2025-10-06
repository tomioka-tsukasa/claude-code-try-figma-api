import React from 'react'
import { buttonStyles } from './Button.css'

export interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  size?: 'default' | 'large';
  onClick?: () => void;
  className?: string;
}

export default function Button({
  label,
  icon,
  size = 'default',
  onClick,
  className = ''
}: ButtonProps) {
  return (
    <button
      className={`${buttonStyles} ${className}`}
      onClick={onClick}
      data-name='button'
    >
      <span className='button-label'>
        {label}
      </span>
      {icon && (
        <span className='button-icon'>
          {icon}
        </span>
      )}
    </button>
  )
}
