import "./TodoItem.css";

function TodoItem({ id, content, isDone, createdDate, onUpdate, onDelete }) {

    function onChangeCheckbox() {
        onUpdate(id);
    }

    function onClickDelete() {
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input checked={isDone} type="checkbox" onChange={onChangeCheckbox}></input>
            </div>
            <div className="title_col">{isDone === false ? content:content + " 완료"}</div>
            <div className="date_col">{new Date(createdDate).toLocaleDateString()}</div>
            <div className="btn_col" onClick={onClickDelete}>
                <button>삭제</button>
            </div>
        </div>
    );
};

export default TodoItem;