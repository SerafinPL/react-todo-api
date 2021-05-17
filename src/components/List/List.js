import React, {useEffect,Suspense} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import { Flex,Box, Container, Checkbox, Text, Label,Button, Spinner  } from 'theme-ui'
import Task from '../Task/Task';
 
import axios from '../../axios';

import {NavLink} from 'react-router-dom';

import {Route, Switch, Redirect} from 'react-router-dom';



const List = (props) => {
  
  let view= null;

  if (props.list) {
    view = props.list.map((todoItem) => (
      <Task newstart={props.newstart} key={todoItem.id} task={todoItem} ></Task>
    ));

  }



  return(
  	<Flex sx={{ flexDirection: 'column'}} bg="muted">
      <Box>

      </Box>
      <Box sx={{ flexGrow: 1}}>
        {view}
      </Box>
      <Box>
        <NavLink to='/newtask' 
        //activeClassName={classes.active}
        
        ><Button>Dodaj Zadanie</Button></NavLink>
      </Box>
    </Flex>
  );

}

export default List;