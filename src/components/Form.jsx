// --------------------------------------------------------------------
// p.116
// --------------------------------------------------------------------
// import { useState } from "react";

// const Form = () => {
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
//     <form onSubmit={getMealData}>
//       <input
//         onChange={(e) => setMealName(e.target.value)}
//         type="text"
//         name="mealName"
//         placeholder="料理名を英語で入力"
//       />
//       <button>検索</button>
//     </form>
//   );
// };

// export default Form;

// --------------------------------------------------------------------
// p.123
// --------------------------------------------------------------------
// const Form = (props) => {
//   return (
//     <form onSubmit={props.getMealData}>
//       <input
//         onChange={(e) => props.setMealName(e.target.value)}
//         type="text"
//         name="mealName"
//         placeholder="料理名を英語で入力"
//       />
//       <button>検索</button>
//     </form>
//   );
// };

// export default Form;

// --------------------------------------------------------------------
// p.161:  useContext
// --------------------------------------------------------------------
// import { useContext } from "react";
// import { AppContext } from "../context";

// const Form = () => {
//   const contextValues = useContext(AppContext);
//   return (
//     <form onSubmit={contextValues.getMealData}>
//       <input
//         onChange={(e) => contextValues.setMealName(e.target.value)}
//         type="text"
//         name="mealName"
//         placeholder="料理名を英語で入力"
//       />
//       <button>検索</button>
//     </form>
//   );
// };

// export default Form;

// --------------------------------------------------------------------
// p.170:  loading
// --------------------------------------------------------------------
// import { useContext } from "react";
// import { AppContext } from "../context";

// const Form = () => {
//   const contextValues = useContext(AppContext);
//   return (
//     <form onSubmit={contextValues.getMealData}>
//       <input
//         onChange={(e) => contextValues.setMealName(e.target.value)}
//         type="text"
//         name="mealName"
//         placeholder="料理名を英語で入力"
//         value={contextValues.mealName}
//       />
//       <button>検索</button>
//     </form>
//   );
// };

// export default Form;

// --------------------------------------------------------------------
// p.219:  conditional rendering
// --------------------------------------------------------------------
// import { useContext } from "react";
// import { AppContext } from "../context";
// import Button from "./Button";

// const Form = () => {
//   const contextValues = useContext(AppContext);
//   return (
//     <form onSubmit={contextValues.getMealData}>
//       <input
//         onChange={(e) => contextValues.setMealName(e.target.value)}
//         type="text"
//         name="mealName"
//         placeholder="料理名を英語で入力"
//         value={contextValues.mealName}
//       />
//       <Button type="search" />
//     </form>
//   );
// };

// export default Form;

// --------------------------------------------------------------------
// final
// --------------------------------------------------------------------
import { useContext } from "react";
import { AppContext } from "../context";
import Button from "./Button";

const Form = () => {
  const contextValues = useContext(AppContext);
  return (
    <form onSubmit={contextValues.getMealData}>
      <input
        onChange={(e) => contextValues.setMealName(e.target.value)}
        type="text"
        name="mealName"
        placeholder="料理名を英語で入力"
        value={contextValues.mealName}
      />
      <Button type="search" />
    </form>
  );
};

export default Form;
