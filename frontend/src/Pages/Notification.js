import React from "react";
import "../css/Notification.css";

const Notification = () => {
  let filterList = [
    "All Notifications",
    "Stories",
    "Questions",
    "Spaces",
    "People updates",
    "Comments and mentions",
    "Upvotes",
    "Your content",
    "Your Profile",
    "Announcements",
    "Earnings",
    "Subscriptions",
  ];
  return (
    <div className="main_container">
      <div className="container">
        <div className="left_side">
          <h5>Filters</h5>
          <hr />

          {filterList.map((e) => (
            <div
              className={({ isActive, isPending }) =>
                isActive ? "red" : "black"
              }
            >
              <div className="items">{e}</div>
            </div>
          ))}
        </div>
        <div className="middle">
          <h5 style={{ textAlign: "center" }}>Notifications</h5>
          <hr />
          <div className="icon-message">
            <img
              src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.no_notification_lightmode.png-26-9e0ef76620dd73d3.png"
              alt=""
            />
            <h5>No New Notifications</h5>
            <p>
              Notifications you received in the last 30 days will show up here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
