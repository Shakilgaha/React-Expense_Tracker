import React from 'react'
import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi";

import { motion } from "framer-motion"
import { fadeIn } from '../../utils/motion';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/contact", label: "Contact" },
        { href: "/register", label: "Sign Up" },
        { href: "/login", label: "Sign In" },

        // { href: "", label: "Testimonials" },

    ]



    return (
        <motion.nav
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="fixed top-0 left-0 right-0 backdrop-blur-xl  z-50  bg-white/50  ">
            <div className="w-full container flex justify-between items-center px-4 sm:px-6 lg:px-8 md:h-20 h-16 ">
                {/* Nav Logo */}
                <div className=" w-fit flex items-center cursor-pointer gap-1">
                    <h1 className='text-lg md:text-2xl font-serif text-purple-600  '> TrackWise </h1>
                </div>
                {/* Nav Links */}
                <div className="hidden md:flex gap-12 items-center">
                    {
                        navLinks.map((curLink, index) => {
                            return <NavLink key={index} to={curLink.href}
                                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5  after:w-0 hover:after:w-full after:bg-purple-600 after:transition-all  `} >
                                {curLink.label}
                            </NavLink>
                        })
                    }
                </div>


                {/*  Menu Btn For Mobile */}
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView="show"

                    className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-2xl"
                    >
                        {isMenuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </motion.div>



            </div>
            {
                isMenuOpen && (
                    <motion.div
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView="show"

                        className="md:hidden container flex flex-col gap-10 py-9 ">
                        {
                            navLinks.map((curLink, index) => {
                                return <NavLink to={curLink.href} className=' w-fit text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5  after:w-0 hover:after:w-full after:bg-purple-600 after:transition-all '>
                                    <motion.p
                                        variants={fadeIn("right", 0.2)}
                                        initial="hidden"
                                        whileInView="show"

                                        key={index} to={curLink.href}
                                        onClick={() => {
                                            setIsMenuOpen(false)
                                        }
                                        }

                                        className={`   `} >
                                        {curLink.label}
                                    </motion.p>
                                </NavLink>
                            })
                        }
                       
                    </motion.div>
                )

            }
        </motion.nav >
    )

    // return (
    //     <header className='bg-white py-4' >
    //         <div className='container flex justify-between gap-6 items-center '>
    //             <section>
    //                 <h1 className='text-lg md:text-2xl font-serif text-purple-600 '> Expense Tracker </h1>
    //             </section>
    //             <section>
    //                 <h1 className='text-xs md:text-lg font-serif text-gray-700'> Track Your Expense With Ease </h1>
    //             </section>
    //         </div>
    //     </header>
    // )
}

export default Header