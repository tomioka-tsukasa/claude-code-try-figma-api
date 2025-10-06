import { style } from '@vanilla-extract/css'
import designData from '../../../lib/figma-library/design-data.json'

export const headlineStyles = style({
  fontFamily: '"A P-OTF Midashi Go MB31 Pr6N", sans-serif',
  fontSize: '21px',
  lineHeight: 1.5,
  color: designData.design_tokens.colors.Basic_Dark,
  fontWeight: 'bold',
  margin: 0,
  width: '354px',
})
