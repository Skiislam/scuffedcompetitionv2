import React from "react";
import './HomePage.css';
import randomLogo from './random_logo_by_criticl_d7eqdvw-pre.png';
export default function HomePage() {


    return(

        <div className="container">
            <div id="imgC">
            <img style={{ width: 500, height: 600 }} src={randomLogo} alt='somethingblank'/>
            </div>
            <div id="textC">
                <h1> Welcome to ScuffCompetition</h1>
                <p> This project has been scuffed off of Song Stream, who originally created this game.</p>
                <p>And I have decided to create a clone while also making it as scuffed as humanly possible</p>
                <p>Simply this game allows your twitch viewers to recommend a song, depending on the number of your choosing</p>
                <p> Then through the chat they can vote which song they like better by typing 1 or 2. This is a kings of the hill</p>
                <p> Where songs that have the least skips wins and you can probably award the person that recommended that song I dont know</p>
                <p> about that feature but oh well. Anyways please login below to give twitch access, you won't be hacked!</p>
                <button> Click here!!</button>

            </div>
    </div>


    );

}
