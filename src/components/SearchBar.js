import { useReducer, useState } from 'react';
import classes from './SearchBar.module.css';
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";

export default function SearchBar() {
  const [search, setSearch] = useState('');

  function searchHandler(event) {
    setSearch(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
  };

  function clearSearch() {
    setSearch('')
  };

  return (
    <div className={classes['form-container']}>
      <form onSubmit={submitHandler}>
        <input
          placeholder='Restaurant or Cuisine'
          type='text'
          onChange={searchHandler} />
        <button className={classes['search-btn']}><IoSearchOutline /></button>
        <button className={classes['close-btn']}><IoCloseOutline /></button>
      </form>
    </div>
  )
}