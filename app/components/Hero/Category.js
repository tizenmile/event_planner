import style from './hero.module.css'
import category from '../../../public/category.svg'
import Image from 'next/image';
const Category = () => {
  return (
    <div>
      <button className={style.categoryButton}><Image src={category} alt="category"/></button>
    </div>
  );
};

export default Category;
