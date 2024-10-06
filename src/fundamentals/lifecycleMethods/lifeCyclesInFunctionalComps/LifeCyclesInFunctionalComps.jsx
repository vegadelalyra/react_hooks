import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Child from './ChildLifeCyclesInFuncComps';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Use Lifecycle Hooks in Functional Component</h1>
      <Child count={count} />
      <button
        onClick={() => {
          setCount(count++);
        }}>
        click {count}
      </button>
    </div>
  );
}

export default App;
