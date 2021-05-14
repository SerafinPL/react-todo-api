
import React, {useState, useEffect} from 'react'
import './App.css';
import axios from './axios';

import Main from './components/Main/Main';

import {RecoilRoot, atom, selector, useRecoilState} from 'recoil';

import { ThemeProvider } from 'theme-ui'
import theme from './theme'

const App = () => {

  const [list, setList] = useState(null);

  useEffect(() =>{
    axios.get('/users/1714/todos')
    .then(res => {
      setList(res.data.data);
      console.log(res.data.data)
    })
    .catch(err => console.log(err));

  }, []);

  

    
  
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <div className="App">
         
           <Main todo={list}/>

        </div>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
