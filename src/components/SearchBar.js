import { useState } from 'react';
import classes from './SearchBar.module.css';

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  function searchHandler(e) {
    setSearchTerm(e.target.value);
  };

  function submitHandler(e) {
    e.preventDefault();
    props.onSearch(searchTerm);
  };

  return (
    <div className={classes['form-container']}>
      <form onSubmit={submitHandler}>
        <input
          placeholder='Restaurant or Cuisine'
          type='text'
          onChange={searchHandler} />
      </form>
    </div>
  )
}