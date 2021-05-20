import React, {useEffect, Suspense} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import axios from '../../axios';

 import { Flex,Container, Checkbox, Text, Label,Button, Spinner,Message  } from 'theme-ui';

import {NavLink} from 'react-router-dom';

import {listStateMain} from '../../recoliState';

const Task = ({task}) => {

  
  

  const [todoList, setTodoList] = useRecoilState(listStateMain);
  const index = todoList.findIndex((listItem) => listItem === task);
  
  const clickCheckbox = (checked) => {
    
    const newList = replaceItemAtIndex(todoList, index, {
      ...task,
      completed: checked,
    });

    setTodoList(newList);
    
    axios.put('/todos/'+task.id , {"completed":checked, "title":task.title, "user_id":"1292" })
    .then(res => {
      console.log(res);
          
    })
    .catch(err => console.log(err));
  }

  const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

  return(
    	<Message  sx={{margin: 15}} bg="mess">
        <Label>
          <Checkbox checked={task.completed} onChange={event => clickCheckbox(event.target.checked)}/>

          <NavLink style={{textDecoration: 'none', color: '#442929'}} to={'/'+task.id} >
            <Text sx={{
              flexGrow: 1,
            }}>{task.title}</Text>
          </NavLink>
          
        </Label>
        
      </Message>
  );

}

export default Task;