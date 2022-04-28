import { createContext } from "react"; 

// 만약 null이 아닌 값을 넣으면, App.js에서 ThemeContext.Provider 태그를 전부 지우면 됨
export const ThemeContext = createContext(null);