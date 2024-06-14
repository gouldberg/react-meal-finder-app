// --------------------------------------------------------------------
// p.147:  routes
// --------------------------------------------------------------------
// import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
// import Form from "../components/Form";

// const Layout = (props) => {
//   return (
//     <div>
//       <div>
//         <Header />
//         <Form setMealName={props.setMealName} getMealData={props.getMealData} />
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;

// --------------------------------------------------------------------
// p.149:  css
// --------------------------------------------------------------------
// import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
// import Form from "../components/Form";

// const Layout = (props) => {
//   return (
//     <div className="mode-body">
//       <div className="container">
//         <Header />
//         <Form setMealName={props.setMealName} getMealData={props.getMealData} />
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;

// --------------------------------------------------------------------
// p.162:  useContext
// --------------------------------------------------------------------
// import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
// import Form from "../components/Form";

// const Layout = () => {
//   return (
//     <div className="mode-body">
//       <div className="container">
//         <Header />
//         <Form />
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;

// --------------------------------------------------------------------
// p.186:  dark mode
// --------------------------------------------------------------------
// import { useState, useEffect } from "react";
// import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
// import Form from "../components/Form";

// const Layout = () => {
//   const [theme, setTheme] = useState("light");

//   const saveTheme = (passedTheme) => {
//     window.localStorage.setItem("color-mode", passedTheme);
//     setTheme(passedTheme);
//   };

//   const handleThemeSwitch = () => {
//     theme === "light" ? saveTheme("dark") : saveTheme("light");
//   };

//   useEffect(() => {
//     const localTheme = window.localStorage.getItem("color-mode");
//     localTheme && setTheme(localTheme);
//   });

//   return (
//     <div
//       className="mode-body"
//       data-theme={theme === "light" ? "light" : "dark"}
//     >
//       <div className="container">
//         <Header />
//         <button onClick={handleThemeSwitch}>モード</button>
//         <Form />
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;

// --------------------------------------------------------------------
// p.190:  custom hook for dark mode
// --------------------------------------------------------------------
// import { Outlet } from "react-router-dom";
// import { useDarkMode } from "../hooks/useDarkMode";
// import Header from "../components/Header";
// import Form from "../components/Form";

// const Layout = () => {
//   const [theme, handleThemeSwitch] = useDarkMode();

//   return (
//     <div
//       className="mode-body"
//       data-theme={theme === "light" ? "light" : "dark"}
//     >
//       <div className="container">
//         <Header />
//         <button onClick={handleThemeSwitch}>モード</button>
//         <Form />
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;

// --------------------------------------------------------------------
// p.203:  searching
// --------------------------------------------------------------------
// import { Outlet } from "react-router-dom";
// import { useDarkMode } from "../hooks/useDarkMode";
// import Header from "../components/Header";
// import Form from "../components/Form";
// import History from "../components/History";

// const Layout = () => {
//   const [theme, handleThemeSwitch] = useDarkMode();

//   return (
//     <div
//       className="mode-body"
//       data-theme={theme === "light" ? "light" : "dark"}
//     >
//       <div className="container">
//         <Header />
//         <button onClick={handleThemeSwitch}>モード</button>
//         <Form />
//         <History />
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;

// --------------------------------------------------------------------
// p.221  conditional rendering
// --------------------------------------------------------------------
// import { useContext } from "react";
// import { AppContext } from "../context";
// import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
// import Form from "../components/Form";
// import History from "../components/History";
// import Button from "../components/Button";

// const Layout = () => {
//   const contextValues = useContext(AppContext);
//   return (
//     <div
//       className="mode-body"
//       data-theme={contextValues.theme === "light" ? "light" : "dark"}
//     >
//       <div className="container">
//         <Header />
//         <Button type="darkmode" />
//         <Button type="delete" />
//         <Form />
//         <History />
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;

// --------------------------------------------------------------------
// final
// --------------------------------------------------------------------
import { useContext } from "react";
import { AppContext } from "../context";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Form from "../components/Form";
import History from "../components/History";
import Button from "../components/Button";

const Layout = () => {
  const contextValues = useContext(AppContext);
  return (
    <div
      className="mode-body"
      data-theme={contextValues.theme === "light" ? "light" : "dark"}
    >
      <div className="container">
        <Header />
        <Button type="darkmode" />
        <Button type="delete" />
        <Form />
        <History />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
