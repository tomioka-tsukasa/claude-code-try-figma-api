import { style } from '@vanilla-extract/css'

export const buttonContainer = style({
  backgroundColor: '#000000',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  paddingLeft: '20px',
  paddingRight: '22px',
  paddingTop: '18px',
  paddingBottom: '18px',
  borderRadius: '3px',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
})

export const buttonLabel = style({
  flex: '1 1 0%',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  minHeight: '1px',
  minWidth: '1px',
})

export const buttonText = style({
  fontFamily: '\'Arial:Bold\', \'Noto Sans JP:Bold\', sans-serif',
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: '0',
  color: '#ffffff',
  whiteSpace: 'nowrap',
})

export const buttonTextP = style({
  lineHeight: '16px',
  whiteSpace: 'pre',
  margin: 0,
})

export const buttonIconContainer = style({
  display: 'inline-grid',
  gridTemplateColumns: 'max-content',
  gridTemplateRows: 'max-content',
  placeItems: 'start',
  lineHeight: '0',
})

export const buttonIconBlank = style({
  gridArea: '1 / 1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '10px',
  width: '12px',
  marginLeft: 0,
  marginTop: 0,
  boxSizing: 'border-box',
})

export const iconBlankContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  height: '12px',
  width: '12px',
})

export const iconBlankContent = style({
  flex: '1 1 0%',
  height: '100%',
  minHeight: '1px',
  minWidth: '1px',
  position: 'relative',
})

export const iconBlankImage = style({
  display: 'block',
  width: '100%',
  height: '100%',
  maxWidth: 'none',
})

export const buttonIconArrow = style({
  gridArea: '1 / 1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '10px',
  width: '12px',
  marginLeft: 0,
  marginTop: 0,
  boxSizing: 'border-box',
})

export const iconArrowContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  height: '12px',
  width: '7px',
})

export const iconArrowContent = style({
  flex: '1 1 0%',
  height: '100%',
  minHeight: '1px',
  minWidth: '1px',
  position: 'relative',
})

export const iconArrowImage = style({
  display: 'block',
  width: '100%',
  height: '100%',
  maxWidth: 'none',
})
