
import Header from './components/Header';
import CreateArea from './components/createArea';
import Note from './components/Note';
import { useState } from 'react';

function App() {
  const [notes,setNotes]=useState([])
  function addNote(note){
    setNotes(prevNotes=>{
      return [...prevNotes, note]
    })
  }

  function deleteNote(id){
    setNotes(prevNotes=>{
     return prevNotes.filter((noteItem,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem,i)=>{
        return <Note key ={i} id={i} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
      })}
    </div>
  );
}

export default App;
