import React, {Component} from "react"

export default class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {
      countList:[
        {
          count:0,
          active: false,
          color: "red"
        }
      ]
    }

    let font_style = {color:"red"}

    this.goUp = this.goUp.bind(this)
    this.goDown = this.goDown.bind(this)
    this.addCountButton = this.addCountButton.bind(this)
  }

  toggleActive(listIndex){
    const { countList } = this.state
    countList[listIndex].active = !countList[listIndex].active
    countList[listIndex].color = countList[listIndex].active ? "green": "red"
    console.log(countList)
    this.setState({countList: countList})


  }

  addCountButton(){
    let newCounter = {count:0, active: false, color: "red"}
    return this.setState({countList:this.state.countList.concat([newCounter])})
  }

  goUp(){
    const incrList = counter => {
      if(counter.active){
          counter.count++
      }
      return counter
    }

    this.setState({countList:this.state.countList.map(incrList)});
  }
  goDown(){
    const incrList = counter => {
      if(counter.active){
          counter.count--
      }
      return counter
    }

    this.setState({countList:this.state.countList.map(incrList)});
  }


  render(){
    let countComp = []

    countComp = this.state.countList.map((count, countIndex) => (<ListCounter
        counting={count}
        isActive={this.toggleActive.bind(this,countIndex)}
        timStyle={{color: count.color}}
      />))


    const buttonUp = <button type="submit" value = "+1" onClick = {this.goUp}>+1</button>
    const buttonDown = <button type='submit' value = "-1" onClick={this.goDown}>-1</button>
    const addCount = <button type='submit' onClick={this.addCountButton}>Add counter</button>
    const output = <p>{this.state.countList[0].count}</p>


    return(
      <div>
        {addCount}
        <ul>
          {buttonUp}
          {buttonDown}
          {countComp}
        </ul>
      </div>
    )
  }
}


class ListCounter extends Component{
  constructor(props){
    super(props)

  }

  render(){

    //console.log(this.props.counting.count.active)
    return (<li style = {this.props.timStyle} onClick={this.props.isActive}>{this.props.counting.count} {this.props.counting.active.toString()}</li>)
  }
}
