import React from 'react'

export default function CardComponents(props) {
  return (
//     <div>
//       <div class="border border-secondary">
//   <img src="..." class="rounded-circle" alt="..."/>
//   <div >
//   <h3 class="card-title">{props.Name}</h3>
//     <p class="card-text">{props.email}</p>
//     <p>{props.contact}</p>
//     </div>
// </div>
// </div>
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

