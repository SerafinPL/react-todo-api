
import axios from '../../axios';
import React, {useEffect} from 'react'
import {atom, selector, useRecoilState} from 'recoil';
import Task from '../Task/Task';



import { Button, Input } from 'theme-ui'

 const listStateMain = atom({
    key: 'listStateMain',
    default: [],
  });

const Main = ({todo}) => {

  const [todoList, setTodoList] = useRecoilState(listStateMain);

	let view = <p>loading...</p>;

	useEffect(() => {
		setTodoList(todo);

	}, [todo])

	if (todoList) {
      view = todoList.map((todoItem) => (
        <Task key={todoItem.id} task={todoItem} ></Task>
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
    		{view}
    		
        
      </React.Fragment>);

}

export default Main;