import { useState } from 'react';
import classes from './SearchBar.module.css';
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";

export default function SearchBar() {

  return (
    <div className={classes['form-container']}>
      <form onSubmit="">
        <input
          placeholder='Restaurant or Cuisine'
          type='text'
          onChange="" />
          <button className={classes['search-btn']}><IoSearchOutline /></button>
          <button className={classes['close-btn']}><IoCloseOutline /></button>
      </form>
    </div>
  )
}