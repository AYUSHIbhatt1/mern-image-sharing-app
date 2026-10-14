import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Form from './pages/form'
import Feed from './pages/Feed'
const App = () => {
  return (
    <div className=' h-screen w-full' >
      <Routes>
        <Route path='/form'element={<Form/>}/>
        <Route path='/feed' element={<Feed/>}/>
      </Routes>
    </div>
  )
}

export default App
