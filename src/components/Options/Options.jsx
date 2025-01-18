import React from 'react';
import s from './Options.module.css';
const Options = ({
  voteData,
  updateFeedback,
  totalFeedback,
  clearFeedback,
}) => {
  const btnOptions = Object.keys(voteData);

  return (
    <div className={s.container}>
      {btnOptions.map(option => {
        return (
          <button
            key={option}
            className={s.button}
            onClick={() => updateFeedback(option)}
          >
            {option}
          </button>
        );
      })}
      {totalFeedback !== 0 && (
        <button key={'reset'} className={s.button} onClick={clearFeedback}>
          reset
        </button>
      )}
    </div>
  );
};

export default Options;
