import { style } from '@vanilla-extract/css'
import designData from '../../../lib/figma-library/design-data.json'

export const buttonStyles = style({
  backgroundColor: designData.design_tokens.colors.Basic_Dark,
  color: designData.design_tokens.colors.Basic_White,
  border: 'none',
  borderRadius: '3px',
  padding: '18px 22px 18px 20px',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  cursor: 'pointer',
  fontFamily: 'Arial, "Noto Sans JP", sans-serif',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: '16px',
  textAlign: 'left',
  width: '100%',

  selectors: {
    '&:hover': {
      opacity: 0.8,
    },
  },

  '@media': {
    'screen and (min-width: 768px)': {
      maxWidth: '370px',
    },
  },
})
