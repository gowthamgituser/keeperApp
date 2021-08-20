
import React, { useState } from "react";

function CreateArea(props) {


const [note,setNote] = useState({
  title:"",
  content:""
})

function handleChange(event)
{
  const {name,value } = event.target;
  setNote( prevNote=>{
    return {...prevNote,
            [name]:value}
  });
}

function Add(event)
{
  props.addNote(note)
  event.preventDefault();
  setNote({
    title:"",
    content:""
  })
}

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} placeholder="Title"  value={note.title}/>
        <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={Add}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;


































// function CreateArea(props) {

// const[data,setData] = useState({
//   title:"",
//   content:""
// })

// function handleChange(event)
// {
//   const {value,name} = event.target;
//   setData(preValue =>{
//         return {
//           ...preValue,
//         [name]:value
//         }
//   });
// }

// function handleClick(event)
// {
//   props.addnote(data)
//   setData({
//     title:"",
//     content:""
//   })
//   event.preventDefault();
// }


//   return (
//     <div>
//       <form>
//         <input name="title" onChange={handleChange} placeholder="Title"  value={data.title}/>
//         <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={data.content} />
//         <button onClick={handleClick}>Add</button>
//       </form>
//     </div>
//   );
// }

// export default CreateArea;
