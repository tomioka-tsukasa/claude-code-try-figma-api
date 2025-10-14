import { style } from '@vanilla-extract/css'
import { rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/colors'

export const container = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    position: 'relative',
    width: '100%',
    height: '100%',
    color: colors.basic.dark,
  },
  rvw.gap(9, 9),
])

export const titleEn = style([
  {
    fontFamily: '"AppleMyungjo", sans-serif',
    fontWeight: 'normal',
    margin: 0,
    position: 'relative',
    flexShrink: 0,
    width: '100%',
    lineHeight: 'none',
  },
  rvw.fontSize(64, 64),
])

export const title = style([
  {
    fontFamily: '"Apple SD Gothic Neo", sans-serif',
    fontWeight: 'normal',
    margin: 0,
    position: 'relative',
    flexShrink: 0,
    width: '100%',
    lineHeight: 1.28,
  },
  rvw.fontSize(16, 16),
])
