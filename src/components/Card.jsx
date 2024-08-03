import React, { useMemo } from "react";
import PropTypes from "prop-types";

export default function Card({
  card,
  selectedIndex,
  onAnswerChange,
  showResults,
}) {
  const answersArr = useMemo(() => {
    let answers = card.incorrectAnswers.map((answer) => ({
      value: answer,
      isCorrect: false,
    }));
    const randomIndex = Math.floor(Math.random() * (answers.length + 1));
    answers.splice(randomIndex, 0, {
      value: card.correctAnswer,
      isCorrect: true,
    });
    return answers;
  }, [card]);

  const correctAnswerIndex = answersArr.findIndex((answer) => answer.isCorrect);

  return (
    <React.StrictMode>
      <div>
        <h3>{card.question.text}</h3>
        <ul className="flex flex-row">
          {answersArr.map((answerObj, index) => {
            let backgroundC = "none";
            if (selectedIndex === index) {
              backgroundC = showResults
                ? answerObj.isCorrect
                  ? "#94D7A2"
                  : "#F8BCBC"
                : "#D6DBF5";
            } else if (showResults && index === correctAnswerIndex) {
              backgroundC = "#94D7A2";
            }

            return (
              <li
                className={`m-4 flex text-center p-2 rounded-lg w-full items-center border cursor-pointer`}
                key={index}
                style={{
                  backgroundColor:
                    backgroundC !== "none" ? backgroundC : "transparent",
                }}
              >
                <input
                  type="radio"
                  id={`answer-${card.id}-${index}`}
                  name={`question-${card.id}`}
                  value={index}
                  checked={index === selectedIndex}
                  onChange={() => onAnswerChange(index)}
                  disabled={showResults}
                  className="hidden"
                />
                <label
                  htmlFor={`answer-${card.id}-${index}`}
                  className="cursor-pointer w-full"
                >
                  {answerObj.value}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </React.StrictMode>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    question: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired,
    incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
    correctAnswer: PropTypes.string.isRequired,
  }).isRequired,
  selectedIndex: PropTypes.number,
  onAnswerChange: PropTypes.func.isRequired,
  showResults: PropTypes.bool.isRequired,
};
