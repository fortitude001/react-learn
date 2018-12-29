import React,{Component} from "react";
export  class AddColorForm1 extends Component{
    constructor(props){
      super(props)
      this.submit=this.submit.bind(this)
    }
    submit(e){
      const {_title,_color}=this.refs
      e.preventDefault()
      //alert(`New Color:${_title.value} ${_color.value}`)
      this.props.onNewColor(_title.value,_color.value)
      _title.value="";
      _color.value="#000000";
      _title.focus();
    }
    render(){
      return(
        <form onSubmit={this.submit}>
          <input type="text" ref="_title" placeholder="color title..." required></input>
          <input type="text" ref="_color" required></input>
          <button>ADD</button>
        </form>
      )
  
    }
  }
 const AddColorForm=({onNewColor=f=>f})=>{
    let _title,_color
    const submit=e=>{
      e.preventDefault()
      onNewColor(_title.value,_color.value)
      _title.value=""
      _color.value="#000000"
      _title.focus()
    }
    return (
      <form onSubmit={submit}>
          <input type="text" ref={input=>_title=input} placeholder="color title..." required></input>
          <input type="text" ref={input=>_color=input} required></input>
          <button>ADD</button>     
      </form>
    )
  }
  export default AddColorForm