import './App.css';
import Header from "./component/Header"
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import { useState, useRef } from 'react';

function App() {

  const mockTodo = [
    {
      id:0,
      isDone: false,
      content: "React 공부하기",
      createdDate: new Date().getTime(),
    },
    {
      id:1,
      isDone: false,
      content: "빨래 널기",
      createdDate: new Date().getTime(),
    },
    {
      id:2,
      isDone: false,
      content: "노래 연습하기",
      createdDate: new Date().getTime(),
    },
  ];

  const [todo, setTodo] = useState(mockTodo);

  const idRef = useRef(3); // 초기값 3

  function onCreate(content) {
    const newItem = {
      id: idRef.current, // 현재 저장하고 있는 값을 불러옴
      isDone: false,
      content,
      createdDate: new Date().getTime()
    };
    setTodo([newItem, ...todo]);
    idRef.current++;
  };

  function onUpdate(targetId) {
    setTodo(
    todo.map((it) => {
      // 할일 아이템을 반복하다가 들어온 targetId와 현재 읽고 있는 할일 아이템의 id가 일치하면 참
      if(it.id === targetId) {
        return {
          ...it, isDone : !it.isDone
        };
      } else {
        return it;
      }
    })
    );
  }

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate}/>
    </div>
  );
}

export default App;
