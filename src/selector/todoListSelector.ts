import { selector } from "recoil";
import { todoListAtom, TodoType } from "../atoms/todoListAtom";

// 완료된 할 일 항목만 필터링하여 반환하는 selector
export const todoListSelector = selector<TodoType[]>({
  key: "todoListSelector",
  // todoListAtom의 상태가 변경될 때마다 자동으로 실행되어 필터링된 결과를 반환
  get: ({ get }) => {
    // todoListAtom에서 전체 할 일 목록을 가져옴
    const todos = get(todoListAtom);
    // completed가 true인 항목만 필터링하여 반환 (완료된 할 일만 선택)
    return todos.filter(item => item.completed === true);
  },
});
