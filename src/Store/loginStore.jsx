import { create } from "zustand";

export const useLoginStore = create((set) => ({
  isLogin: false,
  setIsLogin: (status) => {
    set((state) => {
      return { isLogin: status };
    });
  },
}));
