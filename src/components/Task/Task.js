import React, {useEffect, Suspense} from 'react'
import {atom, selector, useRecoilState} from 'recoil';



 import { Container, Checkbox, Text, Label,Button, Spinner  } from 'theme-ui';
 import {Route, Switch, Redirect} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const FullTask = React.lazy( () => import('../FullTask/FullTask') );

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