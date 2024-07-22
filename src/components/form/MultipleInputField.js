import React, {useState} from "react";

function Submit() {
    const [state, setState] = useState({
        username: "", age: null
    });
    /*TODO: Bạn có thể kiểm soát các giá trị của nhiều đầu vào bằng cách thêm thuộc tính tên vào mỗi phần tử.
        Khi bạn khởi tạo trạng thái trong hàm tạo, hãy sử dụng tên
        Để truy cập các trình xử lý sự kiện, hãy sử dụng cú pháp event.target.name và event.target.value.
        Để cập nhật trạng thái trong phương thức this.setState, hãy sử dụng dấu ngoặc vuông [ký hiệu dấu ngoặc vuông] xung quanh tên thuộc tính*/

    const submitHandler = event => {
        event.preventDefault();
        alert("You are submitting " + state.username);
    };
    const handleChange = event => setState({...state, [event.target.name]: event.target.value});
    /*TODO: The provided code snippet is a part of a React component that handles form input and updates the component's state. The handleChange function is used to capture input changes and update the corresponding state property.*/

    return (<form onSubmit={submitHandler}>
        <h1>
            Hello {state.username} {state.age}
        </h1>
        <p>Enter your name:</p>
        <input type="text" name="username" onChange={handleChange}/>
        <p>Enter your age:</p>
        <input type="text" name="age" onChange={handleChange}/>
        <input type="submit"/>
    </form>);
}

export default Submit;