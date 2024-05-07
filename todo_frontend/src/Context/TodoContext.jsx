import React, { createContext, useState, useContext } from "react";

// creating a context for the todo list
const TaskContext = createContext();

// custom hook to use the todo context
// export const useTaskContext = () => useContext(TaskContext);

// provider component to wrap your app and provide the context
export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);

    const addNewTask = (text) => {
        const freshTask = {text, completed: false}
        setTasks([...tasks, freshTask])
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
                return {...task, completed: !task.completed}
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