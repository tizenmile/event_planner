import style from "./home.module.css";
import category from "../../../public/category.svg";
import Image from "next/image";
import { event } from "../EventCard/eventData";

const Category = ({setSategorySortList, categorySortList}) => {

  const handleClick = (e) => {
    setSategorySortList(e.target.value)
  };
  const unique = [...new Set(event.map(item => item.category))]

  return (
    <div>
      <div className={style.categoryButton}>
        <Image src={category} alt={category} />
        <div className={style.categoryListDiv}>
          <ul className={style.categoryList}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                justifyContent: "center",
              }}
            >
              <p className={style.categoryHoverTitle}>{categorySortList ? categorySortList : "Category"}</p>
              <Image src={category} alt={category} />
            </div>
            {unique.map((e) => {
              return (
                <li className={style.categoryListItem} key={e}>
                  <button
                    className={style.categoryListButton}
                    onClick={(e) => handleClick(e)}
                    value={e}
                  >
                    {e}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
