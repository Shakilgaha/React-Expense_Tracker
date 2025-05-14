import React from 'react'
import { ExpenseContext, ExpenseProvider } from '../context/ExpenseContext'
import DashboardLayout from '../layout/DashboardLayout'
import Dashboard from '../components/Dashboard'

const Index = () => {
  return (
    <ExpenseProvider>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </ExpenseProvider>
  )
}

export default Index