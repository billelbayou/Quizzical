import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

export default function Main({ dataJson }) {
  const [data, setData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setData(dataJson.slice(0, 5));
  }, [dataJson]);

  const handleAnswerChange = (cardId, index) => {
    setSelectedAnswers((prev) => ({ ...prev, [cardId]: index }));
  };

  const handleCheckAnswers = () => {
    setShowResults(true);
  };

  const handlePlayAgain = () => {
    window.location.reload();
  };

  return (
    <React.StrictMode>
      <div className="text-[#293264]">
        <div className="max-w-[50%] mx-auto py-5 border-b border-[#aaa]">
          {data.map((card) => (
            <Card
              key={card.id}
              card={card}
              selectedIndex={selectedAnswers[card.id]}
              onAnswerChange={(index) => handleAnswerChange(card.id, index)}
              showResults={showResults}
            />
          ))}
        </div>
        <button
          className="px-4 py-2 bg-[#4D5B9E] text-2xl text-white rounded-lg text-center mt-5 mx-auto block"
          onClick={showResults ? handlePlayAgain : handleCheckAnswers}
        >
          {showResults ? "Play Again" : "Check answers"}
        </button>
      </div>
    </React.StrictMode>
  );
}

Main.propTypes = {
  dataJson: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      question: PropTypes.shape({
        text: PropTypes.string.isRequired,
      }).isRequired,
      incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
      correctAnswer: PropTypes.string.isRequired,
    })
  ).isRequired,
};
