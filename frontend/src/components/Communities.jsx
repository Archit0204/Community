import React, { useState } from "react";
import "../css/Communities.css";
import PostNav from "../components/PostNav";
import Posts from "../components/Posts";
import Navbar from "./Navbar";

export default () => {
  // State to hold the current community heading
  const [currentHeading, setCurrentHeading] = useState("Top Posts");

  // Handler function to change the heading
  const handleCommunityClick = (communityName) => {
    setCurrentHeading(communityName);
  };

  return (
    <div>
      <Navbar heading="Communities" />
      <div className="main_communities flex flex-row">
        <div className="w-full h-fit">
          <div className="community_page">
            <div className="communitylistHeading" onClick={() => handleCommunityClick("Top Posts")}>List of Communities</div>
            <div
              className="communitylistItems communitylistItem1"
              onClick={() => handleCommunityClick("SPORTS")}
            >
              SPORTS
            </div>
            <div
              className="communitylistItems communitylistItem2"
              onClick={() => handleCommunityClick("TECHNOLOGY")}
            >
              TECHNOLOGY
            </div>
            <div
              className="communitylistItems communitylistItem3"
              onClick={() => handleCommunityClick("ARTS")}
            >
              <h2>A</h2>
              <h2>R</h2>
              <h2>T</h2>
            </div>
            <div
              className="communitylistItems communitylistItem4"
              onClick={() => handleCommunityClick("TRAVEL")}
            >
              TRAVEL
            </div>
            <div
              className="communitylistItems communitylistItem5"
              onClick={() => handleCommunityClick("ENTERTAINMENT")}
            >
              ENTERTAINMENT
            </div>
            <div
              className="communitylistItems communitylistItem6"
              onClick={() => handleCommunityClick("GAMES")}
            >
              GAMES
            </div>
            <div
              className="communitylistItems communitylistItem7"
              onClick={() => handleCommunityClick("NATURE")}
            >
              NATURE
            </div>
            <div
              className="communitylistItems communitylistItem8"
              onClick={() => handleCommunityClick("INNOVATION")}
            >
              INNOVATION
            </div>
          </div>
          {/* Pass the currentHeading as selectedCommunity */}
          <Posts heading={currentHeading} selectedCommunity={currentHeading} />
        </div>
        <PostNav />
      </div>
    </div>
  );
};
