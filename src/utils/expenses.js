
export const formateCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
    }).format(amount)
}

// ! For Formatting Date
export const formateDate = (dateString) => {
    const date = new Date(dateString)

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    })
};

// ! Get Total Expenses
export const getTotalExpenses = (expenses = []) => {
    return expenses.reduce((total, expense) => total + expense.amount, 0)
}

export const getExpensesByCategory = (expenses = []) => {

    const categories = {
        food: 0,
        transport: 0,
        entertainment: 0,
        shopping: 0,
        utilities: 0,
        health: 0,
        other: 0,

    }

    // Using ForEach For Adding Expense Into Categories 
    expenses.forEach((expense) => {
        categories[expense.category] += expense.amount;
    });

    return categories;
}

// ! For Chart Data
export const getChartData = (expense = []) => {
    const expensesByCategory = getExpensesByCategory(expense);
    return Object.entries(expensesByCategory)
        .filter(([_, value]) => value > 0)
        .map(([name, value]) => ({
            name: name.charAt(0).toUpperCase() + name.slice(1),
            value
        }))

}


// ! For Text Colors
export const getCategoryTextColors = (category) => {
    const colors = {
        food: "text-indigo-600",
        transport: "text-cyan-500",
        entertainment: "text-purple-500",
        shopping: "text-orange-500",
        utilities: "text-teal-500",
        health: "text-green-500",
        other: "text-slate-500",
    }

    return colors[category] || "text-gray-500"


}

// ! For Month Name
export const getMonthName = (date) => {
    return date.toLocaleString("default", { month: "long" });

}

// ! For Expenses By MOnths
export const getExpensesByMonth = (expenses = [], numMonths = 6) => {
    const now = new Date;
    const result = {};

    for (let i = 0; i < numMonths; i++) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
        const monthYear = `${getMonthName(d)} ${d.getFullYear()} `;
        result[monthYear] = 0;

    }

    expenses.forEach((expense) => {
        const expenseDate = new Date(expense.date);
        const monthYear = `${getMonthName(expenseDate)} ${expenseDate.getFullYear()} `;

        if (result[monthYear] !== undefined) {
            result[monthYear] += expense.amount;
        }
    })
    return result

}

