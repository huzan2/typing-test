import { atom } from "recoil";
import { UserInterface } from "../interface";

export const UserState = atom<UserInterface>({
  key: "UserState",
  default: {
    nickname: "익명",
    score: 0,
  },
});

export const TargetStringArray = atom<string[]>({
  key: "TargetStringArray",
  default: [],
});
