import React from "react";
import Links from './Links'

function About(props) {
  console.log(props);
  const github = props.github;
  const linkedin = props.linkedin;
  let bio = null;
  if (props.bio && props.bio.trim() !== "") {
    bio = <p>{ props.bio }</p>
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      { bio }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links  
        github = { github }
        linkedin = { linkedin }
      />
    </div>
  );
}

export default About;
