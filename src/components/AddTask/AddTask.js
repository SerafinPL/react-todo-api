import React, {useEffect, useState} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import axios from '../../axios';

import { Container, Checkbox, Text, Label, Input, Button } from 'theme-ui'

import {Redirect} from 'react-router-dom';

 const listState = atom({
    key: 'listState',
    default: '',
  });

const AddTask = props => {

  const [input, setInput] = useRecoilState(listState);
  const [redirect, setRedirect] = useState(null)

  const createToDo = () => {
    axios.post('/users/1292/todos', {"completed":"false", "title":input, "user_id":"1292", })
    .then(res => {
      setInput('');
      console.log(res);
      setRedirect(<Redirect to='/' />);
    })
    .catch(err => console.log(err));
  }

  console.log(redirect);



  return(
    	<Container  bg="muted">
      {redirect}
        <Input value={input} onChange={(event) => setInput(event.target.value)} />
        <Button onClick={() => createToDo()}>Dodaj zadanie</Button>
      </Container>
  );

}

export default AddTask;