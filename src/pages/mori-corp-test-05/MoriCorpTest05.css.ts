import { style } from '@vanilla-extract/css'
import { rvw, sp } from '@/styles/responsive.css'
import { colors } from '@/styles/colors'

export const container = style([
  {
    backgroundColor: '#f1f1f1',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    isolation: 'isolate'
  }
])

export const contentsWrapper = style([
  {
    display: 'flex',
    width: '100%',
    position: 'relative',
    zIndex: 1
  }
])

export const contents = style([
  {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
    boxSizing: 'border-box'
  },
  rvw.gap(100, 50),
  rvw.paddingTop(170, 80),
  rvw.paddingBottom(170, 80),
  rvw.paddingLeft(0, 0),
  rvw.paddingRight(200, 20)
])

export const section = style([
  {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    overflow: 'hidden'
  },
  rvw.paddingLeft(100, 20),
  rvw.paddingRight(0, 0)
])

export const sectionBody = style([
  {
    display: 'flex',
    width: '100%',
    position: 'relative'
  },
  rvw.gap(50, 20),
  sp({
    flexDirection: 'column'
  })
])

export const sidebarColumn = style([
  {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  rvw.width(371, '100%'),
  sp({
    position: 'static'
  })
])

export const stickyHeadline = style([
  {
    position: 'sticky',
    top: 0,
    display: 'flex',
    alignItems: 'flex-start',
    boxSizing: 'border-box',
    pointerEvents: 'auto'
  },
  rvw.paddingTop(116, 20),
  rvw.paddingBottom(0, 20),
  rvw.height(148, 'auto'),
  sp({
    position: 'static',
    paddingTop: 0,
    paddingBottom: 0,
    height: 'auto'
  })
])

export const headline = style([
  {
    fontFamily: '\'A P-OTF Midashi Go MB31 Pr6N\', sans-serif',
    fontWeight: 'bold',
    color: colors.basic.dark,
    lineHeight: 1.5,
    margin: 0
  },
  rvw.fontSize(21, 18),
  rvw.width(354, '100%')
])

export const contentColumn = style([
  {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'relative'
  },
  rvw.width(791, '100%'),
  rvw.gap(50, 30)
])

export const imageGrid = style([
  {
    display: 'flex',
    overflow: 'hidden',
    width: '100%'
  },
  rvw.gap(50, 20),
  sp({
    flexDirection: 'column'
  })
])

export const graphicGrid = style([
  {
    display: 'flex',
    overflow: 'hidden',
    width: '100%'
  },
  rvw.gap(50, 20),
  sp({
    flexDirection: 'column'
  })
])

export const bookGrid = style([
  {
    display: 'flex',
    overflow: 'hidden',
    width: '100%'
  },
  rvw.gap(50, 20),
  sp({
    flexDirection: 'column'
  })
])

export const imgCaption = style([
  {
    borderRadius: '3px',
    flexShrink: 0
  },
  rvw.width(370, '100%'),
  rvw.height(238, 'auto')
])

export const imgCaptionSmall = style([
  {
    borderRadius: '3px',
    flexShrink: 0
  },
  rvw.width(230, '100%'),
  rvw.height(218, 'auto')
])

export const imgCaptionMedium = style([
  {
    borderRadius: '3px',
    flexShrink: 0
  },
  rvw.width(231, '100%'),
  rvw.height(378, 'auto')
])

export const imgTitleDesc = style([
  {
    borderRadius: '3px'
  },
  rvw.width(791, '100%'),
  rvw.height(370, 'auto')
])

export const imgTitleDescBook = style([
  {
    borderRadius: '3px',
    flexShrink: 0
  },
  rvw.width(230, '100%'),
  rvw.height(260, 'auto')
])

export const radioDescription = style([
  {
    fontFamily: '\'A P-OTF Gothic BBB Pr6N\', sans-serif',
    color: colors.basic.dark,
    width: '100%'
  },
  rvw.fontSize(16, 14),
  rvw.lineHeight(32, 24)
])

export const buttonWrapper = style([
  {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    width: '100%'
  },
  rvw.gap(50, 20),
  sp({
    justifyContent: 'center'
  })
])

export const button = style([
  {
    borderRadius: '3px',
    flexShrink: 0
  },
  rvw.width(370, '100%')
])
