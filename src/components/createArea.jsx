import { useState } from "react";

function CreateArea(props){
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    function handleChange(event){
        const {name,value}=event.target;
        setNote(prevNote =>{
            return {
                ...prevNote,
                [name]:value
            }
        })
        
    }
    function submitNote(event){
        props.onAdd(note)
        event.preventDefault()
    }
    return <div className="createArea"> 
        <form>
            <input placeholder="Title" name="title" value={note.title} onChange={handleChange}/>
            <br />
            <input placeholder="Description" name="content" value={note.content} onChange={handleChange}/>
            <br />
            <button onClick={submitNote}>Note</button>
        </form>
    </div>
}

export default CreateArea;