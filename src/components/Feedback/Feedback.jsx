import React from 'react';
import s from './Feedback.module.css';
const Feedback = ({ voteData, totalFeedback }) => {
  return (
    <div className={s.conteiner}>
      <ul className={s.list}>
        <li className={s.item}>Good: {voteData.good}</li>
        <li className={s.item}>Neutral: {voteData.neutral}</li>
        <li className={s.item}>Bad: {voteData.bad}</li>
        <li className={s.item}>Total: {totalFeedback}</li>
        <li className={s.item}>
          Positive: {Math.round((voteData.good / totalFeedback) * 100)}%
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
