import { style } from '@vanilla-extract/css'

export const container = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  backgroundColor: '#f1f1f1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  isolation: 'isolate',
})

export const overlay = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  top: 0,
  pointerEvents: 'none',
})

export const overlayBorder = style({
  border: '1px solid rgba(255, 255, 255, 0.2)',
  height: '982px',
  width: '1512px',
  position: 'sticky',
  top: 0,
  zIndex: 2,
  pointerEvents: 'auto',
})

export const contentContainer = style({
  display: 'flex',
  alignItems: 'flex-start',
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  flexShrink: 0,
  zIndex: 1,
})

export const contents = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '100px',
  alignItems: 'flex-start',
  flexGrow: 1,
  minHeight: 0,
  minWidth: 0,
  paddingLeft: 0,
  paddingRight: '200px',
  paddingTop: '170px',
  paddingBottom: '170px',
  position: 'relative',
  flexShrink: 0,
  boxSizing: 'border-box',
})

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '100px',
  alignItems: 'flex-start',
  overflow: 'hidden',
  paddingLeft: '100px',
  paddingRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  position: 'relative',
  width: '100%',
  flexShrink: 0,
  boxSizing: 'border-box',
})

export const sectionBody = style({
  display: 'flex',
  gap: '50px',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  position: 'relative',
  width: '100%',
  flexShrink: 0,
})

export const sidebarColumn = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'relative',
  width: '371px',
  flexShrink: 0,
})

export const headlineSticky = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  top: '-120px',
  pointerEvents: 'none',
  height: 'calc(100% + 120px)',
})

export const contentColumn = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
  alignItems: 'flex-end',
  overflow: 'hidden',
  position: 'relative',
  width: '791px',
  flexShrink: 0,
})

export const imagesGrid = style({
  display: 'flex',
  gap: '50px',
  alignItems: 'flex-start',
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  flexShrink: 0,
})

export const graphicImagesGrid = style({
  display: 'flex',
  gap: '50px',
  alignItems: 'flex-start',
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  flexShrink: 0,
})

export const booksGrid = style({
  display: 'flex',
  gap: '50px',
  alignItems: 'flex-start',
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  flexShrink: 0,
})

export const buttonRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '50px',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  position: 'relative',
  width: '100%',
  flexShrink: 0,
})

export const button = style({
  width: '370px',
  flexShrink: 0,
})

export const radioText = style({
  fontFamily: 'A P-OTF Gothic BBB Pr6N, sans-serif',
  fontSize: '16px',
  lineHeight: '32px',
  fontStyle: 'normal',
  position: 'relative',
  width: 'min-content',
  minWidth: '100%',
  flexShrink: 0,
  color: 'black',
})

export const radioTextP = style({
  marginBottom: 0,
})
