import { useReducer } from 'react';
import { useContext, createContext, useState } from 'react';
import { FeedbackData } from '../data/feedbackData';
import { feedbackReducer } from './feedback-reducer';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, dispatch] = useReducer(feedbackReducer, FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    items: {},
    edit: false,
  });
  const editFeedback = (item, edit) => {
    setFeedbackEdit({ item, edit });
  };
  return (
    <FeedbackContext.Provider
      value={{ feedbacks, dispatch, editFeedback, feedbackEdit }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => useContext(FeedbackContext);
