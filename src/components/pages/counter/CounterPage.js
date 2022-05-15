import React from 'react'

import { actions } from '../../../store/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux'

import Counter from '../../templates/counter'


const CounterPage = () => {
  const counterValue = useSelector( (state) => state.counter )
  const dispatch = useDispatch();
  const increment = () => { dispatch(actions.increment()) }
  const decrement = () => { dispatch(actions.decrement()) }
  const addBy = () => { dispatch(actions.addBy(10)) }

  return (
    <Counter
        counterValue={counterValue}
        increment={increment}
        decrement={decrement}
        addBy={addBy}
    />
  )
}

export default CounterPage