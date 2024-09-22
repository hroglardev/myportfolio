import { useState } from 'react';
const useFilters = (items) => {
  const [filter, setFilter] = useState('advanced');

  const filteredItems = items.filter((item) => item.category === filter);

  return { setFilter, filteredItems, filter };
};

export default useFilters;
