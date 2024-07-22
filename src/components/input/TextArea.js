import React, {useState} from "react";

/*TODO: Phần tử textarea trong React hơi khác so với HTML thông thường.
    Trong HTML, giá trị của một textarea là văn bản giữa thẻ bắt đầu <textarea> và thẻ kết thúc </textarea>*/
function Form() {
    const [state, setState] = useState({
        description: "The content of a textarea goes in the value attribute"
    });
    return (<form>
        <textarea value={state.description}/>
    </form>);
}

export default Form;