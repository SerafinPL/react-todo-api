import React, {useEffect} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import { Container } from 'theme-ui'

 const listState = atom({
    key: 'listState',
    default: [],
  });

const Task = ({task}) => {

  return(
    	<Container  bg="muted">
        Centered container
      </Container>
  );

}

export default Task;