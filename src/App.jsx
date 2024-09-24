import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";

import { useState } from "react";

function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedbacks({
      ...setFeedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  return (
    <>
      <Description />
      <div>
        <Options onUpdate={updateFeedback} name="Good" />
        <Options name="Neutral" />
        <Options name="Bad" />
      </div>
      <div>
        <Feedback name="Good" value={feedbacks.good} />
        <Feedback name="Neutral" value={feedbacks.neutral} />
        <Feedback name="Bad" value={feedbacks.bad} />
      </div>
    </>
  );
}

export default App;
