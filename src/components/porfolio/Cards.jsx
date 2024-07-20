import React from 'react'
import logo from '../../assets/images/logo.svg'

const Cards = () => {
  return (
    <div>
        <div className="w-full py-[10rem] px-4 bg-white ">
            <div className="max-w0[1240px] mx-auto grid md:grid-cols-3 gap-8">
                {/* 1 */}
                <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 my-8">
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={logo} alt="logo" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User </h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className="text-center font-meduim">
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 mt-8'>1 Granted User  </p>
                        <p className='py-2 border-b mx-8 mt-8'>Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-meduim my-6 mx-auto py-3 text-black font-bold">Start Tutorial</button>
                </div>
                {/* 2 */}
                <div className="w-full shadow-xl flex flex-col p-4 my-8 md:0 rounded-lg hover:scale-105 duration-300 ">
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={logo} alt="logo" />
                    <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
                    <p className='text-center text-4xl font-bold'>$199</p>
                    <div className="text-center font-meduim">
                        <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                        <p className='py-2 border-b mx-8 mt-8'>3 Granted User  </p>
                        <p className='py-2 border-b mx-8 mt-8'>Send up to 10 GB</p>
                    </div>
                    <button className="text-[#00df9a] w-[200px] rounded-md font-meduim my-6 mx-auto py-3 bg-black font-bold">Start Tutorial</button>
                </div>
                {/* 3 */}
                <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 my-8">
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={logo} alt="logo" />
                    <h2 className='text-2xl font-bold text-center py-8'>Group Account </h2>
                    <p className='text-center text-4xl font-bold'>$299</p>
                    <div className="text-center font-meduim">
                        <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                        <p className='py-2 border-b mx-8 mt-8'>10 Granted User  </p>
                        <p className='py-2 border-b mx-8 mt-8'>Send up to 20 GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-meduim my-6 mx-auto py-3 text-black font-bold">Start Tutorial</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards