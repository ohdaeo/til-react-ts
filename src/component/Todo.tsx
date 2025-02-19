import { MouseEvent, ReactNode, useState } from "react";
import { getTodo, getTodos } from "../apis/todos/apitodos";
import { TodoType } from "../types/todo";

interface TodoProps {
  children?: ReactNode;
}

const Todo = (peops: TodoProps): JSX.Element => {
  const [detail, setDetail] = useState<TodoType | null>(null);

  const onTodo = async () => {
    const data = await getTodo(3);

    // 타입 좁히기 (타입가드)
    if (data) {
      // const data: TodoType
      console.log(data);
      console.log(data.id);
      setDetail(data);
    } else {
      console.log("자료가 없습니다.");
    }
  };

  const [todos, setTodos] = useState<TodoType[]>([]);

  const allTodo = async () => {
    const data = await getTodos();

    if (data) {
      console.log(data);
      setTodos(data);
    } else {
      console.log(data);
    }
  };

  return (
    <>
    
      <button onClick={onTodo}>1개 출력 ♤ </button>
      <button onClick={allTodo}>전부 출력 ♧ </button>
      <button>추가 † </button>
      <button>전체 수정 £ </button>
      <button>일부 수정 ¢</button>
      <button>삭제 ♤</button>
    </>
  );
};

export default Todo;
