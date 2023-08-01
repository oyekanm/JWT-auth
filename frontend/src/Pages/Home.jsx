import React from 'react'

function Home() {
  return (
    <main className='bg-slate-700 rounded-[10px] p-[3rem]'>
      <div className="Container">
        <p className='text-[2rem] text-white capitalize'>this is a <strong>JWT</strong> based authentication only app</p>
        <p className='text-[2rem] text-white'>cookies are used in this app </p>
      
      <div className="flex justify-center items-center mt-4">
        <span className='bg-blue-500 p-4 px-8 rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.4)]  '>
          <p className='text-[2rem] text-white capitalize'>profile</p>
        </span>
      </div>
      </div>
    </main>
  )
}

export default Home