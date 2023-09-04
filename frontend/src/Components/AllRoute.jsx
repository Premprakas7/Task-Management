import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import AllTask from './AllTask'

const AllRoute = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/' element={<AllTask/>} />
    </Routes>  
    </div>
  )
}

export default AllRoute
