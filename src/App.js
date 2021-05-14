
import React, {useState, useEffect} from 'react'
import './App.css';
import axios from './axios';

const App = () => {

  const [todos, setTodos] = useState(null);
  let view = <p>loading...</p>;

  useEffect(() =>{
    axios.get('/users/1714/todos')
    .then(res => {
      setTodos(res.data.data);
      console.log(res.data.data)
    })
    .catch(err => console.log(err));

  }, []);

  const createUser = () => {
    axios.post('/users', {"name":"Kuba Koder", "gender":"Male", "email":"kk@kk2.com.pl", "status":"Active"})
    .then(res => {
      
      console.log(res)
    })
    .catch(err => console.log(err));
  }

  const createToDo = () => {
    axios.post('/users/1714/todos', {"completed":"false", "title":"wpis 2", "user_id":"1714"})
    .then(res => {
      
      console.log(res)
    })
    .catch(err => console.log(err));
  }

    const deleteToDo = () => {
    axios.delete('todos/2039')
    .then(res => {
      
      console.log(res)
    })
    .catch(err => console.log(err));
  }



  if (todos) {
    view = todos.map(todo => <p key={todo.id}>{todo.title}</p>)
  }



  return (
    <div className="App">
      {view}
      <button onClick={createToDo}>New User</button>
    </div>
  );
}

export default App;
