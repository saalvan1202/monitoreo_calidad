import { create } from "zustand";
import axios from "axios";
import Password from "antd/es/input/Password";
import { jwtDecode } from "jwt-decode";
export const authStore = create((set) => ({
  tokens: localStorage.getItem("token") || null,
  user: null,
  login: async (token) => {
    const tokens = token;
    const user = jwtDecode(token);
    console.log(tokens, user);
    set({ tokens, user });
    localStorage.setItem("token", tokens);
  },
  logout: () => {
    set({ token: null, user: null });
    localStorage.removeItem("token");
  },
  loadUserFromToken: () => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      console.log("Esto es la función", user);
      set({ token, user });
    }
  },
}));
