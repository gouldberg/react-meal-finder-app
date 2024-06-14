// --------------------------------------------------------------------
// p.118
// --------------------------------------------------------------------
// import Header from "./components/Header";
// import Form from "./components/Form";
// import Recipe from "./components/Recipe";

// import "./styles/App.css";

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Form />
//       <Recipe />
//     </div>
//   );
// };
// export default App;

// --------------------------------------------------------------------
// p.121
// --------------------------------------------------------------------
// import { useState } from "react";
// import Header from "./components/Header";
// import Form from "./components/Form";
// import Recipe from "./components/Recipe";

// import "./styles/App.css";

// const App = () => {
//   const [mealName, setMealName] = useState("");
//   const [mealData, setMealData] = useState({
//     id: "",
//     name: "",
//     instructions: "",
//     img: "",
//     source: "",
//     area: "",
//     category: "",
//   });

//   const getMealData = async (e) => {
//     e.preventDefault();
//     const response = await fetch(
//       `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
//     );
//     const jsonData = await response.json();
//     setMealData({
//       id: jsonData.meals[0].idMeal,
//       name: jsonData.meals[0].strMeal,
//       instructions: jsonData.meals[0].strInstructions,
//       img: jsonData.meals[0].strMealThumb,
//       source: jsonData.meals[0].strYoutube,
//       area: jsonData.meals[0].strArea,
//       category: jsonData.meals[0].strCategory,
//     });
//   };

//   return (
//     <div>
//       <Header />
//       <Form setMealName={setMealName} getMealData={getMealData} />
//       <Recipe mealData={mealData} />
//     </div>
//   );
// };
// export default App;

// --------------------------------------------------------------------
// p.143:  pages, routes, navigate
// --------------------------------------------------------------------
// import { useState } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import Header from "./components/Header";
// import Form from "./components/Form";
// import Recipe from "./components/Recipe";
// import Home from "./pages/Home";
// import Meal from "./pages/Meal";

// import "./styles/App.css";

// const App = () => {
//   const [mealName, setMealName] = useState("");
//   const [mealData, setMealData] = useState({
//     id: "",
//     name: "",
//     instructions: "",
//     img: "",
//     source: "",
//     area: "",
//     category: "",
//   });

//   const navigate = useNavigate();

//   const getMealData = async (e) => {
//     e.preventDefault();
//     const response = await fetch(
//       `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
//     );
//     const jsonData = await response.json();
//     setMealData({
//       id: jsonData.meals[0].idMeal,
//       name: jsonData.meals[0].strMeal,
//       instructions: jsonData.meals[0].strInstructions,
//       img: jsonData.meals[0].strMealThumb,
//       source: jsonData.meals[0].strYoutube,
//       area: jsonData.meals[0].strArea,
//       category: jsonData.meals[0].strCategory,
//     });
//     navigate(`/meal/${jsonData.meals[0].idMeal}`);
//   };

//   return (
//     <div>
//       <Header />
//       <Form setMealName={setMealName} getMealData={getMealData} />
//       <Routes>
//         {/* <Route path="/" element={<Home />} /> */}
//         <Route index element={<Home />} />
//         <Route path="/meal:id" element={<Meal mealData={mealData} />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

// --------------------------------------------------------------------
// p.146: apply layout
// --------------------------------------------------------------------
// import { useState } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import Layout from "./layout";
// import Home from "./pages/Home";
// import Meal from "./pages/Meal";

// import "./styles/App.css";

// const App = () => {
//   const [mealName, setMealName] = useState("");
//   const [mealData, setMealData] = useState({
//     id: "",
//     name: "",
//     instructions: "",
//     img: "",
//     source: "",
//     area: "",
//     category: "",
//   });

//   const navigate = useNavigate();

//   const getMealData = async (e) => {
//     e.preventDefault();
//     const response = await fetch(
//       `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
//     );
//     const jsonData = await response.json();
//     setMealData({
//       id: jsonData.meals[0].idMeal,
//       name: jsonData.meals[0].strMeal,
//       instructions: jsonData.meals[0].strInstructions,
//       img: jsonData.meals[0].strMealThumb,
//       source: jsonData.meals[0].strYoutube,
//       area: jsonData.meals[0].strArea,
//       category: jsonData.meals[0].strCategory,
//     });
//     navigate(`/meal/${jsonData.meals[0].idMeal}`);
//   };

//   return (
//     <div>
//       <Routes>
//         <Route
//           element={
//             <Layout setMealName={setMealName} getMealData={getMealData} />
//           }
//         >
//           <Route index element={<Home />} />
//           <Route path="/meal:id" element={<Meal mealData={mealData} />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// };
// export default App;

// --------------------------------------------------------------------
// p.163: context provider
// --------------------------------------------------------------------
// import { Routes, Route } from "react-router-dom";
// import ContextProvider from "./context";
// import Layout from "./layout";
// import Home from "./pages/Home";
// import Meal from "./pages/Meal";

// import "./styles/App.css";

// const App = () => {
//   return (
//     <ContextProvider>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="/meal:id" element={<Meal />} />
//         </Route>
//       </Routes>
//     </ContextProvider>
//   );
// };
// export default App;

// --------------------------------------------------------------------
// p.223: 404 not found
// --------------------------------------------------------------------
// import { Routes, Route } from "react-router-dom";
// import ContextProvider from "./context";
// import Layout from "./layout";
// import Home from "./pages/Home";
// import Meal from "./pages/Meal";

// import "./styles/App.css";

// const App = () => {
//   return (
//     <ContextProvider>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="/meal:id" element={<Meal />} />
//           <Route
//             path="*"
//             element={<h1>Not Found ヘッダーロゴをクリックしてください</h1>}
//           />
//         </Route>
//       </Routes>
//     </ContextProvider>
//   );
// };
// export default App;

// --------------------------------------------------------------------
// final
// --------------------------------------------------------------------
import { Routes, Route } from "react-router-dom";
import ContextProvider from "./context";
import Layout from "./layout";
import Home from "./pages/Home";
import Meal from "./pages/Meal";
import "./styles/App.css";

const App = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/meal/:id" element={<Meal />} />
          <Route
            path="*"
            element={<h1>Not Found ヘッダーロゴをクリックしてください</h1>}
          />
        </Route>
      </Routes>
    </ContextProvider>
  );
};

export default App;
