import React, {Component} from "react"

export default class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {
      count:0
    }

    this.goUp = this.goUp.bind(this)
    this.goDown = this.goDown.bind(this)
  }

  goUp(){
    return this.setState({count:this.state.count + 1})
  }
  goDown(){
    return this.setState({count:this.state.count - 1})
  }


  render(){

    const buttonUp = <button type="submit" value = "+1" onClick = {this.goUp}>+1</button>
    const buttonDown = <button type='submit' value = "-1" onClick={this.goDown}>-1</button>
    const output = <p>{this.state.count}</p>


    return(
      <div>
        {buttonUp}
        {buttonDown}
        {output}
      </div>
    )
  }
}
