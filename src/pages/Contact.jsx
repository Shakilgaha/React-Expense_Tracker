
import React from 'react'

const Contact = () => {

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
                        <h3 className="text-2xl font-semibold text-violet-700 mb-2 ">Get in Touch</h3>
                        <p className="text-gray-600 00 mb-3">
                            Have a question, suggestion, or need support? Fill out the form below, and we’ll get back to you as soon as possible.
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 py-2 px-1 rounded-lg ">
                            <input
                                type="text"
                                placeholder="Your Name"
                                name="username"
                                autoComplete="off"
                                required
                                className=""
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your E-mail"
                                autoComplete="off"
                                required

                                className=""
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                autoComplete="off"
                                required

                                className=""
                            />
                            <textarea
                                placeholder="Type your message"
                                name="message"
                                rows="4"
                                autoComplete="off"
                                required

                                className=""
                            />
                            <button type="submit" className="btn-2 w-full rounded-full">
                                Send Mail
                            </button>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Contact