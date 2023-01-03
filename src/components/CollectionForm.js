import { useRef, useState } from 'react';
import classes from './CollectionForm.module.css'

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
    
    if (collectionNameRef.current.value == "") {
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
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        type='text'
        placeholder='Collection name'
        ref={collectionNameRef}
      />
      <div>
        {props.title.map(element =>
          <div data-value={element} onClick={getTitle}>{element}</div>)}
      </div>
      <button type='submit'>Save</button>
    </form>
  );
}