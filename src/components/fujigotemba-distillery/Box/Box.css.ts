import { style } from '@vanilla-extract/css'
import { rvw } from '@/styles/responsive.css'

export const container = style([
  {
    display: 'flex',
    flexDirection: 'column',
  },
  rvw.gap(40, 30),
])

export const imageContainer = style([
  {
    flexShrink: 0,
  },
  rvw.width(471, 300),
  rvw.height(471, 300),
])

export const imageMask = style([
  {
    overflow: 'hidden',
  },
  rvw.width(471, 300),
  rvw.height(471, 300),
])

export const mainImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
})

export const number = style([
  {
    fontFamily: 'Bodoni 72',
    fontWeight: 'normal',
    color: '#90825d',
    opacity: 0.6,
    margin: 0,
    lineHeight: 1,
  },
  rvw.fontSize(120, 80),
])

export const lineContainer = style([
  {
    flexShrink: 0,
  },
  rvw.width(1),
  rvw.height(88, 60),
])

export const lineImage = style({
  width: '100%',
  height: '100%',
})

export const textSection = style([
  {
    display: 'flex',
    alignItems: 'center',
  },
  rvw.gap(64, 40),
])

export const textContent = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: 0,
    color: '#291e0d',
  },
  rvw.gap(40, 24),
])

export const titleSection = style([
  {
    display: 'flex',
    alignItems: 'center',
  },
  rvw.gap(45, 30),
])

// Japanese styles
export const headlineJp = style([
  {
    fontFamily: 'A-OTF A1 Mincho Std',
    fontWeight: 'bold',
    color: '#291e0d',
    margin: 0,
    lineHeight: 1.6,
  },
  rvw.fontSize(22, 18),
  rvw.letterSpacing(3.96, 3),
])

export const bodyTextJp = style([
  {
    fontFamily: 'TBGothicSL Std',
    fontWeight: 'normal',
    color: '#291e0d',
    margin: 0,
    lineHeight: 1.8,
  },
  rvw.fontSize(14, 12),
  rvw.letterSpacing(2.52, 2),
  rvw.width(472, 360),
])

export const titleJp = style([
  {
    fontFamily: 'A-OTF A1 Mincho Std',
    fontWeight: 'bold',
    color: '#90825d',
    whiteSpace: 'nowrap',
    margin: 0,
    lineHeight: 1.2,
  },
  rvw.fontSize(28, 22),
  rvw.letterSpacing(5.04, 4),
])

// English styles
export const headlineEn = style([
  {
    fontFamily: 'Bodoni Moda',
    fontWeight: 'normal',
    color: '#291e0d',
    margin: 0,
    lineHeight: 1.5,
  },
  rvw.fontSize(24, 20),
  rvw.letterSpacing(0.48, 0.36),
  rvw.width(477, 360),
])

export const bodyTextEn = style([
  {
    fontFamily: 'Lato',
    fontWeight: 'normal',
    color: '#291e0d',
    margin: 0,
    lineHeight: 1.8,
  },
  rvw.fontSize(12, 11),
  rvw.letterSpacing(2.16, 1.6),
  rvw.width(472, 360),
])

export const titleEn = style([
  {
    fontFamily: 'Bodoni Moda',
    fontWeight: 'normal',
    color: '#90825d',
    whiteSpace: 'nowrap',
    margin: 0,
    lineHeight: 1.2,
  },
  rvw.fontSize(32, 26),
  rvw.letterSpacing(0.96, 0.7),
])

// French styles
export const headlineFra = style([
  {
    fontFamily: 'Cormorant Garamond',
    fontWeight: 'normal',
    color: '#291e0d',
    margin: 0,
    lineHeight: 1.5,
  },
  rvw.fontSize(24, 20),
  rvw.letterSpacing(0.48, 0.36),
  rvw.width(477, 360),
])

export const bodyTextFra = style([
  {
    fontFamily: 'Lato',
    fontWeight: 'normal',
    color: '#291e0d',
    margin: 0,
    lineHeight: 1.8,
  },
  rvw.fontSize(12, 11),
  rvw.letterSpacing(2.16, 1.6),
  rvw.width(472, 360),
])

export const titleFra = style([
  {
    fontFamily: 'Cormorant Garamond',
    fontWeight: 'normal',
    color: '#90825d',
    whiteSpace: 'nowrap',
    margin: 0,
    lineHeight: 1.2,
  },
  rvw.fontSize(32, 26),
  rvw.letterSpacing(0.96, 0.7),
])

// Chinese styles
export const headlineCh = style([
  {
    fontFamily: 'Noto Serif CJK SC',
    fontWeight: 'normal',
    color: '#291e0d',
    margin: 0,
    lineHeight: 1.6,
  },
  rvw.fontSize(22, 18),
  rvw.letterSpacing(0.44, 0.3),
  rvw.width(477, 360),
])

export const bodyTextCh = style([
  {
    fontFamily: 'Noto Serif CJK SC',
    fontWeight: 'normal',
    color: '#291e0d',
    margin: 0,
    lineHeight: 1.8,
  },
  rvw.fontSize(12, 11),
  rvw.letterSpacing(0.72, 0.5),
  rvw.width(472, 360),
])

export const titleCh = style([
  {
    fontFamily: 'Noto Serif SC',
    fontWeight: 'normal',
    color: '#90825d',
    whiteSpace: 'nowrap',
    margin: 0,
    lineHeight: 1.2,
  },
  rvw.fontSize(28, 22),
  rvw.letterSpacing(0.56, 0.4),
])

// Korean styles
export const headlineKo = style([
  {
    fontFamily: 'NanumMyeongjo',
    fontWeight: 'normal',
    color: '#291e0d',
    margin: 0,
    lineHeight: 1.6,
  },
  rvw.fontSize(22, 18),
  rvw.letterSpacing(0.44, 0.3),
  rvw.width(477, 360),
])

export const bodyTextKo = style([
  {
    fontFamily: 'Lato',
    fontWeight: 'normal',
    color: '#291e0d',
    margin: 0,
    lineHeight: 1.8,
  },
  rvw.fontSize(12, 11),
  rvw.letterSpacing(2.16, 1.6),
  rvw.width(472, 360),
])

export const titleKo = style([
  {
    fontFamily: 'NanumMyeongjo',
    fontWeight: 'normal',
    color: '#90825d',
    whiteSpace: 'nowrap',
    margin: 0,
    lineHeight: 1.2,
  },
  rvw.fontSize(28, 22),
  rvw.letterSpacing(0.56, 0.4),
])
