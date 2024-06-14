// --------------------------------------------------------------------
//
// --------------------------------------------------------------------
// import { useEffect, useState } from "react";

// export const useDarkMode = () => {
//   const [theme, setTheme] = useState("light");

//   const saveTheme = (passedTheme) => {
//     window.localStorage.setItem("color-mode", passedTheme);
//     setTheme(passedTheme);
//   };

//   const handleThemeSwitch = () => {
//     theme === "light" ? saveTheme("dark") : saveTheme("light");
//   };

//   useEffect(() => {
//     console.log("ダークモード実行");
//     const localTheme = window.localStorage.getItem("color-mode");
//     localTheme && setTheme(localTheme);
//   }, []);

//   return [theme, handleThemeSwitch];
// };

// --------------------------------------------------------------------
// final
// --------------------------------------------------------------------
import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const saveTheme = (passedTheme) => {
    window.localStorage.setItem("color-mode", passedTheme);
    setTheme(passedTheme);
  };

  const handleThemeSwitch = () => {
    theme === "light" ? saveTheme("dark") : saveTheme("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("color-mode");
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, handleThemeSwitch];
};
