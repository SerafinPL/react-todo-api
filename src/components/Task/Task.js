import React, {useEffect} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import { Container, Checkbox, Text, Label,Button  } from 'theme-ui'

 



const Task = ({task}) => {

  return(
    	<Container  bg="muted">
        <Label>
          <Checkbox defaultChecked={task.completed} />
          <Text sx={{
            flexGrow: 1,
          }}>{task.title}</Text>
          <Button variant="secondary">Edytuj</Button>
          <Button variant="secondary">Usuń</Button>
        </Label>
        
      </Container>
  );

}

export default Task;