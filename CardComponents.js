import React, { useState } from 'react';
import Emoji from './Emoji';

function getRandomEmotions(){
  const emotions=['angry','care','laugh','like','love','sad','wow'];
  return emotions[Math.floor(Math.random()*emotions.length)];
}

export default function CardComponents(props) {
 
 
  const handleLikeClick= ()=>{
    setLikes(likes+1);
   
    setEmotions([getRandomEmotions()]);
    console.log(emotions);
  }
  
  const [likes, setLikes] = useState(0);
  const [emotions,setEmotions]=useState([]);
  
  const displayEmotions=emotions.map((emotion,index)=>{
    return <Emoji type={emotion} />
     });
  return (
<>

<div className="card"  style={{ height:340,width:300,padding:42, margin:32}}>
  <img src={props.images} className="rounded-circle" alt="..." style={{width:100}}/>
  <div className="card-body">
    <h5 className="card-title">Name: {props.Name}</h5>
    <p className="card-text">Email: {props.email}</p>
    <p className="card-text">Contact: {props.contact}</p>
    <button className="btn btn-primary"  onMouseEnter={handleLikeClick}>likes:{likes} {displayEmotions}</button>
  </div>
</div> 

</>
  
  );
}

  

