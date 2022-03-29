import { Card } from './componentExport';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { ACTIONS } from '../constant/Actions';
import { useFeedback } from '../context/feedback-context';
const FeedbackItem = ({ feedback, dispatch }) => {
  const { editFeedback } = useFeedback();
  return (
    <Card>
      <div className='num-display'>{feedback.rating}</div>
      <button
        className='close'
        onClick={() =>
          dispatch({
            type: ACTIONS.DELETE_FEEDBACK,
            payload: { id: feedback.id },
          })
        }
      >
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={() => editFeedback(feedback)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{feedback.text}</div>
    </Card>
  );
};

export default FeedbackItem;
