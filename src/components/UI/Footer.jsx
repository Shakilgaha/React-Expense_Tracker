import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-white py-4' >
            <div className='container '>
                <h1 className='text-expense-dark text-center'>
                    Copyright © {new Date().getFullYear()} ShakilGaha
                </h1>
            </div>
        </footer>
    )
}

export default Footer