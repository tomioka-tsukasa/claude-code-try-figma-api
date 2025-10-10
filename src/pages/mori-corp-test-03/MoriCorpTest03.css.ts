import { style } from '@vanilla-extract/css'

export const container = style({
  backgroundColor: '#f1f1f1',
  display: 'flex',
  flexDirection: 'column',
  isolation: 'isolate',
  alignItems: 'flex-start',
  position: 'relative',
  width: '100%',
  height: '100%',
})

export const contentIndexContainer = style({
  display: 'flex',
  alignItems: 'flex-start',
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  zIndex: 2,
})

export const contentsContainer = style({
  flex: '1 1 0%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '100px',
  minHeight: '1px',
  minWidth: '1px',
  paddingLeft: 0,
  paddingRight: '200px',
  paddingTop: '170px',
  paddingBottom: '170px',
  position: 'relative',
  boxSizing: 'border-box',
})

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '100px',
  overflow: 'hidden',
  paddingLeft: '100px',
  paddingRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  width: '100%',
  boxSizing: 'border-box',
})

export const sectionBody = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '50px',
  justifyContent: 'flex-end',
  width: '100%',
})

export const headlineContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '371px',
  position: 'relative',
})

export const headlineSticky = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  pointerEvents: 'none',
  top: '-120px',
  height: 'calc(100% + 120px)',
})

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '50px',
  overflow: 'hidden',
  width: '791px',
})

export const imagesRow = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '50px',
  overflow: 'hidden',
  width: '100%',
})

export const graphicImagesRow = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '50px',
  overflow: 'hidden',
  width: '100%',
})

export const bookImagesRow = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '50px',
  overflow: 'hidden',
  width: '100%',
})

export const buttonCol = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  gap: '50px',
  width: '100%',
})

export const movieButton = style({
  width: '370px',
})

export const graphicButton = style({
  width: '370px',
})

export const radioButton = style({
  width: '370px',
})

export const radioImageCaption = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '11px',
  height: '370px',
  width: '100%',
})

export const radioImageContainer = style({
  flex: '1 1 0%',
  minHeight: '1px',
  minWidth: '1px',
  width: '100%',
  borderRadius: '3px',
  position: 'relative',
})

export const radioImageWrapper = style({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  borderRadius: '3px',
})

export const radioImageBg = style({
  position: 'absolute',
  inset: 0,
  backgroundColor: '#ffffff',
  borderRadius: '3px',
})

export const radioImage = style({
  position: 'absolute',
  maxWidth: 'none',
  objectPosition: '50% 50%',
  objectFit: 'contain',
  borderRadius: '3px',
  width: '100%',
  height: '100%',
})

export const radioCaption = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2px',
  lineHeight: '0',
  fontStyle: 'normal',
  overflow: 'hidden',
  fontSize: '12px',
  width: '100%',
})

export const radioCaptionTitle = style({
  fontFamily: '\'A P-OTF Midashi Go MB31 Pr6N:B\', sans-serif',
  color: '#000000',
  width: '100%',
})

export const radioCaptionTitleP = style({
  lineHeight: '19px',
  margin: 0,
})

export const radioCaptionDescription = style({
  fontFamily: '\'A P-OTF Gothic BBB Pr6N:R\', sans-serif',
  color: '#515252',
  width: '100%',
})

export const radioCaptionDescriptionP = style({
  lineHeight: '19px',
  margin: 0,
})

export const radioDescription = style({
  fontFamily: '\'A P-OTF Gothic BBB Pr6N:R\', sans-serif',
  lineHeight: '32px',
  fontStyle: 'normal',
  fontSize: '16px',
  color: '#000000',
  width: '100%',
})

export const radioDescriptionP = style({
  margin: 0,
})

export const overlay = style({
  position: 'absolute',
  backgroundColor: 'rgba(159,160,160,0.3)',
  inset: 0,
  zIndex: 1,
})
