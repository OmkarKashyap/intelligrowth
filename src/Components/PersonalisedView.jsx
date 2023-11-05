import React from 'react'
import {Link} from "react-router-dom"
import ExpenseViewHome from "../assets/personalisedview.jpg"
function PersonalisedView() {
  return (
    <div>
      <div class="flex justify-center items-center h-0">
            <div class="h-2 w-2 rounded-full bg-orange-500 mx-2"></div>
              <div class="h-2 w-2 rounded-full bg-white mx-2"></div>
            <div class="h-2 w-2 rounded-full bg-green-500 mx-2"></div>
        </div>
    <div className='grid h-screen grid-cols-2 text-white bg-black'>
          
        <div>
            <div className='mt-40 ml-10 '>
                <div className='text-4xl font-semibold leading-relaxed text-white font-Popping'><span className='text-orange-400'>Personalized</span> QA <br /> for your <span className='text-green-400'>topic</span> </div>
                <div className='mt-6 mb-8 text-sm leading-6 text-gray-400 font-Poppins'>
                Uses a technology that tailors responses to user queries based on textbook-specific data. It provides highly relevant and customized answers to questions, enhancing the user's experience and improving the accuracy of information retrieval.
                </div>
                <button className='py-3 text-xs font-bold tracking-wide text-blue-900 rounded-full font-Poppins bg-gradient-to-r from-orange-400 to-green-400 px-7 hover:scale-110 duration 300'><Link to="/register">Read More {">"}</Link></button>
            </div>
        </div>

        <div className='mt-20'>
            <img src={ExpenseViewHome} className='object-contain p-20 rounded-full' />
        </div>
    </div>
    </div>
  )
}

export default PersonalisedView