import React, {useState} from 'react'
import TaskList from './components/TaskList'
import { useTask } from './Context/TaskContext';

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
