import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currentOpen, setCurrentOpen] = useState(null);

  const handleToggle = (id) => {
    setCurrentOpen(id === currentOpen ? null : id);
  };

  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          num={i}
          title={item.title}
          key={i}
          currentOpen={currentOpen}
          onHandleToggle={handleToggle}
        >
          {item.text}
        </AccordionItem>
      ))}

      <AccordionItem
        num={22}
        title="New flexible component"
        key={2}
        currentOpen={currentOpen}
        onHandleToggle={handleToggle}
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

const AccordionItem = ({
  num,
  title,
  currentOpen,
  onHandleToggle,
  children,
}) => {
  const isOpen = num === currentOpen;
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => onHandleToggle(num)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};
