import image from "../../../public/Rectangle330.png";
const event = [
  {
    id: 1,
    category: "art",
    priority: "High",
    image: image.src,
    time: "12:00",
    date: "2023-07-22",
    location: "kyiv",
    title: "Galery Opening",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 2,
    category: "art",
    priority: "Low",
    image: image.src,
    time: "12:00",
    date: "2023-07-22",
    location: "kyiv",
    title: "Galery Opening",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 3,
    category: "art",
    priority: "Medium",
    image: image.src,
    time: "12:00",
    date: "2023-07-22",
    location: "kyiv",
    title: "Galery Opening",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 4,
    category: "art",
    priority: "Medium",
    image: image.src,
    time: "12:00",
    date: "2023-07-22",
    location: "kyiv",
    title: "Galery Opening",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 5,
    category: "art",
    priority: "Medium",
    image: image.src,
    time: "12:00",
    date: "2023-07-22",
    location: "kyiv",
    title: "Galery Opening",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 6,
    category: "art",
    priority: "Medium",
    image: image.src,
    time: "12:00",
    date: "2023-07-22",
    location: "kyiv",
    title: "Galery Opening",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 7,
    category: "art",
    priority: "Medium",
    image: image.src,
    time: "12:00",
    date: "2023-07-22",
    location: "kyiv",
    title: "Galery Opening",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];
const addEventData = (data) => {
  if (!data) {
    return event;
  } else {
      data.id = Object.keys(event).length + 1;
      data.image = 'https://picsum.photos/200/300'
    event.push(data);
    console.log(event);
    return event;
  }
};

const editEvent = (data) => {
    event.forEach(e=> {
        if(data.id === e.id) {
            e = data
        }
    })
}

export {event, addEventData, editEvent};
