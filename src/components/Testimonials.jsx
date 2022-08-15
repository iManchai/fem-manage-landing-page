import React from "react";
import {useRef, useEffect, useState} from "react";
import {motion} from 'framer-motion';
import Avatar1 from '/images/avatar-ali.png';
import Avatar2 from '/images/avatar-anisha.png';
import Avatar3 from '/images/avatar-richard.png';
import Avatar4 from '/images/avatar-shanai.png'

function Testimonials() {

    return (
        <section className="flex flex-col items-center mt-16 mb-12 px-4 lg:px-28 lg:mt-32 lg:mb-32">
            <h2 className="font-bold px-8 text-primary-200 text-3xl leading-snug lg:text-4xl lg:px-0">What they've said</h2>
            <motion.div className="mt-16 mb-16 cursor-grab self-start lg:mt-24"> {/* Carousel */}
                <motion.div drag="x" dragConstraints={{right: 0, left: -940}} whileTap={{cursor: "grabbing"}}  className="flex gap-6"> {/* Inner Carousel */}
                    <motion.div className="flex flex-col items-center bg-neutrals-100 px-4 min-w-[20rem] max-w-lg lg:min-w-[28rem] lg:max-w-xl lg:pb-4 lg:px-6">
                        <img src={Avatar1} className="w-16 relative -top-8" alt="" />
                        <div className="flex flex-col items-center relative -top-4">
                            <h3 className="text-sm text-center text-primary-200 font-bold">Ali Bravo</h3>
                            <p className="text-sm text-center text-neutrals-300 leading-relaxed mt-4">"We have been able to cancel so 
                            many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
                            </p>
                        </div>
                    </motion.div>
                
                    <motion.div className="flex flex-col items-center bg-neutrals-100 px-4 min-w-[20rem] max-w-lg lg:min-w-[30rem] lg:max-w-xl">
                        <img className="w-16 relative -top-8" src={Avatar2} alt="" />
                        <div className="flex flex-col items-center relative -top-4">
                            <h3 className="text-sm text-center text-primary-200 font-bold">Anisha Li</h3>
                            <p className="text-sm text-center text-neutrals-300 leading-relaxed mt-4">"Manage has supercharged our team's workflow. The ability to mantain visibility on larger milestones
                        at all times keeps everyone motivated."
                            </p>
                        </div>
                    </motion.div>
                    <motion.div className="flex flex-col items-center bg-neutrals-100 px-4 min-w-[20rem] max-w-lg lg:min-w-[30rem] lg:max-w-xl">
                        <img className="w-16 relative -top-8" src={Avatar3} alt="" />
                        <div className="flex flex-col items-center relative -top-4">
                            <h3 className="text-sm text-center text-primary-200 font-bold">Richard Watts</h3>
                            <p className="text-sm text-center text-neutrals-300 leading-relaxed mt-4">"Manage allows us to provide structure and process. It keeps us organized and focused.
                            I can't stop recommending them to everyone I talk to!"
                            </p>
                        </div>
                    </motion.div>
                    <motion.div className="flex flex-col items-center bg-neutrals-100 px-4 min-w-[20rem] max-w-lg lg:min-w-[30rem] lg:max-w-xl">
                        <img className="w-16 relative -top-8" src={Avatar4} alt="" />
                        <div className="flex flex-col items-center relative -top-4">
                            <h3 className="text-sm text-center text-primary-200 font-bold">Shanai Gough</h3>
                            <p className="text-sm text-center text-neutrals-300 leading-relaxed mt-4">"Their software allows us to track, manage and collaborate on our projects from anywhere. 
                        It keeps the whole team in-sync without getting being intrusive."
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <button className="text-neutrals-100 px-8 py-3 mt-4 shadow-md shadow-primary-100 bg-primary-100 duration-200 ease-in-out rounded-full 
            hover:brightness-125 lg:block">Get Started</button>
        </section>
    )
}

export default Testimonials