import { style } from '@vanilla-extract/css'
import { rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/colors'

export const container = style([
  {
    border: `1px solid ${colors.basic.dark}`,
    borderRadius: '64px',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
])

export const content = style([
  {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: 'inherit',
    width: '100%',
    height: '100%',
  },
  rvw.gap(10, 10),
  rvw.padding([20, 32, 21], [20, 32, 21]),
])

export const label = style([
  {
    fontFamily: '"Apple SD Gothic Neo", sans-serif',
    fontWeight: 'normal',
    color: colors.basic.dark,
    margin: 0,
    flexGrow: 1,
    flexBasis: 0,
    minWidth: '1px',
    minHeight: '1px',
    position: 'relative',
    flexShrink: 0,
    lineHeight: 1.28,
  },
  rvw.fontSize(16, 16),
])

export const arrow = style([
  {
    display: 'inline-grid',
    gridTemplateColumns: 'max-content',
    gridTemplateRows: 'max-content',
    placeItems: 'start',
    position: 'relative',
    flexShrink: 0,
    lineHeight: 0,
  },
])

export const arrowLineContainer1 = style({
  gridArea: '1 / 1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 0,
  marginTop: '7px',
  position: 'relative',
  height: 'calc(1px * ((12 * 0.6102834343910217) + (1 * 0.7921831607818604)))',
  width: 'calc(1px * ((1 * 0.6102834343910217) + (12 * 0.7921831607818604)))',
})

export const arrowLineInner1 = style({
  flexShrink: 0,
  transform: 'rotate(322.39deg)',
})

export const arrowLineBottom = style([
  {
    backgroundColor: colors.basic.dark,
    height: '1px',
    borderRadius: '3px',
  },
  rvw.width(12, 12),
])

export const arrowLineContainer2 = style({
  gridArea: '1 / 1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 0,
  marginTop: 0,
  position: 'relative',
  height: 'calc(1px * ((12 * 0.6102744340896606) + (1 * 0.7921900749206543)))',
  width: 'calc(1px * ((1 * 0.6102744340896606) + (12 * 0.7921900749206543)))',
})

export const arrowLineInner2 = style({
  flexShrink: 0,
  transform: 'rotate(37.609deg)',
})

export const arrowLineTop = style([
  {
    backgroundColor: colors.basic.dark,
    height: '1px',
    borderRadius: '3px',
  },
  rvw.width(12, 12),
])
