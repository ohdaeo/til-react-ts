import { atom } from "recoil";

// Recoil atom을 사용하여 전역 상태 관리
// key: 해당 atom을 식별하는 고유한 문자열
// default: atom의 초기값을 0으로 설정
export const countAtom = atom<number>({
  key: "countAtom", // 다른 atom과 중복되지 않는 유니크한 키값
  default: 0, // 카운터의 초기값
});

export const loginAtom = atom<boolean>({
  key: "loginAtom",
  default: false,
});
