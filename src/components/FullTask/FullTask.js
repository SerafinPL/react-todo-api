import React, {useEffect} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import {Input, Container, Checkbox, Text, Label,Button  } from 'theme-ui'

 
import {NavLink} from 'react-router-dom';


const FullTask = ({task}) => {

  return(
    	<Container  bg="muted">
        <Label>
          <Checkbox checked={task.completed} />

          
            <Input sx={{
              flexGrow: 1,
            }} value={task.title}/>
          
          
        </Label>

        
        <Button variant='triple'>Zapisz Zmiany</Button>
        <Button variant='triple'>Usuń Zadanie</Button>
        <NavLink to='/' 
        //activeClassName={classes.active}
        
        ><Button variant='triple'>Wróć</Button></NavLink>
      </Container>
  );

}

export default FullTask;