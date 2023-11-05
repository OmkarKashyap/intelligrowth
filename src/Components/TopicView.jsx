import React from 'react'
import {Link} from "react-router-dom"
import TransactionsViewHome from "../assets/topicview.jpg"
function TopicView() {
  return (
    <div className='grid h-screen grid-cols-2 mt-0 text-white bg-black'>
        <div>
            <img src={TransactionsViewHome} className='object-contain p-20 mt-20 ml-10 rounded-full pt-30' />
        </div>
        <div>
            <div className='mt-48 ml-10 '>
                <div className='text-4xl font-semibold leading-relaxed text-white font-Popping'><span className='text-orange-400'>Give</span> any topic <br /> on your <span className='text-green-400'>mind</span></div>
                <div className='mt-6 mb-8 text-sm leading-6 text-gray-400 font-Poppins'>
                    Simplifying your life by helping you with easy-to-use app that takes <br />care of your education  in a better way
                </div>
                <button className='py-3 text-xs font-bold tracking-wide text-blue-900 rounded-full font-Poppins bg-gradient-to-r from-orange-400 to-green-400 px-7 hover:scale-110 duration 300'><Link to="/register">Read More {">"}</Link></button>
            </div>
        </div>
        

    </div>
  )
}

export default TopicView