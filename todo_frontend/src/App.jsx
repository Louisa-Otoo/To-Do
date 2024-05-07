// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         {/* <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a> */}
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React, {useState} from 'react'
import TaskList from './components/TaskList'
import { useTask } from './Context/TodoContext';

function App() {
  const [newTask, setNewTask] = useState('');
  const { addNewTask } = useTask();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if(!Task.trim()) return 
  //   addNewTask(newTask)
  //   setNewTask('')
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!newTask.trim()) return; // Check if newTask is empty
    addNewTask(newTask);
    setNewTask('');
  }

  return (
    <>
        
      <div className='taskContainer'>
        <form action="" onSubmit={handleSubmit}>
          <div className="inputContainer">
            <h3 className='taskTitle'>Task Manager</h3>

            <input 
              type="text" 
              placeholder='enter task here ...' 
              className='taskInput'
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              />

            <button type='submit' className='addBtn'>Add Task</button>
          </div>
        </form>

        <div className="taskOutput">
          <TaskList />
        </div>

      </div>


    </>
  )
}

export default App
