import React from 'react'

function Home() {
  return (
    <div className='flex justify-between mx-auto my-[6rem]'>
      <div className='text-7xl uppercase leading-[6rem] font-black'>Full-Stack <br/> Developer</div>
      <div className='flex flex-col gap-[4px] border-l-4 pl-[100px] border-[#cfcfd9c1]'>
          <p className='mt-[3rem] text-2xl text-gray-700  capitalize'>Full-Stack</p>
          <p className='text-2xl text-gray-700  capitalize'>Animation</p>
          <p className='text-2xl text-gray-700  capitalize'>Based In Thailand</p>
      </div>
    </div>
  )
}

export default Home