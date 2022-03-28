import { FeedbackItem } from './componentExport';
import { useFeedback } from '../context/feedback-context';
const FeedbackList = () => {
  const { feedbacks, dispatch } = useFeedback();

  if (!feedbacks || feedbacks.length === 0) {
    return <div className='container'>No Feedbacks</div>;
  }
  return (
    <div>
      {feedbacks &&
        feedbacks.map((fb) => (
          <FeedbackItem key={fb.id} feedback={fb} dispatch={dispatch} />
        ))}
    </div>
  );
};

export default FeedbackList;
