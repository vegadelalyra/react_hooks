import { useDeferredValue, useEffect, useState } from 'react';
import { SlowList } from './SlowList';

export const DeferredValue = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

    useEffect(() => {
        console.log('Query:', query)
        console.log('Deferred query:', deferredQuery)
        console.log('--- End of render ---')
    }, [query, deferredQuery])

  return (
    <div className='tutorial'>
      <input
        type='text'
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder='Search...'
      />
      <SlowList text={deferredQuery} />
    </div>
  );
};
