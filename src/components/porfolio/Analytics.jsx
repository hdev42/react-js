import React from 'react'
import book from '../../assets/images/book-3.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
             <img src={book} className='w-[500] mx-auto my-4' alt="/" />
             <div className="flex flex-col justify-center">
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD </p>
                <h1 className='md:text-4xl sm:text-3xl text-2l font-bold py-2 '>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ut ratione labore at, nemo similique ab nesciunt iste illo eveniet facilis minus eligendi suscipit omnis error adipisci saepe ullam facere.</p>
                <button className="text-[#00df9a] w-[200px] rounded-md font-meduim my-6 mx-auto md:mx-0 py-3 bg-black">Get Started</button>
        
             </div>
        </div>
    </div>
  )
}

export default Analytics