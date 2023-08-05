'use client'
import Image from "next/image";
import "./addNew.css";
import leftArrow from "../../../public/arrow-left.svg";

const AddNew = ({ toggle, addEvent }) => {

  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.target);
    const formDataObj = {}
    data.forEach((value, key) => (formDataObj[key] = value));
    addEvent(formDataObj)
  };

  return (
    <div>
      <button className="backButton" onClick={() => toggle()}>
        <Image src={leftArrow} alt="left arrow" />
        Back
      </button>
      <h2 className="newEventTitle">Create new event</h2>
      <div>
        <form className="addNewForm" onSubmit={(e) => handleSubmit(e)}>
          <div className="formDiv">
            <div className="inputDiv">
              <label className="label">Title</label>
              <input className="input" pattern="\w{3,16}" required name="title" />
            </div>
            <div className="inputDiv">
              <label className="label">Description</label>
              <input className="input inputDesc" name="description" />
            </div>
            <div className="inputDiv">
              <label className="label">Select date</label>
              <input className="input" type="date" name="date" />
            </div>
            <div className="inputDiv">
              <label className="label">Select time</label>
              <input className="input" type="time" name="time" />
            </div>
            <div className="inputDiv">
              <label className="label">Location</label>
              <input className="input" name="location" />
            </div>
            <div className="inputDiv">
              <label className="label">Category</label>
              <select
                className="input select"
                name="category"
                defaultValue={"Art"}
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
              <input disabled accept="image/*" className="input" name="picture" />
            </div>
            <div className="inputDiv">
              <label className="label">Priority</label>
              <select className="input select" name="priority">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
          <button className="buttonSubmit" type="submit">
            Add event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNew;
