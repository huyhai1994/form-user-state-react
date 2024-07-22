import React, {useState} from "react";

function MyForm() {
    const [username, setUsername] = useState("");
    const handleChange = event => setUsername(event.target.value);

    return (<div>
        <form>
            {username ? <h1>Hello {username}</h1> : ""}
            <p>Enter your name:</p>
            <input type="text" value={username} onChange={handleChange}/>
        </form>
    </div>);
}

export default MyForm;