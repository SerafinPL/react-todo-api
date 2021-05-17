import React, {useEffect} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import {Flex, Box,Input, Container, Checkbox, Text, Label,Button  } from 'theme-ui'

 
import {NavLink} from 'react-router-dom';


const FullTask = ({task}) => {

  return(
    	<Flex sx={{height: '100vh', flexDirection: 'column'}} bg="muted">
        <Box sx={{
                flexGrow: 1,
                display: 'flex'
              }}>
          <Label sx = {{
              alignSelf: 'center',
            }}
          >
            <Checkbox checked={task.completed} />
              <Input sx={{
                flexGrow: 1,
              }} value={task.title}/>
            
            
          </Label>
        </Box>
        <Box>
          <Button variant='triple'>Zapisz Zmiany</Button>
          <Button variant='triple'>Usuń Zadanie</Button>
          <NavLink to='/' ><Button variant='triple'>Wróć</Button></NavLink>
        </Box>
      </Flex>
  );

}

export default FullTask;