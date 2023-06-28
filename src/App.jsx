import { useState } from "react";

import SingleQuestion from "./components/SingleQuestion";

import data from "./data";

const App = () => {
  const [questions, setQuestions] = useState(data || []);

  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        {questions.map((question) => (
          <SingleQuestion key={question.id} question={question} />
        ))}
      </div>
    </main>
  );
};
export default App;
