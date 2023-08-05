import style from "./home.module.css";
import category from "../../../public/category.svg";
import Image from "next/image";
import arrow from "@/public/arrow-up-small.svg";
import { useState } from "react";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(false);

  const handleClick = (e) => {

    // setSelectedCategory(!selectedCategory)
  };

  return (
    <div>
      <div className={style.categoryButton}>
        <Image src={category} alt={category} />
        <div className={style.categoryListDiv}>
          
          <ul className={style.categoryList}>
          <div style={{display: "flex", alignItems: "center", backgroundColor: "white", justifyContent: "center"}}>
            <p className={style.categoryHoverTitle}>Category</p>
          <Image src={category} alt={category} />
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
    </div>
  );
};

export default Category;
