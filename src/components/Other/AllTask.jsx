import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = ({emem}) => {

  const [userData, setUserdata] = useContext(AuthContext);
  

  return (
    
    <div className='bg-[#1c1c1c] p-4 rounded mt-5'>
      <div className='bg-red-400 py-2 px-4 flex justify-between rounded mb-2'>
          <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
          <h3 className='w-1/5  text-lg font-medium'>New Task</h3>
          <h5 className='w-1/5 text-lg font-medium'>Active Status</h5>
          <h5 className='w-1/5  text-lg font-medium'>Completed Status</h5>
          <h5 className='w-1/5 text-lg font-medium'>Failed Status</h5>
        </div>
        <div className=''>
        {userData.map(function(elem, idx){
          return <div key={idx} className='bg-[#1c1c1] py-2 border-1 border-emerald-500 px-4 flex justify-between rounded mb-2'>
          <h2 className='w-1/5  text-lg font-medium'>{elem.firstName}</h2>
          <h3 className='w-1/5 text-blue-600 text-lg font-medium'>{elem.taskNumbers.newTask}</h3>
          <h5 className='w-1/5 text-yellow-500 text-lg font-medium'>{elem.taskNumbers.active}</h5>
          <h5 className='w-1/5 text-green-500 text-lg font-medium'>{elem.taskNumbers.completed}</h5>
          <h5 className='w-1/5 text-red-600 text-lg font-medium'>{elem.taskNumbers.failed}</h5>
        </div>
        })}
        </div>
    </div>
  )
}

export default AllTask
