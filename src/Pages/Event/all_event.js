const events = [
  {
    id: "1",
    date: "01",
    month: "sep 22",
    topic: "Orientation Session",
    text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs",
    topImage: "/images/bg1.png",
    color: "#ffd34e",
  },
  {
    id: "2",
    date: "02",
    month: "sep 22",
    topic: "Orientation Session",
    text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs",
    topImage: "/images/bg2.png",
    color: "#f27770",
  },
  {
    id: "3",
    date: "03",
    month: "sep 22",
    topic: "Orientation Session",
    text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs",
    topImage: "/images/bg3.png",
    color: "#3eaff4",
  },
  {
    id: "4",
    date: "04",
    month: "sep 22",
    topic: "Orientation Session",
    text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs",
    topImage: "/images/bg4.png",
    color: "#6ebb71",
  },
  {
    id: "5",
    date: "06",
    month: "sep 22",
    topic: "Orientation Session",
    text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs",
    topImage: "/images/bg2.png",
    color: "#f47169",
  },
  {
    id: "6",
    date: "06",
    month: "sep 22",
    topic: "Orientation Session",
    text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs",
    topImage: "/images/bg1.png",
    color: "#ffd34e",
  },
  {
    id: "7",
    date: "11",
    month: "jan 23",
    topic: "Orientation Session",
    text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs",
    topImage: "/images/bg1.png",
    color: "#ffd34e",
  },
  {
    id: "8",
    date: "12",
    month: "jan 23",
    topic: "Orientation Session",
    text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs",
    topImage: "/images/bg2.png",
    color: "#f27770",
  },
  {
    id: "9",
    date: "03",
    month: "jan 23",
    topic: "Orientation Session",
    text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs",
    topImage: "/images/bg3.png",
    color: "#3eaff4",
  },
  {
    id: "10",
    date: "04",
    month: "jan 23",
    topic: "Orientation Session",
    text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs",
    topImage: "/images/bg4.png",
    color: "#6ebb71",
  },
  {
    id: "11",
    date: "06",
    month: "jan 23",
    topic: "Orientation Session",
    text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs",
    topImage: "/images/bg2.png",
    color: "#f47169",
  },
  {
    id: "12",
    date: "06",
    month: "jan 23",
    topic: "Orientation Session",
    text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs",
    topImage: "/images/bg1.png",
    color: "#ffd34e",
  },
];

//Sorted the events array in ascending order of their time
events.sort((a, b) => new Date(a.date + a.month) - new Date(b.date + b.month));
export default events;
