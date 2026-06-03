import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh]">
      <div className='addtodo my-5'>
        <h2 className='text-lg font-bold'>Add a todo</h2>
        <input type="text" className='bg-white rounded-lg w-1/2'/>
        <button className='cursor-pointer font-bold bg-violet-800 hover:bg-violet-900 text-white rounded-md p-2 py-0.5 mx-6'>Add</button>
      </div>
      <h2 className='text-lg font-bold'>Your todos</h2>
      <div className="todos">
        <div className="todo flex justify-between">
          <div className='text'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          <div className="buttons">
            <button className='cursor-pointer font-bold bg-violet-800 hover:bg-violet-900 text-white rounded-md p-2 py-0.5 mx-1'>Edit</button>
            <button className='cursor-pointer font-bold bg-violet-800 hover:bg-violet-900 text-white rounded-md p-2 py-0.5 mx-1'>Delete</button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
