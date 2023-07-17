import "./styles.css";
import { Children, useState } from "react";

const jokesArray = [
  {
    title: "Why don't scientists trust atoms?",
    text: "Because they make up everything!",
  },
  {
    title: "What did one wall say to the other wall?",
    text: "I'll meet you at the corner!",
  },
  {
    title: "Why did the scarecrow win an award?",
    text: "Because he was outstanding in his field!",
  },
  {
    title: "How does a penguin build its house?",
    text: "Igloos it together!",
  },
  {
    title: "What did the grape do when it got stepped on?",
    text: "It let out a little wine!",
  },
  {
    title: "Why did the bicycle fall over?",
    text: "Because it was two-tired!",
  },
  {
    title: "What do you call a bear with no teeth?",
    text: "A gummy bear!",
  },
  {
    title: "Why don't skeletons fight each other?",
    text: "They don't have the guts!",
  },
  {
    title: "How do you organize a space party?",
    text: "You planet!",
  },
  {
    title: "What do you call a fish wearing a crown?",
    text: "King mackerel!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={jokesArray} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          currOpen={currOpen}
          onOpen={setIsOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, currOpen, onOpen, children }) {
  const isOpen = num === currOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
