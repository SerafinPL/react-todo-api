

import React, {useEffect} from 'react'
import {atom, selector, useRecoilState} from 'recoil';

import { Button } from 'theme-ui'

 const listState = atom({
    key: 'listState',
    default: [],
  });

const Main = ({todo}) => {

  const [todoList, setTodoList] = useRecoilState(listState);

	let view = <p>loading...</p>;

	useEffect(() => {
		setTodoList(todo);

	}, [todo])

	if (todoList) {
      view = todoList.map((todoItem) => (
        <p key={todoItem.id} >{todoItem.title}</p>
      ));

    }

    return(
    	<React.Fragment>
    		{view}
        <Button>New User</Button>
    	</React.Fragment>);

}

export default Main;