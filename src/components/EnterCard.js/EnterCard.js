import "./EnterCard.css";
import data from "../../cardData.js";
export const EnterCard = () => {
  return (
    <form className="input-container">
      <div className="stq">
          <select>
            <option></option>
            {data.map((i) => {
              return <option key={i.topic}>{i.topic}</option>;
            })}
          </select>
          <input type="text" name="topic" id="enter-topic" placeholder="topic..." />
          <input
            type="text"
            name="question"
            id="enter-question"
            placeholder="question..."
          />
      </div>
      
      <div className="tb">
          <textarea
            type="text"
            name="answer"
            id="answer"
            placeholder="answer..."
          ></textarea>
          <button>submit</button>
      </div>
    </form>
  );
};
