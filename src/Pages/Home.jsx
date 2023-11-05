import React from 'react'
import Ellipse from "../assets/Ellipse.png"
import Expense from "../assets/home2.jpg"
import {Link} from "react-router-dom"
import Features from '../Components/Features'
import TopicView from '../Components/TopicView'
import LackingView from '../Components/LackingView'
import FAQ from '../Components/FAQ'
import PersonalisedView from '../Components/PersonalisedView'
import Chatbot from '../assets/robot.png'

function Home() {
  return (
    <div>
      <div className='bg-black h-auto flex px-[10%] py-[6%]'>
          <img src={Ellipse} className='absolute z-20 w-6 left-24 top-56 animate-ping' />
          <img src={Ellipse} className='absolute z-20 w-6 right-96 top-36 animate-ping' />
          <img src={Ellipse} className='absolute z-20 w-6 left-64 bottom-24 animate-ping' />
          <img src={Ellipse} className='absolute z-20 w-6 right-40 top-64 animate-ping' />
          <div className='flex-1 text-white pt-7 '>
              <div className='absolute py-12 left-20'>
                  <h1 className='font-Poppins font-bold text-5xl leading-[72px] '><span className='text-orange-400'>Personalised</span> <br /> learning platform <br />for <span className='text-green-400'>UPSC aspirants</span></h1>
                  <h3 className='pb-5 text-lg leading-relaxed text-gray-400'>Offers customized study materials, practice tests, and guidance  <br />based on each aspirant's strengths, weaknesses, and progress</h3>
                  <Link to="/register"><button className='px-10 py-4 text-xs font-bold tracking-wide text-blue-900 rounded-full bg-gradient-to-r from-orange-400 to-green-400 w-100 hover:scale-110 duration 300'>TRY IT OUT</button></Link>
  
              </div>
          </div>
          <div className='flex-1 ml-10'>
              <img src={Expense} className='z-30 object-cover mt-20 rounded-full w-30 h-30' />
              <div class="flex justify-end items-center h-0 text-white mr-10 mt-20 ">
                <div><img src={Chatbot} className='p-1 transition duration-100 bg-white rounded-full w-14 h-14 hover:bg-green-400' /></div>
              </div>
              <div className="flex justify-end mr-1 text-center text-white mt-7 ">
                Ask Me Anything
              </div>
          </div>
          
      </div>
          
      

      
      <div className='bg-black'>
        <Features />
        <TopicView />
        <PersonalisedView />
        <LackingView />
        <FAQ />
      </div>
    </div>
  )
}

export default Home