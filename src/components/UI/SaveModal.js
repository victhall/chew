import * as ReactDOM from "react-dom";
import classes from './SaveModal.module.css'

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className=''>
        {props.children}
      </div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

export default function SaveModal(props) {
  return (
    <>
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}