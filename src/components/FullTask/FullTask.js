import React, {useEffect, useState} from 'react'
import {atom, selector, useRecoilState, useRecoilValue} from 'recoil';

import {Flex, Box, Checkbox, Paragraph,Label,Button,Textarea,Heading  } from 'theme-ui'

import axios from '../../axios';
 
import {NavLink, Redirect} from 'react-router-dom';

import {listStateMain} from '../../recoliState';


const textState = atom({
  key: 'textState', 
  default: '', 
});

const charCountState = selector({
  key: 'charCountState', 
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});


const FullTask = ({task}) => {



  const [todoList, setTodoList] = useRecoilState(listStateMain);
  const index = todoList.findIndex((listItem) => listItem === task);

  const [input, setInput] = useRecoilState(textState);
  const [check, setCheck] = useState(task.completed);
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    setInput(task.title);
  },[setInput, task.title])

  

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

  const count = useRecoilValue(charCountState);

  return(
    	<Flex sx={{height: '100vh', flexDirection: 'column'}} bg="muted">
        {redirect}
        <Box sx={{height: '77px', padding: '5px', textAlign: 'center', borderBottom: '1px solid #442929', bg: 'nextPrimary', color:'secondary'}}><Heading>Edycja zadania</Heading></Box>
        <Box sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '20px'
              }}>
          <Label sx = {{
              
              alignItems: 'center',
            }}
          >
            <Checkbox checked={check} onChange={event => setCheck(event.target.checked)}/>
              <Textarea sx={{
                flexGrow: 1,
              }} value={input} onChange={event => setInput(event.target.value)}/>
            
            
          </Label>
          <Paragraph sx={{ alignSelf: 'end', color:'secondary'}}>Ilość znaków: {count}</Paragraph>
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