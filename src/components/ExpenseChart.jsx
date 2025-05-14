import React, { useState } from 'react'
import { UseExpense } from '../context/ExpenseContext'
import { getChartData, getExpensesByMonth } from '../utils/expenses';

import { BsPieChartFill } from "react-icons/bs";
import { HiChartBar } from "react-icons/hi2";
import ExpensePieChart from './ExpensePieChart';
import ExpenseBarChart from './ExpenseBarChart';

import { motion } from "framer-motion"
import { fadeIn } from '../utils/motion';

const ExpenseChart = () => {

    const { expenses } = UseExpense();

    const [chartType, setChartType] = useState("pie")

    const chartData = getChartData(expenses);
    const monthlyData = getExpensesByMonth(expenses)


    if (expenses?.length === 0) {
        return <div className='bg-white rounded-md shadow hover:shadow-lg transition-all duration-300 p-6  '>

            <h1 className=' text-expense-dark font-semibold text-2xl mb-4 ' >Expense Analytics</h1>

            {/*  For Buttons */}
            <div className='flex gap-6 justify-center'>
                <button
                    onClick={() => setChartType("pie")}
                    className={`flex  px-4 py-1 gap-2 items-center cursor-pointer rounded-md transition-all font-medium ${chartType === "pie"
                        ? "bg-expense text-white hover:bg-expense-dark "
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 "
                        }`}
                >
                    <BsPieChartFill />
                    <span> Pie Chart </span>
                </button>

                <button
                    onClick={() => setChartType("bar")}
                    className={`flex  px-4 py-1 gap-2 items-center cursor-pointer rounded-md transition-all font-medium ${chartType === "bar"
                        ? "bg-expense text-white hover:bg-expense-dark"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 "
                        }`}
                >
                    <HiChartBar />
                    <span> Bar Chart </span>
                </button>
            </div>
            <p className='mt-5 text-sm text-gray-600 text-center'>
                Add some expenses to see your spending Analytics
            </p>
        </div>
    }



    return (
        <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            className='box h-full flex flex-col justify-between '>

            <div className='flex flex-col md:flex-row justify-between gap-6 md:gap-0'>

                <motion.h1
                    variants={fadeIn("top", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    className=' text-expense-dark font-semibold text-xl lg:text-2xl   ' >Expense Analytics</motion.h1>

                {/*  For Buttons */}
                <motion.div
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    className='flex gap-6 justify-center'>
                    <button
                        onClick={() => setChartType("pie")}
                        className={`flex  px-4 py-1 gap-2 items-center cursor-pointer rounded-md transition-all font-medium ${chartType === "pie"
                            ? "bg-expense text-white hover:bg-expense-dark "
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200 "
                            }`}
                    >
                        <BsPieChartFill />
                        <span> Pie Chart </span>
                    </button>

                    <button
                        onClick={() => setChartType("bar")}
                        className={`flex  px-4 py-1 gap-2 items-center cursor-pointer rounded-md transition-all font-medium ${chartType === "bar"
                            ? "bg-expense text-white hover:bg-expense-dark"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200 "
                            }`}
                    >
                        <HiChartBar />
                        <span> Bar Chart </span>
                    </button>
                </motion.div>
            </div>

            {/* Charts */}
            <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView="show"
                className='mt-6'>
                {
                    chartType === "pie" ? <ExpensePieChart data={chartData} /> : <ExpenseBarChart data={monthlyData} />
                }
            </motion.div>
        </motion.div>
    )
}

export default ExpenseChart