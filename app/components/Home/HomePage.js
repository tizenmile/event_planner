"use client";
import { useState } from "react";
import EventCard from "../EventCard/EventCard";
import {event, addEventData } from "../EventCard/eventData";
import AddNewButton from "./AddNewButton";
import Category from "./Category";
import Sort from "./Sort";
import style from "./home.module.css";
import AddNew from "../AddNewEvent/AddNew";
import { useRouter } from 'next/navigation'
import Header from "../Header/Header";

const HomePage = () => {
  const router = useRouter()
  const [events, setEvents] = useState(event);
  const [openAddNewEvent, setOpenAddNewEvent] = useState(false);
  const [categorySortList, setSategorySortList] = useState("");
  const [searchInput, setSearchInput] = useState('')
  const toggle = () => setOpenAddNewEvent(!openAddNewEvent);

  const addEvent = (data) => {
    setEvents(addEventData(data));
    toggle();
  };



  return (
    <div className={style.heroDiv}>
      <Header setSearchInput={setSearchInput}/>
      {openAddNewEvent ? (
        <AddNew toggle={toggle} addEvent={addEvent} />
      ) : (
        <div>
          <div className={style.heroButtons}>
            <Category setSategorySortList={setSategorySortList} categorySortList={categorySortList} />
            <Sort />
            <AddNewButton toggle={toggle} />
          </div>
          <div className={style.eventCard}>
            {events
            .sort((a, b) => a.id > b.id ? -1 : 1)
            .filter((item, index, array) => categorySortList ? item.category === categorySortList : array)
            .filter((item, index,array)=> searchInput ? item.title.toLowerCase().includes(searchInput.toLowerCase()) : array)
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
                date
              }) => (
                <EventCard
                  key={id}
                  id={id}
                  category={category}
                  priority={priority}
                  image={image}
                  time={time}
                  location={location}
                  title={title}
                  description={description}
                  date={date}
                  // editEvent={editEvent}
                />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
