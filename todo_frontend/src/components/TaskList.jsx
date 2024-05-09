import React from 'react'
import { useTask } from '../Context/TaskContext';

function TaskList() {
  const { tasks, toggleTask } = useTask();

  return (
    <>
        <div className='taskBox'>
            {tasks.map((task, index) => (
                <div key={index} className='oneTask'>
                  <input type="checkbox" checked={task.completed} onChange={() => toggleTask(index)} />
                  {/* <label style={{color: task.completed ? 'gray' : 'inherit', }}>
                    {task.text}
                  </label> */}

                  <label 
                    style={{ 
                      color: task.completed ? 'gray' : 'inherit', 
                      textDecoration: task.completed ? 'line-through' : 'none' 
                    }}
                  >
                    {task.text}
                  </label>

                  {
                    task.completed && task.completedAt && (
                      <p>
                        Completed At: {new Date(task.completedAt).toLocaleString()}
                      </p>
                    )
                  }
                  
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