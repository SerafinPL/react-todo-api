import React, {useEffect,Suspense} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import { Container, Checkbox, Text, Label,Button, Spinner  } from 'theme-ui'
import Task from '../Task/Task';
 
import {NavLink} from 'react-router-dom';

import axios from '../../axios';

import {Route, Switch, Redirect} from 'react-router-dom';

const FullTask = React.lazy( () => import('../FullTask/FullTask') );

 const listStateMain = atom({
    key: 'listStateMain',
    default: [],
  });

const List = ({list}) => {

  const [todoList, setTodoList] = useRecoilState(listStateMain);
  

  useEffect(() =>{
    axios.get('/users/1292/todos')
    .then(res => {
      
      setTodoList(res.data.data);
      console.log(res.data.data)
    })
    .catch(err => console.log(err));

  },[]);


  let link;

  if (todoList) {
      link = todoList.map((todoItem) => (
        <Route key={todoItem.id} path={'/' +todoItem.id} 
            render={() => (
                <Suspense fallback={<Spinner/>}>
                  <FullTask task={todoItem}/>
                </Suspense> 
              )}
          />

      ));

  }

  let view= null;
  if (todoList) {
    view = todoList.map((todoItem) => (
      <Task key={todoItem.id} task={todoItem} ></Task>
    ));

  }

  console.log(link)

  return(
  	<Container  bg="muted">
    {link}
      {view}
      
      
    </Container>
  );

}

export default List;