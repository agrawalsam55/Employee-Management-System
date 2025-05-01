import React from 'react'

const FailedTask = ({data}) => {
  return (
     <div className='p-5 flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl '>
    <div className='flex justify-between items-center'>
        <h3 className='text-sm bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
    </div>
        <h2 className='mt-5 text-2xl font-semibold '>{data.title}</h2>
        <p className='text-sm mt-4'>
            {data.description}
        </p>
        <div className='mt-2'>
            <button className='w-full mt-4 bg-red-600 px-3 py-1'>Failed</button>
        </div>
</div>
  )
}

export default FailedTask
