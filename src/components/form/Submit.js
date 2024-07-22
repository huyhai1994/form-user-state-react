import React, {useState} from "react";

function Submit() {
    const [username, setUsername] = useState("");
    /*TODO: Bạn có thể kiểm soát hành động gửi bằng cách
       thêm trình xử lý sự kiện trong thuộc tính onSubmit:
    */
    return (<form onSubmit={(event) => {
        event.preventDefault();
        alert("you are submitting " + username);
    }}>
        <h1>Hello {username}</h1>
        <p>Enter your name, and submit:</p>
        <input type="text" onChange={(event) => setUsername(event.target.value)}/>
        <input type="submit"/>
    </form>);
}

export default Submit;