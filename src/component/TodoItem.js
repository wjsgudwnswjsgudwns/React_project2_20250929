import "./TodoItem.css";
import React, {useContext} from 'react';
import {TodoDispatchContext} from "../App"

function TodoItem({id, content, isDone, createDate}) {

    const {onUpdate, onDelete} = useContext(TodoDispatchContext);

    console.log(`${id} TodoItem 업데이트`);

    function onChangeCheckbox() {
        onUpdate(id);
    }

    function onClickDelete() {
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" onChange={onChangeCheckbox} checked={isDone} />
            </div>
            <div className="title_col">{isDone === false ? content:content + " 완료!"}</div>
            <div className="date_col">{new Date().toDateString()}</div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>        
    );
}

export default React.memo(TodoItem);