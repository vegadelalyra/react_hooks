import { useLayoutEffect, useState } from 'react';
import Button from '../transition/Button';

const userIds = [1, 2];

export const LayoutEffect = () => {
  const [userId, setUserId] = useState(userIds[0]);
  const [isAdmin, setIsAdmin] = useState(true);

  // This artifically slows down rendering
  let now = performance.now();
  while (performance.now() - now < 200) {
    // Do nothing for bit...
  }

  useLayoutEffect(() => {
    setIsAdmin(userId === userIds[0]);
  }, [userId]);

  const handleChange = () => {
    const otherId = userIds.find(id => id !== userId)!;
    setUserId(otherId);
  };

  return (
    <div className='tutorial-shorts'>
      <p>userId: {userId}</p>
      <p>Admin: {isAdmin ? 'true' : 'false'}</p>
      <Button title='Change User' onClick={handleChange}></Button>
    </div>
  );
};
