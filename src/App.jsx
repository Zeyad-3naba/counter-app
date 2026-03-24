import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="counter">
        <h1>Counter</h1>
        <div className="count-display">{count}</div>
        <div className="buttons">
          <button onClick={() => setCount(count - 1)} className="btn decrement">−</button>
          <button onClick={() => setCount(count + 1)} className="btn increment">+</button>
        </div>
      </div>
    </div>
  )
}

export default App
