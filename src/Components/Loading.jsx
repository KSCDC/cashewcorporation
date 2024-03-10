import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
function Loading() {
  return (
    <div className='text-center flex justify-center min-h-screen'>
        <h1 className='flex items-center gap-3 font-bold'><AiOutlineLoading3Quarters className='animate-spin'/> Loading</h1>
    </div>
  )
}

export default Loading