import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo,settodo] = useState("")
  const [todos, settodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

  const saveTols = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  
  const handleedit = (e, id) =>{
    let t = todos.filter(i=>i.id===id)
    settodo(t[0].todo)
    let newtodos = todos.filter(item=>{
      return item.id!==id
    }); 
    settodos(newtodos);
    saveTols();
  }

  const handledelete = (e, id) =>{
    let newtodos = todos.filter(item=>{
      return item.id!==id
    }); 
    settodos(newtodos) 
    saveTols();
  }

  const handleadd = () =>{
    settodos([...todos, {id: uuidv4(), todo , isCompleted: false}]) 
    settodo("")
    saveTols();   
  }

  const handlechange = (e) => {
    settodo(e.target.value)
  }

  const handleDeleteAll = () => {
    settodos([]);
    saveTols();
  }

  const handlecheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    settodos(newtodos)
    saveTols();
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
        <button onClick={handleadd} className='cursor-pointer font-bold bg-violet-800 hover:bg-violet-900 text-white rounded-md p-2 py-0.5 mx-6'>Save</button>
        <button onClick={handleDeleteAll} className='cursor-pointer font-bold bg-red-600 hover:bg-red-700 text-white rounded-md p-2 py-0.5'>Delete All</button>

      </div>
      <h2 className='text-lg font-bold'>Your todos</h2>
      <div className="todos">
        {todos.length===0 && <div className='font-bold'>No todos to display</div>}
        {todos.map((item)=>{
        return <div key={item.id} className="todo flex justify-between py-2">
          <div className='flex gap-5'>
            <input name={item.id} onChange={handlecheckbox} type="checkbox" checked={item.isCompleted}  />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          </div>
          <div className="buttons flex h-full">
            <button onClick={(e)=>{handleedit(e, item.id)}} className='cursor-pointer font-bold bg-violet-800 hover:bg-violet-900 text-white rounded-md p-2 py-0.5 mx-1'>Edit</button>
            <button onClick={(e)=>{handledelete(e,item.id)}} className='cursor-pointer font-bold bg-violet-800 hover:bg-violet-900 text-white rounded-md p-2 py-0.5 mx-1'>Delete</button>
          </div>
        </div>
        })}
      </div>
      </div>
    </>
  )
}

export default App
