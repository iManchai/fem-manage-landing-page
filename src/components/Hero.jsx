import React, { useState } from "react";
import logo from '/images/logo.svg'
import hamburger from '/images/icon-hamburger.svg'
import close from '/images/icon-close.svg'
import bg from "/images/bg-tablet-pattern.svg"
import illustration from '/images/illustration-intro.svg'   

export default function Hero() {

    const [active, setActive] = useState(false)

    return(
        <section className="overflow-x-hidden px-4 lg:px-28">
            <img src={bg} alt="" className="absolute -top-24 -right-16 -z-10"/>
            {active && <div className={"overlay lg:hidden " + (active ? 'fade-in' : 'fade-out')}></div> }
            <nav className="flex justify-between items-center">
                <a href="" className=""><img src={logo} alt="" /></a>
                <div className="text-primary-200 hidden lg:flex lg:gap-8">
                    <a href="" className="duration-200 ease-in-out hover:text-neutrals-300">Pricing</a>
                    <a href="" className="duration-200 ease-in-out hover:text-neutrals-300">Product</a>
                    <a href="" className="duration-200 ease-in-out hover:text-neutrals-300">About Us</a>
                    <a href="" className="duration-200 ease-in-out hover:text-neutrals-300">Careers</a>
                    <a href="" className="duration-200 ease-in-out hover:text-neutrals-300">Community</a>
                </div>
                <button className="hidden text-neutrals-200 px-8 py-3 shadow-md shadow-primary-100 bg-primary-100 duration-200 ease-in-out rounded-full hover:brightness-125 lg:block">Get Started</button>
                <button onClick={() => {setActive((prevActive) => !prevActive)}} className="lg:hidden"><img src={active ? close : hamburger} alt="" /></button>
            </nav>
            { active && <div className="mobile-menu">
                <a href="" className="text-primary-200 block text-center p-4">Pricing</a>
                <a href="" className="text-primary-200 block text-center p-4">Product</a>
                <a href="" className="text-primary-200 block text-center p-4">About Us</a>
                <a href="" className="text-primary-200 block text-center p-4">Careers</a>
                <a href="" className="text-primary-200 block text-center p-4">Community</a>
            </div> }
            <div className="py-8 lg:flex lg:flex-row-reverse lg:py-16">
                <div className="lg:basis-1/2">
                    <img src={illustration} alt="" className="mx-auto lg:h-full lg:w-full"/>
                </div>
                <div className="flex flex-col items-center gap-4 lg:gap-8 lg:basis-1/2 lg:justify-center lg:items-start">
                    <h1 className="font-bold text-primary-200 text-4xl text-center lg:text-left lg:leading-tight lg:text-6xl">Bring everyone together to build better products.</h1>
                    <p className="text-neutrals-300 text-center px-4 lg:text-left lg:max-w-[22rem] lg:px-0">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger teams goals in view.</p>
                    <button className="text-neutrals-100 px-8 py-3 mt-4 shadow-md shadow-primary-100 bg-primary-100 duration-200 ease-in-out rounded-full 
                    hover:brightness-125 lg:block">Get Started</button>
                </div>
            </div>
        </section>
    )
}