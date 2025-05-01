import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='p-5 flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl '>
            <div className='flex justify-between items-center'>
                <h3 className='text-sm bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
                <h2 className='mt-5 text-2xl font-semibold '>{data.category}</h2>
                <p className='text-sm mt-4'>
                    {data.description}
                </p>
                <div className='mt-4'>
                    <button className='w-full mt-4 bg-emerald-800 px-3 py-1'>Accept Task</button>
                </div>
        </div>
  )
}

export default NewTask
