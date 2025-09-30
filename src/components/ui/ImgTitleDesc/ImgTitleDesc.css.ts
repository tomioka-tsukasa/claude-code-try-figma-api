import { style } from '@vanilla-extract/css'

// Default pattern styles
export const containerDefault = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '11px',
  alignItems: 'flex-start',
  position: 'relative',
  borderRadius: '3px',
  width: '100%',
  height: '100%',
})

export const imageContainerDefault = style({
  flexGrow: 1,
  minHeight: '1px',
  minWidth: '1px',
  pointerEvents: 'none',
  position: 'relative',
  borderTopLeftRadius: '3px',
  borderTopRightRadius: '3px',
  width: '100%',
})

export const imageDefault = style({
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

export const imageBorderDefault = style({
  position: 'absolute',
  border: '0px 0px 1px',
  borderColor: 'rgba(0,0,0,0.1)',
  borderStyle: 'solid',
  inset: 0,
  borderTopLeftRadius: '3px',
  borderTopRightRadius: '3px',
})

export const innerDefault = style({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
})

export const innerWrapperDefault = style({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch',
})

export const contentDefault = style({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  height: '100%',
  alignItems: 'flex-start',
  minHeight: '1px',
  minWidth: '1px',
  overflow: 'clip',
  position: 'relative',
  fontSize: '12px',
})

// White background pattern styles
export const containerWhiteBg = style({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'relative',
  borderRadius: '3px',
  width: '100%',
  height: '100%',
})

export const imageContainerWhiteBg = style({
  display: 'inline-grid',
  gridTemplateColumns: 'max-content',
  gridTemplateRows: 'max-content',
  placeItems: 'start',
  position: 'relative',
  width: '100%',
})

export const imageWrapperWhiteBg = style({
  gridArea: '1 / 1',
  height: '180px',
  marginLeft: 0,
  marginTop: 0,
  pointerEvents: 'none',
  position: 'relative',
  borderTopLeftRadius: '3px',
  borderTopRightRadius: '3px',
  width: '230px',
})

export const imageWhiteBg = style({
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

export const imageBorderWhiteBg = style({
  position: 'absolute',
  border: '0px 0px 1px',
  borderColor: 'rgba(0,0,0,0.1)',
  borderStyle: 'solid',
  inset: 0,
  borderTopLeftRadius: '3px',
  borderTopRightRadius: '3px',
})

export const innerWhiteBg = style({
  boxSizing: 'border-box',
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  padding: '20px',
  position: 'relative',
  width: '100%',
  fontSize: '12px',
})

export const contentWhiteBg = style({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  alignItems: 'flex-start',
  minHeight: '1px',
  minWidth: '1px',
  overflow: 'clip',
  position: 'relative',
})

// Common text styles
export const titleText = style({
  fontFamily: 'Inter, Noto Sans JP, sans-serif',
  fontWeight: 700,
  position: 'relative',
  color: 'black',
  width: '100%',
  lineHeight: '19px',
})

export const descText = style({
  fontFamily: 'Inter, Noto Sans JP, sans-serif',
  fontWeight: 400,
  position: 'relative',
  color: '#515255',
  width: '100%',
  lineHeight: '19px',
})

export const iconContainer = style({
  fontFamily: 'Font Awesome 6 Free, sans-serif',
  position: 'relative',
  color: 'black',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  lineHeight: '16px',
})