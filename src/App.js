import './App.css';

import Main from './components/Main/Main';

import {RecoilRoot} from 'recoil';


import { ThemeProvider } from 'theme-ui'
import theme from './theme'



const App = () => {
  
  
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
  
        <Main />
       
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
