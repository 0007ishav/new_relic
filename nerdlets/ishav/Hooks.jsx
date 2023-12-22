import React, { useState } from 'react'

export const Hooks = () => {
    const [counter, setCounter] = useState(0);

    const addValue = () => {
        setCounter(counter + 1);
    }
    const removeValue = () => {
        setCounter(counter - 1);
    }

  return (
    <>
    <h1>Hooks😊</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}
