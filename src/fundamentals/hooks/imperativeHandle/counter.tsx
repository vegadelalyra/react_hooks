import { Ref, forwardRef, useImperativeHandle, useState } from 'react';

export type CounterRef = {
  reset: () => void;
};

interface CounterProps {}

function ImperativeHandleCounter(props: CounterProps, ref: Ref<CounterRef>) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  useImperativeHandle(ref, () => ({ reset }));

  return (
    <div>
      <h1 className='text-2xl'>Count: {count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default forwardRef(ImperativeHandleCounter);
