import React, {useEffect, useState} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import axios from '../../axios';

import {Flex, Box, Container, Checkbox, Text, Label, Input, Button } from 'theme-ui'

import {Redirect} from 'react-router-dom';

import {NavLink} from 'react-router-dom';

 const listState = atom({
    key: 'listState',
    default: '',
  });

const AddTask = props => {

  const [input, setInput] = useRecoilState(listState);
  const [redirect, setRedirect] = useState(null);
  

  const createToDo = () => {
    axios.post('/users/1292/todos', {"completed":"false", "title":input, "user_id":"1292" })
    .then(res => {
      setInput('');
      //props.newstart(input);
      console.log(res.data.data);
      setRedirect(<Redirect to='/' />);
    })
    .catch(err => console.log(err));
  }





  return(
    	<Flex sx={{height: '100vh', flexDirection: 'column',  }} bg="muted">
        {redirect}
        <Flex>
          <Text sx={{margin: '0 auto'}}>Dodawanie Zadania</Text>
        </Flex>
        <Flex sx={{
                flexGrow: 1,
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
          <Input value={input} onChange={(event) => setInput(event.target.value)} />
          <Button onClick={() => createToDo()}>Dodaj zadanie</Button>
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