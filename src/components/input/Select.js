/*TODO: Dropdown list hoặc select box trong React cũng khác một chút so với HTML.
   Trong HTML, giá trị đã chọn trong danh sách dropdown được xác định bằng thuộc tính selected:*/
import React, {useState} from 'react'

function Form() {
    const [state, setState] = useState({
        mycar: 'Volvo'
    })
    return (<form>
        <select value={state.mycar}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
        </select>
    </form>);
}

export default Form;