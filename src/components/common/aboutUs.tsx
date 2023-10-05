"use client"

import React from 'react'
import { pages } from './pages'
import Image from 'next/image'
import { arrows } from './pages'

const AboutUs = () => {
  return (
    <section>
        <div className="py-3">
            <div className='border-b-2 border-white'></div>
            <h1 className='my-4 font-medium text-3xl'>We provide</h1>
            <div className='border-b-2 border-white'></div>
        </div>
        <div className="my-1">
            {/* {pages.map((page)=>( */}
                <div>
                    <h2 className='my-4 font-normal text-6xl'>{pages[0].numPage}/04</h2>
                    <div className="flex flex-wrap justify-end items-center gap-20 relative">
                            <div>
                                <Image
                                src={pages[2].coverImage}
                                alt='cover'
                                width={1050}
                                height={50}
                                className='border-2 border-white bg-cover'
                                />
                                <ul className='grid grid-cols-2'>
                                    {pages[0].benifit.map((item)=>(
                                        <li className='list-disc mt-2 text-2xl'>{item.content}</li>
                                    ))}
                                </ul>
                                
                            </div>
                            <div>
                                {arrows.map((i)=>(
                                    <div className="arrow">
                                        <Image
                                            src={i.arrow}
                                            width={40}
                                            height={40}
                                            alt='arrow'
                                            className='border-2 rounded-full mb-3 p-12'
                                        />
                                    </div>
                                ))}
                            </div>
                            <h1 className='font-normal text-9xl w-80 absolute top-78 left-1.5'>
                                {pages[0].title}
                            </h1>
                    </div>
                    
                </div>
            {/* ))} */}
        </div>
    </section>
  )
}

export default AboutUs