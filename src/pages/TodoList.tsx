import { ReactNode, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoListAtom } from "../atoms/todoListAtom";
import { todoListSelector } from "../selector/todoListSelector";

interface TodoListProps {
  children?: ReactNode;
}

const TodoList: React.FC<TodoListProps> = () => {
  // todos 상태와 업데이트 함수를 Recoil atom에서 가져옴
  const [todos, setTodos] = useRecoilState(todoListAtom);
  // 입력 필드의 값을 관리하는 상태
  const [value, setValue] = useState<string>("");
  const completedTodo = useRecoilValue(todoListSelector);

  // 새로운 할 일을 추가하는 함수
  const addTodo = () => {
    if (value.trim()) {
      // 빈 문자열이 아닐 경우에만 새로운 할 일 추가
      setTodos([...todos, { id: Date.now(), text: value, completed: false }]);
    }
    setValue(""); // 입력 필드 초기화
  };

  // 할 일의 완료 상태를 토글하는 함수
  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  // 할 일을 삭제하는 함수
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        {/* 할 일 입력 폼 */}
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          name=""
          id=""
        />
        <button onClick={() => addTodo()}>추가 †</button>

        {/* 할 일 목록 */}
        <ul>
          {todos.map(item => (
            <li key={item.id} style={{ display: "flex", alignItems: "center" }}>
              {/* 할 일 텍스트 - 클릭하면 완료 상태 토글 */}
              <p
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
                onClick={() => toggleTodo(item.id)}
              >
                {item.text}
              </p>
              {/* 삭제 버튼 */}
              <button
                onClick={() => {
                  deleteTodo(item.id);
                }}
              >
                삭제 ♤
              </button>
            </li>
          ))}
        </ul>
      </div>
      <h2> 완료된 목록들</h2>
      <ul>
        {completedTodo.map(item => (
          <li>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
