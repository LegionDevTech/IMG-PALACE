import React from 'react'

const gridtest = () => {
  return (
    <div class="flex flex-row justify-between bg-red-500 ">
    <span className='w-auto bg-green-400 m-4'> <h1>1</h1>
    <img className="aspect-auto mb-2" src="https://picsum.photos/500/300?random=1" />

    </span>
    
    
    <span className='w-auto bg-green-400 m-4'><h1>2</h1>
    <img className=" aspect-auto mb-2" src="https://picsum.photos/500/300?random=2" />

    </span>
    
    
    <div className='w-auto bg-green-400 m-4'> <h1>3</h1> 
    <img className="w-full aspect-auto mb-2" src="https://picsum.photos/500/300?random=3" />
    </div>
    
    
    <div className='w-auto bg-green-400 m-4'><h1>4</h1>
    <img className="w-full aspect-auto mb-2" src="https://picsum.photos/500/300?random=4" />

    </div>

    <div className='w-auto bg-green-400 m-4'> <h1>5</h1>
    <img className="w-full aspect-auto mb-2" src="https://picsum.photos/500/300?random=1" />

    </div>
    
  </div>
  )
}

export default gridtest