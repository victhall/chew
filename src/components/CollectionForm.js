import { useRef, useState } from 'react';
import classes from './CollectionForm.module.css';

export default function CollectionForm(props) {
  const collectionNameRef = useRef();
  const [title, setTitle] = useState('');

  let getTitle = (e) => {
    const { value } = e.target.dataset;
    setTitle(value)
  };

  function submitHandler(e) {
    e.preventDefault();

    if (collectionNameRef.current.value.trim().length === 0 && title === '') {
      return alert("Please enter a valid collection name.")
    }

    if (collectionNameRef.current.value === '') {
      let enteredCollectionName = title;
      props.onAddToCollection(enteredCollectionName);
    } else {
      let enteredName = collectionNameRef.current.value.toLowerCase().trim();
      props.onAddToCollection(enteredName);
      collectionNameRef.current.value = '';
    }
    props.onCloseModal();
  }

  return (
    <>
      <h2 className={classes['collection-title']}>Enter a new collection name or add to an existing collection</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Collection name'
          ref={collectionNameRef}
        />
        <div className={classes['title-container']}>
          {props.title.map(element =>
            <div className={classes.title} data-value={element} onClick={getTitle}>{element}</div>)}
        </div>

        <div className={classes['btn-div']}>
          <button type='submit' className={classes.btn}>Save</button>
        </div>
      </form>
    </>
  );
}