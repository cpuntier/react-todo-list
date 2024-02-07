import { useState } from 'react'
import './App.css'
import List from './components/List'
import AddTask from './components/AddTask'


function App() {

  const [data, setData] = useState([])


  return (
    <>
      <h1>To-Do List</h1>
      <AddTask data={data} setData={setData}></AddTask>
      <ul>
        <List data={data} setData={setData}></List>
      </ul>

    </>
  )
}

export default App
