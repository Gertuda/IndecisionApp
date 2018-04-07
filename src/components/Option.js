import React from 'react';

const Option = (props) => {
  return (

    <div className='option'>
    <p className='Options_Text'>{props.count}.  {props.optionText}</p>
      
      <button
      className='button button-link'
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Option;
