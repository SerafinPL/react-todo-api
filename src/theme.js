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
    primary: '#b2d732',
    nextPrimary: '#2d2d2d',
    secondary: '#2ae37d',
    secondaryDark: '#33ff7a',
    muted: '#94b814',
    mess: '#f7d4e3',
    tasks:'#c31460',
  },
  forms: {
    select: {
      bg: 'mess',
      
    },
    textarea: {
      bg: 'mess',
      
    },
    input: {
      bg: 'mess',
      marginRight: '10px',

      '@media screen and (min-width: 500px)': {
        width: '75%',
        float: 'left',
      },

    }
  },
  

 
  buttons: {
    primary: {
      
      
      
      color: 'nextPrimary',
      bg: 'primary',
      '&:hover': {
        bg: 'nextPrimary',
        color: 'primary',
      },
      width: '100%',
      height: 'auto',
      '@media screen and (min-width: 500px)': {
        width: 'max-content',
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        height: '100px',
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
      color: 'nextPrimary',
      bg: 'primary',
      '&:hover': {
        bg: 'nextPrimary',
        color: 'primary',
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