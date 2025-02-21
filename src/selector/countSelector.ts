import { selector } from "recoil";
import { countAtom } from "../atoms/countAtoms";

// countAtom의 값이 짝수인지 홀수인지 반환하는 selector
export const countSelector = selector<string>({
  key: "countSelector",
  // atoms의 값이 변경될 때마다 자동으로 get 함수가 실행되어 새로운 값을 계산
  get: ({ get }) => {
    // countAtom의 현재 값을 가져옴
    const count = get(countAtom);
    // 2로 나눈 나머지가 0이면 "짝수", 아니면 "홀수" 반환
    return count % 2 == 0 ? "짝수" : "홀수";
  },
});
