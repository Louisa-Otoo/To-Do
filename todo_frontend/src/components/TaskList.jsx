import React from 'react'
import { useTask } from '../Context/TodoContext';

function TaskList() {
  const { tasks } = useTask();

  return (
    <>
        <div className='taskBox'>
            {tasks.map((task, index) => (
                <div key={index} className='oneTask'>
                  <p>{task.text}</p>
                  
                  <div className="buttons"> 
                    <button className='taskBtn'>Edit</button>
                    <button className='taskBtn'>Remove</button>
                  </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default TaskList