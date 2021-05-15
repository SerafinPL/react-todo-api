
import axios from '../../axios';
import React, {useEffect, useState, Suspense} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import List from '../List/List';

import Navi from '../Navi/Navi';

import {Route, HashRouter, Switch, Redirect} from 'react-router-dom';



import { Button, Input, Spinner } from 'theme-ui';

const AddTask = React.lazy( () => import('../AddTask/AddTask') );
const FullTask = React.lazy( () => import('../FullTask/FullTask') );

 const listStateMain = atom({
    key: 'listStateMain',
    default: [],
  });

const Main = ({todo}) => {


	const [todoList, setTodoList] = useRecoilState(listStateMain);
	

  useEffect(() =>{
    axios.get('/users/1292/todos')
    .then(res => {
      
      setTodoList(res.data.data);
      console.log(res.data.data)
    })
    .catch(err => console.log(err));

  }, []);

  
  let link;
	let view = <p>loading...</p>;


	

  if (todoList) {
      link = todoList.map((todoItem) => (
        <Route path={'/' +todoItem.id} 
            render={() => (
                <Suspense fallback={<Spinner/>}>
                  <FullTask task={todoItem}/>
                </Suspense> 
              )}
          />

      ));

  }

  const createUser = () => {
    axios.post('/users', {"name":"Kuba Koder", "gender":"Male", "email":"kk@kk2.com.pl", "status":"Active"})
    .then(res => {
      
      console.log(res)
    })
    .catch(err => console.log(err));
  }

    return(
    	<React.Fragment>
    	<HashRouter>
        <Navi />
        <Switch>
          <Route path='/newtask' //component={Auth} 
            render={() => (
                <Suspense fallback={<Spinner/>}>
                  <AddTask/>
                </Suspense> 
              )}
          />
          <Route path='/' exact render={() =>(
                <Suspense fallback={<Spinner/>}>
                  <List list={todoList}/>
                </Suspense> 
              )} 
          />
          {link}
          <Redirect to='/' />
              
        </Switch>
        
      </HashRouter>
    	
    		
    		
        
      </React.Fragment>);

}

export default Main;