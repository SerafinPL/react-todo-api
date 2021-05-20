import React, {useEffect,Suspense,useState} from 'react'
import {atom, selector, useRecoilState, useRecoilValue} from 'recoil';

import { Flex,Box, Container, Checkbox, Text, Label,Button, Spinner, Input,Paragraph  } from 'theme-ui'
import Task from '../Task/Task';
 
import axios from '../../axios';

import {NavLink} from 'react-router-dom';

import {Route, Switch, Redirect} from 'react-router-dom';

import {listStateMain} from '../../recoliState';

const todoListSearch = atom({
  key: 'todoListSearch',
  default: '',
});

const searchState = selector({
  key: 'searchState', 
  get: ({get}) => {
    const list = get(listStateMain);
    const searchQuery = get(todoListSearch);
    
    return (list.filter(item => item.title.search(searchQuery) !== -1));
  },
});

const ListStats = selector({
  key: 'ListStats',
  get: ({get}) => {
    const list = get(listStateMain);
    const totalNum = list.length;
    const totalCompletedNum = list.filter((item) => item.completed).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    console.log(totalNum,
      totalCompletedNum,
      totalUncompletedNum)
    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
    };
  },
});






const List = (props) => {

  const [searchInput, setSearchInput] = useRecoilState(todoListSearch);
  const [selectView, setSelectView] = useRecoilState(todoListSearch);

  const [todoList, setTodoList] = useRecoilState(listStateMain);

  const searchResult = useRecoilValue(searchState);

  const stats = useRecoilValue(ListStats);

  console.log(searchResult);

  let view = <Spinner sx={{margin: '0 auto',}}/>;

  if (todoList.length > 0) {
    view = searchResult.map((todoItem) => (
      <Task  key={todoItem.id} task={todoItem} ></Task>
    ));

  }

  return(
  	<Flex sx={{ flexDirection: 'column', height: '100vh', position: 'fixed', width: '100vw',}} bg="muted">
      <Box sx={{padding: '5px', textAlign: 'right', borderBottom: '1px solid #442929', bg: '#cfe3cd'}}>
        <Input placeholder='Wyszukaj' value={searchInput} onChange={event => setSearchInput(event.target.value)}/>
        <Select value={selectView} onChange={(event) => {setSelectView(event.target.value)}}>
          <option>Wszystkie</option>
          <option>Wykonane</option>
          <option>Niewykonane</option>
        </Select>
        <Paragraph>{`Wykonane: ${stats.totalCompletedNum} / Niewykonane ${stats.totalUncompletedNum}`}</Paragraph>
      </Box>
      <Box sx={{ flexGrow: 1, overflowY: 'auto', textAlign: 'center'}}>
        {view}
      </Box>
      <Box>
        <NavLink to='/newtask' 
             
        ><Button>Dodaj Zadanie</Button></NavLink>
      </Box>
    </Flex>
  );

}

export default List;