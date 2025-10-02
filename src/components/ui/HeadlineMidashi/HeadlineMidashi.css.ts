import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  alignItems: 'flex-start',
  boxSizing: 'border-box',
  paddingBottom: 0,
  paddingTop: '116px',
  paddingLeft: 0,
  paddingRight: 0,
  height: '148px',
  pointerEvents: 'auto',
  position: 'sticky',
  top: 0,
})

export const text = style({
  fontFamily: '\'A P-OTF Midashi Go MB31 Pr6N:B\', sans-serif',
  lineHeight: '0',
  fontStyle: 'normal',
  fontSize: '21px',
  width: '354px',
})

export const textBlack = style({
  color: '#000000',
})

export const textGray = style({
  color: '#515252',
})

export const textP = style({
  lineHeight: '1.5',
  margin: 0,
})
