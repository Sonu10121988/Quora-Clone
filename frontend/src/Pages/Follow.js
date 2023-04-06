import React from "react";
import Sidebar from "../components/Sidebar";
import "../css/Sidebar.css";
import "../css/Follow.css";

function Following() {
  let spaces = [
    {
      logo: "https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/M5A2H%402x.jpg?d=500x500&f=inside",
      name: "Communication Skills",
      followers: "60.0k follower",
      decription: "Shair your experience to deal with people",
    },
    {
      logo: "https://i.natgeofe.com/k/715d847d-ea41-48a3-b3e4-fbaf067a7e7e/brain_4x3.jpg",
      name: "How To Use The Brain",
      followers: "100.0k follower",
      decription: "Psychology, Motivation, selfHelped",
    },
    {
      logo: "https://ih1.redbubble.net/image.4645193321.0183/st,small,507x507-pad,600x600,f8f8f8.jpg",
      name: "ChatGPT Community",
      followers: "10k follower",
      decription: "The space is focused on discussing & sharing knowledge about ChatGPT",
    },
  ];
  return (
    <div className="follow_container">
      <div className="follow_mainContainer">
        <div className="leftside_follow">
          <Sidebar />
        </div>
        <div className="discover-spaces">
          <div className="upper-discover">
            <div>
              <img
                src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.build_following_feed_lightmode.png-26-cc59fbc57541079b.png"
                alt=""
              />
              <div>
                <h5>Build your new following feed</h5>
              </div>
              <div>
                <p>
                  Follow some Spaces to start discovering stories in your feed.
                </p>
              </div>
            </div>
          </div>
          <div className="lower-discover ">
            <h4 className="mx-3 mt-2">Discover Spaces</h4>
            <h6 className="mx-3 mt-1">Spaces you might like</h6>
            <hr />
            <div
              className="discover-space-wrapper"
              style={{ flexDirection: "column" }}
            >
              {spaces.map((e) => (
                <div
                  style={{ display: "flex" }}
                  className="discover-space-comp"
                >
                  <div className="left-logo-wrapper">
                    <img src={e.logo} alt="" />
                  </div>
                  <div className="right-content-wrapper">
                    <span className="company-name">{e.name}</span>
                    <span>{e.followers}</span>
                    <span>{e.decription}</span>
                    <hr />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Following;
