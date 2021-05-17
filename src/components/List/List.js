import React, {useEffect} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import { Container, Checkbox, Text, Label,Button  } from 'theme-ui'
import Task from '../Task/Task';
 
import {NavLink} from 'react-router-dom';


const List = ({list}) => {
  let view= null;
  if (list) {
    view = list.map((todoItem) => (
      <Task key={todoItem.id} task={todoItem} ></Task>
    ));

  }

  return(
  	<Container  bg="muted">
      
      {view}
    </Container>
  );

}

export default List;