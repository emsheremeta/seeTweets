import { useState } from 'react';

export const Filter = ({ handleChange }) => {
  const [filter, setFilter] = useState('Show all');
  return (
    <div>
      <select onChange={handleChange}>
        <option>Show all</option>
        <option>Follow</option>
        <option>Following</option>
      </select>
    </div>
  );
};
