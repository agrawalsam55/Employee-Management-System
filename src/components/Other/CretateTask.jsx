import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData, setUserdata] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const[newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({taskTitle, taskDescription, taskDate, category, active:false, newTask:true, failed:false, completed:false})
        const data = userData
        
        
        data.forEach(function(elem){
            if(assignTo == elem.firstName){
                elem.tasks.push(newTask)
                elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1
            }
        })
        
        setUserdata(data)
        console.log(data)

        setTaskTitle("")
        setAssignTo("")
        setCategory("")
        setTaskDescription("")
        setTaskDate("")
    }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}  className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-xl text-gray-300 mb-1'>Task Title</h3>
                        <input 
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' 
                        value={taskTitle}
                        onChange={(e)=> {
                            setTaskTitle(e.target.value)
                        }}
                        />
                    </div>
                    <div>
                        <h3 className='text-xl text-gray-300 mb-1'>Date</h3>
                        <input
                         className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date"
                         value={taskDate}
                         onChange={(e)=> {
                            setTaskDate(e.target.value)
                        }} />
                    </div>
                    <div>
                        <h3 className='text-xl text-gray-300 mb-1'>Asign to</h3>
                        <input 
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" 
                        placeholder='Employee Name' 
                        value={assignTo}
                        onChange={(e)=> {
                        setAssignTo(e.target.value)
                        }}
                        />
                    </div>
                    <div>
                        <h3 className='text-xl text-gray-300 mb-1'>Category</h3>
                        <input 
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" 
                        placeholder='Design, Dev etc'
                        value={category}
                        onChange={(e)=> {
                        setCategory(e.target.value)
                        }}
                        />
                    </div>
                </div>
              
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-xl text-gray-300 mb-1'>Description</h3>
                    <textarea 
                    className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
                    value={taskDescription}
                    onChange={(e)=> {
                    setTaskDescription(e.target.value)
                    }}
                    ></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-700 px-5 rounded text-xl mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
  )
}

export default CreateTask
