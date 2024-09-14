import { useState } from 'react';
import State from './fundamentals/hooks/state/state'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Callback } from './fundamentals/hooks/callback/callback';
import Ref from './fundamentals/hooks/ref/ref';
import RefUseCase from './fundamentals/hooks/ref/ref_use_case';
import { Reducer } from './fundamentals/hooks/reducer/reducer';
import { Transition } from './fundamentals/hooks/transition/Transition';
import { LayoutEffect } from './fundamentals/hooks/layoutEffect/layoutEffect';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a
          href='https://vitejs.dev'
          target='_blank'>
          <img
            src={viteLogo}
            className='logo'
            alt='Vite logo'
          />
        </a>
        <a
          href='https://react.dev'
          target='_blank'>
          <img
            src={reactLogo}
            className='logo react'
            alt='React logo'
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <LayoutEffect />
      <Transition />
      <Reducer />
      <Ref />
      <RefUseCase />
      <Callback />
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <State />
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
