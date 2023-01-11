
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
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem,i)=>{
        return <Note title={noteItem.title} content={noteItem.content} />
      })}
    </div>
  );
}

export default App;
