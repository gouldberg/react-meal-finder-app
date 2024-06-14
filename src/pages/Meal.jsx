// --------------------------------------------------------------------
// p.143:  move Recipe component to Meal component
// --------------------------------------------------------------------
// import Recipe from "../components/Recipe";

// const Meal = (props) => {
//   return (
//     <>
//       <Recipe mealData={props.mealData} />
//     </>
//   );
// };

// export default Meal;

// --------------------------------------------------------------------
// p.163:  useContext
// --------------------------------------------------------------------
// import Recipe from "../components/Recipe";

// const Meal = () => {
//   return (
//     <>
//       <Recipe />
//     </>
//   );
// };

// export default Meal;

// --------------------------------------------------------------------
// p.169:  loading
// --------------------------------------------------------------------
// import { useContext } from "react";
// import { AppContext } from "../context";
// import Loading from "../components/Loading";
// import Recipe from "../components/Recipe";

// const Meal = () => {
//   const contextValues = useContext(AppContext);
//   return <>{contextValues.loading ? <Loading /> : <Recipe />}</>;
// };

// export default Meal;

// --------------------------------------------------------------------
// final
// --------------------------------------------------------------------
import { useContext } from "react";
import { AppContext } from "../context";
import Loading from "../components/Loading";
import Recipe from "../components/Recipe";

const Meal = () => {
  const contextValues = useContext(AppContext);
  return <>{contextValues.loading ? <Loading /> : <Recipe />}</>;
};

export default Meal;
