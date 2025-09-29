import { useRef, useState } from "react";
import "./TodoEditor.css";

function TodoEditor({onCreate}) {

    const [content, setContent] = useState("");
    const inputRef = useRef();

    function onChangeContent(e) {
        setContent(e.target.value );
    }
    function onSubmit () {
        if(!content) { // 빈칸으로 입력되면
            alert("내용입력");
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent(""); // 입력창 초기화
    }

    function onKeyDown(e) {
        if(e.keyCode === 13) { // Enter 키 누르면
            onSubmit();
        }
    }

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✏️</h4>
            <div className="editor_wrapper">
                <input ref={inputRef} value={content} onKeyDown={onKeyDown} onChange={onChangeContent} placeholder="새로운 Todo..."></input>
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}

export default TodoEditor;