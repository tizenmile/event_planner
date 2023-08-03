import style from "./EventCard.module.css";

const EventCard = ({
  category = "art",
  priority = "high",
  image = "",
  time = "12.07 at 12:00",
  location = "Kyiv",
  title = "Galery Opening",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
}) => {
  return (
    <div >
      <div
        className={style.eventCardDiv}
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* <Image className={style.eventCardImage} src={image} alt="image" /> */}
        <div className={style.eventCategoryDiv}>
          <p className={style.eventCategory}>{category}</p>
          <p color_code={priority} className={style.eventCardPriority}>
            {priority}
          </p>
        </div>
        <div className={style.eventCardDivDecs}>
          <div className={style.eventCardTimeDiv}>
            <p className={style.eventCardTime}>{time}</p>
            <p className={style.eventCardLocation}>{location}</p>
          </div>
          <div className={style.eventCardTitleDiv}>
            <h2 className={style.eventCardTitle}>{title}</h2>
            <h2 className={style.eventCardDescription}>{description}</h2>
            <div className={style}>
              <button className={style.eventCardButton}>More info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
