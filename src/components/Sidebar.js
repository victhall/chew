import classes from './Sidebar.module.css';
import SearchBar from './SearchBar';
import Button from './Button';

export default function Sidebar() {
  return (
    <section className={classes.sidebar}>
      
      <div>
      <div className={classes.navigation}>
      <Button className={classes['nav-btn']}>Search</Button>
      <Button className={classes['nav-btn']}>Favourites</Button>
      </div>

      <SearchBar />
      </div>
    </section>
  )
}