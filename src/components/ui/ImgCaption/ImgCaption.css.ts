import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '11px',
  borderRadius: '3px',
})

export const imageContainer = style({
  flex: '1 1 0%',
  minHeight: '1px',
  minWidth: '1px',
  width: '100%',
  position: 'relative',
  borderTopLeftRadius: '3px',
  borderTopRightRadius: '3px',
  pointerEvents: 'none',
})

export const image = style({
  position: 'absolute',
  inset: 0,
  maxWidth: 'none',
  objectPosition: '50% 50%',
  objectFit: 'cover',
  borderTopLeftRadius: '3px',
  borderTopRightRadius: '3px',
  width: '100%',
  height: '100%',
})

export const imageBorder = style({
  position: 'absolute',
  inset: 0,
  border: '0px 0px 1px',
  borderColor: 'rgba(0,0,0,0.1)',
  borderStyle: 'solid',
  borderTopLeftRadius: '3px',
  borderTopRightRadius: '3px',
})

export const inner = style({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  width: '100%',
})

export const innerContent = style({
  flex: '1 1 0%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch',
})

export const content = style({
  flex: '1 1 0%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2px',
  height: '100%',
  minHeight: '1px',
  minWidth: '1px',
  overflow: 'hidden',
})

export const captionText = style({
  fontFamily: '\'Inter:Regular\', \'Noto Sans JP:Regular\', sans-serif',
  fontWeight: 'normal',
  lineHeight: '0',
  fontStyle: 'normal',
  fontSize: '12px',
  color: '#515255',
  width: '100%',
})

export const captionP = style({
  lineHeight: '19px',
  margin: 0,
})
