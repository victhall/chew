import classes from './Marker.module.css'

export const Marker = ({ text }) => (
  <div className={classes.marker}>
    {text}
  </div>
);