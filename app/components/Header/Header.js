import style from "../../page.module.css";
import Language from "./Language";
import Search from "./Search";

const Header = () => {
  return (
    <header>
      <div className={style.headerDiv}>
        <div className={style.headerGroup}>
          <h2 className={style.headerTitle}>Event Planner</h2>
          <Language />
        </div>
        <Search/>
      </div>
    </header>
  );
};

export default Header;
