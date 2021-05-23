import React from 'react';

const Modal = (props) => {
  return (
    <div className='lib-modal'>
      {props.error}
      <button onClick={props.onClose} className="close-button">Close</button>
    </div>
  );
};

export default Modal;