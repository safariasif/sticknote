import React from "react";


function Note(props){
    return <li className="note-item">
    <h2>{props.title}</h2>
    <p>{props.content}</p>
  </li>
}

export default Note;