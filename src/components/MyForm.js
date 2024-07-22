import React, {useState} from "react";

const MyForm = () => {

    /*TODO: Là cách bạn xử lý dữ liệu khi nó thay đổi giá trị hoặc đã gửi đi
         Trong HTML, dữ liệu của form được quản lý bởi DOM
        Trong React, dữ liệu của form được quản lý bởi các component
        Khi dữ liệu được xử lý bởi các component, tất cả dữ liệu được lưu trữ ở state
        Bạn có thể kiểm soát các thay đổi bằng cách thêm trình xử lý sự kiện trong thuộc tính onChange*/
    const [username, setUsername] = useState("");
    return (<form>
        <h1>Hello {username} </h1>
        <p>Enter your name:</p>
        <input type="text" onChange={event => setUsername(event.target.value)}/>
    </form>);
};

export default MyForm;