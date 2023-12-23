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
    <div>
      <br />
      <br />
      <h1>Hooks😊</h1>
      <br />
      <h2>Counter value: {counter}</h2>
      <br />
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <br />
      <p>Footer: {counter}</p>
      <br />
      <br />
    </div>
  )
}
