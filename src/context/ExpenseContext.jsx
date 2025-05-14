import { createContext, useContext, useEffect, useReducer } from "react";

//? Creating Context
export const ExpenseContext = createContext()


const initialState = {
    expenses:  JSON.parse(localStorage.getItem("expenses")) || [],
    loading: false,
    error: null
}

// ?Expense Reducer Function

const expenseReducer = (state, action) => {
    switch (action.type) {

        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case "DELETE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload.id
                )
            }

        case "UPDATE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.map((expense) =>
                    expense.id === action.payload.id ? action.payload : action
                )
            }

        case "SET_EXPENSE":
            return {
                ...state, expenses: action.payload
            }

        case "SET_LOADING":
            return {
                ...state, loading: action.payload
            }

        case "SET_ERROR":
            return {
                ...state, error: action.payload
            }

        default: {
            return state
        }

    }
}


// ? Creating A Provider
export const ExpenseProvider = ({ children }) => {

    // ! Created Reducer State
    const [state, dispatch] = useReducer(expenseReducer, initialState);

    useEffect(() => {
        try {
            localStorage.setItem("expenses", JSON.stringify(state.expenses));

        } catch (error) {
            console.error("Failed To Save Expense In LocalStorage : ", error)
            //? Adding Error Into Error Using Dispatch
            dispatch({
                type: "SET_ERROR",
                payload: error
            })
        }
    }, [state.expenses])

    // ! Adding All Value In One Value Object And Pass it Into Provider Function
    const value = {
        ...state,
        // ! Function FOr Add Expense
        addExpense: (expense) => {
            const newExpense = {
                ...expense,
                id: crypto.randomUUID()
            };
            //! Dispatch For Add Expense
            dispatch({
                type: "ADD_EXPENSE",
                payload: newExpense
            })
        },
        // ! Function For Delete Expense
        deleteExpense: (id) => {
            dispatch({
                type: "DELETE_EXPENSE",
                payload: { id }
            })
        },

        // ! Function For Delete Expense
        updateExpense: (expense) => {
            dispatch({
                type: "UPDATE_EXPENSE",
                payload: expense
            })
        }
    }

    return <ExpenseContext.Provider value={value} > {children} </ExpenseContext.Provider>

}


// ! Creating Custom Hook UseExpense TO Use It Globally 
export const UseExpense = () => {

    const context = useContext(ExpenseContext);

    if (context === undefined) {
        throw new Error("useExpense Must be Used within the expense provider ")
    }

    return context;

}