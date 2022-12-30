export default function Category(props) {

  function getTitle(e) {
    const { value } = e.target.dataset;
    console.log('VALUE MAMAS', value);
 };

  return(
    <div>
         {props.title.map(element => 
          <button data-value={element} onClick={getTitle}>{element}</button>)}
    </div>
    
    ) 

}


