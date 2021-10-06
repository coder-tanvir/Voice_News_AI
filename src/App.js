import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/Newscards/NewsCards";
import useStyles from "./styles.js";
import logo from "./ainews.png";

const App = () => {
  const classes = useStyles();
  const [articles, setarticles] = useState([]);
  const alankey =
    "75d47121f03cff0f8864709c87d41a7c2e956eca572e1d8b807a3e2338fdd0dc/stage";
  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command, articles }) => {
        if (command === "newheadlines") {
          setarticles(articles);
        }
      },
    });
  });

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to left top, #f28c1e, #ff7752, #ff6885, #ff6cb9, #f17ee8)",
      }}
    >
      <div className={classes.logoContainer}>
        <img
          src={logo}
          style={{
            height: "300px",
            width: "300px",
            borderRadius: "50%",
            marginTop: "10px",
            background: "#5E31A7",
            border: "none",
          }}
        />
      </div>
      <NewsCards articles={articles} />
    </div>
  );
};

export default App;
