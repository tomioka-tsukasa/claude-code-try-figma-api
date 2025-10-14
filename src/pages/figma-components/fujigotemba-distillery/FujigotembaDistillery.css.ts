import { style } from '@vanilla-extract/css'

export const main = style({
  minHeight: '100vh',
  padding: '20px',
  backgroundColor: '#fff',
})

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
})

export const section = style({
  marginBottom: '60px',
})

export const sectionTitle = style({
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '40px',
  color: '#333',
  borderBottom: '2px solid #333',
  paddingBottom: '10px',
})

export const item = style({
  marginBottom: '32px',
})
