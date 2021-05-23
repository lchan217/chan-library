import React from 'react';

const Modal = (props) => {
  return (
    <div className='lib-modal'>
      {props.children}
      <button onClick={props.onClose} className="btn btn-secondary close-button">Close</button>
    </div>
  );
};

export default Modal;