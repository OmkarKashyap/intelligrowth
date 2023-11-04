import React from 'react'
import {Link} from "react-router-dom"
import InvoicesHome from "../assets/InvoiceHome.jpg"
function TransactionRecord() {
  return (
    <div className='grid h-screen grid-cols-2 text-white bg-black'>
        <div>
            <img src={InvoicesHome} className='object-contain p-20 rounded-full' />
        </div>
        <div>
            <div className='mt-40 ml-10 '>
                <div className='text-4xl font-semibold leading-relaxed text-white font-Popping'><span className='text-orange-400'>Find </span> out where <br /> you are <span className='text-green-400'> lacking </span></div>
                <div className='mt-6 mb-8 text-sm leading-6 text-gray-400 font-Poppins'>
                   Find out which concepts to revise again along with helping <br /> you out with specific part of the textbook or from videos
                </div>
                <button className='py-3 text-xs font-bold tracking-wide rounded-full font-Poppins text-indigo-900 bg-gradient-to-r from-orange-400 to-green-400 px-7 hover:scale-110 duration 300'><Link to="/register">Read More {">"}</Link></button>
            </div>
        </div>
    </div>
  )
}

export default TransactionRecord
