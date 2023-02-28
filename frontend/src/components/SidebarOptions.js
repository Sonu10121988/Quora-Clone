import React from "react";
import "../css/SidebarOptions.css";

function SidebarOptions() {
  const List = [
    {
      image:
        "https://media.istockphoto.com/id/1092170968/vector/open-book-with-history-doodles-and-lettering.jpg?s=612x612&w=0&k=20&c=SvXn0O25eHC8ARjwlcn83kahxjMGl2ti_DDFGozBKqg=",
      likes: "History",
    },
    {
      image: "https://m.media-amazon.com/images/I/51ecN8NP9rL.jpg",
      likes: "Psychology",
    },
    {
      image: "https://m.media-amazon.com/images/I/71hu5APlj5L.jpg",
      likes: "Cooking",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/416/416/jtvtz0w0/book/8/6/7/my-music-book-original-imaff48dsgkqqv4h.jpeg?q=70",
      likes: "Music",
    },
    {
      image:
        "https://media.wiley.com/product_data/coverImage300/55/11195906/1119590655.jpg",
      likes: "Science",
    },
    {
      image:
        "https://media.springernature.com/full/springer-static/cover-hires/book/978-3-319-02600-8",
      likes: "Technology",
    },
    {
      image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2395212.jpg",
      likes: "Education",
    },
  ];
  return (
    <div className="sidebarOptions">
      <p className="text"> + Discover Spaces</p>
      {List.map((e) => {
        return (
          <div className="sidebarList">
            <img src={e.image} alt="book" />
            <p>{e.likes}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SidebarOptions;
