
import axios from '../../axios';
import React, {useEffect} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import { Button, Input } from 'theme-ui'

 const listState = atom({
    key: 'listState',
    default: [],
  });

const Main = ({todo}) => {

  const [todoList, setTodoList] = useRecoilState(listState);

	let view = <p>loading...</p>;

	useEffect(() => {
		setTodoList(todo);

	}, [todo])

	if (todoList) {
      view = todoList.map((todoItem) => (
        <p key={todoItem.id} >{todoItem.title}</p>
      ));

  }

  const createToDo = () => {
    axios.post('/users/1292/todos', {"completed":"false", "title":"wpis 4", "user_id":"1292", })
    .then(res => {
      
      console.log(res)
    })
    .catch(err => console.log(err));
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
    		{view}
    		<Input />
        <Button onClick={createToDo}>New Task</Button>
    	</React.Fragment>);

}

export default Main;