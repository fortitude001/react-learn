import React, { Component } from 'react';
import AddColorForm,{AddColorForm1} from './components/AddColorForm'
import StarRating from './components/StarRating'
import ColorList from './components/ColorList'
import {v4} from 'uuid';
const AppCom =({totalStars,onClick})=>{
  return <button onClick={onClick}></button>
}

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      colors:[]
    }
    this.addColor=this.addColor.bind(this)
    this.removeColor=this.removeColor.bind(this)
    this.rateColor=this.rateColor.bind(this)
  }
  addColor(title,color){
    const colors=[
      ...this.state.colors,
      {
        id:v4(),
        title,
        color,
        rating:0
      }
    ]
    this.setState({colors})
  }
  removeColor(id){
    const colors=this.state.colors.filter(color=>color.id!==id)
    this.setState({colors})
  }
  rateColor(id,rating){
    const colors=this.state.colors.map((color)=>
      color.id!==id?color:{...color,rating}
    )
    this.setState({colors})
  }
  render() {
    // const logColor=(title,color)=>{
    //   console.log(`New Color:${title} ${color}`)
    // }
    const {colors}=this.state
    const {addColor,removeColor,rateColor}=this
    return (
      <div className="app">
        {
          //<AddColorForm onNewColor={logColor}></AddColorForm>
          //<AddColorForm1 onNewColor={logColor}></AddColorForm1>
          <AddColorForm onNewColor={addColor}></AddColorForm>
          //<AppCom onClick={()=>alert("aa")}></AppCom>
        }
        {
          <ColorList colors={colors} onRemove={removeColor} onRate={rateColor}></ColorList>
        }

      </div>

    );
  }
}

export default App;
