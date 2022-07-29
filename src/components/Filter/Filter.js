import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, filtrate } from '../../redux/filterSlice';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(filtrate(event.currentTarget.value));
  };

  return (
    <div>
      <input
        placeholder="Filter"
        value={filter}
        onChange={changeFilter}
      />
    </div>
  );
};

export default Filter;
