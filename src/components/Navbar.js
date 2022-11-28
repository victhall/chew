import classes from './Navbar.module.css'

export default function Navbar() {
  return (
    <>
      <span><button className={classes['nav-search__btn']}>Search</button></span>
      <span><button className={classes['nav-saved__btn']}>Saved</button></span>
      </>
  )
}