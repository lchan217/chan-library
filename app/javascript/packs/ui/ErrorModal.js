import React from 'react';

const ErrorModal = (props) => {
  return (
    <div className='errorModal'>
      {props.error}
      <button onClick={props.onClose} className="close-button">Close</button>
    </div>
  );
};

export default ErrorModal;