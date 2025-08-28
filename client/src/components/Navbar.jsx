import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between h-14'>
        <h1 className ='font-bold text-2xl'>Code Snippet</h1>
        <button>Logout</button>
    </div>
  )
}

export default Navbar