
import axios from '../../axios';
import React, {useEffect, useState, Suspense} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import List from '../List/List';

import Navi from '../Navi/Navi';

import {NavLink, Route,HashRouter, Switch, Redirect} from 'react-router-dom';

import {listStateMain} from '../../recoliState';

import { Button, Input, Spinner } from 'theme-ui';

const AddTask = React.lazy( () => import('../AddTask/AddTask') );


const FullTask = React.lazy( () => import('../FullTask/FullTask') );



const Main = () => {


	const [todoList, setTodoList] = useRecoilState(listStateMain);
	const [reset, setReset] = useState(0);
  


  useEffect(() =>{
    axios.get('/users/1292/todos')
    .then(res => {
      
      setTodoList(res.data.data);
  
    })
    .catch(err => console.log(err));

  },[reset]);



	let link;

		if (todoList) {
      link = todoList.map((todoItem) => (
        <Route key={todoItem.id} exact path={'/' +todoItem.id} 
            render={() => (
                <Suspense fallback={<Spinner/>}>
                  <FullTask task={todoItem}/>
                </Suspense> 
              )}
        />
      ));
  	}

    return(
    	<React.Fragment>
    	<HashRouter>
        
        <Switch>
          <Route path='/newtask' //component={Auth} 
            	render={() => (
                <Suspense fallback={<Spinner/>}>
                  <AddTask newstart={setReset} setlist={setTodoList}/>
                </Suspense> 
              )}
          />

          {link}

          <Route path='/' render={() =>(
                <List newstart={setReset} list={todoList} setlist={setTodoList}/>
              )} 
          />
                   
          <Redirect to='/' />
              
        </Switch>
        
      </HashRouter>
    	
    		
    		
        
      </React.Fragment>);

}

export default Main;