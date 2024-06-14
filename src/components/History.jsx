// --------------------------------------------------------------------
// p.216:  searching
// --------------------------------------------------------------------
// import { useContext } from "react";
// import { AppContext } from "../context";

// const History = () => {
//   const contextValues = useContext(AppContext);

//   return (
//     <ul>
//       <button onClick={contextValues.handleDeleteHistory}>削除</button>
//       {contextValues.imgUrl.map((url, index) => (
//         <li key={index}>
//           <img src={url} alt="meal-image" />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default History;

// --------------------------------------------------------------------
// p.219:  conditional rendering
// --------------------------------------------------------------------
// import { useContext } from "react";
// import { AppContext } from "../context";

// const History = () => {
//   const contextValues = useContext(AppContext);

//   return (
//     <ul>
//       {contextValues.imgUrl.map((url, index) => (
//         <li key={index}>
//           <img src={url} alt="meal-image" />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default History;

// --------------------------------------------------------------------
// final
// --------------------------------------------------------------------
import { useContext } from "react";
import { AppContext } from "../context";

const History = () => {
  const contextValues = useContext(AppContext);
  return (
    <ul>
      {contextValues.imgUrl.map((url) => (
        <li key={url}>
          <img src={url} alt="meal-image" />
        </li>
      ))}
    </ul>
  );
};

export default History;
