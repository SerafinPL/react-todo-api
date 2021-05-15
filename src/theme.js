export default {
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512
  ],
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Verdana, sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontWeights: {
    body: 300,
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: '#442929',
    background: '#fff',
    primary: '#2ae37d',
    secondary: '#00cc47',
    muted: '#ead5d5'
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      },
      width: '100%',
      '@media screen and (min-width: 40em)': {
        width: '50%',
      },
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },

  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    
    a: {
      color: 'primary'
    },
    
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    
  }
}