import React from 'react'
import { UseExpense } from '../context/ExpenseContext'
import { formateCurrency, getExpensesByCategory, getTotalExpenses } from '../utils/expenses';

import { CiWallet } from "react-icons/ci";
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";

import { motion } from "framer-motion"
import { fadeIn } from '../utils/motion';



const ExpenseSummary = () => {

    const { expenses } = UseExpense();
    const totalExpense = getTotalExpenses(expenses);
    const categoriesData = getExpensesByCategory(expenses);

    let highestCategory = {
        name: "none",
        amount: 0
    }

    // ? Checking If Category Amount Is Higher Than Prev one Than Assign It To Highest
    Object.entries(categoriesData).forEach(([category, amount]) => {

        if (amount > highestCategory.amount) {
            highestCategory = { name: category, amount: amount }
        }
    })

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6  '>

            <motion.div
                variants={fadeIn("right",0.1)}
                initial="hidden"
                whileInView="show"
                className='box flex space-x-4  items-center '>
                <span className='flex bg-purple-500 text-white rounded-full w-fit h-fit p-2'>
                    <CiWallet size={24} />
                </span>
                <div className=' flex flex-col '>
                    <h1 className='text-gray-500 text-sm font-medium'>Total Expenses</h1>
                    <p className=' text-2xl font-bold text-expense-dark  '> {formateCurrency(totalExpense)} </p>
                </div>
            </motion.div>

            <motion.div 
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView="show"

            className='box flex space-x-4  items-center '>
                <span className='flex bg-red-100 text-red-500 rounded-full w-fit h-fit p-2'>
                    <IoMdTrendingUp size={24} />
                </span>
                <div className=' flex flex-col '>
                    <h1 className='text-gray-500 text-sm font-medium'> Highest Category </h1>
                    <p className=' text-2xl font-bold text-expense-dark  '>
                        {
                            highestCategory.name !== "none" ? (<>
                                <span > {highestCategory.name} </span>
                                <span className='text-xs text-gray-600 font-light'> ( {formateCurrency(highestCategory.amount)} )</span>
                            </>) : "None"
                        }
                    </p>
                </div>
            </motion.div>

            <motion.div 
            variants={fadeIn("left",0.3)}
            initial="hidden"
            whileInView="show"

            className='box flex space-x-4  items-center '>
                <span className='flex bg-green-100 text-green-500 rounded-full w-fit h-fit p-2'>
                    <IoMdTrendingDown size={24} />
                </span>
                <div className=' flex flex-col '>
                    <h1 className='text-gray-500 text-sm font-medium'> Total Entries </h1>
                    <p className=' text-2xl font-bold text-expense-dark  '>
                        {expenses.length || "0"}

                    </p>
                </div>
            </motion.div>

        </div>
    )
}

export default ExpenseSummary