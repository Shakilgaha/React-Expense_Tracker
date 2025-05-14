import React, { useState } from 'react'
import { UseExpense } from '../context/ExpenseContext'
import toast from 'react-hot-toast'
import { formateCurrency, formateDate, getCategoryTextColors } from '../utils/expenses'

import { FaTrashAlt } from "react-icons/fa";

import { motion } from "framer-motion"
import { fadeIn } from '../utils/motion';


const ExpenseList = () => {

    const { expenses, deleteExpense } = UseExpense()
    const [categoryFilter, setCategoryFilter] = useState("all")

    const categoryOptions = [
        { value: "all", label: "All" },
        { value: "food", label: "Food & Dining" },
        { value: "transport", label: "Transportation" },
        { value: "entertainment", label: "Entertainment" },
        { value: "shopping", label: "Shopping" },
        { value: "utilities", label: "Utilities" },
        { value: "health", label: "Health & medical" },
        { value: "other", label: "Other" },

    ]

    // ? If CategoryFilter  Is Set To All then return all or else return selected category 
    const filteredExpenses = (expenses || []).filter(
        (expense) => categoryFilter === "all" || expense.category === categoryFilter
    );


    // ? Sort filtered expenses date wise - Like B-A
    const sortedExpenses = [...filteredExpenses].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const handleDelete = (id) => {
        deleteExpense(id);
        toast.success("Expense Deleted Successfully")
    }

    //! Heading text For Table
    const tableHeading = [
        "No", "Date", " Description", " Category", " Amount", "Action",
    ]

    return (
        <div className='w-full'>

            {/* Heading Div */}
            <div className='flex justify-between items-center '>
                {/* Heading */}
                <motion.h2
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    className=' text-2xl text-expense-dark text-center font-semibold mb-4  '> Expense History </motion.h2>

                {/* Select */}
                <motion.select
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className='bg-white  px-5 py-1 border border-gray-300 outline-none focus:ring focus:ring-expense-light  rounded-md  w-fit focus:border-transparent  '

                >
                    {
                        categoryOptions.map((option, index) => {
                            return (
                                <option key={index} value={option.value} > {option.label} </option>
                            )
                        })
                    }
                </motion.select>
            </div>

            {/* Table Div */}

            <div className=' my-4  ' >
                {
                    sortedExpenses.length === 0 ? (
                        <div className='bg-white rounded-md shadow p-8 text-gray-500' >
                            <p > No Expenses Found</p>
                            {
                                categoryFilter !== "all" && (
                                    <p> Try changing the category filter OR Add new Expense </p>
                                )
                            }
                        </div>
                    ) : (
                        <motion.div
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            className='bg-white rounded-md shadow-sm overflow-hidden '>
                            <div className='overflow-x-auto'>
                                <table className=' min-w-full divide-y divide-gray-200 '>
                                    <thead className='bg-gray-100'>
                                        <motion.tr
                                            variants={fadeIn("down", 0.4)}
                                            initial="hidden"
                                            whileInView="show"
                                            className=''>
                                            {
                                                tableHeading.map((text, index) => <th
                                                    key={index}
                                                    scope='col'
                                                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider '>
                                                    {text}
                                                </th>)
                                            }
                                        </motion.tr>
                                    </thead>
                                    <tbody className='bg-white divide-y divide-gray-200 '>
                                        {
                                            sortedExpenses.map((expense, index) => {
                                                return (
                                                    <motion.tr
                                                        variants={fadeIn("right", 0.4)}
                                                        initial="hidden"
                                                        whileInView="show"
                                                        key={expense.id}
                                                        className='hover:bg-gray-50 transition-colors '
                                                    >
                                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900  '>
                                                            {
                                                                index + 1
                                                            }
                                                        </td>
                                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900  '>
                                                            {
                                                                formateDate(expense.date)
                                                            }
                                                        </td>
                                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900  '>
                                                            {
                                                                expense.description
                                                            }
                                                        </td>
                                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900  '>
                                                            <span className={`${getCategoryTextColors(expense.category)} font-medium `}>
                                                                {
                                                                    expense.category
                                                                }
                                                            </span>

                                                        </td>
                                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900  '>
                                                            {
                                                                formateCurrency(expense.amount)
                                                            }
                                                        </td>
                                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900  '>
                                                            <button
                                                                onClick={() => handleDelete(expense.id)}
                                                                className='text-red-500 hover:text-red-700 transition-colors text-xl'>
                                                                <FaTrashAlt />
                                                            </button>
                                                        </td>
                                                    </motion.tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )
                }
            </div>


        </div>
    )
}

export default ExpenseList