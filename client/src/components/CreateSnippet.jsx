import React, { useEffect, useState } from 'react'
import axios from 'axios'



function CreateSnippet() {
  const [title,setTitle]=useState("");
  const [code,setCode]=useState("")
  const [snippets,setSnippets]= useState({});
  const createSnippet=async(e)=>{
    e.preventDefault()
    try {
      const res=await axios.post("http://localhost:8000/api/v1/snippet",{title,code});
      // console.log(res);
     alert(res.data.message);
      
    } catch (error) {
      console.log("error occured",error);
    }
  };

  useEffect(()=>{
    const fetchSnippet=async()=>{
      try {
        const res= await axios.get("http://localhost:8000/api/v1/snippet/snippets")
        setSnippets(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("error occured",error);
      }
    }
    fetchSnippet();
  },[]);

  return (
   <div className='mt-10'>
    <form onSubmit={createSnippet} className='flex flex-col space-y-4'>
        <input
         type="text"
         value={title}
         onChange={(e)=>setTitle(e.target.value)}
         placeholder='Title'
         className='border rounded px-2 py-1 w-fit'
        />

        <textarea
         placeholder='write a code snippet'
         value={code}
         onChange={(e)=>{setCode(e.target.value)}}
         className='border rounded px-2 py-1'
        />

        <button className='w-fit bg-black text-white px-6 py-2 rounded cursor-pointer'>Add</button>
    </form>
<div className='mt-5 grid md:grid-cols-3 gap-2'>
      {
        Object.values(snippets).map((snippet)=>(
          <div key={snippet.id} className="p-3 border rounded ">
            <h1 className='font-bold text-xl '>{snippet.title}</h1>

          </div>
        ))
      }

</div>
   </div>
  )
}

export default CreateSnippet