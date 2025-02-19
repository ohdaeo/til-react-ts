import { TodoType } from "../../types/todo";
import axios from "axios";

const todoURL = "https://jsonplaceholder.typicode.com/todos/";

type TodoType2 = Omit<TodoType, "id">;

// 1개 호출
const getTodo = async (id: number): Promise<TodoType | null> => {
  try {
    const res = await axios.get<TodoType>(`${todoURL}${id}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

// 여러개 호출

const getTodos = async (): Promise<TodoType[] | null> => {
  try {
    const res = await axios.get<TodoType[]>(todoURL);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// 자료 1개 추가
const postTodo = async ({
  userId,
  title,
  completed,
}: TodoType): Promise<TodoType | null> => {
  try {
    const res = await axios.post<TodoType>(todoURL, {
      userId,
      title,
      completed,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// 자료 1개 업데이트
const putTodo = async ({
  userId,
  id,
  title,
  completed,
}: TodoType): Promise<TodoType | null> => {
  try {
    const res = await axios.put<TodoType>(todoURL, {
      userId,
      id,
      title,
      completed,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// 자료 1개 중 일부분을 업데이트
const patchTodo = async ({
  completed,
  userId,
  title,
  id,
}: TodoType): Promise<TodoType | null> => {
  try {
    const res = await axios.patch<TodoType>(todoURL, {
      completed,
      userId,
      title,
      id,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// 삭제
const deleteTodo = async (id: number): Promise<boolean> => {
  try {
    const res = await axios.delete(`todoURL, ${id}`);
    console.log(res.data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { getTodo, getTodos, postTodo, putTodo, patchTodo, deleteTodo };
