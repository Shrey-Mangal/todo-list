import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-slate-950 text-white'>
            <div>
                <span className='font-bold mx-4 text-xl'>iTask</span>
            </div>
            <ul className='flex gap-3 mx-2'>
                <li className='cursor-pointer hover:text-blue-500'>Tasks</li>
                <li className='cursor-pointer hover:text-blue-500'>Home</li>
            </ul>
        </nav>
    )
}

export default Navbar