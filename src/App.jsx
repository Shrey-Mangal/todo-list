import { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo,settodo] = useState("")
  const [todos, settodos] = useState([])
  const handleedit = () =>{

  }
  const handledelete = () =>{
    
  }
  const handleadd = () =>{
    settodos([...todos, {id: uuidv4(), todo , isCompleted: false}]) 
    settodo("")   
  }
  const handlechange = (e) => {
    settodo(e.target.value)
  }

  const handlecheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    settodos(newtodos)
  }
  

  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh]">
      <div className='addtodo my-5'>
        <h2 className='text-lg font-bold'>Add a todo</h2>
        <input type="text" onChange={handlechange} value={todo} onKeyDown={(e)=>{
          if(e.key=="Enter"){
            handleadd();
          }
        }} className='bg-white rounded-lg w-1/2'/>
        <button onClick={handleadd} className='cursor-pointer font-bold bg-violet-800 hover:bg-violet-900 text-white rounded-md p-2 py-0.5 mx-6'>Add</button>
      </div>
      <h2 className='text-lg font-bold'>Your todos</h2>
      <div className="todos">
        {todos.map((item)=>{
        return <div key={item.id} className="todo flex justify-between py-2">
          <input name={item.id} onChange={handlecheckbox} type="checkbox" value={item.isCompleted}  />
          <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          <div className="buttons">
            <button onClick={handleedit} className='cursor-pointer font-bold bg-violet-800 hover:bg-violet-900 text-white rounded-md p-2 py-0.5 mx-1'>Edit</button>
            <button onClick={handledelete} className='cursor-pointer font-bold bg-violet-800 hover:bg-violet-900 text-white rounded-md p-2 py-0.5 mx-1'>Delete</button>
          </div>
        </div>
        })}
      </div>
      </div>
    </>
  )
}

export default App
