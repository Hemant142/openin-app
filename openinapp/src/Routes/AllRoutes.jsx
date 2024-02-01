import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../Pages/SignIn'
import UploadCSV from '../Pages/UploadCSV'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/upload' element={<UploadCSV/>}/>
        </Routes>
    </div>
  )
}
