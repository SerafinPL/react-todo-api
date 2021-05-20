export default   {
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
    heading: 2.5,
  },
  colors: {
    text: '#442929',
    background: '#fff',
    primary: '#2ae37d',
    secondary: '#00cc47',
    secondaryDark: '#33ff7a',
    muted: '#6a5f5f',
    mess: '#e2f4df',
  },
  forms: {
    select: {
      background: '#e2f4df',
      
    },
    textarea: {
      background: '#e2f4df',
      
    },
    input: {
      background: '#e2f4df',


      '@media screen and (min-width: 500px)': {
        width: '75%',
        float: 'left',
      },

    }
  },
 
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      },
      width: '100%',
      '@media screen and (min-width: 500px)': {
        width: 'max-content',
        position: 'fixed',
        bottom: '10px',
        right: '10px',
      },
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
      '&:hover': {
        bg: 'secondaryDark',
      },
    },
    triple :{
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      },
      width: '31.33%',
      margin: '1%'
    },
    add :{
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      },
      
      margin: '1%',

      '@media screen and (min-width: 500px)': {
        
      },
    },
    cursor: 'pointer',

  },

  a: {
      color: '#000',
      textDecoration: 'none'
    },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    
    
    
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    
  }
}