import classes from './Navbar.module.css'

export default function Navbar(props) {
  return (
    <>
      <span><button onClick={props.onHide} className={classes['nav-search__btn']}>Search</button></span>
      <span><button onClick={props.onShow} className={classes['nav-saved__btn']}>Saved</button></span>
      </>
  )
}