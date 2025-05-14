import React, { useState } from 'react'
import { UseExpense } from '../context/ExpenseContext'
import toast from 'react-hot-toast';

import { motion } from "framer-motion"
import { fadeIn } from '../utils/motion';


const ExpenseForm = () => {

    const { addExpense } = UseExpense()
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("food");
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const categoryOptions = [
        { value: "food", label: "Food & Dining" },
        { value: "transport", label: "Transportation" },
        { value: "entertainment", label: "Entertainment" },
        { value: "shopping", label: "Shopping" },
        { value: "utilities", label: "Utilities" },
        { value: "health", label: "Health & medical" },
        { value: "other", label: "Other" },

    ]

    //? Handle Form Submit
    const handleSubmit = (e) => {
        e.preventDefault();


        try {

            if (!description.trim()) {
                throw new Error("Please Enter A Description");
            }

            if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
                throw new Error("Please Enter A Valid Amount")
            }

            // ! Pass Expense Data  to AddExpense Function
            addExpense({
                description: description.trim(),
                amount: Number(amount),
                category,
                date
            })
            toast.success("Expense Added Successfully")

            setDescription("");
            setAmount("");
            setCategory("food");
            setDate(new Date().toISOString().split("T")[0])

        } catch (error) {
            toast.error("Failed To Add Expense")
        }
        finally {
            setIsSubmitting(false)
        }

    }

    return (
        <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"

            className='box mx-auto h-full flex flex-col justify-between  '>
            {/* Heading */}
            <h2 className=' text-xl lg:text-2xl text-expense-dark text-center font-semibold mb-4  '>Add New Expense</h2>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className='space-y-4 '
            >
                {/* Input Field */}
                <motion.div
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                >
                    <label htmlFor="description"
                        className='block text-xs font-medium text-gray-600 mb-1'
                    > Description </label>
                    <input type="text"
                        name='description'
                        id='description'
                        placeholder='What did spend on? '
                        value={description}
                        autoComplete='off'
                        onChange={(e) => setDescription(e.target.value)}
                        className='form-input  '

                        disabled={isSubmitting}
                    />
                </motion.div>

                {/* Input Field */}
                <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView="show"
                >
                    <label htmlFor="amount"
                        className='block text-xs font-medium text-gray-600 mb-1'
                    > Amount </label>
                    <input type="number"
                        name='amount'
                        id='amount'
                        placeholder='0.00'
                        value={amount}
                        autoComplete='off'
                        onChange={(e) => setAmount(e.target.value)}
                        className='form-input  '

                        disabled={isSubmitting}
                    />
                </motion.div>

                {/* Select Field */}
                <motion.div
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView="show"
                >
                    <label htmlFor="category"
                        className='block text-xs font-medium text-gray-600 mb-1'
                    > Category </label>
                    <select
                        name='category'
                        id='category'
                        value={category}
                        autoComplete='off'
                        onChange={(e) => setCategory(e.target.value)}
                        className='form-input '

                        disabled={isSubmitting}
                    >
                        {
                            categoryOptions.map((option) => {
                                return (
                                    <option key={option.value} value={option.value} > {option.label} </option>
                                )
                            })
                        }
                    </select>
                </motion.div>

                {/* Input Field */}
                <motion.div
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView="show"
                >
                    <label htmlFor="date"
                        className='block text-xs font-medium text-gray-600 mb-1'
                    > Date </label>
                    <input type="date"
                        name='date'
                        id='date'
                        value={date}
                        autoComplete='off'
                        onChange={(e) => setDate(e.target.value)}
                        className='form-input  '

                        disabled={isSubmitting}
                    />
                </motion.div>

                {/* Button */}
                <motion.button
                    variants={fadeIn("right", 0.8)}
                    initial="hidden"
                    whileInView="show"

                    type='submit'

                    disabled={isSubmitting}
                    className='btn w-full'>
                    {
                        isSubmitting ? "Adding.." : "Add Expense"
                    }
                </motion.button>

            </form>
        </motion.div>
    )
}

export default ExpenseForm