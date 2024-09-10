import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log(<App />);

/**
 Object { "$$typeof": Symbol("react.element"), type: App()
, key: null, ref: null, props: {}, _owner: null, _store: {…}, … }
​
"$$typeof": Symbol("react.element")
​
_owner: null
​
_self: undefined
​
_source: Object { fileName: "C:/Users/rlyeh/Desktop/dev/Frontend/Next/react-hooks/src/main.tsx", lineNumber: 7, columnNumber: 13 }
​
_store: Object { … }
​
key: null
​
props: Object {  }
​
ref: null
​
type: function App()​
<prototype>: Object { … }
 */

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);


