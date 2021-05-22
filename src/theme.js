export default  {
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
    body: 'geomanistregular, sans-serif',
    heading: 'geomanistregular, sans-serif',
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
    primary: '#4c8573',
    nextPrimary: '#4444cf',
    secondary: '#d8f3eb',
    secondaryDark: '#33ff7a',
    muted: '#0e0e2f',
    mess: '#d8f3eb',
    tasks:'#0e0e2f',

  },
  forms: {
    select: {
      bg: 'secondary',
      fontFamily: 'body',
      
    },
    textarea: {
      bg: 'secondary',
      fontFamily: 'body',
      
    },
    input: {
      bg: 'secondary',
      marginRight: '10px',
      fontFamily: 'body',

      '@media screen and (min-width: 500px)': {
        width: '75%',
        float: 'left',
      },

    },
    checkbox: {
      cursor: 'pointer',
    }

  },
  

 
  buttons: {
    
    primary: {
      fontFamily: 'body',
      cursor: 'pointer',  
      color: 'secondary',
      bg: 'primary',
      '&:hover': {
        bg: 'mess',
        color: 'primary',
      },
      width: '100%',
      height: 'auto',
      '@media screen and (min-width: 500px)': {
        width: 'max-content',
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        
      },
    },
    secondary: {
      fontFamily: 'body',
      cursor: 'pointer',
      color: 'background',
      bg: 'secondary',
      '&:hover': {
        bg: 'secondaryDark',
      },
    },
    triple :{
      fontFamily: 'body',
      cursor: 'pointer',
      color: 'secondary',
      bg: 'primary',
      '&:hover': {
        bg: 'mess',
        color: 'primary',
      },
      width: '31.33%',
      margin: '1%'
    },
    add :{
      fontFamily: 'body',
      cursor: 'pointer',
      color: 'secondary',
      bg: 'primary',
      '&:hover': {
        bg: 'mess',
        color: 'primary',
      },
      
      margin: '1%',

      '@media screen and (min-width: 500px)': {
        
      },
    },
    

  },

  a: {
      color: '#000',
      textDecoration: 'none',
      fontFamily: 'body',
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