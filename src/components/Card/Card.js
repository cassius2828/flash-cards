import "./Card.css";

// passing in these props allows me to base the class name off the currently selected ID
// this in turn ensures that multiple cards cannot be turned over at once, replicating
// the hover effect's way of showing the card answers

export const Card = ({
  question,
  answer,
  id,
  selectedID,
  handleFlip,
  cardNum,
}) => {
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={handleFlip}
      className={id === selectedID ? "card mt3 mb3 flip" : "card mt3 mb3"}
    >
      <div className="inner-card">
        <div className="front-card">
          <div className="question-container">
            <h3>{question}</h3>
          </div>
          <p>{cardNum}</p>
        </div>
        <div className="back-card">
          <div className="answer-container pa4">
            <ol>
              {answer?.map((i) => {
                return (
                  <li
                  className="mt3 ml2"
                  style={{ listStyle: answer.length === 1 && "none" }} key={i}>
                    {i}
                  </li>
                );
              })}
            </ol>
            {/* <p className="answer">{answer}</p> */}
          </div>
          <p>{cardNum}</p>
        </div>
      </div>
    </div>
  );
};
