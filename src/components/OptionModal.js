import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
  isOpen={!!props.selectedOption}
  onRequestClose = {props.handleClearSelecredOption}
  contentLabel="Selecter Option"
  closeTimeoutMS={200}
  className='Modal'
  >
      <h3 className='modal__title'>Selected Option</h3>
      {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
      <button className='button' onClick={props.handleClearSelecredOption}>Okey</button>
      </Modal>  

);


export default OptionModal;
