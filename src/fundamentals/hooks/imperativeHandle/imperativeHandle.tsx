import { useRef } from "react";
import Counter, { CounterRef } from "./counter";

export function ImperativeHandle() {
    const counterRef = useRef<CounterRef>(null)


    return (
        <div className="tutorial">
            <div className="mb-2">
                <Counter ref={counterRef} />
            </div>
            <button onClick={() => counterRef.current?.reset()}>Reset From Parent</button>
        </div>
    )
}