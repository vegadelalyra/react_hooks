import { useState } from "react"

interface DemoProps {}

export default function Demo({}: DemoProps) {
    const [count, setCount] = useState(0)

    return (
        <div className="tutorial">
            <h1>useState Simply Explained</h1>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}