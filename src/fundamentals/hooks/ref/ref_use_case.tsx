import { useEffect, useRef } from "react"

interface RefUseCaseProps {}

export default function RefUseCase({}: RefUseCaseProps) {
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <div className="tutorial">
            <input ref={inputRef}  type="text" placeholder="Type something..." />
        </div>
    )
}