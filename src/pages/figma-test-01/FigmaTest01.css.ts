import { style } from '@vanilla-extract/css'

export const container = style([
  {
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
])

export const contents = style([
  {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minHeight: '1px',
    minWidth: '1px',
    paddingLeft: 0,
    paddingRight: '200px',
    paddingTop: '170px',
    paddingBottom: '170px',
    gap: '100px',
    position: 'relative',
    boxSizing: 'border-box',
  },
])

export const backgroundOverlay = style([
  {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    bottom: 0,
    left: 0,
    right: '-50px',
    top: 0,
  },
])

export const movieSection = style([
  {
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
    width: '100%',
  },
])

export const bodySection = style([
  {
    display: 'flex',
    gap: '50px',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    position: 'relative',
    width: '100%',
  },
])

export const headlineArea = style([
  {
    display: 'flex',
    flexDirection: 'column',
    height: '549px',
    alignItems: 'flex-start',
    position: 'relative',
    width: '371px',
  },
])

export const headlineWrapper = style([
  {
    position: 'absolute',
    bottom: 0,
    left: 0,
    pointerEvents: 'none',
    top: '-120px',
    height: 'calc(100% + 120px)',
  },
])

export const headlineSticky = style([
  {
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
  },
])

export const headlineText = style([
  {
    fontSize: '21px',
    fontFamily: 'Arial, Noto Sans JP, sans-serif',
    lineHeight: 1.5,
    position: 'relative',
    color: '#515252',
    width: '354px',
    fontWeight: 400,
  },
])

export const textArea = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
    alignItems: 'flex-end',
    overflow: 'clip',
    position: 'relative',
    width: '791px',
  },
])

export const imageSection = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '11px',
    height: '333px',
    alignItems: 'flex-start',
    position: 'relative',
    width: '100%',
  },
])

export const imageContainer = style([
  {
    flexGrow: 1,
    minHeight: '1px',
    minWidth: '1px',
    position: 'relative',
    borderRadius: '3px',
    width: '100%',
  },
])

export const imageWrapper = style([
  {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
    borderRadius: '3px',
  },
])

export const image = style([
  {
    position: 'absolute',
    height: '178.15%',
    left: 0,
    maxWidth: 'none',
    top: '-7.85%',
    width: '100%',
  },
])

export const descriptionText = style([
  {
    fontSize: '16px',
    fontFamily: 'Arial, Noto Sans JP, sans-serif',
    lineHeight: '32px',
    position: 'relative',
    color: 'black',
    width: '100%',
    fontWeight: 400,
  },
])

export const buttonList = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'flex-end',
    position: 'relative',
    width: '100%',
  },
])

export const button = style([
  {
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
    width: '370px',
    border: 'none',
    cursor: 'pointer',
  },
])

export const buttonText = style([
  {
    fontSize: '14px',
    fontFamily: 'A P-OTF Midashi Go MB31 Pr6N, sans-serif',
    flexGrow: 1,
    minHeight: '1px',
    minWidth: '1px',
    position: 'relative',
    color: 'white',
    fontWeight: 700,
    lineHeight: '16px',
  },
])

export const buttonIcon = style([
  {
    height: '10px',
    position: 'relative',
    width: '7px',
  },
])

export const buttonIconImg = style([
  {
    display: 'block',
    maxWidth: 'none',
    width: '100%',
    height: '100%',
  },
])

// Image + Caption styles
export const imageCaptionContainer = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '11px',
    alignItems: 'flex-start',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
])

export const imageCaptionImageContainer = style([
  {
    flexBasis: 0,
    flexGrow: 1,
    minHeight: '1px',
    minWidth: '1px',
    position: 'relative',
    borderRadius: '3px',
    flexShrink: 0,
    width: '100%',
  },
])

export const imageCaptionImageWrapper = style([
  {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    borderRadius: '3px',
  },
])

export const imageCaptionImageBackground = style([
  {
    position: 'absolute',
    backgroundColor: 'white',
    inset: 0,
    borderRadius: '3px',
  },
])

export const imageCaptionImage = style([
  {
    position: 'absolute',
    maxWidth: 'none',
    objectPosition: '50% 50%',
    objectFit: 'contain',
    borderRadius: '3px',
    width: '100%',
    height: '100%',
  },
])

export const imageCaptionCaptionContainer = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    alignItems: 'flex-start',
    lineHeight: 0,
    fontStyle: 'normal',
    overflow: 'clip',
    position: 'relative',
    flexShrink: 0,
    fontSize: '12px',
    width: '100%',
  },
])

export const imageCaptionTitleText = style([
  {
    fontFamily: 'A P-OTF Midashi Go MB31 Pr6N, sans-serif',
    fontWeight: 700,
    position: 'relative',
    flexShrink: 0,
    color: 'black',
    width: '100%',
    lineHeight: '19px',
  },
])

export const imageCaptionDescText = style([
  {
    fontFamily: 'A P-OTF Gothic BBB Pr6N, sans-serif',
    fontWeight: 400,
    position: 'relative',
    flexShrink: 0,
    color: '#515252',
    width: '100%',
    lineHeight: '19px',
  },
])
