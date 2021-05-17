import React, {useEffect, Suspense} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import axios from '../../axios';

 import { Flex,Container, Checkbox, Text, Label,Button, Spinner  } from 'theme-ui';

import {NavLink} from 'react-router-dom';



const Task = ({task, newstart}) => {



  const clickCheckbox = (checked) => {
    

   
    axios.put('/todos/'+task.id , {"completed":checked, "title":task.title, "user_id":"1292" })
    .then(res => {
      console.log(res);
      newstart(task.id+checked);
      
    })
    .catch(err => console.log(err));
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