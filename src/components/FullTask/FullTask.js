import React, {useEffect, useState} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import {Flex, Box,Input, Container, Checkbox, Text, Label,Button  } from 'theme-ui'

import axios from '../../axios';
 
import {NavLink, Redirect} from 'react-router-dom';

import {listStateMain} from '../../recoliState';


const FullTask = ({task}) => {

  const [todoList, setTodoList] = useRecoilState(listStateMain);
  const index = todoList.findIndex((listItem) => listItem === task);

  const [input, setInput] = useState(task.title);
  const [check, setCheck] = useState(task.completed);
  const [redirect, setRedirect] = useState(null);

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

  const saveChange = () => {

    const newList = replaceItemAtIndex(todoList, index, {
      ...task,
      title: input,
      completed: check,
    });

    setTodoList(newList);

    axios.put('/todos/'+task.id , {"completed": check, "title":input, "user_id":"1292" })
    .then(res => {
      console.log(res);
          
    })
    .catch(err => console.log(err));

    setRedirect(<Redirect to='/' />);
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);

    axios.delete('/todos/'+task.id )
    .then(res => {
      console.log(res);
          
    })
    .catch(err => console.log(err));
  };

  const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

  function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }


  return(
    	<Flex sx={{height: '100vh', flexDirection: 'column'}} bg="muted">
        {redirect}
        <Box sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
              }}>
          <Label sx = {{
              
              alignItems: 'center',
            }}
          >
            <Checkbox checked={check} onChange={event => setCheck(event.target.checked)}/>
              <Input sx={{
                flexGrow: 1,
              }} value={input} onChange={event => setInput(event.target.value)}/>
            
            
          </Label>
        </Box>
        <Box>
          <Button variant='triple' onClick={saveChange}>Zapisz Zmiany</Button>
          <Button variant='triple' onClick={deleteItem}>Usuń Zadanie</Button>
          <NavLink to='/' ><Button variant='triple'>Wróć</Button></NavLink>
        </Box>
      </Flex>
  );

}

export default FullTask;