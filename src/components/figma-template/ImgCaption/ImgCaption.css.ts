import { style } from '@vanilla-extract/css'
import { rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/colors'

export const container = style([
  {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  rvw.gap(6, 6),
])

export const imageContainer = style([
  {
    display: 'inline-grid',
    gridTemplateColumns: 'max-content',
    gridTemplateRows: 'max-content',
    placeItems: 'start',
    position: 'relative',
    flexShrink: 0,
    width: '100%',
    lineHeight: 0,
  },
])

export const imageWrapper = style([
  {
    gridArea: '1 / 1',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '3px',
    marginLeft: 0,
    marginTop: 0,
    position: 'relative',
  },
  rvw.width(960, 960),
  rvw.height(400, 400),
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    overflow: 'hidden',
    position: 'relative',
    flexShrink: 0,
    width: '100%',
    color: colors.basic.medium,
  },
  rvw.gap(6, 6),
])

export const title = style([
  {
    fontFamily: '"Apple SD Gothic Neo", sans-serif',
    fontWeight: 'bold',
    margin: 0,
    position: 'relative',
    flexShrink: 0,
    width: '100%',
    lineHeight: 1.5,
  },
  rvw.fontSize(16, 16),
])

export const caption = style([
  {
    fontFamily: '"Apple SD Gothic Neo", sans-serif',
    fontWeight: 'normal',
    margin: 0,
    position: 'relative',
    flexShrink: 0,
    width: '100%',
    lineHeight: 1.5,
  },
  rvw.fontSize(12, 12),
])
