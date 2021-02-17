import React from 'react';
import Reference from './Reference'

const ReferenceIndex = (props) => props.references.map((reference, index) => {
  return <Reference
    reference={reference}
    key={index} />
} )

export default ReferenceIndex;