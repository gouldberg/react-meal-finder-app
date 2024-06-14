// --------------------------------------------------------------------
// p.XXX
// --------------------------------------------------------------------
// const Home = () => {
//   return <h3>今夜のレシピをみつけよう</h3>;
// };

// export default Home;

// --------------------------------------------------------------------
// p.168:  loading
// --------------------------------------------------------------------
// import { useContext } from "react";
// import { AppContext } from "../context";
// import Loading from "../components/Loading";

// const Home = () => {
//   const contextValues = useContext(AppContext);
//   return (
//     <>
//       <h3>今夜のレシピをみつけよう</h3>
//       {contextValues.loading && <Loading />}
//     </>
//   );
// };

// export default Home;

// --------------------------------------------------------------------
// final
// --------------------------------------------------------------------
import { useContext } from "react";
import { AppContext } from "../context";
import Loading from "../components/Loading";

const Home = () => {
  const contextValues = useContext(AppContext);
  return (
    <>
      <h3>今夜のレシピをみつけよう</h3>
      {contextValues.loading && <Loading />}
    </>
  );
};

export default Home;
