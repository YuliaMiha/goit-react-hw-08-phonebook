import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { selectFilter } from '../../redux/contacts/filterSelector';
import { filterContactsAction } from '../../redux/contacts/contactSlice';

const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div className={css.filter}>
      <label className={css.filter__label}>
        Find contacts by name
        <input
          className={css.filter__input}
          name="filter"
          type="text"
          value={filterValue}
          onChange={e => dispatch(filterContactsAction(e.target.value))}
          placeholder="Filter contacts"
        />
      </label>
    </div>
  );
};
export default Filter;
