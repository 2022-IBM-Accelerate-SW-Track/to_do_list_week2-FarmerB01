import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/profile_pic.jpg"; 
  
export default class About extends Component {
  render() {
    return (
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src = {profile_pic_name}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Brendon Farmer</div>
            <div className="brief_description">
              I was born on May 14th, 2001. I live in Pearland, TX with my two siblings and parents.
              I go to Rice University and am majoring in Computer Science and Cognitive Science. I am
              interested in watching shows, movies, and anime. I also am a big video game guy who loves
              a good competive game. A fun fact about myself is that I actually experienced cancer at
              a very young age. I am henceforth in remission (okay). Super excited to see what this
              program brings! :D
            </div>
          </div>
        </div>
      </div> 
    )
  }
}