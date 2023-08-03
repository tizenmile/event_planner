import style from './hero.module.css'
import sort from '../../../public/sort.svg'
import Image from 'next/image';
const Sort = () => {
  return (
    <div>
      <button className={style.sortButton}><Image src={sort} alt="category"/></button>
    </div>
  );
};

export default Sort;
