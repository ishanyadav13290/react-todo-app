function Note(props){
    function handleClick(){
        props.onDelete(props.id)
    }
    return <>
        <div className="notes">
            <h1>{props.title}</h1>
            <hr />
            <p>{props.content}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    </>
}

export default Note