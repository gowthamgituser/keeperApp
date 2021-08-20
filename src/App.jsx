
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Notes"
import CreateArea from "./CreateArea";

function App() {

  const [todonotes, settodo] = useState([]);

  function addNotes(newNotes) {
    //console.log(newNotes)
    settodo(prevNotes => {
      return [...prevNotes, newNotes]
    });
    //console.log(todonotes)
  }

  
  function deleteNote(id)
  {
      settodo(prevNotes=>{
        return prevNotes.filter((todonotes,index)=>{
          return index!==id
        })
      })
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNotes} />
      {todonotes.map((mynotes, index) => {
        return <Note key={index}
          id={index}
          title={mynotes.title} content={mynotes.content} onDelete={deleteNote}/>
      })}



      <Footer />
    </div>
  );
}

export default App;


































// function App() {

// const [notes,setNote] = useState([])
// function Addnotes(newnote)
// {
//   setNote(preNote=>{
//     return [...preNote,newnote]
//   });

// }


// function Deletenote(id)
// {
//   setNote(preNote=>{
//     return preNote.filter((notes,index)=>{
//       return index != id
//     })
//   });


// }



//   return (
//     <div>
//       <Header />
//       <CreateArea addnote={Addnotes}/>
//       {notes.map((mapnote,index)=>{
//         return <Note key={index} id={index} title={mapnote.title}
//         content={mapnote.content} onCheck={Deletenote}/>
//       })}


//       <Footer />
//     </div>
//   );
// }

// export default App;
