import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

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

function Avatar(props) {
  return (
    <div className="avatar">
      <img className="avatar" src={props.image} alt={props.alt} />
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill name="HTML+CSS" color="#ADD8E6" emoji_level="👶" />
      <Skill name="JavaScript" color="#FFFFE0" emoji_level="👶" />
      <Skill name="React" color="#ADD8E6" emoji_level="👶" />
      <Skill name="Linux" color="#90EE90" emoji_level="👍" />
      <Skill name="AWS" color="#FFA07A" emoji_level="👍" />
      <Skill name="Python" color="#FF6347" emoji_level="💪" />
      <Skill name="Django" color="#9370DB" emoji_level="💪" />
    </div>
  );
}

function Skill(props) {
  const style = {
    backgroundColor: props.color,
  };
  return (
    <div className="skill" style={style}>
      <span>{props.name}</span>
      <span>{props.emoji_level}</span>
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
