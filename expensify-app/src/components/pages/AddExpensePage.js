// see part 107 of Complete React course by Andrew Mead

import React from 'react'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { addExpense } from '../../actions/expenses'

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense))
        props.history.push('/')
      }}
    />
  </div>
)

export default connect()(AddExpensePage);

/* 
  Let's take a quick moment to recap what we did in this one, we just passed the data out of expense 
  form.

  We did that by calling a prop like gets passed in from the parent. Now why did we do this. We did 
  this because we want to reuse expense form on ad expense page and later on on the Edit expense page.

  Since both of these need to dispatch different actions we've extract that part away from expense 
  form right here. I just define the two liner when I want to do when the data is valid we're going
  to do the exact same thing with added expense page and just a little bit and we'll be able to reuse
  a lot of the code from over here. So it's actually going to be a really easy process.

  Now when we did dispatch we actually added the data to the redux store and then we used the history
  push method to switch pages. Now the backbone is still preserved. So if I were to go back to the 
  dashboard and go back again I do go back to the Create page. So as we use the history push method 
  it's just like someone clicked a link so they can go back to view the page they came from.
*/