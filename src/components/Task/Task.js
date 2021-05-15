import React, {useEffect} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import { Container, Checkbox, Text, Label } from 'theme-ui'

 



const Task = ({task}) => {

  return(
    	<Container  bg="muted">
        <Label>
          <Checkbox defaultChecked={task.completed} />
          <Text>{task.title}</Text>
        </Label>
        
      </Container>
  );

}

export default Task;