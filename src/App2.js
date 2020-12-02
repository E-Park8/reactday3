import React, { useState } from 'react'

const App = () => {

    let nums = [...Array(10).keys()]
    let ops = ['+', '-', '*', '/']

    const [countState, setCountState] = useState({
        num1: '',
        num2: '',
        operator: '',
        equation: '',
    })

    countState.handle = event => {
        if (countState.operator === '') {
            setCountState({ ...countState, num1: countState.num1 + event.target.value })
        } else {
            setCountState({ ...countState, num2: countState.num2 + event.target.value })
        }
    }

    countState.handleOp = event => {
        if (countState.num1) {
            setCountState({ ...countState, operator: event.target.value })
        }
    }

    countState.equals = () => {
        switch (countState.operator) {
            case '+':
                setCountState({ equation: parseInt(countState.num1) + parseInt(countState.num2) })
                break
            case '-':
                setCountState({ equation: parseInt(countState.num1) - parseInt(countState.num2) })
                break
            case '*':
                setCountState({ equation: parseInt(countState.num1) * parseInt(countState.num2) })
                break
            case '/':
                setCountState({ equation: parseInt(countState.num1) / parseInt(countState.num2) })
                break
        }
    }

    countState.reset = () => {
        setCountState({ ...countState, equation: '', num1: '', num2: '', operator: '' })
    }

    return (
        <>
            <h1>Calculator</h1>
            <h1>{countState.equation}</h1>
            <h1>{countState.num1}{countState.operator}{countState.num2}</h1>
            {/* <button onClick={countState.handleBtnClick} value={1}>+</button>
      <button onClick={countState.handleBtnClick} value={-1}>-</button> */}
            {nums.map(num => <button key={num} onClick={countState.handle} value={num}>{num}</button>)}
            {ops.map(op => <button key={op} onClick={countState.handleOp} value={op}>{op}</button>)}
            <button onClick={countState.equals}> = </button>
            <button onClick={countState.reset}>Clear</button>
        </>
    )
}

export default App