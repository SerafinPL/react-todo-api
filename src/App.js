
import React, {useState, useEffect, Suspense} from 'react'
import './App.css';
import axios from './axios';

import Main from './components/Main/Main';
import Navi from './components/Navi/Navi';

import {RecoilRoot, atom, selector, useRecoilState} from 'recoil';

import {Route, HashRouter, Switch, Redirect} from 'react-router-dom';

import { Spinner } from 'theme-ui';

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
