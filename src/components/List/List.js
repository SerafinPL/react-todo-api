import React from 'react'
import {atom, selector, useRecoilState, useRecoilValue} from 'recoil';

import { Flex,Box, Button, Spinner, Input,Paragraph, Select  } from 'theme-ui'
import Task from '../Task/Task';
 


import {NavLink} from 'react-router-dom';



import {listStateMain, fatchData} from '../../recoliState';

const todoListSearch = atom({
  key: 'todoListSearch',
  default: '',
});

const searchState = selector({
  key: 'searchState', 
  get: ({get}) => {
    const list = get(listStateMain);
    const searchQuery = get(todoListSearch);
    
    return (list.filter(item => item.title.toLowerCase().search(searchQuery.toLowerCase()) !== -1));
  },
});

const ListStats = selector({
  key: 'ListStats',
  get: ({get}) => {
    const list = get(listStateMain);
    const totalNum = list.length;
    const totalCompletedNum = list.filter((item) => item.completed).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    
    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
    };
  },
});


const selectViews = atom({
  key: 'selectViews',
  default: 'Wszystkie',
});

const selectChosenes = selector({
  key: 'selectChosenes', 
  get: ({get}) => {
    const search = get(searchState);
    const ChosenSelect = get(selectViews);
    
    switch (ChosenSelect) {
      case 'Wykonane':
        return search.filter((item) => item.completed);
      case 'Niewykonane':
        return search.filter((item) => !item.completed);
      default:
        return search;
    }
  },
});

const List = (props) => {

  
  const [searchInput, setSearchInput] = useRecoilState(todoListSearch);
  const [selectView, setSelectView] = useRecoilState(selectViews);
  
  const fetchData = useRecoilValue(fatchData);
  const result = useRecoilValue(listStateMain);
  const searchResultWithSelect = useRecoilValue(selectChosenes);
  const stats = useRecoilValue(ListStats);

  let view = <Spinner sx={{margin: '25% auto',}}/>;

  if (fetchData) {
    if (result.length) {

      view = searchResultWithSelect.map((todoItem) => (
        <Task  key={todoItem.id} task={todoItem} ></Task>
      ));
    } else {
      view = <Paragraph sx={{color: 'mess'}}> Brak zadań do wyświetlenia, dodaj nowe.</Paragraph>
    }

  }

  return(
  	<Flex sx={{ flexDirection: 'column', height: '100%', position: 'fixed', width: '100vw', maxHeight: '-webkit-fill-available'}} bg="muted">
      <Box sx={{padding: '5px', textAlign: 'right', borderBottom: '1px solid #442929', bg: 'nextPrimary'}}>
        <Input placeholder='Wyszukaj' value={searchInput} onChange={event => setSearchInput(event.target.value)}/>
        <Select value={selectView} onChange={(event) => {setSelectView(event.target.value)}}>
          <option>Wszystkie</option>
          <option>Wykonane</option>
          <option>Niewykonane</option>
        </Select>
        <Paragraph sx={{ color: 'mess'}}>{`Wykonane: ${stats.totalCompletedNum} / Niewykonane ${stats.totalUncompletedNum}`}</Paragraph>
      </Box>
      <Box sx={{ flexGrow: 1, overflowY: 'auto', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
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