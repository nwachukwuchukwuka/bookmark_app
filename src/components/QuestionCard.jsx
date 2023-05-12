import React, { useState } from "react";

const QuestionCard = ({ item }) => {
  const [drop, setDrop] = useState(false);

  const dropDown = () => {
    setDrop(!drop);
  };
  return (
    <div className="border-y p-3">
      <div className=" flex justify-between">
        <h1 className="font-semibold mb-3 text-md">{item.question}</h1>
        <div onClick={dropDown} className="w-5 cursor-pointer">
          {drop ? (
            <div>
              <img src="src\assets\logo-arrow1.svg" alt="" />
            </div>
          ) : (
            <div>
              <img src="src\assets\logo-arrow.svg" alt="" />
            </div>
          )}
        </div>
      </div>
      <p
        className="border-t"
        style={{
          display: drop ? "block" : "none",
        }}
      >
        {item.answer}
      </p>
    </div>
  );
};

export default QuestionCard;
