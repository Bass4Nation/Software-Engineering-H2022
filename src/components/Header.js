import style from "./styles/Header.module.css";
 
const Header = ({ title }) => {
  return (
    <div className={style.header}>
      <h1>{title}</h1> 

    </div>
  );
};

export default Header;
