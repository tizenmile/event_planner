import style from './home.module.css'
import sort from '../../../public/sort.svg'
import Image from 'next/image';
const Sort = () => {
  return (
    <div>
      <button className={style.sortButton}><Image src={sort} alt="category"/></button>
      <div className={style.sortListDiv}>
          
          <ul className={style.categoryList}>
          <div style={{display: "flex", alignItems: "center", backgroundColor: "white", justifyContent: "center"}}>
            <p className={style.categoryHoverTitle}>Category</p>
          <Image src={sort} alt={sort} />
          </div>
            <li className={style.categoryListItem}>
              <button
                className={style.categoryListButton}
                onClick={(e) => handleClick(e)}
              >
                Art
              </button>
            </li>
            <li className={style.categoryListItem}>
              <button className={style.categoryListButton}>Music</button>
            </li>
            <li className={style.categoryListItem}>
              <button className={style.categoryListButton}>Business</button>
            </li>
            <li className={style.categoryListItem}>
              <button className={style.categoryListButton}>Conference</button>
            </li>
            <li className={style.categoryListItem}>
              <button className={style.categoryListButton}>Workshop</button>
            </li>
            <li className={style.categoryListItem}>
              <button className={style.categoryListButton}>Party</button>
            </li>
            <li className={style.categoryListItem}>
              <button className={style.categoryListButton}>Sport</button>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Sort;
