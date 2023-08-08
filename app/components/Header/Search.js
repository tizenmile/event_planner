import style from './header.module.css';
const Search = ({setSearchInput}) => {

  return (
    // <div>
      <input className={style.searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder="Search by keywords" />
    // </div>
  );
};

export default Search;
