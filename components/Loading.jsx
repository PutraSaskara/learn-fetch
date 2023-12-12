import React from 'react'

function Loading() {
  return (
    <div className='flex justify-center p-5'>
        <span className='sr-only'>Loading...</span>
        <div className='h-5 w-5 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-5 w-5 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-5 w-5 bg-black rounded-full animate-bounce'></div>
</div>
  );
}


export default Loading