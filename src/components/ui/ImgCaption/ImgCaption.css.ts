import { style } from '@vanilla-extract/css'
import designData from '../../../lib/figma-library/design-data.json'

export const imgCaptionStyles = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '11px',
  height: '238px',
  width: '370px',
  borderRadius: '3px',
})

export const imageStyles = style({
  flex: 1,
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '3px 3px 0 0',
  overflow: 'hidden',
  position: 'relative',

  selectors: {
    '& img': {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '3px 3px 0 0',
    }
  }
})

export const innerStyles = style({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  width: '100%',
})

export const contentStyles = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  flex: 1,
  height: '100%',
  overflow: 'hidden',
})

export const captionStyles = style({
  fontFamily: 'Inter, "Noto Sans JP", sans-serif',
  fontSize: '12px',
  lineHeight: '19px',
  color: designData.design_tokens.colors.Basic_Medium,
  margin: 0,
  width: '100%',
})
