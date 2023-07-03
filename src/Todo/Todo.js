import { useState } from 'react'

function Todo(){
    const [todoList, settodoList] = useState([]);
    const [newTask, setnewTask] = useState('');

    const handleChange = (event) => {
        setnewTask(event.target.value);
    };

    const addTask = ()=>{
        const task = {
            id : todoList.length === 0 ? 1 : todoList[todoList.length - 1].id +1,
            taskName: newTask
        };
        settodoList([...todoList, task]);
    };

    const deleteTask = (taskId) =>{
        const newList = todoList.filter((task) => task.id !== taskId);

        settodoList(newList);
    }

    return (
        <div>
            <input onChange={handleChange}/>
            <button onClick={addTask}>Add Task</button>
            <div>
                {todoList.map((task) =>{
                    return (
                        <>
                            <button onClick={()=>deleteTask(task.id)}>x</button><h2>{task.taskName}</h2>
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default Todo;