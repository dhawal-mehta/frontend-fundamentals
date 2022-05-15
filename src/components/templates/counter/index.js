import React from 'react'
import { Button } from '@mui/material'

const Counter = ({counterValue, increment, decrement, addBy}) => {
  return (
    <>
        Counter Value is {counterValue}.
        <br />
        <Button sx={{}} variant="contained" onClick={increment}> add 1 </Button>
        <Button sx={{}} variant="contained" onClick={decrement}> sub 1 </Button>
        <Button sx={{}} variant="contained" onClick={addBy}> add 10 </Button>
    </>
  )
}

export default Counter