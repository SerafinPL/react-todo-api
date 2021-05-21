import React, {useEffect, useState} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import axios from '../../axios';

import {Flex, Box, Container, Checkbox, Text, Label, Input, Button, Spinner, Heading } from 'theme-ui'

import {Redirect} from 'react-router-dom';

import {NavLink} from 'react-router-dom';

import {listStateMain} from '../../recoliState';

const AddTask = props => {

  const [todoList, setTodoList] = useRecoilState(listStateMain);

  const [input, setInput] = useState('');
  const [redirect, setRedirect] = useState(null);
  const [loading, setloading] = useState(false);

  
  

  const createToDo = () => {
    setloading(true);
    axios.post('/users/1292/todos', {"completed":"false", "title":input, "user_id":"1292" })
    .then(res => {
      setInput('');
      
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: res.data.data.id,
          title: res.data.data.title,
          completed: res.data.data.completed,
          user_id: res.data.data.user_id,
        },
      ]);

      setloading(false);
      setRedirect(<Redirect to='/' />);
    })
    .catch(err => console.log(err));
  }



  console.log(loading)

  return(
    	<Flex sx={{height: '100vh', flexDirection: 'column',  }} bg="muted">
        {redirect}
        
        <Box sx={{height: '77px', padding: '5px', textAlign: 'center', borderBottom: '1px solid #442929', bg: 'nextPrimary'}}><Heading>Dodawanie zadania</Heading></Box>
        
        <Flex sx={{
                flexGrow: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
          {loading ? 
            <React.Fragment>  
              <Spinner /><Text>Dodaje Zadanie</Text> 
            </React.Fragment>  
            :
            <React.Fragment>  
              <Input sx={{width:'80%',}}value={input} onChange={(event) => setInput(event.target.value)} />
              <Button variant='add' onClick={() => createToDo()}>Dodaj zadanie</Button>
            </React.Fragment>}
        </Flex>
        <Flex>
          <NavLink to='/' 
            exact={props.exact}
            style={{width: '100vw' }}
          ><Button>Lista Zadań</Button></NavLink>
        </Flex>
      </Flex>
  );

}

export default AddTask;