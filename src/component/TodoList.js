import "./TodoList.css";
import TodoItem from "./TodoItem";

function TodoList({todo}) {

    return (
        <div className="TodoList">
            <h4>Todo List 🌱</h4>
            <input className="searchbar" placeholder="검색어를 입력하세요" />
            <div className="list_wrapper">
                {/* for문 형태로 찍어줘야 함 */}
                {todo.map((it) => (
                    <div>
                        <TodoItem {...it} />
                        {/* {id, content, isDone, createdDate} -> TodoItem 컴포넌트에 전달 */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoList;