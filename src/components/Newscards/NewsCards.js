import React from "react";
import { Grid, Grow, Typograpghy, Typography } from "@material-ui/core";
import NewsCard from "../NewsCard/NewsCard";
import classNames from "classnames";
import useStyles from "./styles";
const infoCards = [
  {
    color: "#00838f",
    title: "Latest News",
    info: "Displays the latest headlines based on the country U.S.A",
    text: "Give me the latest news,Give me the Latest Headlines",
  },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news,Tell me latest new on Sports",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Android, Adidas, Nike...",
    text: "What's up with PlayStation 5, Whats going on with iPhones ",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: " Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from BBC-news",
  },
];
const NewsCards = ({ articles }) => {
  const classes = useStyles();
  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid item xs={2} sm={4} md={4} lg={4} className={classes.infocard}>
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography
                  variant="h5"
                  style={{ color: "coral", fontWeight: "bolder" }}
                >
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography variant="h6">
                    <strong>{infoCard.title.split(" ")[2]}</strong>
                    <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6" style={{ color: "chartreuse" }}>
                  Try saying: <br />
                  <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }
  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
