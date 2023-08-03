import style from "../../page.module.css";

const Language = () => {
  return (
    <div className={style.languageDiv}>
      <select defaultValue={'UA'} className={style.langSelect} style={{width: "100%", border: 'none'}} name="select">
            <option value="UA">UA</option>
            <option value="EN">EN</option>

      </select>


    </div>
  );
};

export default Language;
