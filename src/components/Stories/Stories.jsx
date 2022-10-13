import React from 'react'

const Stories = ({storieInfo}) => {
  return (
   <>
    {
      storieInfo.map(storie => {
        return(
          <div className='w-20 h-20 flex flex-col items-center'>
            <div className='h-16 w-16 border rounded-full flex items-center justify-center ' key={storie.id}>
              <div className='h-14 w-14 border rounded-full'>
                <img src={storie.image} alt={storie.id} />    
              </div>
            </div>  
            <p className='text-xs text-slate-400 truncate'>{storie.name}</p>             
          </div>
        )
      })
    }
   </>    
  )
}

export default Stories