import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

import { useState, useEffect } from "react";

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const feebacksFromLS = localStorage.getItem("saved-feedbacks");

    if (feebacksFromLS) {
      return JSON.parse(feebacksFromLS);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedback = Math.round(
    ((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100
  );

  const updateFeedback = (feedbackType) => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("saved-feedbacks", JSON.stringify(feedbacks));
  });

  return (
    <>
      <Description />

      <Options
        onUpdate={updateFeedback}
        onReset={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          values={feedbacks}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
