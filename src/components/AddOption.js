import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className='Add_Option_Error'>{this.state.error}</p>}
        <form className='Add_Option' onSubmit={this.handleAddOption}>
          <input className='Add_Option_Input' type="text" name="option" />
          <button className='button'>Add Option</button>
        </form>
      </div>
    );
  }
}
