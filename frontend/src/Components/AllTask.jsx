import React from 'react'
import Create from '../Pages/Create'
import Todo from '../Pages/Todo'
import InProgress from '../Pages/InProgress'
import Done from '../Pages/Done'

const AllTask = () => {
  return (
    <div>
      <div className='flex mt-[2rem] pt-[.5rem]'>
        <div className='w-[20rem] ml-[1rem] border-r-8'>
          <p className='bg-[#005780] font-bold decoration-white font-serif'> Create</p> 
          <Create/>
          </div>
        <div className='w-[20rem] ml-[.5rem] border-r-8'>
          <p className='bg-[green] font-bold decoration-white font-serif'> Todo</p> 
          <Todo/>
          </div>
        <div className='w-[20rem] ml-[.5rem] border-r-8'>
        <p className='bg-[#778000] font-bold decoration-white font-serif'> InProgress</p>
        <InProgress/>
          </div>
        <div className='w-[20rem] ml-[.5rem]'>
        <p className='bg-[#800000] font-bold decoration-white font-serif'> Done</p>
        <Done/>
          </div>
      </div>
    </div>
  )
}

export default AllTask
