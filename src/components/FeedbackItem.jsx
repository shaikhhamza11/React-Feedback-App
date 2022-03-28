import { Card } from './componentExport';
import { FaTimes } from 'react-icons/fa';
import { ACTIONS } from '../constant/Actions';
const FeedbackItem = ({ feedback, dispatch }) => {
  return (
    <Card>
      <div className='num-display'>{feedback.rating}</div>
      <button className='close'>
        <FaTimes
          color='purple'
          onClick={() =>
            dispatch({
              type: ACTIONS.DELETE_FEEDBACK,
              payload: { id: feedback.id },
            })
          }
        />
      </button>
      <div className='text-display'>{feedback.text}</div>
    </Card>
  );
};

export default FeedbackItem;
