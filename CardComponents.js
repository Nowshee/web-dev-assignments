import React from 'react'

export default function CardComponents(props) {
  return (
<>

<div className="card"  style={{ height:320,width:300,padding:42, margin:32}}>
  <img src={props.images} class="rounded-circle" alt="..." style={{width:100}}/>
  <div className="card-body">
    <h5 className="card-title">Name: {props.Name}</h5>
    <p className="card-text">Email: {props.email}</p>
    <p className="card-text">Contact: {props.contact}</p>
    <a href="/" className="btn btn-primary">Click Here</a>
  </div>
</div> 

</>
  
  );
}

