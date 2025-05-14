import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const CATEGORY_COLORS = {
    Food: "#6366F1",        //? indigo-500
    Transport: "#06B6D4",         //? cyan-500
    Entertainment: "#A855F7",         //? purple-500
    Utilities: "#14B8A6",          //? teal-500
    Health: "#22C55E",         //? green-500
    Shopping: "#F97316",         //? Orange-500
    Other: "#64748B",         //? Slate -500

}

const ExpensePieChart = ({ data }) => {
    // ? If No Data Found Than Return 
    if (data.length === 0) {
        return <h1 className='text-center text-gray-500'> No expense data to display </h1>
    }


    const getColor = (name) => {
        return CATEGORY_COLORS[name] || "#8E9196"
    }

    const CustomToolTip = ({ active, payload }) => {

        if (active && payload && payload.length) {
            const { name, value } = payload[0].payload;
            const total = data.reduce((sum, item) => sum + item.value, 0);
            const percentage = ((value / total) * 100).toFixed(0);

            return (
                <div className='bg-white shadow-md rounded-md border border-gray-100'>
                    <p className='font-medium'> {name} </p>
                    <p className='text-lg'>
                        ₹{value.toFixed(2)}
                        <span className='text-sm text-gray-500 ml-1'> {percentage}% </span>
                    </p>

                </div >
            )

        }

        return null;

    }

    return (
        <ResponsiveContainer width="100%" height={300} >
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill='#8884d8'
                    dataKey="value"
                    animationDuration={750}
                    animationBegin={0}
                    animationEasing='ease-out'
                >

                    {
                        data.map((entry, index) => {
                            return <Cell key={`cell${index}`} fill={getColor(entry.name)} className='outline-none'/>
                        })
                    }

                </Pie>
                <Tooltip content={<CustomToolTip />} />
                <Legend
                    layout='horizontal'
                    verticalAlign='bottom'
                    align='center'
                    formatter={(value) => {
                       return <span className='text-sm font-medium' > {value} </span>
                    }}
                />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default ExpensePieChart