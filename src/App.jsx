import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [voteData, setVoteData] = useState(() => {
    const saveDate = JSON.parse(localStorage.getItem('vote'));

    if (saveDate?.length) {
      return { good: 0, neutral: 0, bad: 0 };
    }
    return saveDate;
  });

  const updateFeedback = feedbackType => {
    setVoteData(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  useEffect(() => {
    localStorage.setItem('vote', JSON.stringify(voteData));
  }, [voteData]);

  const clearFeedback = () => {
    setVoteData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  function getSum(arr) {
    let total = 0;
    const keys = Object.keys(arr);
    for (const key of keys) {
      total += arr[key];
    }
    return total;
  }
  const totalFeedback = getSum(voteData);

  return (
    <div>
      <Description />
      <Options
        voteData={voteData}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        clearFeedback={clearFeedback}
      />
      {totalFeedback === 0 && <Notification />}
      {totalFeedback !== 0 && (
        <Feedback voteData={voteData} totalFeedback={totalFeedback} />
      )}
    </div>
  );
}

export default App;
