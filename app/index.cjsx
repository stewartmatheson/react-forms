require "bootstrap-webpack!../bootstrap.config.js"
React = require 'react'
ReactDOM = require 'react-dom'

FormComponent = React.createClass

  onFocus : (event) -> console.log event
  onBlur : (event) -> console.log event
  onChange : (event) -> console.log event

  render : () -> <div className="row">
    <div className="form-group">
      <div className="col-xs-2">
        <label>{this.props.name}</label>
      </div>
      <div className="col-xs-5">
        <input type="text"
             className="form-input"
             onChange={this.onChange}
             onBlur={this.onBlur}
             onFocus={this.onFocus}></input>
      </div>
      <div className="col-xs-5">
        Help Text
      </div>
    </div>
  </div>

Form = React.createClass
  render : () -> <div className="row" >
    <div className="col-xs-12">
      <FormComponent name="Value" />
      <FormComponent name="Another Value"/>
      <FormComponent name="More Vaules"/>
      <FormComponent name="Yet More Values"/>
      <FormComponent nane="Hello World"/>
    </div>
  </div>


body = document.getElementById 'application'
ReactDOM.render React.createElement(Form), body
