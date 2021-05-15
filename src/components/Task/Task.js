import React, {useEffect} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import { Container, Checkbox, Text, Label,Button  } from 'theme-ui'

 
import {NavLink} from 'react-router-dom';


const Task = ({task}) => {

  return(
    	<Container  bg="muted">
        <Label>
          <Checkbox defaultChecked={task.completed} />

          <NavLink to={'/'+task.id}>
            <Text sx={{
              flexGrow: 1,
            }}>{task.title}</Text>
          </NavLink>
          
        </Label>
        
      </Container>
  );

}

export default Task;