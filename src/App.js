import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/Newscards/NewsCards";

function App() {
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
    <div>
      <h1>Alan Ai news</h1>
      <NewsCards articles={articles} />
    </div>
  );
}

export default App;
