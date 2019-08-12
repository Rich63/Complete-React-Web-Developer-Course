import { createStore, combineReducers } from "redux";
import uuid from 'uuid';

//Actions

// ADD_EXPENSE
const addExpense = (
  { 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0 
  } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})


// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE
const editExpense = ( id, updates ) => ({ // editExpense is called from dispatch with expenseTwo id and in updates sits amount: 500, Expenses Reducer is called
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({ // default text to '' if no text is provided
  type: 'SET_TEXT_FILTER',
  text
})

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})

// Expenses Reducer
const expensesReducerDefaultState = []
const expenseReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {                        // object spread operator
            ...expense,                   // Get the object expense and overwrite it with action.updates
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    default:
      return state
  }
}

// Filters Reducer
const filtersReducerDefaultState = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined }
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state
  }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  })
}

// Store creation
const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
  })
)

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

// dispatches
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -1000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: 1000 }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 })) // call editExpense with id of expenseTwo and updated amount

// store.dispatch(setTextFilter('fee'))
// store.dispatch(setTextFilter(''))

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(2000))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(999))
// store.dispatch(setEndDate())

const demoState = {
  expenses: [{
    id: 'iweurwtu',
    description: 'january rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
  }
}

// const user = {
//   name: 'Jen',
//   age: 24
// }

// console.log({
//   age: 30,
//   ...user,
//   location: 'Philadelphia',
//   name: 'Richard',
//   age: 56
// })