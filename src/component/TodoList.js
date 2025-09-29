import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

function TodoList({todo , onUpdate}) {

    const [search, setSearch] = useState("");

    function onChangeSearch(e) {
        setSearch(e.target.value);
    }

    // 검색어 필터링 함수
    function getSearchResult() {
        if(search === "") {
            return todo;
        } else {
            return todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
        }
    }



    return (
        <div className="TodoList">
            <h4>Todo List 🌱</h4>
            <input className="searchbar" value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
            <div className="list_wrapper">
                {/* for문 형태로 찍어줘야 함 */}
                {getSearchResult().map((it) => (
                    <div>
                        <TodoItem key={it.id} {...it} onUpdate={onUpdate}/>
                        {/* {id, content, isDone, createdDate} -> TodoItem 컴포넌트에 전달 */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoList;