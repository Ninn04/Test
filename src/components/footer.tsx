"use client"

import Image from "next/image"
import { NavsList } from "./navbarMenu"
import Input from "./ui/input"
import Link from "next/link"
import { Socail } from "./navbarMenu"

const Footer = () => {
  return (
    <footer>
            <main className="border-2 border-white mt-6">
        <div className="banner-footer flex justify-center items-center bg-white p-4 text-black text-7xl font-bold">
            <h1>Join us !!!</h1>
        </div>
        <div className="m-6 border-2">
            <h2 className="font-normal text-2xl text-center mb-5 before:absolute before:border-2">Lorem ipsum dolor sit amet consectetur. Sit tincidunt amet volutpat neque porttitor. Morbi risus turpis
                 est platea aliquam ridiculus nibh. Imperdiet id eget tempus aliquam semper volutpat viverra dolor in.
            </h2>
            <div className="flex justify-between">
                <Image
                src='/images/img.png'
                width={620}
                height={350}
                alt="image"
                className="border-2"
                />
                <form>
                    <div>Email</div>
                    <Input
                        text='text'
                        placeholder='Enter your Email'
                    />
                    <div>Phone</div>
                    <Input
                        text='text'
                        placeholder='Enter your phone number'
                    />
                    <button type="submit" className="bg-white text-black">Submit</button>
                </form>
            </div>
        </div>
    </main>
    <div className="text-yellow-300 text-3xl text-center mt-6 py-10">Logo</div>
    <nav>
        {NavsList.map((item)=>(
            <Link href={item.path}>{item.menu}</Link>
        ))}
    </nav>
    <div>
        <div>
            {Socail.map((item)=>(
                <Link href={item.path}>
                    <Image
                    src={item.logo}
                    alt="icon"
                    width={40}
                    height={40}
                    />
                </Link>
            ))}
        </div>
        <div>
            COPY RIGHT @2023 Powered by Dreamslab.
        </div>
        <div>
            All Rights  Reserved.
        </div>
    </div>
    </footer>
  )
}

export default Footer