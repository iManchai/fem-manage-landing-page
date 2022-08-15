import React from "react";
import bg from '/images/bg-tablet-pattern.svg'

function About() {
    return (
        <section className="pt-20 px-4 lg:px-28 lg:flex lg:gap-8">
            <img src={bg} alt="" className="absolute -right-40 top-[32rem] -z-10 w-72 lg:w-auto lg:-left-96"/>
            <div className="text-center flex flex-col items-center mb-12 lg:text-left lg:basis-1/2 lg:items-start">
                <h2 className="font-bold px-8 text-primary-200 text-3xl leading-snug max-w-xl lg:text-4xl lg:px-0">What's different about Manage?</h2>
                <p className="text-neutrals-300 text-sm leading-7 mt-4 px-4 max-w-xs lg:px-0">Manage provides all the functionality your team needs, without the complexity. 
                    Our software is tailor-made for modern digital product teams.</p>
            </div>


            {/* List section */}

            <div className="flex flex-col gap-10 lg:basis-1/2">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <h3 className="relative text-neutrals-100 text-sm text-center w-16 py-2 rounded-full bg-primary-100"><span className="absolute top-0 w-screen h-9  bg-primary-100 opacity-10 lg:hidden"></span>01</h3>
                        <h3 className="font-bold text-sm text-primary-200">Track company wide progress</h3>
                    </div>
                    <p className="text-sm text-neutrals-300 leading-6">See how your day-to-day tasks fit into the wider vision.
                    Go from tracking progress at the milestone level all the way done to the smallest of details.
                    Never lose sight of the bigger picture again.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <h3 className="relative text-neutrals-100 text-sm text-center w-16 py-2 rounded-full bg-primary-100"><span className="absolute top-0 w-screen h-9  bg-primary-100 opacity-10 lg:hidden"></span>02</h3>
                        <h3 className="font-bold text-sm text-primary-200">Advanced built-in reports</h3>
                    </div>
                    <p className="text-sm text-neutrals-300 leading-6">Set internal delivery estimates and track progress toward company goals.
                        Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <h3 className="relative text-neutrals-100 text-sm text-center w-16 py-2 rounded-full bg-primary-100"><span className="absolute top-0 w-screen h-9  bg-primary-100 opacity-10 lg:hidden"></span>03</h3>
                        <h3 className="font-bold text-sm text-primary-200">Everything you need in one place</h3>
                    </div>
                    <p className="text-sm text-neutrals-300 leading-6">Stop jumping from one service to another to communicate, store files, track tasks and share documents.
                        Manage offers an all-in-one team productivity solution.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default About