import React, { Component } from "react"
import "./Lotto.css"
import Ball from "./Ball"

class Lotto extends Component {
   static defaultProps = {
      title: "Lotto",
      numBalls: 6,
      maxNum: 40
   }
   constructor(props) {
      super(props)
      this.state = {
         nums: Array.from({ length: this.props.numBalls })
      }
      this.randNum = this.randNum.bind(this)
   }
   randNum() {
      this.setState(curState => ({
         nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
      }))
   }
   render() {
      return (
         <div className="Lotto-container">
            <h1>{this.props.title}</h1>
            <div>
               {this.state.nums.map(n => (
                  <Ball num={n} />
            ))}
            </div>
            <div><button onClick={this.randNum}>Generate</button></div>
         </div>
      )
   }
}

export default Lotto