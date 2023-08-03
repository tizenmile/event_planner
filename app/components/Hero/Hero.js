"use client";
import { useState } from "react";
import EventCard from "../EventCard/EventCard";
import {event, addEventData } from "../EventCard/eventData";
import AddNewButton from "./AddNewButton";
import Category from "./Category";
import Sort from "./Sort";
import style from "./hero.module.css";
import AddNew from "../AddNewEvent/AddNew";

const Hero = () => {
  const [events, setEvents] = useState(event);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const addEvent = (data) => {
    setEvents(addEventData(data));
    toggle();
  };

  return (
    <div className={style.heroDiv}>
      {modal ? (
        <AddNew toggle={toggle} addEvent={addEvent} />
      ) : (
        <div>
          <div className={style.heroButtons}>
            <Category />
            <Sort />
            <AddNewButton toggle={toggle} />
          </div>
          <div className={style.eventCard}>
            {events
            .sort((a, b) => a.id > b.id ? -1 : 1)
            .map(
              ({
                id,
                category,
                priority,
                image,
                time,
                location,
                title,
                description,
              }) => (
                <EventCard
                  key={id}
                  category={category}
                  priority={priority}
                  image={image}
                  time={time}
                  location={location}
                  title={title}
                  description={description}
                />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
