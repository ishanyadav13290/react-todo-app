function Note(props){
    let style={
        background:"transparent",
        padding:"3px",
        color:"white",
        border:"1px solid white",
        cursor:"pointer"
    }
    function handleClick(){
        props.onDelete(props.id)
    }
    return <>
        <div className="notes">
            <h1>{props.title}</h1>
            <hr />
            <p>{props.content}</p>
            <button onClick={handleClick} style={style}>Delete</button>
        </div>
    </>
}

export default Note