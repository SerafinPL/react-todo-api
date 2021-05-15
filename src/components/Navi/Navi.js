
import React, {useEffect} from 'react';

import {NavLink} from 'react-router-dom';

import {  Button, Container } from 'theme-ui';

const Navi = props => {

  return(
    <Container  bg="muted">
    	
        <NavLink to='/newtask' 
				//activeClassName={classes.active}
				exact={props.exact}
				><Button>Dodaj Zadanie</Button></NavLink>
			
        <NavLink to='/' 
				//activeClassName={classes.active}
				exact={props.exact}
				><Button>Lista Zadań</Button></NavLink>
			

        
			
    </Container>
  );

}

export default Navi;