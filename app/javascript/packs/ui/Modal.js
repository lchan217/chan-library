import React from 'react';

const Modal = (props) => {
  let cssClasses = ['lib-modal']
  if(props.cssClasses){
    cssClasses.push(props.cssClasses)
  }
  
  return (
    <div className={cssClasses.join(' ')}>
      {props.children}
      <button onClick={props.onClose} className="btn btn-secondary close-button">Close</button>
    </div>
  );
};

export default Modal;