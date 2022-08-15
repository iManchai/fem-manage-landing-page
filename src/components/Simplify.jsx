import React from "react";

function Simplify() {
    return (
        <section className="flex flex-col items-center bg-primary-100 bg-[url('/images/bg-simplify-section-mobile.svg')] bg-no-repeat bg-left py-20 px-4 lg:bg-[url('/images/bg-simplify-section-desktop.svg')] lg:bg-center lg:flex-row lg:justify-between lg:px-28">
            <h1 className="font-bold text-neutrals-100 text-4xl text-center px-4 lg:text-left lg:leading-tight lg:max-w-lg">Simplify how your team works today.</h1>
            <button className="font-bold text-primary-100 px-8 py-3 mt-6 bg-neutrals-100 duration-200 ease-in-out rounded-full 
            hover:brightness-125 lg:block lg:mt-0">Get Started</button>
        </section>
    )
}

export default Simplify