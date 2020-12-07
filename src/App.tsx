import React, { useState } from 'react';
import Tasks from './components';

export interface StateType {
  id: number
  title: string
  done: boolean
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<StateType[]>(
    [{ id: 0, title: 'test', done: false },
    { id: 1, title: 'test2', done: true }]
  )

  return (<div className='app'>
    <h1> Количество задач:{todo.length} </h1>
    {todo.map(todos => (<Tasks todos={todos} key={todos.id} />))}

  </div>)
}


export default App;
