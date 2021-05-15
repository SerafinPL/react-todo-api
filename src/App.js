
import React, {useState, useEffect} from 'react'
import './App.css';
import axios from './axios';

import Main from './components/Main/Main';

import {RecoilRoot, atom, selector, useRecoilState} from 'recoil';

import {Route, HashRouter, Switch, Redirect} from 'react-router-dom';

import { ThemeProvider } from 'theme-ui'
import theme from './theme'

const App = () => {

  const [list, setList] = useState(null);

  useEffect(() =>{
    axios.get('/users/1292/todos')
    .then(res => {
      setList(res.data.data);
      console.log(res.data.data)
    })
    .catch(err => console.log(err));

  }, []);

  

    
  
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
      <HashRouter>
        <Switch>
          <Route path='/newtask' //component={Auth} 
            render={() => (
                <Suspense fallback={<Spinner/>}>
                  
                </Suspense> 
              )}
          />
          <Route path='/' exact render={() =>(
                <Main todo={list}/>
              )} 
          />
          <Redirect to='/' />
              
        </Switch>
      </HashRouter>


        
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
