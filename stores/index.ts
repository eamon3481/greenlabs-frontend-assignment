import { atom } from "recoil";

export type User = {
  id: string;
  name: string;
};

export const userAtom = atom<User | null>({
  key: "userAtom",
  default: null,
});
