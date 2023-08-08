import style from "./header.module.css";
import Language from "./Language";
import Search from "./Search";

const Header = ({setSearchInput}) => {
  return (
    <header className={style.header}>
      <div className={style.headerDiv}>
          <h2 className={style.headerTitle}>Event Planner</h2>
          <Search setSearchInput={setSearchInput}/>
          <Language />
      </div>
    </header>
  );
};

export default Header;
