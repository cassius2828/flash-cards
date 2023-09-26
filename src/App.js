import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";
import data from "./cardData.js";
import { Card } from "./components/Card/Card";
import { EnterCard } from "./components/EnterCard.js/EnterCard";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer/Footer";
// import { Test } from "./test";
function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [accordian, setAccordian] = useState(null);
  const handleFlip = (id) => {
    setSelectedId(id !== selectedId ? id : null);
  };

  // this change allowed me to allow only 1 accordian to be open at a time AND I can toggle 
  // the current accordian as well
  const handleCollapse = (sectionIndex) => {
    setAccordian(sectionIndex);
    if (sectionIndex === accordian) setAccordian(null);
  };

const sortedData = data.sort((a,b) => {
  const A_topic = a.topic.toLocaleUpperCase();
  const B_topic = b.topic.toLocaleUpperCase();

  if(A_topic < B_topic) return -1
  if (A_topic > B_topic) return 1;
  return 0
})
console.log(sortedData);
  return (
    <div className="App">
      <div id="nav">
        <span>Login</span>
        <span>/</span>
        <span>Sign Up</span>
      </div>
      <h1>Flash Cards</h1>

      {data.map((i, index) => {
        return (
          <div key={i.topic} className="sections">
            <hr style={{ width: "80vw" }}></hr>
            <div className="toggle-container">
              <h2 className="mb4 mt4">{i.topic}</h2>
              <FontAwesomeIcon
                id={i.topic + "icon"}
                onClick={() => handleCollapse(index)}
                style={{ cursor: "pointer" }}
                className={accordian === index ? "rotate ml3 mt3" : "ml3 mt3"}
                size="3x"
                icon={faAngleDown}
              />
            </div>
            {}
            <div id={i.topic} className={accordian !== index ? "ghost" : null}>
              <InfiniteScroll
                style={{
                  // border: "solid",
                  width: "80vw",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                dataLength={data.length}
                loader={<p>Loading...</p>}
                endMessage={<p>End of {i.topic} section</p>}
                height="50vh"
              >
                {" "}
                <div className="cards-container mt3">
                  {i.details.map((i, index) => {
                    return (
                      <Card
                        // passing in these props allows me to base the
                        //  class name off the currently selected ID
                        // this in turn ensures that multiple cards cannot be turned over at once,
                        //  replicating the hover effect's way of showing the card answers
                        cardNum={index + 1}
                        handleFlip={() => handleFlip(i.id)}
                        selectedID={selectedId}
                        id={i.id}
                        key={i.id}
                        question={i.question}
                        answer={i.answer}
                      />
                    );
                  })}
                </div>
              </InfiniteScroll>
            </div>
          </div>
        );
      })}

      {/* <Test/> */}
      <Footer />
    </div>
  );
}

export default App;

/*
THINGS NEEDED
1: Data set for flash card info
2: Card component
2b: container, front side, back side
3: CSS animations/set up

ADDED FEATURES TO IMPLEMENT
1: Ability to add your own flashcards and topics
2: Find way to have click events for mobile and hover for desktop
3: Implement keyboard navigation
*/
