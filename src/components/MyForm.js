import React, {useState} from "react";

const MyForm = () => {
    const [username, setUsername] = useState("");
    return (<form>
        <h1>Hello {username} </h1>
        <p>Enter your name:</p>
        <input type="text" onChange={event => setUsername(event.target.value)}/>
    </form>);
}

export default MyForm;