import { style } from '@vanilla-extract/css'
import { rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/colors'

// Default direction styles
export const container = style([
  {
    display: 'flex',
    position: 'relative',
  },
  rvw.width(960, 960),
  rvw.gap(48, 48),
])

export const imageContainer = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    flexGrow: 1,
    flexBasis: 0,
    minWidth: '1px',
    minHeight: '1px',
    position: 'relative',
    flexShrink: 0,
  },
  rvw.gap(10, 10),
])

export const imageWrapper = style([
  {
    position: 'relative',
    borderRadius: '3px',
    flexShrink: 0,
  },
  rvw.height(648, 648),
  rvw.width(432, 432),
])

export const image = style({
  position: 'absolute',
  inset: 0,
  maxWidth: 'none',
  objectFit: 'cover',
  objectPosition: '50% 50%',
  pointerEvents: 'none',
  borderRadius: '3px',
  width: '100%',
  height: '100%',
})

export const content = style([
  {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    position: 'relative',
    flexShrink: 0,
  },
  rvw.width(480, 480),
  rvw.gap(160, 160),
  rvw.padding([64, 0, 0], [64, 0, 0]),
])

export const head = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    position: 'relative',
    flexShrink: 0,
    width: '100%',
    color: colors.basic.dark,
  },
  rvw.gap(32, 32),
])

export const number = style([
  {
    fontFamily: '"Apple Chancery", sans-serif',
    fontWeight: 'normal',
    fontStyle: 'italic',
    margin: 0,
    position: 'relative',
    flexShrink: 0,
    width: '100%',
    lineHeight: 'none',
  },
  rvw.fontSize(14, 14),
])

export const titleContainer = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    position: 'relative',
    flexShrink: 0,
    width: '100%',
    lineHeight: 1.28,
  },
  rvw.gap(12, 12),
])

export const titleEn = style([
  {
    fontFamily: '"AppleMyungjo", sans-serif',
    fontWeight: 'normal',
    margin: 0,
    position: 'relative',
    flexShrink: 0,
    width: '100%',
  },
  rvw.fontSize(32, 32),
])

export const title = style([
  {
    fontFamily: '"Apple SD Gothic Neo", sans-serif',
    fontWeight: 'normal',
    margin: 0,
    position: 'relative',
    flexShrink: 0,
    width: '100%',
  },
  rvw.fontSize(12, 12),
])

export const price = style([
  {
    fontFamily: '"Apple SD Gothic Neo", sans-serif',
    fontWeight: 'normal',
    margin: 0,
    position: 'relative',
    flexShrink: 0,
    width: '100%',
    lineHeight: 1.28,
  },
  rvw.fontSize(12, 12),
])

export const buttonContainer = style([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
])

export const button = style([
  {
    flexShrink: 0,
  },
  rvw.width(320, 320),
  rvw.height(61, 61),
])

// Reverse direction styles
export const containerReverse = style([
  {
    display: 'flex',
    position: 'relative',
  },
  rvw.width(960, 960),
  rvw.gap(48, 48),
])

export const contentReverse = style([
  {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    position: 'relative',
    flexShrink: 0,
  },
  rvw.width(480, 480),
  rvw.gap(160, 160),
  rvw.padding([64, 0, 0], [64, 0, 0]),
])

export const headReverse = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    position: 'relative',
    flexShrink: 0,
    width: '100%',
    color: colors.basic.dark,
  },
  rvw.gap(32, 32),
])

export const numberReverse = style([
  {
    fontFamily: '"Italiana", sans-serif',
    fontWeight: 'normal',
    margin: 0,
    position: 'relative',
    flexShrink: 0,
    width: '100%',
    lineHeight: 'none',
  },
  rvw.fontSize(14, 14),
])

export const titleContainerReverse = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    position: 'relative',
    flexShrink: 0,
    width: '100%',
    lineHeight: 1.28,
  },
  rvw.gap(12, 12),
])

export const titleEnReverse = style([
  {
    fontFamily: '"Playfair Display", sans-serif',
    fontWeight: 'normal',
    margin: 0,
    position: 'relative',
    flexShrink: 0,
    width: '100%',
  },
  rvw.fontSize(32, 32),
])

export const titleReverse = style([
  {
    fontFamily: '"Zen Old Mincho", sans-serif',
    fontWeight: 'normal',
    margin: 0,
    position: 'relative',
    flexShrink: 0,
    width: '100%',
  },
  rvw.fontSize(12, 12),
])

export const priceReverse = style([
  {
    fontFamily: '"Zen Old Mincho", sans-serif',
    fontWeight: 'normal',
    margin: 0,
    position: 'relative',
    flexShrink: 0,
    width: '100%',
    lineHeight: 1.28,
  },
  rvw.fontSize(12, 12),
])

export const imageContainerReverse = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    flexGrow: 1,
    flexBasis: 0,
    minWidth: '1px',
    minHeight: '1px',
    position: 'relative',
    flexShrink: 0,
  },
  rvw.gap(10, 10),
])

export const imageWrapperReverse = style([
  {
    position: 'relative',
    borderRadius: '3px',
    flexShrink: 0,
  },
  rvw.height(648, 648),
  rvw.width(432, 432),
])
