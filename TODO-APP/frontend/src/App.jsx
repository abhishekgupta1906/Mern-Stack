import { useState } from 'react'

import './App.css'
import {CreateTodo} from './components/CreateTodo'
import {Todos} from './components/Todos'
function App() {
  const [todos, setTodos] = useState([])
  // fetch("http://localhost:3000/todos")
  // .then(async function(res)
  // {
  //   const response=await res.json();
  //   setTodos(response.todos);

  // })

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={[
        {
      title: "hello",
      description: "telloello",
      completed: false
    }
  ]} />
      
    </div>
    
  )
}

export default App
