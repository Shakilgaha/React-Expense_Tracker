import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import ExpenseChart from './ExpenseChart'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

const Dashboard = () => {
    return (
        <div className='container py-12'>
            {/* Expense Summery */}
            <ExpenseSummary />

            <div className=' grid grid-cols-1 md:grid-cols-3 gap-6  my-9 '>
                <div className='md:col-span-2 '>
                    {/* Expense Chart */}
                    <ExpenseChart />
                </div>
                <div>
                    {/* Expense Form */}
                    <ExpenseForm />
                </div>
            </div>

            {/* Expense List */}
            <ExpenseList />

        </div>
    )
}

export default Dashboard