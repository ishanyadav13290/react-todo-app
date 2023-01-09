function CreateArea(event){
    function handleClick(){
        event.preventDefault()
        console.log("recieved")
    }
    return <div className="createArea"> 
        <form>
            <input placeholder="Title" name="title" />
            <br />
            <input placeholder="Description" name="desc" />
            <br />
            <button onClick={handleClick}>Note</button>
        </form>
    </div>
}

export default CreateArea;