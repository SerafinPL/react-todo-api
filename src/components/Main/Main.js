
import axios from '../../axios';
import React, {useEffect, useState, Suspense} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import List from '../List/List';

import Navi from '../Navi/Navi';

import {NavLink, Route,HashRouter, Switch, Redirect} from 'react-router-dom';

import {listStateMain, fatchData} from '../../recoliState';

import { Button, Input, Spinner } from 'theme-ui';

const AddTask = React.lazy( () => import('../AddTask/AddTask') );


const FullTask = React.lazy( () => import('../FullTask/FullTask') );

const Main = () => {


	const [todoList, setTodoList] = useRecoilState(listStateMain);
	const [fetchData, setFetchData] = useRecoilState(fatchData);
	const [reset, setReset] = useState(0);
  
  
  useEffect(() =>{
    axios.get('/users/1292/todos')
    .then(response => {

      let data = [...response.data.data];
      let moreData = [...data];
      if ( response.data.meta.pagination.pages > 1) {
      	
      	for (let i = 2; i <= response.data.meta.pagination.pages; i++){
      		axios.get('/users/1292/todos?page=' + i)
      		.then(res => {
      			
      			moreData = [...moreData, ...res.data.data]
      	
      			setTodoList(moreData);
      			
      		})
      		.catch(err => console.log(err));
      	}
      	
      } else {
      	setTodoList(data);

      }
      setFetchData(true);
    })
    .catch(err => console.log(err));

  },[]);



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
                <List  list={todoList} setlist={setTodoList}/>
              )} 
          />
                   
          <Redirect to='/' />
              
        </Switch>
        
      </HashRouter>
    	
    		
    		
        
      </React.Fragment>);

}

export default Main;