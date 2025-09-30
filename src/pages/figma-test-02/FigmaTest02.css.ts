import { style } from '@vanilla-extract/css'

export const container = style({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  isolation: 'isolate',
  alignItems: 'flex-start',
  position: 'relative',
  width: '100%',
  height: '100%',
})

export const backgroundBorder = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  top: 0,
  pointerEvents: 'none',
  height: '982px',
  width: '1512px',
  zIndex: 3,
  '::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    border: '1px solid rgba(255,255,255,0.2)',
    pointerEvents: 'none',
  },
})

export const contentsWrapper = style({
  display: 'flex',
  alignItems: 'flex-start',
  overflow: 'clip',
  position: 'relative',
  flexShrink: 0,
  width: '100%',
  zIndex: 2,
})

export const contents = style({
  flexBasis: 0,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '100px',
  flexGrow: 1,
  alignItems: 'flex-start',
  minHeight: '1px',
  minWidth: '1px',
  paddingLeft: 0,
  paddingRight: '200px',
  paddingTop: '170px',
  paddingBottom: '170px',
  position: 'relative',
  flexShrink: 0,
})

export const backgroundOverlay = style({
  position: 'absolute',
  backgroundColor: 'rgba(255,255,255,0.5)',
  bottom: 0,
  left: 0,
  right: '-50px',
  top: 0,
})

export const movieSection = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '100px',
  alignItems: 'flex-start',
  overflow: 'clip',
  paddingLeft: '100px',
  paddingRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  position: 'relative',
  flexShrink: 0,
  width: '100%',
})

export const movieInner = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '100px',
  alignItems: 'flex-start',
  overflow: 'clip',
  paddingLeft: '100px',
  paddingRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  position: 'relative',
  flexShrink: 0,
  width: '100%',
})

export const graphicSection = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '100px',
  alignItems: 'flex-start',
  overflow: 'clip',
  paddingLeft: '100px',
  paddingRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  position: 'relative',
  flexShrink: 0,
  width: '100%',
})

export const bodySection = style({
  display: 'flex',
  gap: '50px',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  position: 'relative',
  flexShrink: 0,
  width: '100%',
})

export const headlineArea = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'relative',
  flexShrink: 0,
  width: '371px',
  height: '628px',
})

export const headlineWrapper = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  pointerEvents: 'none',
  top: '-120px',
  height: 'calc(100% + 120px)',
})

export const headlineSticky = style({
  boxSizing: 'border-box',
  display: 'flex',
  height: '148px',
  alignItems: 'flex-start',
  paddingBottom: 0,
  pointerEvents: 'auto',
  paddingTop: '116px',
  paddingLeft: 0,
  paddingRight: 0,
  position: 'sticky',
  top: 0,
})

export const headlineText = style({
  fontFamily: 'A P-OTF Midashi Go MB31 Pr6N, sans-serif',
  fontWeight: 700,
  lineHeight: 0,
  fontStyle: 'normal',
  position: 'relative',
  flexShrink: 0,
  fontSize: '21px',
  color: 'black',
  width: '354px',
})

export const headlineTextGray = style({
  fontFamily: 'A P-OTF Midashi Go MB31 Pr6N, sans-serif',
  fontWeight: 700,
  lineHeight: 0,
  fontStyle: 'normal',
  position: 'relative',
  flexShrink: 0,
  fontSize: '21px',
  color: '#515252',
  width: '354px',
})

export const textArea = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
  alignItems: 'flex-end',
  overflow: 'clip',
  position: 'relative',
  flexShrink: 0,
  width: '791px',
})

export const imagesRow = style({
  display: 'flex',
  gap: '50px',
  alignItems: 'flex-start',
  overflow: 'clip',
  position: 'relative',
  flexShrink: 0,
  width: '100%',
})

export const imageContainer = style({
  flexBasis: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '11px',
  flexGrow: 1,
  height: '238px',
  alignItems: 'flex-start',
  minHeight: '1px',
  minWidth: '1px',
  position: 'relative',
  flexShrink: 0,
})

export const buttonList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '50px',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  position: 'relative',
  flexShrink: 0,
  width: '100%',
})

export const button = style({
  backgroundColor: 'black',
  boxSizing: 'border-box',
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  paddingLeft: '20px',
  paddingRight: '22px',
  paddingTop: '18px',
  paddingBottom: '18px',
  position: 'relative',
  borderRadius: '3px',
  flexShrink: 0,
  width: '370px',
  border: 'none',
  cursor: 'pointer',
})

export const buttonText = style({
  flexBasis: 0,
  fontFamily: 'A P-OTF Midashi Go MB31 Pr6N, sans-serif',
  fontWeight: 700,
  flexGrow: 1,
  lineHeight: 0,
  minHeight: '1px',
  minWidth: '1px',
  fontStyle: 'normal',
  position: 'relative',
  flexShrink: 0,
  fontSize: '14px',
  color: 'white',
})

export const buttonIcon = style({
  height: '10px',
  position: 'relative',
  flexShrink: 0,
  width: '7px',
})

export const buttonIconImg = style({
  display: 'block',
  maxWidth: 'none',
  width: '100%',
  height: '100%',
})

export const backgroundOverlayMain = style({
  position: 'absolute',
  backgroundColor: 'rgba(159,160,160,0.3)',
  inset: 0,
  zIndex: 1,
})

// Specific p tag styles
export const headlineParagraph = style({
  lineHeight: 1.5,
})

export const buttonParagraph = style({
  lineHeight: '16px',
})
