import React from "react";
import Note from "./Note";
function StickyNote() {
  const data = [
    { title: "title 1#", content: "content 1#" },
    { title: "title 2#", content: "content 2#" },
    { title: "title 3#", content: "content 3#" },
    { title: "title 4#", content: "content 4#" },
    { title: "title 5#", content: "content 5#" },
    { title: "title 6#", content: "content 6#" },
    { title: "title 7#", content: "content 7#" },
    { title: "title 8#", content: "content 8#" },
    { title: "title 9#", content: "content 9#" },
    { title: "title 10#", content: "content 10#" },
    { title: "title 11#", content: "content 11#" },
  ];
  const noteData=data.map((data, index)=><Note key={index} title={data.title} content={data.content}/>)
  return <ul className="stickynote">
    {noteData}
  </ul>;
}

export default StickyNote;
