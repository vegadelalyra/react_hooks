import React from 'react';
import { useEffect } from 'react';

function Child(props) {
  useEffect(() => {
    console.log(props);
    document.title = props.count;
  }, [props.count >= 3]);

  return (
    <div>
      <h1>Child Component</h1>
      <h2>{props.count}</h2>
    </div>
  );
}

export default Child;
