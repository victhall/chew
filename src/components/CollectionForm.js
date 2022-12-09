import { useRef } from 'react';
import classes from './CollectionForm.module.css'

export default function CollectionForm(props) {
  const collectionNameRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const enteredCollectionName = collectionNameRef.current.value;

    props.onAddToCollection(enteredCollectionName)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        input
        type='text'
        placeholder='Collection name'
        ref={collectionNameRef}
      />
      <button type='submit'>+</button>
    </form>
  );
}