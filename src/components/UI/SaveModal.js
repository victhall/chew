import * as ReactDOM from "react-dom";
import classes from './SaveModal.module.css';

function Backdrop(props) {
  return (
    <div className={classes.backdrop} onClick={props.onCloseModal}></div>
  );
}

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
      {ReactDOM.createPortal(<Backdrop onCloseModal={props.onCloseModal}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}