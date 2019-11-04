import React, {Component} from "react"
import "./Ball.css"

class Ball extends Component{
   render(){
      return(
         <span className="Ball"> {this.props.num} </span>
      )
   }
}

export default Ball