import React from 'react'
import Navbar from './components/Navbar'
import CreateSnippet from './components/CreateSnippet'

const App = () => {
  return (
   <main  className='container max-w-4xl mx-auto'>
    <Navbar/>
    <CreateSnippet/>

   </main>
  )
}

export default App