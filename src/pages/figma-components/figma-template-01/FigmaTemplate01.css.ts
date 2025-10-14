import { style } from '@vanilla-extract/css'
import { rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/colors'

export const main = style([
  {
    padding: 0,
    margin: 0,
    minHeight: '100vh',
    backgroundColor: colors.basic.white,
  },
  rvw.padding([40, 20], [20, 16]),
])

export const pageTitle = style([
  {
    fontFamily: '"Apple SD Gothic Neo", sans-serif',
    fontWeight: 'bold',
    color: colors.basic.dark,
    margin: 0,
    textAlign: 'center',
  },
  rvw.fontSize(32, 24),
  rvw.marginBottom(60, 40),
])

export const section = style([
  rvw.marginBottom(160, 100),
])

export const item = style({
  marginBottom: '80px',
})

export const buttonContainer = style([
  {
    display: 'inline-block',
  },
  rvw.width(320, 320),
  rvw.height(61, 61),
])
