import { style } from '@vanilla-extract/css'
import { rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/colors'

export const container = style([
  {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  rvw.padding([40, 20], [20, 15]),
])

export const title = style([
  {
    fontFamily: '\'Inter\', \'Noto Sans JP\', sans-serif',
    fontWeight: 'bold',
    color: colors.basic.dark,
    margin: 0,
  },
  rvw.fontSize(32, 24),
  rvw.marginBottom(40, 30),
])

export const section = style([
  rvw.marginBottom(60, 40),
])

export const sectionTitle = style([
  {
    fontFamily: '\'Inter\', \'Noto Sans JP\', sans-serif',
    fontWeight: 'bold',
    color: colors.basic.dark,
    margin: 0,
  },
  rvw.fontSize(24, 18),
  rvw.marginBottom(30, 20),
])

export const item = style([
  rvw.marginBottom(32, 24),
])

export const itemTitle = style([
  {
    fontFamily: '\'Inter\', \'Noto Sans JP\', sans-serif',
    fontWeight: 'normal',
    color: colors.basic.medium,
    margin: 0,
  },
  rvw.fontSize(16, 14),
  rvw.marginBottom(12, 8),
])

export const componentWrapper = style([
  {
    display: 'inline-block',
    maxWidth: '270px',
  },
])
