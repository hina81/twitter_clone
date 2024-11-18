import { Search } from "@mui/icons-material";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <Search className="widgets_searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>

      <div className="widgets_widgetContainer">
        <h2>いまどうしてる？</h2>
        {/*  ライブラリを追加・追記 */}
        <TwitterTweetEmbed tweetId={"1856260652190269500"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="YukioFPS"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https:..twitter.com/hina___9"}
          options={{ text: "#React.js勉強中", via: "hina___9" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
