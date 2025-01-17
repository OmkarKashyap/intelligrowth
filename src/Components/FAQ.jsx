import React from 'react'

function FAQ() {
  return (
    <div>
        <div>
        <div class="flex justify-center items-center h-0">
    <div class="h-2 w-2 rounded-full bg-orange-500 mx-2"></div>
    <div class="h-2 w-2 rounded-full bg-white mx-2"></div>
    <div class="h-2 w-2 rounded-full bg-green-500 mx-2"></div>
</div>
                {/* <div className="relative flex items-center justify-center py-16 m-10 rounded-lg bg-gradient-to-r from-green-400 to-orange-400">
                    <div>
                        <h1 className="text-3xl font-bold leading-10 text-white sm:text-4xl lg:text-5xl">How can we help you?</h1>
                        <div className="relative flex items-center w-full py-4 pl-4 mt-6 bg-blue-500 rounded lg:mt-14">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx={10} cy={10} r={7} />
                                    <line x1={21} y1={21} x2={15} y2={15} />
                                </svg>
                            </div>
                            <input type="text" placeholder="Search for answers" className="w-full ml-4 text-base leading-none text-white placeholder-white bg-transparent focus:outline-none" />
                        </div>
                    </div>
                </div> */}
                <div className="container flex flex-col items-center justify-center mx-auto py-9">
                    {/* <div role="list" className="grid w-11/12 grid-cols-1 gap-6 md:w-2/3 md:grid-cols-2">
                        <div role="listitem" className="focus:outline-none">
                            <a href="javascript:void(0)" className="flex items-center p-4 bg-white shadow-md cursor-pointer focus:outline-none lg:p-8">
                                <div className="flex">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                            <circle cx={12} cy={12} r={3} />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-base font-medium leading-none text-gray-800">Getting Started</p>
                                        <p className="mt-2 text-xs text-gray-600 lg:text-sm xl:text-base lg:leading-normal 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="focus:outline-none">
                            <a href="javascript:void(0)" className="flex items-center p-4 bg-white shadow-md cursor-pointer focus:outline-none lg:p-8">
                                <div className="flex">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <circle cx={9} cy={7} r={4} />
                                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-base font-medium leading-none text-gray-800">User Account</p>
                                        <p className="mt-2 text-xs text-gray-600 lg:text-sm xl:text-base lg:leading-normal 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="focus:outline-none">
                            <a href="javascript:void(0)" className="flex items-center p-4 bg-white shadow-md cursor-pointer focus:outline-none lg:p-8">
                                <div className="flex">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments-horizontal" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <circle cx={14} cy={6} r={2} />
                                            <line x1={4} y1={6} x2={12} y2={6} />
                                            <line x1={16} y1={6} x2={20} y2={6} />
                                            <circle cx={8} cy={12} r={2} />
                                            <line x1={4} y1={12} x2={6} y2={12} />
                                            <line x1={10} y1={12} x2={20} y2={12} />
                                            <circle cx={17} cy={18} r={2} />
                                            <line x1={4} y1={18} x2={15} y2={18} />
                                            <line x1={19} y1={18} x2={20} y2={18} />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-base font-medium leading-none text-gray-800">Product Features</p>
                                        <p className="mt-2 text-xs text-gray-600 lg:text-sm xl:text-base lg:leading-normal 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="focus:outline-none">
                            <a href="javascript:void(0)" className="flex items-center p-4 bg-white shadow-md cursor-pointer focus:outline-none lg:p-8">
                                <div className="flex">
                                    <div>
                                        <svg width={33} height={33} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3125 23.7188L2.0625 16.5L10.3125 9.28125M22.6875 23.7188L30.9375 16.5L22.6875 9.28125" stroke="#3730A3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-base font-medium leading-none text-gray-800">Customization Options</p>
                                        <p className="mt-2 text-xs text-gray-600 lg:text-sm xl:text-base lg:leading-normal 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="focus:outline-none">
                            <a href="javascript:void(0)" className="flex items-center p-4 bg-white shadow-md cursor-pointer focus:outline-none lg:p-8">
                                <div className="flex">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <rect x={3} y={5} width={18} height={14} rx={3} />
                                            <line x1={3} y1={10} x2={21} y2={10} />
                                            <line x1={7} y1={15} x2="7.01" y2={15} />
                                            <line x1={11} y1={15} x2={13} y2={15} />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-base font-medium leading-none text-gray-800">Payment Gateways</p>
                                        <p className="mt-2 text-xs text-gray-600 lg:text-sm xl:text-base lg:leading-normal 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="focus:outline-none">
                            <a href="javascript:void(0)" className="flex items-center p-4 bg-white shadow-md cursor-pointer focus:outline-none lg:p-8">
                                <div className="flex">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <rect x={5} y={11} width={14} height={10} rx={2} />
                                            <circle cx={12} cy={16} r={1} />
                                            <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-base font-medium leading-none text-gray-800">Security Options</p>
                                        <p className="mt-2 text-xs text-gray-600 lg:text-sm xl:text-base lg:leading-normal 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div> */}
                    <div className="mb-10 mt-9 md:mt-11 lg:mt-16">
                        <div className="text-center">
                            <h1 className="text-3xl font-medium leading-loose text-white">The Team</h1>
                            <p className="mx-4 mt-4 mb-8 text-base leading-none text-gray-500 md:mx-0">Our team is just an email away and ready to answer your questions</p>
                        </div>
                        <div role="list" aria-label="Our Team mates" className="flex flex-wrap items-center justify-around mt-2 ">
                            <div role="listitem" className="focus:outline-none">
                                <img src="https://i.ibb.co/zS3y67Q/Unsplash-Avatars-0000s-0019-analise-benevides-88w-Kdd-JTwp8-unsplash-1.png" alt="Display avatar of julia john" role="img" />
                                <p className="mt-2 text-base font-semibold leading-none text-green-500">Omkar Kashyap</p>
                                <p className="mt-2 text-base leading-none text-blue-500">Developer</p>
                            </div>
                            <div role="listitem" className="focus:outline-none">
                                <img src="https://i.ibb.co/vJSM2Ch/Unsplash-Avatars-0004s-0005-laurence-cruz-P7yvmaj-Pvk-M-unsplash.png" alt="Display avatar of Tom Koch" role="img" />
                                <p className="mt-2 text-base font-semibold leading-none text-green-500">Amit Padegal</p>
                                <p className="mt-2 text-base leading-none text-blue-500">Developer</p>
                            </div>
                            <div role="listitem" className="focus:outline-none">
                                <img src="https://i.ibb.co/0tzwY54/Unsplash-Avatars-0004s-0012-tiffany-collins-Gsy-St-BSs-Yd0-unsplash.png" alt="Display avatar of Kera Ann" role="img" />
                                <p className="mt-2 text-base font-semibold leading-none text-green-500">Sujay R</p>
                                <p className="mt-2 text-base leading-none text-blue-500">Developer</p>
                            </div>
                            <div role="listitem" className="focus:outline-none">
                                <img src="https://i.ibb.co/DWMLC3n/Unsplash-Avatars-0004s-0013-sirio-w-Siku-Nio6-UY-unsplash.png" alt="Display Avatar of Glenn Jo" role="img" />
                                <p className="mt-2 text-base font-semibold leading-none text-green-500">Yash Nagraj</p>
                                <p className="mt-2 text-base leading-none text-blue-500">Developer</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="py-3 mt-4 text-xs font-semibold text-center rounded-full bg-gradient-to-r from-orange-400 to-green-400 text-blue-900text-white px-7 font-Poppins md:mt-6 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default FAQ