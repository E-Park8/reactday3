import React, { useState } from 'react'

const App = () => {

  const [countState, setCountState] = useState({
    count: 0,
    message: 'Hello'
  })

  countState.handleBtnClick = event => {
    setCountState({ ...countState, count: (event.target.value === '0') ? 0 : countState.count + parseInt(event.target.value) })
  }

  return (
    <>
      <h1>{countState.message}</h1>
      <h1>Count: {countState.count}</h1>
      <button onClick={countState.handleBtnClick} value={1}>+</button>
      <button onClick={countState.handleBtnClick} value={-1}>-</button>
      <button onClick={countState.handleBtnClick} value={0}>Reset</button>
    </>
  )
}

export default App