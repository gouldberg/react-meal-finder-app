// --------------------------------------------------------------------
// p.82
// --------------------------------------------------------------------
// const Header = () => {
//   return <header>HEADER</header>;
// };

// export default Header;

// --------------------------------------------------------------------
// p.149
// --------------------------------------------------------------------
// import { Link } from "react-router-dom";
// import headerImg from "../assets/header-image.svg";

// const Header = () => {
//   return (
//     <header>
//       <Link to="/">
//         <img src={headerImg} alt="header-image" />
//       </Link>
//     </header>
//   );
// };

// export default Header;

// --------------------------------------------------------------------
// final
// --------------------------------------------------------------------
import { Link } from "react-router-dom";
import headerImg from "../assets/header-image.svg";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={headerImg} alt="header-image" />
      </Link>
    </header>
  );
};

export default Header;
