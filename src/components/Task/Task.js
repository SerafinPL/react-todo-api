import React, {useEffect, Suspense} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import axios from '../../axios';

 import { Flex,Container, Checkbox, Text, Label,Button, Spinner  } from 'theme-ui';

import {NavLink} from 'react-router-dom';

import {listStateMain} from '../../recoliState';

const Task = ({task, newstart}) => {

  const [todoList, setTodoList] = useRecoilState(listStateMain);
  const index = todoList.findIndex((listItem) => listItem === task);
  console.log(index);

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
    	<Container  bg="muted">
        <Label>
          <Checkbox checked={task.completed} onChange={event => clickCheckbox(event.target.checked)}/>

          <NavLink to={'/'+task.id} >
            <Text sx={{
              flexGrow: 1,
            }}>{task.title}</Text>
          </NavLink>
          
        </Label>
        
      </Container>
  );

}

export default Task;