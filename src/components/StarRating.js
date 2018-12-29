import React,{Component} from 'react';
import PropTypes from 'prop-types'
import '../css/StarRating.css'
const Star=({selected=false,onClick=f=>f})=>{
    return <div className={(selected)?"star selected":"star"} onClick={onClick}>
    </div>
}
Star.propTypes={
    selected:PropTypes.bool,
    onClick:PropTypes.func
}
//有状态
class StarRating1 extends Component{
    constructor(props){
        super(props)
        this.state={
            starSelected:0
        }
        this.change=this.change.bind(this)

    }
    change(starSelected){
        this.setState({starSelected})
        console.log(starSelected)
    }
    render(){
        const {totalStars}=this.props
        const {starSelected}=this.state
        return(
            <div className="star-rating">
                {[...Array(totalStars)].map((n,i)=>
                    <Star key={i} selected={i<starSelected}
                    onClick={()=>this.change(i+1)}></Star>)}
                    <br></br>
                <p>{starSelected} of {totalStars}</p>
            </div>
        )
    }
}
const StarRating=({totalStars=5,starSelected=0,onRate=f=>f})=>{
    return(
        <div className="star-rating">
            {[...Array(totalStars)].map((n,i)=>
                <Star key={i} selected={i<starSelected}
                onClick={()=>onRate(i+1)}></Star>)}
                <br></br>
            <p>{starSelected} of {totalStars}</p>
        </div>
    )    
}
StarRating.propTypes={
    totalStars:PropTypes.number
}
StarRating.defaultProps={
    totalStars:5
}
export default StarRating;