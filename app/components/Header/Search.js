import style from "../../page.module.css";
const Search = () => {
  return (
    <div>
      <input className={style.searchInput} placeholder="Search by keywords" />
    </div>
  );
};

export default Search;
