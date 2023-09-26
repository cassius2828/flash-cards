import "./EnterCard.css";
import data from "../../cardData.js";
export const EnterCard = ({setCardData}) => {

  const addCard = (e) => {
   e.preventDefault();
    // setCardData({ id: 1, question: "?", answer: "A" });
    console.log('hi')
  };
  return (
    <form className="input-container">
      <div className="QA-container">
        <input
          type="text"
          name="question"
          className="question"
          placeholder="question..."
        />
        <textarea
          type="text"
          name="answer"
          className="answer"
          placeholder="answer..."
        ></textarea>
      </div>

      <div className="submit-container">
        <button type="submit" onSubmit={addCard}>submit</button>
      </div>
    </form>
  );
};
