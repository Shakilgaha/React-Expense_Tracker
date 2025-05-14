import React from 'react'
import Header from '../components/UI/Header'
import Footer from '../components/UI/Footer'
import { Toaster } from 'react-hot-toast'

const DashboardLayout = ({ children }) => {
    return (
        <>
            {/* React-Hot-Toast */}
            <Toaster
                position='top-right'
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: "#363636",
                        color: "#fff",
                        borderRadius: '8px'
                    },
                    success: {
                        iconTheme: {
                            primary: "#10b981",
                            secondary: "#fff"
                        }
                    },
                    error: {
                        iconTheme: {
                            primary: "#ef4444",
                            secondary: "#fff"
                        }
                    }
                }}
            />


         
            <main className='min-h-screen mt-19 '>
                {children}
            </main>
            
        </>
    )
}

export default DashboardLayout