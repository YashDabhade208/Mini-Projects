import React, { useState } from 'react'



const Todo = () => {

    const [task, setTask] = useState([]);
    const [newtask, setNewTask] = useState("");
    const [completedtask,setcompletedtask]=useState(false);
    const e=0;
   
    const handleinputchange = (e) => {
        setNewTask(e.target.value)
    }
    const addTask = (e) => {
        setTask([...task,newtask])

    }
    const moveup = (e) => {
     const updatedTasks = [...task];
     if(e>0){
     [updatedTasks[e],updatedTasks[e-1]]=[updatedTasks[e-1],updatedTasks[e]]
     setTask(updatedTasks);}
    }
    const movedown = (e) => {
        const updatedTasks = [...task];
        if(e<task.length){
            [updatedTasks[e],updatedTasks[e+1]]=[updatedTasks[e+1],updatedTasks[e]]
            setTask(updatedTasks);}
       }
   


    function deleteTask(index) {
        const updatedTasks = task.filter((task, i) => i !== index);
      setTask(updatedTasks)
    }
    function taskstate(index){
       
    }

    return (
        <><div className='todo-container'>
            <div>
                <h1>TO DO LIST</h1>
                <input onChange={handleinputchange} type="text" />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div >
                <ol>
                    {task.map((t, index) => (
                        <li key={index}>
                        <span style={{ textDecoration: task.completedtask ? 'line-through' : 'none' }}>
                            {t}
                        </span>
                      
                            <button onClick={()=>deleteTask(index)}>
                                Delete
                            </button>
                            <button onClick={()=>moveup(index)}>
                                Up
                            </button>
                            <button  onClick={()=>movedown(index)}>
                                Down
                            </button>
                            <span  className=' Completed'> Completed</span>  <input type="checkbox" />
                           
                            
                        </li>
                    ))}
                </ol>
            </div>
            </div>
        </>
    )
}

export default Todo