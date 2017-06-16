import React, {Component} from 'react'

export default class Greeter extends Component{
  constructor(props){
    super(props)
    this.state = {
      output:""
    }
    this.message = this.message.bind(this);
  }

  message(x){
     this.setState({output:x.target.value});
   }


  render(){

    const greetLabel = <label for="name">Your Name Here</label>

    const greetInput = <input name="name" type="text" onChange= {this.message}/>
    const greetOutput = "Wecome to React " + this.state.output
    console.log(this.state.output)
    console.log(this.setState)
    console.log(this.message)

    return (
            <div>
              {greetLabel}
              {greetInput}
              <p>{greetOutput}</p>
            </div>)
  }
}
