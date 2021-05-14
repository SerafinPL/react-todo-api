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