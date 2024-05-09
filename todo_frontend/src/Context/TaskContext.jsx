import React, { createContext, useState, useContext, useEffect } from "react";

// creating a context for the todo list
const TaskContext = createContext();

// custom hook to use the todo context
// export const useTaskContext = () => useContext(TaskContext);

// provider component to wrap your app and provide the context
export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetchTasks();
    }, [])

    const fetchTasks = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/tasks')
            if(!response.ok) {
                throw new error('failed to fetch all tasks');
            }

            const data = await response.json();
            setTasks(data)
        } catch (error) {
            console.error('error fetching tasks:', error)
        }
    }

    // const addNewTask = (text) => {
    //     const freshTask = {text, completed: false}
    //     setTasks([...tasks, freshTask])
    // }

    const addNewTask = async(text) => {
        try {
            const response = await fetch('http://localhost:4000/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({text})
            });
            
            if (!response.ok) {
                throw new error('failed to add task')
            }

            const data = await response.json();
            setTasks([...tasks, data])
        } catch (error) {
            console.log('Error adding task:', error)
        }
    }

    

    // const addNewTask = (task) => {
    //     setTasks([...tasks, task]);
    // };

    // const removeTask = (id) => {
    //     setTasks(tasks.filter((task) => task.id !== id));
    // };

    const toggleTask = (index) => {
        const newTasks = tasks.map((task, i) => {
            if(i === index) {
                return {...task, completed: !task.completed, completedAt: !task.completed ? new Date().toISOString() : null}
            }
            return task
        })
        setTasks(newTasks)
    }

    // const toggleTask = (id) => {
    //     setTasks(
    //         tasks.map((task) => 
    //             task.id === id ? { ...task, completed: !task.completed} : task
    //         )
    //     );
    // };

    const taskData = {
        tasks,
        addNewTask, 
        toggleTask
    }

    return (
        <TaskContext.Provider value={taskData}>
            {children}
        </TaskContext.Provider>
    )
}


// return (
//     <TaskContext.Provider value={{tasks, addNewTask, removeTask, toggleTask}}>
//         {children}
//         </TaskContext.Provider>
// );

// return (
//     <TaskContext.Provider value={{tasks, addNewTask, toggleTask}}>
//         {children}
//     </TaskContext.Provider>
// )
// }

// export const useTasks = () => {
//     const context = useContext(TaskContext)
//     return context
// }

export const useTask = () => {
    return useContext(TaskContext)
}


export default TaskContext;