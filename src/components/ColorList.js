import React,{Component} from 'react'
import StarRating from './StarRating'
 const ColorList=({colors=[],onRemove=f=>f,onRate=f=>f})=>{
    return <div className="color-list">
     {(colors.length===0)?
     <p>No Colors Listed.(Add a Color)</p>:
     colors.map((color,i)=><Color key={color.id} {...color} 
            onRemove={()=>onRemove(color.id)} onRate={(rating)=>onRate(color.id,rating)}></Color>)
     }
    </div>
}
const Color=({title,color,rating=0,onRemove=f=>f,onRate=f=>f})=>
<section className="color">
    <h1>{title}</h1>
    <button onClick={onRemove}>X</button>
    <div className="color" style={{backgroundColor:color}}>
    </div>
    <div>
        <StarRating starSelected={rating} onRate={onRate}></StarRating>
    </div>
</section>
export default ColorList