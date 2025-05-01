import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex justify-between gap-5 screen mt-10'>
        <div className=' rounded-xl py-5 px-10 bg-red-400 w-[45%]'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className=' rounded-xl py-5 px-10 bg-blue-400 w-[45%]'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Complete Task</h3>
        </div>
        <div className=' rounded-xl py-5 px-10 bg-green-400 w-[45%]'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Accept Task</h3>
        </div>
        <div className=' rounded-xl py-5 px-10 bg-yellow-300 w-[45%]'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber
