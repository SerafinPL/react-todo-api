import React, {useEffect, useState, useRef} from 'react'
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

  const textareaRef = useRef(null);

  const [todoList, setTodoList] = useRecoilState(listStateMain);
  const index = todoList.findIndex((listItem) => listItem === task);

  const [input, setInput] = useRecoilState(textState);
  const [check, setCheck] = useState(task.completed);
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    setInput(task.title);
  },[setInput, task.title])

   useEffect(() => {
    textareaRef.current.focus();
  },[]);
  
  const onEnter = (event) => {
  
    if (event.keyCode === 13) {
      saveChange();
    }
  } 

  const saveChange = () => {

    const newList = replaceItemAtIndex(todoList, index, {
      ...task,
      title: input,
      completed: check,
      status: check ? 'completed' : 'pending'
    });

    setTodoList(newList);

    axios.put('/todos/'+task.id , {status: check ? 'completed' : 'pending', title:input, user_id:"1000", user: 'KubaKoder', })
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
    	<Flex sx={{height: '100vh', flexDirection: 'column', maxHeight: '-webkit-fill-available'}} bg="muted">
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
              <Textarea ref={textareaRef} sx={{
                flexGrow: 1,
              }} value={input} onChange={event => setInput(event.target.value)}
              onKeyDown={onEnter}
              />
            
            
          </Label>
          <Paragraph sx={{ alignSelf: 'end', color:'secondary'}}>Ilo???? znak??w: {count}</Paragraph>
        </Box>
        
        <Box>
          <Button variant='triple' onClick={saveChange}>Zapisz Zmiany</Button>
          <Button variant='triple' onClick={deleteItem}>Usu?? Zadanie</Button>
          <NavLink to='/' ><Button variant='triple'>Wr????</Button></NavLink>
        </Box>
      </Flex>
  );

}

export default FullTask;