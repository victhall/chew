import { useRef, useState } from 'react';
import classes from './CollectionForm.module.css'

export default function CollectionForm(props) {
  const collectionNameRef = useRef();
  const [title, setTitle] = useState('')

  let getTitle = (e) => {
    const { value } = e.target.dataset;
    setTitle(value)
  };
  console.log(title)

  function submitHandler(e) {
    e.preventDefault();
    if (collectionNameRef.current.value == "") {
      let enteredCollectionName = title
      props.onAddToCollection(enteredCollectionName)
    } else {
      let enteredName = collectionNameRef.current.value.toLowerCase();
      props.onAddToCollection(enteredName)
    }

  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        input
        type='text'
        placeholder='Collection name'
        ref={collectionNameRef}
      />
      <div>
        {props.title.map(element =>
          <div data-value={element} onClick={getTitle}>{element}</div>)}
      </div>
      <button type='submit'>+</button>
    </form>
  );
}

// onClick={getTitle}