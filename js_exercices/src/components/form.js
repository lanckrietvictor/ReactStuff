import React from "react";

function Form (){

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  return(
  <form className="form">
    <label>
      Name:
      <input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
    </label>
    <br/>
    <br/>
    <input type="submit" value="Submit" />
  </form>
  )
}

export default Form;
