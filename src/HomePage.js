import React from "react";
import "./HomePage.css";
import randomLogo from "./random_logo_by_criticl_d7eqdvw-pre.png";
export default function HomePage() {
  return (
    <div className="container">
      <div id="imgC">
        <img
          style={{ width: 500, height: 600 }}
          src={randomLogo}
          alt="somethingblank"
        />
      </div>
      <div id="textC">
        <h1> Welcome to ScuffCompetition</h1>

        <div className="Textbox">
          <p className="HomePageTextBox">
            <p>
              {" "}
              Scuff Compeition is based off an already popular game called Song
              Competition. Essentially, the game requires your Twitch Chat to
              send music in they listen too. You can set a limit on how many
              songs a single person can send and how many total songs can be
              sent.
            </p>
            <p>
              After that is done then the game can officially be started. Your
              dashboard will change to featuring two random songs. You have 120
              seconds to play the song for you twitch chat and by typing in 1s
              or 2s, they will vote which song they like. If a song has more 5
              or more likes, and it gets voted off, the song is not out, we
              still have the loser bracket in which they get to comepete one
              more time.
            </p>

            <p>
              The Game is a King of the Hill tournamet type setup, so if you are
              ready to play, press the button below to login with twitch!
            </p>
          </p>
        </div>
        <button> Create Game</button>
      </div>
    </div>
  );
}
