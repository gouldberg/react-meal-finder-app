// --------------------------------------------------------------------
// p.133
// --------------------------------------------------------------------
// const Recipe = (props) => {
//   return (
//     <>
//       {props.mealData.id && (
//         <div>
//           <h2>{props.mealData.name}</h2>
//           <p>
//             エリア<span>{props.mealData.area}</span>
//           </p>
//           <p>
//             カテゴリー<span>{props.mealData.category}</span>
//           </p>
//           <img src={props.mealData.img} alt="meal-image" />
//           <p>{props.mealData.instructions}</p>
//           <p>
//             ソース
//             <span>
//               <a href={props.mealData.source}>{props.mealData.source}</a>
//             </span>
//           </p>
//         </div>
//       )}
//     </>
//   );
// };

// export default Recipe;

// --------------------------------------------------------------------
// p.149:  css
// --------------------------------------------------------------------
// const Recipe = (props) => {
//   return (
//     <>
//       {props.mealData.id && (
//         <div className="recipe">
//           <h2>{props.mealData.name}</h2>
//           <p>
//             エリア<span>{props.mealData.area}</span>
//           </p>
//           <p>
//             カテゴリー<span>{props.mealData.category}</span>
//           </p>
//           <img src={props.mealData.img} alt="meal-image" />
//           <p>{props.mealData.instructions}</p>
//           <p>
//             ソース
//             <span>
//               <a href={props.mealData.source}>{props.mealData.source}</a>
//             </span>
//           </p>
//         </div>
//       )}
//     </>
//   );
// };

// export default Recipe;

// --------------------------------------------------------------------
// p.162:  useContext
// --------------------------------------------------------------------
// import { useContext } from "react";
// import { AppContext } from "../context";

// const Recipe = () => {
//   const contextValues = useContext(AppContext);
//   return (
//     <>
//       {contextValues.mealData.id && (
//         <div className="recipe">
//           <h2>{contextValues.mealData.name}</h2>
//           <p>
//             エリア<span>{contextValues.mealData.area}</span>
//           </p>
//           <p>
//             カテゴリー<span>{contextValues.mealData.category}</span>
//           </p>
//           <img src={contextValues.mealData.img} alt="meal-image" />
//           <p>{contextValues.mealData.instructions}</p>
//           <p>
//             ソース
//             <span>
//               <a href={contextValues.mealData.source}>
//                 {contextValues.mealData.source}
//               </a>
//             </span>
//           </p>
//         </div>
//       )}
//     </>
//   );
// };

// export default Recipe;

// --------------------------------------------------------------------
// final
// --------------------------------------------------------------------
import { useContext } from "react";
import { AppContext } from "../context";

const Recipe = () => {
  const contextValues = useContext(AppContext);
  return (
    <>
      {contextValues.mealData.id && (
        <div className="recipe">
          <h2>{contextValues.mealData.name}</h2>
          <p>
            エリア<span>{contextValues.mealData.area}</span>
          </p>
          <p>
            カテゴリー<span>{contextValues.mealData.category}</span>
          </p>
          <img src={contextValues.mealData.img} alt="meal-image" />
          <p>{contextValues.mealData.instructions}</p>
          <p>
            ソース
            <span>
              <a href={contextValues.mealData.source}>
                {contextValues.mealData.source}
              </a>
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default Recipe;
