function Note(props){
    return <>
        <div className="notes" key={props.key}>
            <h1>{props.title}</h1>
            <hr />
            <p>{props.content}</p>
        </div>
    </>
}

export default Note