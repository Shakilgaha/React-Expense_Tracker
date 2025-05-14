import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
    return (
        <section className="bg-white w-full h-full flex flex-col items-center py-5 gap-5 text-2xl font-semibold mt-12">
            <div>
                <figure>
                    <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
                        alt="4O4 Error"
                        className="w-[80%] h-[80%]"
                    />
                </figure>
            </div>

            <div className="flex flex-col gap-3">
                <p>
                    The page you are looking for could not be found
                </p>

            </div>

            <div className="flex flex-col gap-3" >
                <NavLink to="/" className="btn"> Back To Home Page </NavLink>
            </div>

        </section>
    )
}

export default NotFound