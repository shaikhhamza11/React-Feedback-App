import { useReducer } from 'react';
import { useContext, createContext } from 'react';
import { FeedbackData } from '../data/feedbackData';
import { feedbackReducer } from './feedback-reducer';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, dispatch] = useReducer(feedbackReducer, FeedbackData);
  return (
    <FeedbackContext.Provider value={{ feedbacks, dispatch }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => useContext(FeedbackContext);
