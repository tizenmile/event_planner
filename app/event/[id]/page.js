"use client";
import { useRouter } from "next/navigation";
import "./editEvent.css";
import leftArrow from "@/public/arrow-left.svg";
import { event } from "@/app/components/EventCard/eventData";
import style from "./EventCard.module.css";
import Image from "next/image";
import { useState } from "react";

const EditEvent = ({ params }) => {
  const router = useRouter();
  const [openEditor, setOpenEditor] = useState(false);
  const {
    category,
    priority,
    image,
    time,
    date,
    location,
    title,
    description,
  } = event.find((e) => e?.id || 1 === Number(params?.id || 1));

  const toggle = () => {
    setOpenEditor(!openEditor);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formDataObj = {};
    data.forEach((value, key) => (formDataObj[key] = value));
    formDataObj.id = Number(params.id);
    formDataObj.image = image;
    event.forEach((o, i) => {
      if (o.id == params.id) event[i] = formDataObj;
    });
    toggle();
  };

  const handleDelete =() => {
    event.forEach((o, i) => {
      if (o.id == params.id) event.splice(i, 1);
    });
    router.push('/')
  }

  return (
    <div>
      {!openEditor ? (
        <div>
          <button className="backButton" onClick={() => router.push(`/`)}>
            <Image src={leftArrow} alt="left arrow" />
            Back
          </button>
          <h2 className={style.eventCardTitle}>{title}</h2>
          <div
            className={style.eventCardDiv}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className={style.eventCardDivDecs}>
              <div className={style.eventCardTitleDiv}>
                <h2 className={style.eventCardDescription}>{description}</h2>
                <div className={style.eventCategoryDiv}>
                  {/* <div className={style.eventCardTimeDiv}> */}
                  <p className={style.eventCategory}>{category}</p>
                  <p color_code={priority} className={style.eventCardPriority}>
                    {priority}
                  </p>
                  <p className={style.eventCardLocation}>{location}</p>
                  <p className={style.eventCardTime}>{date + " at " + time}</p>
                  {/* </div> */}
                </div>
                <div className={style.eventCardButtonDiv}>
                  <button
                    onClick={() => toggle()}
                    className={style.eventCardButtonEdit}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete()}
                    className={style.eventCardButtonDelete}
                  >
                    Delete event
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button className="backButton" onClick={() => toggle()}>
            <Image src={leftArrow} alt="left arrow" />
            Back
          </button>
          <h2 className="newEventTitle">Edit Event</h2>
          <div>
            <form className="addNewForm" onSubmit={(e) => handleSubmit(e)}>
              <div className="formDiv">
                <div className="inputDiv">
                  <label className="label">Title</label>
                  <input defaultValue={title} className="input" name="title" />
                </div>
                <div className="inputDiv">
                  <label className="label">Description</label>
                  <input
                    defaultValue={description}
                    className="input inputDesc"
                    name="description"
                  />
                </div>
                <div className="inputDiv">
                  <label className="label">Select date</label>
                  <input
                    defaultValue={date}
                    className="input"
                    type="date"
                    name="date"
                  />
                </div>
                <div className="inputDiv">
                  <label className="label">Select time</label>
                  <input
                    defaultValue={time}
                    className="input"
                    type="time"
                    name="time"
                  />
                </div>
                <div className="inputDiv">
                  <label className="label">Location</label>
                  <input
                    defaultValue={location}
                    className="input"
                    name="location"
                  />
                </div>
                <div className="inputDiv">
                  <label className="label">Category</label>
                  <select
                    className="input select"
                    name="category"
                    defaultValue={category}
                  >
                    <option value="Art">Art</option>
                    <option value="Music">Music</option>
                    <option value="Business">Business</option>
                    <option value="Conference">Conference</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Party">Party</option>
                    <option value="Sport">Sport</option>
                  </select>
                </div>
                <div className="inputDiv">
                  <label className="label">Add picture</label>
                  <input
                    disabled
                    accept="image/*"
                    className="input"
                    name="picture"
                  />
                </div>
                <div className="inputDiv">
                  <label className="label">Priority</label>
                  <select
                    className="input select"
                    name="priority"
                    defaultValue={priority}
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
              <button className="buttonSubmit" type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditEvent;
