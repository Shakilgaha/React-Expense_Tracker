import React from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="py-16  flex  mt-12  justify-center items-center ">

            {/* Main Content Grid */}
            <div className="  px-6 lg:px-16 ">
                <div className="container  ">
                    {/* Section - Form */}
                    <div className="max-w-lg bg-white p-6 rounded-md shadow">
                        <h3 className="text-2xl font-semibold text-violet-700 mb-2 ">Welcome Back to TrackWise </h3>
                        <p className="text-gray-600 00 mb-3">
                            Welcome back! Let’s get you back to exploring the latest Features.
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 py-2 px-1 rounded-lg ">

                            <input
                                type="email"
                                name="email"
                                placeholder="Your E-mail"
                                autoComplete="off"
                                required

                                className=""
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                autoComplete="off"
                                required

                                className=""
                            />


                            <button type="submit" className="btn-2 w-full rounded-full">
                                Sign Up
                            </button>
                        </form>
                        <NavLink to="/register" className="text-expense-light text-sm"> Don't Have An Account ? </NavLink>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Login