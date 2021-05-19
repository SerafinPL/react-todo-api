import React, {useEffect,Suspense} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import { Flex,Box, Container, Checkbox, Text, Label,Button, Spinner, Input  } from 'theme-ui'
import Task from '../Task/Task';
 
import axios from '../../axios';

import {NavLink} from 'react-router-dom';

import {Route, Switch, Redirect} from 'react-router-dom';

import {listStateMain} from '../../recoliState';




const List = (props) => {
  
  const [todoList, setTodoList] = useRecoilState(listStateMain);

  let view = <Spinner sx={{margin: '0 auto',}}/>;

  if (todoList.length > 0) {
    view = todoList.map((todoItem) => (
      <Task  key={todoItem.id} task={todoItem} ></Task>
    ));

  }

  return(
  	<Flex sx={{ flexDirection: 'column', height: '100vh', position: 'fixed', width: '100vw',}} bg="muted">
      <Box sx={{margin: '5px'}}>
        <Input placeholder='Wyszukaj'/>
      </Box>
      <Box sx={{ flexGrow: 1, overflowY: 'auto', textAlign: 'center'}}>
        {view}
      </Box>
      <Box>
        <NavLink to='/newtask' 
             
        ><Button>Dodaj Zadanie</Button></NavLink>
      </Box>
    </Flex>
  );

}

export default List;