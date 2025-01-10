import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SKILLS } from "./skills";

function App() {
  return (
    <div className="card">
      <Avatar image="cassau.jpeg" alt="Rafael Cassau" />
      <div className="data">
        <Intro
          name="Rafael Cassau"
          description="Full-stack developer with more than 12 years of experience!"
        />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar({ image, alt }) {
  return (
    <div className="avatar">
      <img className="avatar" src={image} alt={alt} />
    </div>
  );
}

function Intro({ name, description }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {SKILLS.map((skill) => (
        <Skill skill={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  const style = {
    backgroundColor: skill.color,
  };
  const emoji = {
    beginner: "👶",
    intermediate: "👍",
    advanced: "💪",
  };
  const emoji_level = emoji[skill.level.toLowerCase()];
  return (
    <div className="skill" style={style}>
      <span>{skill.skill}</span>
      <span>{emoji_level}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
